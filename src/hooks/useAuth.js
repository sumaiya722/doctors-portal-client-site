import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider.js";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;