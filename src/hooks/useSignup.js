// hooks
import { useEffect, useState } from 'react';
// context
import { useAuthContext } from './useAuthContext';
// utils
import { validateSignInUpForm } from '../utils/validateSignInUpForm';
// components
import { projectAuth } from '../firebase/config';


export const useSignup = () => {

    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (form, email, password, displayName) => {
        setError(null);
        setIsPending(true);
        try {
            await validateSignInUpForm(form);
            // try signin the user out
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            // manually throw wrror if ther eis no response
            if(!res) {
                throw new Error('There was an issue signing you up! Please, try again.')
            };
            // set the display name
            await res.user.updateProfile({ displayName });
            // dispatch logout
            dispatch({ type: 'LOGIN' , payload: res.user });

            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }

        } catch (err) {
            if (!isCancelled) {
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    // cleanup function
    useEffect(() => {
        setIsCancelled(false);
        return () => setIsCancelled(true);
    }, [])

    return { signup, isPending, error }
}