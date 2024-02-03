import { test as testService } from "../services/openai.js";
import { generateResult } from "../promptGenerator/promptGenerator.js";
import {
  createPlan,
  getAll as get,
  getById as byId,
} from "../managers/plans.js";
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
    const plan = await generateResult(req.body);
    res.status(200).json(plan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const user = req.user;
    const plans = await get(user);
    res.status(200).json(plans);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const plan = await byId({ user, planId: id });
    res.status(200).json(plan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
