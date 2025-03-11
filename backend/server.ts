import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import caseRoutes from "./routes/caseRoutes";
import chatRoutes from "./routes/chatRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import errorHandler from "./middleware/errorMiddleware";

const app = express();
connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/cases", caseRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/payment", paymentRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
