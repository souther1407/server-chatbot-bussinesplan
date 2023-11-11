import { Router } from "express";
import { test } from "../controllers/plans.js";
const router = Router();

router.post("/generate");
router.get("/getAll");
router.post("/test", test);

export default router;
