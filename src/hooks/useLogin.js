import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext()

    const login = async (email, password) => {
        setError(null);
        setIsPending(true)

        // sign the user in
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password);
            // dispatch logout action
            dispatch({ type: 'LOGIN', payload: res.user})

            if(!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        } catch (err) {
            console.log(err.message);
            if (!isCancelled) {
                setIsPending(false)
                setError(err.message)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { login, error, isPending}
}