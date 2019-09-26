import React from "react";

import { connect } from "react-redux";

import { deleteMovie, moveMovie } from "./redux/actions";

function MovieCard(props) {
  const movie = props.movie;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={movie.poster}
            alt="Just a poster!!"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{movie.title}</span>
          </h5>
          <button
            className="btn btn-danger btn-block"
            onClick={() => props.deleteMovie(movie)}
          >
            DELETE
          </button>

          {movie.toWatch ? (
            <button
              className="btn btn-danger btn-block"
              onClick={() => props.moveMovie(movie)}
            >
              WATCHED
            </button>
          ) : (
            <button
              className="btn btn-danger btn-block"
              onClick={() => props.moveMovie(movie)}
            >
              UNWATCH
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: movie => dispatch(deleteMovie(movie)),
    moveMovie: movie => dispatch(moveMovie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieCard);
