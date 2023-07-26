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

export async function addUser(uid, creationTime, signInType) {
    const documentRef = db.collection('users').doc(uid);
    return documentRef.get().then(async (docSnapshot) => {
        if (!docSnapshot.exists) {
            try {
                await db.collection('users').doc(uid).set({
                    creationTime: creationTime,
                    signInType: signInType
                });
                const profileCollectionRef = documentRef.collection('profile');
                await profileCollectionRef.doc('profile').set({ set: false });
            } catch (error) {
                // Handle the error here and return a specific value or throw it again if needed.
                console.error("Error while setting data:", error);
                throw error;
            }
        }
    }).catch((error) => {
        // Handle any error that occurred before calling set()
        console.error("Error while fetching document:", error);
        throw error;
    });
}


export async function getUsers() {
    return await db.collection('users').get()
}

export async function register(uid, firstName, lastName, number, gender, dob, school, program, hostel, joiningYear, graduationYear, photo = null) {
    if (photo !== null) {
        //console.log("photo = ", photo[0].originalFilename, photo[0].mimetype, photo[0].filepath);
        const bucket = storage.bucket();
        const destinationPath = photo.originalFilename;
        // console.log("destinationPath = ", destinationPath)
        destinationPath && await bucket.upload(photo.filepath, {
            destination: destinationPath,
            metadata: {
                contentType: photo.mimetype
            }
        });

        const downloadURL = photo && await bucket.file(destinationPath).getSignedUrl({
            action: "read",
            expires: '03-01-2500'
        })
        return db.collection('users').doc(uid).collection('profile').doc('profile').set({
            set: true,
            firstName: firstName,
            lastName: lastName,
            number: number,
            gender: gender,
            dob: dob,
            school: school,
            program: program,
            hostel: hostel,
            joiningYear: joiningYear,
            graduationYear: graduationYear,
            photo: downloadURL
        }, { merge: true })
    }
    else {
        return db.collection('users').doc(uid).collection('profile').doc('profile').set({
            set: true,
            firstName: firstName,
            lastName: lastName,
            number: number,
            gender: gender,
            dob: dob,
            school: school,
            program: program,
            hostel: hostel,
            joiningYear: joiningYear,
            graduationYear: graduationYear,
            photo: null
        }, { merge: true })
    }
}
