const DELETE_MOVIE = "DELETE_MOVIE";
const MOVE_MOVIE = "MOVE_MOVIE";
const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = movie => {
  return {
    type: DELETE_MOVIE,
    payload: movie
  };
};

export const moveMovie = movie => {
  return {
    type: MOVE_MOVIE,
    payload: movie
  };
};

export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};
