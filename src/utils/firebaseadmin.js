import * as admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import fs from "fs";

// Server-only: read credentials from environment variables
const adminCredentials = {
    type: "service_account",
    project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
    client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(adminCredentials),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
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
                    signInType: signInType,
                    verified: false
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

export async function register(uid, firstName, lastName, number, gender, dob, school, program, hostel, joiningYear, graduationYear, photo) {
    // console.log("photo", photo)
    if (photo !== null && typeof (photo) === 'string') {
        console.log("photo is a string");
        return db.collection('users').doc(uid).collection('profile').doc('profile').set({
            set: true,
            firstName: firstName[0],
            lastName: lastName[0],
            number: number[0],
            gender: gender[0],
            dob: dob[0],
            school: school[0],
            program: program[0],
            hostel: hostel[0],
            joiningYear: joiningYear[0],
            graduationYear: graduationYear[0],
            photo: photo
        }, { merge: true })
    }
    else if (photo !== null) {
        console.log("photo = ", photo[0].originalFilename, photo[0].mimetype, photo[0].filepath);
        const fileBuffer = fs.readFileSync(photo[0].filepath);
        const base64Data = fileBuffer.toString('base64');
        const mimeType = photo[0].mimetype || "image/jpeg";
        const downloadURL = `data:${mimeType};base64,${base64Data}`;
        return db.collection('users').doc(uid).collection('profile').doc('profile').set({
            set: true,
            firstName: firstName[0],
            lastName: lastName[0],
            number: number[0],
            gender: gender[0],
            dob: dob[0],
            school: school[0],
            program: program[0],
            hostel: hostel[0],
            joiningYear: joiningYear[0],
            graduationYear: graduationYear[0],
            photo: downloadURL
        }, { merge: true })
    }
    else {
        console.log("photo null");
        return db.collection('users').doc(uid).collection('profile').doc('profile').set({
            set: true,
            firstName: firstName[0],
            lastName: lastName[0],
            number: number[0],
            gender: gender[0],
            dob: dob[0],
            school: school[0],
            program: program[0],
            hostel: hostel[0],
            joiningYear: joiningYear[0],
            graduationYear: graduationYear[0],
            photo: null
        }, { merge: true })
    }
}

export async function addpost(userid, postid, content, date, photo) {
    if (photo !== null) {
        console.log("photo = ", photo[0].originalFilename, photo[0].mimetype, photo[0].filepath);
        const fileBuffer = fs.readFileSync(photo[0].filepath);
        const base64Data = fileBuffer.toString('base64');
        const mimeType = photo[0].mimetype || "image/jpeg";
        const downloadURL = `data:${mimeType};base64,${base64Data}`;
        return db.collection('posts').doc(postid).set({
            postedBy: userid,
            postId: postid,
            content: content,
            date: date,
            photo: downloadURL,
            likes : []
        })
    }
    else {
        return db.collection('posts').doc(postid).set({
            postedBy: userid,
            postId: postid,
            content: content,
            date: date,
            photo: null,
            likes: []
        })
    }
}

export async function verificationMethod(uid, image1, image2){
    console.log("image1",image1[0].mimetype);
    console.log("image2", image2[0].mimetype);

    const fileBuffer1 = fs.readFileSync(image1[0].filepath);
    const base64Data1 = fileBuffer1.toString('base64');
    const mimeType1 = image1[0].mimetype || "image/jpeg";
    const downloadURL1 = `data:${mimeType1};base64,${base64Data1}`;

    const fileBuffer2 = fs.readFileSync(image2[0].filepath);
    const base64Data2 = fileBuffer2.toString('base64');
    const mimeType2 = image2[0].mimetype || "image/jpeg";
    const downloadURL2 = `data:${mimeType2};base64,${base64Data2}`;
    
    return db.collection('verification').doc(uid).set({
        uid: uid,
        image1: downloadURL1,
        image2: downloadURL2
    })
}