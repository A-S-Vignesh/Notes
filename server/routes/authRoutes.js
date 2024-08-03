// routes/authRouter.js
import express from "express";
import passport from "../config/passport.js";
import { googleCallback, signout } from "../controllers/authController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// Redirect the user to Google for authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google will redirect the user to this URL after authentication
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/ " }),
  googleCallback
);

router.get("/me",protectRoute, (req, res) => {
  console.log("Cookies on /me route:", req.cookies);
  console.log("Session on /me route:", req.session);

  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

router.post("/logout", signout);

export default router;
