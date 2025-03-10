import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import caseRoutes from "./routes/caseRoutes";
import chatRoutes from "./routes/chatRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import { errorHandler } from "./middleware/errorMiddleware";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express App
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/cases", caseRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/payment", paymentRoutes);

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
