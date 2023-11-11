import OpenAi from "openai";
import config from "../config/config.js";
const chatgpt = new OpenAi({ apiKey: config.base.openaiApiKey });

export const test = async (prompt) => {
  const response = await chatgpt.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    temperature: 0.5,
    messages: [
      { role: "system", content: "Eres un asistente muy inteligente" },
      { role: "user", content: prompt },
    ],
  });
  return response.choices[0].message.content;
};
