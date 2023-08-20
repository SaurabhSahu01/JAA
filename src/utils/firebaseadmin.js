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
        const bucket = storage.bucket();
        const destinationPath = photo[0].originalFilename;
        console.log("destinationPath = ", destinationPath)
        destinationPath && await bucket.upload(photo[0].filepath, {
            destination: destinationPath,
            metadata: {
                contentType: photo[0].mimetype
            }
        });

        const downloadURL = destinationPath && await bucket.file(destinationPath).getSignedUrl({
            action: "read",
            expires: '03-01-2500'
        })
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
            photo: downloadURL[0]
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
        const bucket = storage.bucket();
        const destinationPath = photo[0].originalFilename;
        console.log("destinationPath = ", destinationPath)
        destinationPath && await bucket.upload(photo[0].filepath, {
            destination: destinationPath,
            metadata: {
                contentType: photo[0].mimetype
            }
        });

        const downloadURL = destinationPath && await bucket.file(destinationPath).getSignedUrl({
            action: "read",
            expires: '03-01-2500'
        })
        return db.collection('posts').doc(postid).set({
            postedBy: userid,
            postId: postid,
            content: content,
            date: date,
            photo: downloadURL[0],
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

export async function verificationMethod(uid, name, email, mobile, image1, image2){
    console.log("image1",image1[0].mimetype);
    console.log("image2", image2[0].mimetype);
    const bucket = storage.bucket();
    const destinationPath1 = image1[0].originalFilename;
    const destinationPath2 = image2[0].originalFilename;

    await bucket.upload(image1[0].filepath, {
        destination: destinationPath1,
        metadata: {
            contentType: image1[0].mimetype
        }
    });
    await bucket.upload(image2[0].filepath, {
        destination: destinationPath2,
        metadata: {
            contentType: image2[0].mimetype
        }
    });

    const downloadURL1 = await bucket.file(destinationPath1).getSignedUrl({
        action: "read",
        expires: '03-01-2500'
    })
    const downloadURL2 = await bucket.file(destinationPath2).getSignedUrl({
        action: "read",
        expires: '03-01-2500'
    })
    
    return db.collection('verification').doc(uid).set({
        uid: uid,
        name: name,
        email: email,
        mobile: mobile,
        image1: downloadURL1[0],
        image2: downloadURL2[0]
    })
}