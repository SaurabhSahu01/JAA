const jwt = require("jsonwebtoken");

// Server-only: JWT secret from environment variable
const JWT_SECRET = process.env.JWT_SECRET;

export function validateJwt(jwtToken) {
  let isValid = false;
  let decoded = null;
  try {
    decoded = jwt.verify(jwtToken, JWT_SECRET);
    isValid = true;
  } catch (err) {
    console.error("JWT validation error:", err.message);
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