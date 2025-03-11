import express from "express";
import { createCase, getCases, assignLawyer } from "../controllers/caseController";

const router = express.Router();

router.post("/", createCase);
router.get("/", getCases);
router.post("/:id/assign", assignLawyer);

export default router;
