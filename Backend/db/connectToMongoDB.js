import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    // Use local MongoDB URI
    await mongoose.connect("mongodb://localhost:27017/admins");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
  }
};
