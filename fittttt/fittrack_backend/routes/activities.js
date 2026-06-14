import express from "express";
import Activity from "../models/activity.js";

const router = express.Router();

// POST /api/activities/log → Log a new activity
router.post("/log", async (req, res) => {
  const { email, type, duration, calories } = req.body;

  if (!email || !type || !duration) {
    return res.status(400).json({ error: "Email, type, and duration are required" });
  }

  try {
    const newActivity = new Activity({
      email,
      type,
      duration,
      calories: calories || 0 // default if not provided
    });

    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/activities?email=user@example.com → Get activities for a user
router.get("/", async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email query parameter is required" });
  }

  try {
    const activities = await Activity.find({ email }).sort({ date: -1 });
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
