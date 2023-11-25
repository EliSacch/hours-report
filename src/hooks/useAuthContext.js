// context
import { AuthContext } from "../context/AuthContext";
// hooks
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    // if we try tro access the context from outside the context provide we will see the following error
    // It shoudl not happen because we are wrapping the whole app in context
    if(!context) {
        throw Error("useAutch context must be inside AuthContextProvider");
    }

    return context
}