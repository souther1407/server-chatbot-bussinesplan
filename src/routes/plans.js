import { Router } from "express";
import { test, generatePlan, getAll, getById } from "../controllers/plans.js";
import { isValidToken } from "../middlewares/auth/auth.js";
const router = Router();

router.post("/generate", isValidToken, generatePlan);
router.get("/getAll", isValidToken, getAll);
router.get("/getById/:id", isValidToken, getById);
router.post("/test", isValidToken, test);

export default router;
