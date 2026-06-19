import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatGroq } from "@langchain/groq";
import dotenv from 'dotenv'
dotenv.config();
const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
});

const groqModel = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  apiKey: process.env.GROQ_API_KEY,
});

export const askGemini = async (prompt) => {
  const response = await geminiModel.invoke(prompt);
  return response.content;
};

export const askGroq = async (prompt) => {
  const response = await groqModel.invoke(prompt);
  return response.content;
};