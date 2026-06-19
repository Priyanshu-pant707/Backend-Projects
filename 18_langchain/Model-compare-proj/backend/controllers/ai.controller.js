import { askGemini, askGroq } from "../services/ai.service.js";

export const geminiResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await askGemini(prompt);

    res.status(200).json({
      model: "Gemini",
      response: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const groqResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await askGroq(prompt);

    res.status(200).json({
      model: "Groq",
      response: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



export const compareModels = async (req, res) => {
  try {
    const { prompt } = req.body;

    const startGemini = Date.now();
    const gemini = await askGemini(prompt);
    const geminiTime = Date.now() - startGemini;

    const startGroq = Date.now();
    const groq = await askGroq(prompt);
    const groqTime = Date.now() - startGroq;

    res.status(200).json({
      prompt,

      gemini: {
        response: gemini,
        timeTaken: `${geminiTime} ms`,
      },

      groq: {
        response: groq,
        timeTaken: `${groqTime} ms`,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};