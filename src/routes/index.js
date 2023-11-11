import plansRouter from "./plans.js";

export default (app) => {
  app.use("/plans", plansRouter);
};
