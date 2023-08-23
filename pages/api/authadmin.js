import Cryptr from "cryptr";
import { JWT_SECRET } from "@/firebase.config";
import { createJWT } from "../../src/utils/JwtUtils";

async function handler(req, res) {
    const cryptr = new Cryptr(JWT_SECRET);
    const serverSidePasscodeHash = cryptr.encrypt('JAA12345')
    const serverSideUsernameHash = cryptr.encrypt('JNUAlumniAssociation');
    
    const password = req.body.password;
    const username = req.body.username;
    
    if (req.method === 'POST') {
        if (password === cryptr.decrypt(serverSidePasscodeHash) && username === cryptr.decrypt(serverSideUsernameHash)) {
            const payload = {
                username: serverSideUsernameHash,
                password: serverSidePasscodeHash
            }
            const token = createJWT(payload, '6h');
            res.status(200).json({
                status: 200,
                message: "admin authenticated",
                atkn: token
            })
        }
        else {
            res.status(403).json({
                status: 403,
                message: "admin not authenticated"
            })
        }
    }
    else {
        res.status(403).json({
            status: 403,
            message: "only GET request allowed"
        })
    }
}

export default handler;