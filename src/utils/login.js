import { auth, db } from "@/src/utils/firebase";
import { signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";


export const loginwithemail = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
}

export const signupwithemail = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
}

export const logout = () => {
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
    // Retrieve all cookies as a string
    var cookies = document.cookie;

    // Split the string into an array of cookies
    var cookiesArray = cookies.split(';');

    // Loop through the cookies to find the one we want to update
    for (var i = 0; i < cookiesArray.length; i++) {
        var cookie = cookiesArray[i];

        // Trim leading whitespace if there is any
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }

        // Check if this is the cookie we want to update
        if (cookie.indexOf(`${cookieName}=`) == 0) {
            // Update the cookie's max-age attribute
            var cookieParts = cookie.split('=');
            cookie = cookieParts[0] + "=" + cookieParts[1] + `; max-age=${age}`; // set max-age to 3600 seconds (1 hour)

            // Assign the updated cookie string to the document.cookie property
            document.cookie = cookie;
            break;
        }
    }
}