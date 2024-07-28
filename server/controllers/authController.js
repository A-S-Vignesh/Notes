import jwt from "jsonwebtoken";
import User from "../database/models/user.js";

export const googleCallback = (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {  //id used in protectionRoute middleware
    expiresIn: "1h",
  });
  res.cookie("jwt", token, { httpOnly: true });
  res.redirect(`${process.env.FRONTEND_URL}/`);
};

export const signout = (req, res) => {
  // Clear the JWT cookie
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",  //true in production
  });

  // Optional: Destroy session if using session-based authentication
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout error" });
      }
      res.redirect(process.env.FRONTEND_URL + "/");
    });
  } else {
    res.redirect(process.env.FRONTEND_URL + "/");
  }
};
