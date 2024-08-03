import jwt from "jsonwebtoken";
import User from "../database/models/user.js";

const protectRoute = async (req, res, next) => {
  try {
    console.log("Cookies received:", req.cookies);

    const token = req.headers.authorization?.split(" ")[1];
    console.log("Token from cookies:", token);

    if (!token) {
      console.error("No token found in cookies.");
      return res
        .status(401)
        .json({ code: 401, error: "Unauthorized User! Token not matched" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.error("JWT verification failed:", err);
      return res
        .status(401)
        .json({ code: 401, error: "Unauthorized User! Token not decoded" });
    }

    if (!decoded) {
      console.error("Decoded token is null or undefined.");
      return res
        .status(401)
        .json({ code: 401, error: "Unauthorized User! Token not decoded" });
    }

    const user = await User.findById(decoded.user.id);
    if (!user) {
      console.error("No user found with the ID from token.");
      return res.status(404).json({ code: 404, error: "No user found!" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    res.status(500).json({ code: 500, error: "Internal Server Error!" });
  }
};

export default protectRoute;
