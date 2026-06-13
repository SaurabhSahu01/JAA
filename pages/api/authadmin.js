import Cryptr from "cryptr";
import { createJWT } from "../../src/utils/JwtUtils";

async function handler(req, res) {
    const jwtSecret = process.env.JWT_SECRET;
    const cryptr = new Cryptr(jwtSecret);

    const expectedUsername = process.env.ADMIN_USERNAME;
    const expectedPassword = process.env.ADMIN_PASSWORD;

    const password = req.body.password;
    const username = req.body.username;

    if (req.method === 'POST') {
        if (password === expectedPassword && username === expectedUsername) {
            const serverSidePasscodeHash = cryptr.encrypt(expectedPassword);
            const serverSideUsernameHash = cryptr.encrypt(expectedUsername);

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
        res.status(405).json({
            status: 405,
            message: "only POST request allowed"
        })
    }
}

export default handler;