
import { GoogleGenAI } from "@google/genai";

export async function getDeepDive(question: string, context: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    You are a senior full-stack developer. 
    Explain this interview question in depth for a candidate. 
    Question: ${question}
    Short Answer: ${context}
    
    Please provide:
    1. A more detailed explanation.
    2. A practical code example (if applicable).
    3. Potential follow-up questions the interviewer might ask.
    Format your response in clean Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I couldn't generate a deep dive at this moment. Please check your connection.";
  }
}
