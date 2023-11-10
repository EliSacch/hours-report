// hooks
import { useState } from 'react';
// context
import { useAuthContext } from './useAuthContext';
// components
import { projectAuth } from '../firebase/config';


const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {
            // try signin the user out
            await projectAuth.signOut();
            // dispatch logout
            dispatch({ type: 'LOGOUT' });

            setIsPending(false);

        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    }
    return { logout, isPending, error }
}