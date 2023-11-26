// hooks
import { useEffect, useState } from 'react';
// context
import { useAuthContext } from './useAuthContext';
// utils
import { validateSignInUpForm } from '../utils/validateSignInUpForm';
// components
import { projectAuth } from '../firebase/config';


export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (form, email, password) => {
        setError(null);
        setIsPending(true);
        try {
            // validate form
            await validateSignInUpForm(form);
            // sign user in
            const res = await projectAuth.signInWithEmailAndPassword(email, password);
            // if there is an error saving the data we manually throw an error
            if (!res) {
                throw new Error('We could not sign you in!');
            }

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }

        } catch (err) {
            if (!isCancelled) {
                if((err.message).includes("INVALID_LOGIN_CREDENTIALS")) {
                    setError("Invalid credentials.");
                } else {
                    setError(err.message);
                }
                setIsPending(false);
            }
        }
    }

    // cleanup function
    useEffect(() => {
        setIsCancelled(false);
        return () => setIsCancelled(true);
    }, [])

    return { login, isPending, error }
}