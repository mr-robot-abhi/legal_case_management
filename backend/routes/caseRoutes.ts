import express from "express";
import { createCase, getCases, assignLawyer } from "../controllers/caseController";

const router = express.Router();

router.post("/create", createCase);
router.get("/", getCases);
router.post("/assign-lawyer", assignLawyer);

export default router;
