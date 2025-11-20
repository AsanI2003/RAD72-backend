import { Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

// async function listModels() {
//   const models = await genAI.listModels();
//   console.log(models);
// }

// listModels();

export const aigenerate = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent(prompt);
    const aiResponse = result.response.text();

    res.status(200).json({ output: aiResponse });
  } catch (error: any) {
    console.error("AI generation error:", error.message, error);
    res.status(500).json({ error: error.message });
  }
};
