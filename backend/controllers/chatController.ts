import { Request, Response } from "express";
import Message from "../models/Message";
import { sendNotification } from "../config/firebase";

export const sendMessage = async (req: Request, res: Response) => {
  const { sender, receiver, message, caseId } = req.body;
  
  try {
    const newMessage = await Message.create({ sender, receiver, message, caseId });

    // Send Firebase Notification to receiver
    sendNotification(receiver, "New Message", `You have a new message: "${message}"`);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  const { caseId } = req.params;

  try {
    const messages = await Message.find({ caseId }).populate("sender receiver", "name email");
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
};
