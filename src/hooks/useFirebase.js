import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LogIn/Firebase/Firebase.init.js";
import {GoogleAuthProvider,getAuth,updateProfile,signInWithPopup,getIdToken, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth"

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const[token,setToken]=useState('')
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password,history,name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // const user = userCredential.user;
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                //save user to database
                saveUser(email,name,'POST')
                //send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    
                }).catch(error => { });
                history.replace("/");
            })
            .catch(error => {
                // const errorCode = error.code;
                setAuthError(error.message);
            })
        .finally(()=>setIsLoading(false))
    }

    const loginUser = (email, password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // const user = userCredential.user;
                setAuthError('');
            })
            .catch(error => {
                // const errorCode = error.code;
             setAuthError(error.message);
            })
                .finally(()=>setIsLoading(false))
    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                saveUser(user.email, user.displayName, 'PUT');
                const user = result.user;
                setAuthError('');
                 const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //observed user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                })
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return()=>unSubscribe
    }, [])
    

    useEffect(() => {
        fetch(`https://shrouded-garden-47119.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            
        }).catch(error => {
            
        })
            .finally(() => setIsLoading(false))
    }


    const saveUser = (email, displayName,method) => {
        const user = { email, displayName };
        fetch('https://shrouded-garden-47119.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }
    return {
        user,
        token,
        admin,
        authError,
        isLoading,
        signInWithGoogle,
        loginUser,
        registerUser,logout,
    }
    
}
export default useFirebase;