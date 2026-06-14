import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now, // If not provided, use current date
  }
});

export default mongoose.model("Activity", activitySchema);
