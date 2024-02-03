import OpenAi from "openai";
import config from "../config/config.js";
const chatgpt = new OpenAi({ apiKey: config.base.openaiApiKey });

export const test = async (prompt) => {
  const response = await chatgpt.chat.completions.create({
    model: "gpt-4-turbo-preview",
    temperature: 0,
    messages: [
      { role: "system", content: "Eres un asistente muy inteligente" },
      { role: "user", content: prompt },
    ],
  });
  return response.choices[0].message.content;
};

export const generate = async (messages, temperature = 0.5) => {
  const response = await chatgpt.chat.completions.create({
    model: "gpt-4",
    temperature,
    messages,
  });
  return response.choices[0].message.content;
};
