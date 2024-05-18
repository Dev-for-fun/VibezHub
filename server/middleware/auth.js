import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    console.log("Authorization Header:", token);

    if (!token) {
      console.log("No token provided");
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
      console.log("Token after Bearer removal:", token);
    }

    // Await if your verification is async
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token verified successfully:", verified);
    req.user = verified;
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    if (err.name === 'TokenExpiredError') {
      return res.status(401).send("Token expired");
    }
    res.status(500).json({ error: err.message });
  }
};
