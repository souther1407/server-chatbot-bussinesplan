import { generate } from "../services/openai.js";
import * as PROMPTS from "../prompts/prompts.js";

export const generateResult = async (prompt) => {
  const messages = [{ role: "system", content: PROMPTS.init }];
  let parsedPrompts = {
    ...PROMPTS,
  };
  for (const p in parsedPrompts) {
    parsedPrompts[p] = parsedPrompts[p].replace("{description}", prompt);
  }
  messages.push({ role: "user", content: parsedPrompts.prompt1 });

  const resultPrompt1 = await generate(messages);
  messages.push({ role: "assistant", content: resultPrompt1 });
  messages.push({ role: "user", content: parsedPrompts.jsonGoalsExplination });

  const resultDescriptionsJson = await generate(messages);
  messages.push({ role: "assistant", content: resultDescriptionsJson });
  messages.push({ role: "user", content: parsedPrompts.prompt2 });

  const resultPrompt2 = await generate(messages);
  messages.push({ role: "assistant", content: resultPrompt2 });
  messages.push({ role: "user", content: parsedPrompts.prompt3 });

  const resultPrompt3 = await generate(messages);
  messages.push({ role: "assistant", content: resultPrompt3 });
  messages.push({ role: "user", content: parsedPrompts.prompt4 });

  const resultPrompt4 = await generate(messages);
  messages.push({ role: "assistant", content: resultPrompt4 });
  messages.push({ role: "user", content: parsedPrompts.jsonSteps });

  const resultJsonSteps = await generate(messages);
  messages.push({ role: "assistant", content: resultJsonSteps });
  messages.push({ role: "user", content: parsedPrompts.toolsSelected });

  const resultToolsUsedJson = await generate(messages);

  const parsedToolsUsedJson = JSON.parse(resultToolsUsedJson);
  const parsedStepsJson = JSON.parse(resultJsonSteps);
  const parsedDescriptionsJson = JSON.parse(resultDescriptionsJson);

  for (let goal in parsedStepsJson) {
    parsedStepsJson[goal] = {
      ...parsedStepsJson[goal],
      description: parsedDescriptionsJson[goal],
      tool: parsedToolsUsedJson[goal],
    };
  }
  return parsedStepsJson;
};
