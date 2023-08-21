const jwt = require("jsonwebtoken");
import { JWT_SECRET } from "@/firebase.config";
export function validateJwt(jwtToken) {
  let isValid = false;
  let decoded = null;
  console.log("jwt secret", JWT_SECRET);
  try {
    decoded = jwt.verify(jwtToken, JWT_SECRET);
    isValid = true;
  } catch (err) {
    // The token is invalid, return an error
    console.log("errr", err);
  }
  return { valid: isValid, value: decoded };
}

export function createJWT(payload, expires) {
  const token =
    jwt.sign({ data: payload }, JWT_SECRET, {
      expiresIn: expires,
    }) ?? null;
  return token;
}