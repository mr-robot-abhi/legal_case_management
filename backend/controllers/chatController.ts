import express from "express";
import Chat from "../models/Message";
import { sendNotification } from "../config/firebase"; // Ensure this is not conflicting

const sendMessage = async (req: express.Request, res: express.Response) => {
  // Logic to send a message
};

const getMessages = async (req: express.Request, res: express.Response) => {
  // Logic to get messages
};

export { sendMessage, getMessages };
