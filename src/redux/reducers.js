import movies from "../data";

const initialState = {
  movies: movies,
  newMovieId: 7
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      const newMovies = state.movies.filter(
        movie => movie.id !== action.payload.id
      );
      return {
        ...state,
        movies: newMovies
      };
    case "MOVE_MOVIE":
      const newState = state.movies.map(movie => {
        if (movie === action.payload) movie.toWatch = !movie.toWatch;
        return movie;
      });
      return {
        ...state,
        movies: newState
      };
    case "ADD_MOVIE":
      const newMovie = {
        id: state.newMovieId,
        title: action.payload.newMovieTitle,
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQOe2MnfHDJijHuQwD8UC6D2VwML_053aJxDNR97rZnvm54Pr",
        toWatch: true
      };
      // console.log(newMovie);
      //console.log(state.movies.concat(newMovie));
      return {
        ...state,
        movies: state.movies.concat(newMovie),
        newMovieId: state.newMovieId + 1
      };
    default:
      return state;
  }
};
