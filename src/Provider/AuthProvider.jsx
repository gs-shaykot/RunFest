import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase';
import axios from 'axios'; 

export const AuthContext = createContext()

const AuthProvider = ({ children }) => { 
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true); 
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    const LogOut = () => {
        setLoader(true);
        return signOut(auth);
    } 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            if (currentUser) {
                setUser(currentUser);
                setLoader(false)
                const user = { Name: currentUser.displayName, email: currentUser.email }
                axios.post('https://assignment-11-server-green-kappa.vercel.app/jwt', user, { withCredentials: true })
                    .then(data => {
                        console.log(data)
                    })
            } else {
                console.log("No user signed in");
                axios.post('https://assignment-11-server-green-kappa.vercel.app/logout  ', {}, { withCredentials: true })
                    .then(data => {
                        console.log(data)
                    })
                setLoader(false)
            }
        });

        return () => { unsubscribe() };
    }, []);




    const authInfo = {
        user,
        loader,
        setUser,
        setLoader,
        createUser,
        logInUser,
        LogOut,
        logInGoogle,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;