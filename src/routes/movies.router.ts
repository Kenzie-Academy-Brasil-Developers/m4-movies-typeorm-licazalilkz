import { Router } from "express";
import { checkBody } from "../middlewares/body.middleware";
import { movieCreateSchemaOmit, movieUpdateSchema } from "../schemas";
import { verifyName } from "../middlewares/name.midleware";
import {
  createMovieController,
  deleteMovieControler,
  readMovieControler,
  updateMovieControler,
} from "../controllers";
import { pagination } from "../middlewares/pagination.middleware";
import { verifyId } from "../middlewares/verifyId.middleware";

export const movieRouter: Router = Router();

movieRouter.use("/:id", verifyId);

movieRouter.post(
  "/",
  checkBody(movieCreateSchemaOmit),
  verifyName,
  createMovieController
);

movieRouter.get("/", pagination, readMovieControler);

movieRouter.patch(
  "/:id",
  checkBody(movieUpdateSchema),
  verifyName,
  updateMovieControler
);

movieRouter.delete("/:id", deleteMovieControler);
