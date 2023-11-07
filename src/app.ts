import "express-async-errors";
import express, { Application } from "express";
import { movieRouter } from "./routes";
import errorCheck from "./middlewares/handleErrors.middleware";

export const app: Application = express();

app.use(express.json());

app.use("/movies", movieRouter);
app.use(errorCheck);

export default app;
