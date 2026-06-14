// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


import userRoutes from "./routes/userRoutes.js";
import activityRoutes from "./routes/activities.js";

// ...

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);


// Routes
app.use("/api/users", userRoutes);
app.use("/api/activities", activityRoutes);


// Static frontend support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// For any route not handled, send index.html (for SPA or general routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// MongoDB connection + start server
const PORT = process.env.PORT || 5002;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error("MongoDB connection failed:", err.message);
});
