import express from "express";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());


 //  Gemini Model

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
});


  // Groq Model

const groqModel = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  apiKey: process.env.GROQ_API_KEY,
});


//   Gemini Route

app.post("/gemini", async (req, res) => {
  try {
    // Extract prompt from request body
    const { prompt } = req.body;

    // Validate prompt
    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required",
      });
    }

    // Send prompt to Gemini
    const response = await geminiModel.invoke(prompt);

    // Return response
    res.status(200).json({
      model: "Gemini",
      ai: response.content,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      message: "Error generating Gemini response",
      error: error.message,
    });
  }
});


 //  Groq Route

app.post("/groq", async (req, res) => {
  try {
    // Extract prompt from request body
    const { prompt } = req.body;

    // Validate prompt
    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required",
      });
    }

    // Send prompt to Groq
    const response = await groqModel.invoke(prompt);

    // Return response
    res.status(200).json({
      model: "Groq",
      ai: response.content,
    });
  } catch (error) {
    console.error("Groq Error:", error);

    res.status(500).json({
      message: "Error generating Groq response",
      error: error.message,
    });
  }
});


 //  Health Check Route

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});


app.listen(4000, () => {
  console.log(" Server is running on port 4000");
});