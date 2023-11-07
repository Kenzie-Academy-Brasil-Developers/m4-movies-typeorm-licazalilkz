import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { movieRepository } from "../repositories";
import { AppError } from "../errors";

export async function verifyId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const searchMovie: Movie | null = await movieRepository.findOneBy({
    id: Number(req.params.id),
  });
  if (!searchMovie) {
    throw new AppError("Movie not found", 404);
  }
  res.locals = { ...res.locals, searchMovie };

  return next();
}
