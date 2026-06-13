import { auth, db } from "@/src/utils/firebase";
import { signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";


export const loginwithemail = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
}

export const signupwithemail = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
}

export const logout = () => {
    deleteCookie("userToken");
    deleteCookie("uid");
    //setlogInProgress(true);
    setTimeout(async () => {
        await signOut(auth)
            .then(() => {
                // setlogInProgress(false);
            })
    }, 1500);
}

export const loginwithgoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

export const changeMaxAge = (cookieName, age) => {
    const isSecure = window.location.protocol === 'https:';
    const cookies = document.cookie;
    const cookiesArray = cookies.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();

        if (cookie.indexOf(`${cookieName}=`) === 0) {
            const cookieParts = cookie.split('=');
            const flags = `; max-age=${age}; path=/; SameSite=Strict${isSecure ? '; Secure' : ''}`;
            document.cookie = cookieParts[0] + "=" + cookieParts[1] + flags;
            break;
        }
    }
}

export const deleteCookie = (name) => {
    document.cookie = name + '=; Max-Age=0; path=/; SameSite=Strict';
}