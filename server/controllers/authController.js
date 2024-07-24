import jwt from "jsonwebtoken";
import User from "../database/models/user.js";

export const googleCallback = (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("jwt", token, { httpOnly: true });
  res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
};

export const signout = (req, res) => {
  res.clearCookie("jwt");
  res.json({ message: "Signed out successfully" });
};
