// hooks
import { useReducer, useEffect, useState } from "react";
// database
import { projectFirestore, timestamp } from "../firebase/config";
// utils
import { validateHoursForm } from "../utils/validateHoursForm";
import { calculate_actual_partial } from "../utils/calculateHours";

let initialState = {
    isPending: false,
    document: null,
    success: null,
    error: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { isPending: true, document: null, success: false, error: null }
        case 'ADDED_DOC':
            return { isPending: false, document: action.payload, success: true, error: null }
        case 'DELETED_DOCUMENT':
            return { isPending: false, document: null, success: true, error: null }
        case 'ERROR':
            return { isPending: false, document: null, success: false, error: action.payload }
        default:
            return state
    }
}


export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    // collection ref
    const ref = projectFirestore.collection(collection);
    // dispath if not cancelled
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action);
        }
    }

    // add document
    const addDocument = async (form, doc) => {
        dispatch({ type: 'IS_PENDING' });
        try {
            const absDiff = await validateHoursForm(form);
            const total = calculate_actual_partial(absDiff);
            const createdAt = timestamp.fromDate(new Date());
            const addedDocument = await ref.add({...doc, total, createdAt});
            dispatchIfNotCancelled({ type: 'ADDED_DOC', payload: addedDocument });
        } catch (err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
        }
    }
    // delete document
    const deleteDocument = async id => {
        dispatch({ type: 'IS_PENDING' });
        try {
            await ref.doc(id).delete();
            dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
        } catch (err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: 'There was an error deleting this document.'})
        }
    }

    useEffect(() => {
        setIsCancelled(false);
        return () => setIsCancelled(true);
    }, [])

    return { addDocument, deleteDocument, response }
}
