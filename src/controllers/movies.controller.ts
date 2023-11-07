import { Request, Response } from "express";
import { Movie } from "../entities";
import {
  createMovieService,
  deleteMovieService,
  readMovieService,
  updateMovieService,
} from "../services";
import { pagination } from "../interfaces";

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie: Movie = await createMovieService(req.body);
  return res.status(201).json(movie);
};

export const readMovieControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const pagination = res.locals.pagination;
  const movie: pagination = await readMovieService(pagination);

  return res.status(200).json(movie);
};

export const updateMovieControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { searchMovie } = res.locals;

  const movie: Movie = await updateMovieService(searchMovie, req.body);

  return res.status(200).json(movie);
};

export const deleteMovieControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteMovieService(res.locals.searchMovie);

  return res.status(204).json();
};
