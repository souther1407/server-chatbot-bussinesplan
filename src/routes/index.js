import plansRouter from "./plans.js";
import healthRouter from "./health.js";
export default (app) => {
  app.use("/plans", plansRouter);
  app.use("/health", healthRouter);
};
