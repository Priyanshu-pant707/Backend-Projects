import express from "express";

import {
  geminiResponse,
  groqResponse,
  compareModels,
} from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/gemini", geminiResponse);

router.post("/groq", groqResponse);

router.post("/compare", compareModels);

export default router;