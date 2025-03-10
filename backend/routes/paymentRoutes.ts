import express from "express";
import { createPaymentIntent, getPaymentStatus } from "../controllers/paymentController";

const router = express.Router();

router.post("/create-payment-intent", createPaymentIntent);
router.get("/status/:paymentIntentId", getPaymentStatus);

export default router;
