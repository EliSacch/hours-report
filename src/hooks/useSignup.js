// hooks
import { useState } from 'react';
// context
import { useAuthContext } from './useAuthContext';
// utils
import { validateSignupForm } from '../utils/validateSignup';
// components
import { projectAuth } from '../firebase/config';


export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (form, email, password, displayName) => {
        setError(null);
        setIsPending(true);
        try {
            // validate form
            validateSignupForm(form);
            // sign user up
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            // if there is an error saving the data we manually throw an error
            if (!res) {
                throw new Error('We could not sign you up!');
            }
            // add display name
            await res.user.updateProfile({ displayName });

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

            setIsPending(false);

        } catch (err) {
            setError(err.message);
            setIsPending(false);
        }
    }

    return { signup, isPending, error }
}