import { test as testService } from "../services/openai.js";
export const test = async (req, res) => {
  try {
    const { msg } = req.body;
    const response = await testService(msg);
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const generatePlan = (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
