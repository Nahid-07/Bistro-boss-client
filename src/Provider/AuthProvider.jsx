import {createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


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
        loader
    }
    return(
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider