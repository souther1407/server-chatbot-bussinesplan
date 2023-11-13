import { Router } from "express";
import { test, generatePlan } from "../controllers/plans.js";
import { isValidToken } from "../middlewares/auth/auth.js";
const router = Router();

router.post("/generate", isValidToken, generatePlan);
router.get("/getAll");
router.post("/test", isValidToken, test);

export default router;
