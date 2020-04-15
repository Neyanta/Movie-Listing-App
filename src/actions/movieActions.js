import { FETCH_MOVIES } from "./types";

export const fetchMoviesAction = (data) => {
  return {
    type: FETCH_MOVIES,
    payload: data,
  };
};
