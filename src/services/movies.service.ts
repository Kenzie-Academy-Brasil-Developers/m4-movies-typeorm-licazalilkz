import { Movie } from "../entities";
import {
  CreateMovie,
  ReadMovie,
  UpdateMovie,
  pagination,
  paginationParams,
} from "../interfaces";
import { movieRepository } from "../repositories";

export const createMovieService = async (data: CreateMovie): Promise<Movie> => {
  const createMovie: Movie = await movieRepository.save(data);
  return createMovie;
};

export const readMovieService = async ({
  nextPage,
  order,
  page,
  prevPage,
  perPage,
  sort,
}: paginationParams): Promise<pagination> => {
  const [movie, count]: Array<ReadMovie | number> =
    await movieRepository.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });
  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page < perPage ? null : nextPage,
    count,
    data: movie,
  };
};

export const updateMovieService = async (
  movie: Movie,
  data: UpdateMovie
): Promise<Movie> => {
  const updateMovie: Movie = await movieRepository.save({
    ...movie,
    ...data,
  });
  return updateMovie;
};

export const deleteMovieService = async (id: Movie): Promise<void> => {
  await movieRepository.remove(id);
};
