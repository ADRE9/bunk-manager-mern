import React, {useState,useEffect} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebase';

export const AuthContext=React.createContext();


export function AuthProvider({children}){
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null);

    function onAuthStateChanged(userData) {
        setUser(userData);
      }

    useEffect(()=>{
        const subscribe =()=>auth().onAuthStateChanged(onAuthStateChanged);
        return subscribe
    },[])
    
    return (
        <AuthContext.Provider
            value={{
                user, 
                setUser,
                googleLogin:async ()=>{
                    console.log("I am running")
                    try{
                        const result=await signInWithPopup(auth, provider)
                    
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential.accessToken;
                        // The signed-in user info.
                        setUser(result.user,token);
                        // ...
                    }
                    catch(error) {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert(errorMessage);
                        // The email of the user's account used.
                        const email = error.email;
                        // The AuthCredential type that was used.
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        // ...
                    };
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}



