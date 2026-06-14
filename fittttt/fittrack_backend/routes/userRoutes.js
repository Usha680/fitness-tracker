import express from "express";
import { signUpUser, loginUser } from "../controllers/userController.js";
import User from "../models/User.js";

const router = express.Router();

// ✅ Register new user
router.post("/register", signUpUser);

// ✅ Login user
router.post("/login", loginUser);

// ✅ Update user profile: height, weight, age, gender
router.post("/update-profile", async (req, res) => {
  const { email, height, weight, age, gender } = req.body;

  if (!email || !height || !weight || !age || !gender) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { height, weight, age, gender },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.json({ success: true, user: updatedUser });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// ✅ Get user profile by email (for frontend calorie calculation)
router.get("/profile", async (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ success: false, error: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.json({ success: true, user });
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
