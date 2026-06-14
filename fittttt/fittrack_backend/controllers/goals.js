import express from "express";
import Goal from "../models/Goal.js";

const router = express.Router();

// POST /api/goals
router.post("/", async (req, res) => {
  const { email, type, value, timeframe } = req.body;

  if (!email || !type || !value || !timeframe) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const goal = new Goal({ email, type, value, timeframe });
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/goals?email=user@example.com
router.get("/", async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const goals = await Goal.find({ email }).sort({ createdAt: -1 });
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
