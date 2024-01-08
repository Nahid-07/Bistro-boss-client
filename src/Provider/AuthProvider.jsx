import {createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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
    // update user information
    const updateUserProfile = (userInfo) =>{
        return updateProfile(auth.currentUser,userInfo);
    }
    // Sign in user 
    const signinUser = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email,password)
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
        emailPasswordUser,
        updateUserProfile,
        setLoader,
        signinUser
    }
    return(
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider