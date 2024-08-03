// controllers/authController.js
import jwt from "jsonwebtoken";
import User from "../database/models/user.js";
import generateJWTandSetCookie from "../utils/generateJWTandSetCookies.js";

export const googleCallback = (req, res) => {
  console.log("User:", req.user);
  const token = generateJWTandSetCookie({ id: req.user._id }, res);

  // Log the cookies
  console.log("Cookies after setting JWT:", req.cookies);
  console.log("Session after setting JWT:", req.session);

  res.redirect(`${process.env.FRONTEND_URL}/?token=${token}`);
};

export const signout = (req, res) => {
  console.log("Cookies before clearing:", req.cookies);

  // Clear the JWT cookie
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite:"none",// true in production
  });

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

  console.log("Cookies after clearing:", req.cookies);
};
