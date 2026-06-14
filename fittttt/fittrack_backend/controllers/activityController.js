import Activity from "../models/activity.js";

export const logActivity = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.status(201).json({ message: "Activity logged", activity });
  } catch (error) {
    res.status(500).json({ error: "Failed to log activity" });
  }
};

export const getActivities = async (req, res) => {
  try {
    const { email } = req.query;
    const activities = await Activity.find({ email });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch activities" });
  }
};
