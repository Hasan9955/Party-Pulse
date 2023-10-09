import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase";
import { toast } from "react-toastify";


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password ) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleSign = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            toast.error('You have log out')
        })
        .catch(error =>{
            console.error(error)
        })
    }

    useEffect(() => {
        const newUser = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })

        return newUser;
    },[])


    const authInfo = { user, createUser, googleSign, logOut, signIn, loader }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;