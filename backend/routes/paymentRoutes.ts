import express from "express";
import { processPayment, getPaymentStatus } from "../controllers/paymentController";

const router = express.Router();

router.post("/", processPayment);
router.get("/status", getPaymentStatus);

export default router;
