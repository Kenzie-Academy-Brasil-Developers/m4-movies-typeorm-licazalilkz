import { z } from "zod";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";
import { movieCreateSchemaOmit } from "../schemas";

export type CreateMovie = z.infer<typeof movieCreateSchemaOmit>;
export type ReadMovie = Array<Movie>;
export type UpdateMovie = DeepPartial<Movie>;
export type RepositoryMovie = Repository<Movie>;