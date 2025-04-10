export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_USER_PRIVATE_KEY,
    authDomain: "jnu-alumni-association.firebaseapp.com",
    projectId: "jnu-alumni-association",
    storageBucket: "jnu-alumni-association.appspot.com",
    messagingSenderId: "382439048728",
    appId: "1:382439048728:web:a2504dad6fb65d2d5de56d",
    measurementId: "G-WCCWJ05M36"
};

export const adminFirebaseConfig ={
    "type": "service_account",
    "project_id": "jnu-alumni-association",
    "private_key_id": "3711523afa7d7923df581933b761bcdcf15ca427",
    "private_key": process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY,
    "client_email": "firebase-adminsdk-sxoes@jnu-alumni-association.iam.gserviceaccount.com",
    "client_id": "104407404527396492428",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-sxoes%40jnu-alumni-association.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  };

export const firebaseStorageBucket = "gs://jnu-alumni-association.appspot.com";

export const webAPIKey = process.env.NEXT_PUBLIC_WEB_API_KEY;

export const JWT_SECRET = process.env.JWT_SECRET;
