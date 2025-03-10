import express from "express";
import { sendMessage, getMessages } from "../controllers/chatController";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/:caseId", getMessages);

export default router;
