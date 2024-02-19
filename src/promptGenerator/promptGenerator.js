import { generate } from "../services/openai.js";
import { INITIAL_PROMPT, ROLE } from "../prompts/prompts.js";

export const generateResult = async (body) => {
  const parsedPrompts = {};
  for (let p in INITIAL_PROMPT) {
    parsedPrompts[p] = INITIAL_PROMPT[p]
      .replace("{msg}", body.msg)
      .replace("{budget}", body.budget);
  }
  const conversation = [
    {
      role: "system",
      content: ROLE,
    },
    {
      role: "user",
      content: parsedPrompts.prompt1,
    },
  ];

  const resultPrompt1 = await generate(conversation);
  console.log("RESULT1", resultPrompt1);
  conversation.push({ role: "assistant", content: resultPrompt1 });
  conversation.push({ role: "user", content: parsedPrompts.prompt2 });
  const jsonResult2 = await generate(conversation);
  console.log("json generado", jsonResult2);
  const parsedJson = JSON.parse(jsonResult2);
  conversation.push({ role: "assistant", content: jsonResult2 });
  conversation.push({
    role: "user",
    content: parsedPrompts[parsedJson.strategy],
  });
  const finalResult = await generate(conversation);
  console.log(finalResult);
  return {
    result: finalResult,
    strategy: parsedJson.strategy,
    product: body.msg,
  };
};
