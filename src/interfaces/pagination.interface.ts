import { ReadMovie } from "./movie.interface";

export type pagination = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: ReadMovie;
};

export type paginationParams = {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
};