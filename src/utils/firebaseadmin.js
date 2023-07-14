import * as admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import { adminFirebaseConfig } from "@/firebase.config";
import { firebaseStorageBucket } from "@/firebase.config";

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(adminFirebaseConfig),
        storageBucket: firebaseStorageBucket
    })
}

export const db = admin.firestore();
export const storage = admin.storage();

export const verifyToken = (userToken) => {
    return getAuth().verifyIdToken(userToken);
}

export async function addUser(uid, creationTime) {
    const documentRef = db.collection('users').doc(uid);
    return documentRef.get().then(async (docSnapshot) => {
        if (docSnapshot.exists) {
            //search for the profile
        } else {
            return await db.collection('users').doc(uid).set({
                creationTime: creationTime
            })
        }
    }).catch((error) => {
        return error;
    });
}

export async function getUsers() {
    return await db.collection('users').get()
}
