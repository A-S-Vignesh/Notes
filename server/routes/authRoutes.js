// routes/authRouter.js
import express from "express";
import passport from "../config/passport.js";

const router = express.Router();

// Redirect the user to Google for authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google will redirect the user to this URL after authentication
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/"); // Redirect to the homepage on successful authentication
  }
);

export default router;
