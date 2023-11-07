import { AppDataSource } from "./data-source";
import { Movie } from "./entities";
import { RepositoryMovie } from "./interfaces";

export const movieRepository: RepositoryMovie =
  AppDataSource.getRepository(Movie);
