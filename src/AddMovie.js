import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { addMovie } from "./redux/actions";

class AddMovie extends Component {
  state = {
    newMovieTitle: ""
  };

  render() {
    return (
      <div className="add">
        <div className="form-group col-lg-6 col-12 mx-auto">
          <div className="input-group my-3">
            <input
              className="form-control"
              type="text"
              onChange={event =>
                this.setState({ newMovieTitle: event.target.value })
              }
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  onClick={event => this.props.addMovie(this.state)}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(addMovie(movie))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovie);
