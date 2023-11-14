import { test as testService } from "../services/openai.js";
import { generateResult } from "../promptGenerator/promptGenerator.js";
import { createPlan, getAll as get } from "../managers/plans.js";
export const test = async (req, res) => {
  try {
    const { msg } = req.body;
    const response = await testService(msg);
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const generatePlan = async (req, res) => {
  try {
    const { msg } = req.body;
    const user = req.user;
    const steps = await generateResult(msg);
    const newPlan = await createPlan({ user, msg, steps });
    res.status(200).json(newPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const user = req.user;
    const plans = await get(user);
    res.status(400).json(plans);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
