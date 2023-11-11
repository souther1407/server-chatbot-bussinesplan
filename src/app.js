import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

import setRoutes from "./routes/index.js";
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
setRoutes(app);

export default app;
