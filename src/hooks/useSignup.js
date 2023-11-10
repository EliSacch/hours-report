// hooks
import { useState } from 'react';
// utils
import { validateSignupForm } from '../utils/validateSignup';
// components
import { projectAuth } from '../firebase/config';


export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (form, email, password, displayName) => {
        setError(null);
        setIsPending(true);
        try {
            validateSignupForm(form);
            // sign user up

            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            console.log(res.user);
            if (!res) {
                throw new Error('We could not sign you up!');
            }
            // add display name
            await res.user.updateProfile({ displayName });

            setIsPending(false);

        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    }

    return { signup, isPending, error }
}