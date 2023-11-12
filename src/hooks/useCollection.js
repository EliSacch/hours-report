// hooks
import { useEffect, useState } from "react";
// database
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ref = projectFirestore.collection(collection);

        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id  })
            })

            // update state
            setDocuments(results);
            console.log(results);
            setError(null);
        }, (error) => {
            console.log(error)
            setError('There was an error getting the data.')
        })
        // clean up function
        return () => unsubscribe();

    }, [collection])

  return { documents, error}
}
