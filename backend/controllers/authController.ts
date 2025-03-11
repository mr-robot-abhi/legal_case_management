import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { sendNotification } from "../config/firebase"; // Ensure this is not conflicting
import generateToken from "../config/jwt"; // Importing generateToken

const register = async (req: Request, res: Response) => {
  const { name, email, phone, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, phone, password: hashedPassword, role });
  
  await newUser.save();
  const token = generateToken(newUser._id.toString());
  res.status(201).json({ token });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user._id.toString());
  res.status(200).json({ token });
};

export { register, login };
