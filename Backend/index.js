import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectToMongoDB } from "./db/connectToMongoDB.js";
import userRoutes from "./routes/auth.route.js";
import clothesRoutes from "./routes/clothes.js"; // Import clothes routes

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(
  cors({
    origin: "http://localhost:5173", // Make sure this is the correct frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", userRoutes);  // Authentication routes
app.use("/api/clothes", clothesRoutes);  // Clothes routes

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
app.listen(PORT, () => {
  connectToMongoDB(); // Connect to MongoDB on server start
  console.log(`Server running on port ${PORT}`);
});
