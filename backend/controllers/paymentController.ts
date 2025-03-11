import express, { Request, Response } from "express";
import Payment from "../models/Message";
import { sendNotification } from "../config/firebase"; // Ensure this is not conflicting

const processPayment = async (req: Request, res: Response) => {
  // Logic to process payment
};

const getPaymentStatus = async (req: Request, res: Response) => {
  // Logic to get payment status
};

export { processPayment, getPaymentStatus };
