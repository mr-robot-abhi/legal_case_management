import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./models/User";
import { sendNotification } from "./config/firebase";

export const register = async (req: Request, res: Response) => {
  const { name, email, phone, password, role, fcmToken } = req.body;
  
  try {
    if (await User.findOne({ email })) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, phone, password: hashedPassword, role, fcmToken });

    // Send Firebase Notification
    if (fcmToken) sendNotification(fcmToken, "Welcome!", "Your account has been created successfully");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: "7d" });

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password, fcmToken } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: "Invalid credentials" });

    if (fcmToken) {
      user.fcmToken = fcmToken;
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: "7d" });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};
