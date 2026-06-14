import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  height: { type: Number },  // in cm, optional at first
  weight: { type: Number }   // in kg, optional at first
}, { timestamps: true });

export default mongoose.model("User", userSchema);
