import {createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // create user with email and password
    const emailPasswordUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // user obsever
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current User', currentUser);
            setLoader(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    
    const authInfo = {
        user,
        loader,
        emailPasswordUser
    }
    return(
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider