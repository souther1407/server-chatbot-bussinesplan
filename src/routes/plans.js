import { Router } from "express";
import { test, generatePlan } from "../controllers/plans.js";
const router = Router();

router.post("/generate", generatePlan);
router.get("/getAll");
router.post("/test", test);

export default router;
