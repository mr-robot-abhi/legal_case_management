import { Request, Response } from "express";
import Case from "../models/Case";
import { sendNotification } from "../config/firebase";

export const createCase = async (req: Request, res: Response) => {
  try {
    const newCase = await Case.create(req.body);
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: "Error creating case", error });
  }
};

export const getCases = async (req: Request, res: Response) => {
  try {
    const cases = await Case.find().populate("advocateOnRecord additionalLawyers");
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cases", error });
  }
};

export const assignLawyer = async (req: Request, res: Response) => {
  const { caseId, lawyerId } = req.body;
  try {
    const caseToUpdate = await Case.findById(caseId);
    if (!caseToUpdate) return res.status(404).json({ message: "Case not found" });

    caseToUpdate.additionalLawyers.push(lawyerId);
    await caseToUpdate.save();

    res.json({ message: "Lawyer assigned successfully", caseToUpdate });
  } catch (error) {
    res.status(500).json({ message: "Error assigning lawyer", error });
  }
};
