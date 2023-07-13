import * as admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import { adminFirebaseConfig } from "@/firebase.config";
import { firebaseStorageBucket } from "@/firebase.config";

if(admin.apps.length === 0){
    admin.initializeApp({
        credential: admin.credential.cert(adminFirebaseConfig),
        storageBucket: firebaseStorageBucket
    })
}

export const db = admin.firestore();
export const storage = admin.storage();

export function verifyToken(userToken) {
    return getAuth().verifyIdToken(userToken);
}

export async function addUser(uid, creationTime){
    return await db.collection('users').doc(uid).set({
        creationTime: creationTime
    })
}

export async function getUsers(){
    return await db.collection('users').get()
}
