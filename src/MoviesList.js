import React, { Component } from "react";

// Components
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";

class MoviesList extends Component {
  state = {
    filteredMovies1: this.props.movies,
    filteredMovies2: this.props.movies
  };

  filterMovies1 = query => {
    query = query.toLowerCase();
    let filteredMovies = this.props.movies.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
    this.setState({ filteredMovies1: filteredMovies });
  };

  filterMovies2 = query => {
    query = query.toLowerCase();
    let filteredMovies = this.props.movies.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
    this.setState({ filteredMovies2: filteredMovies });
  };
  componentDidUpdate(prev) {
    console.log(prev.movies);
    console.log(this.props.movies);
    if (prev.movies !== this.props.movies) {
      this.setState({
        filteredMovies1: this.props.movies,
        filteredMovies2: this.props.movies
      });
    }
  }

  render() {
    let count1 = 0;
    let count2 = 0;
    console.log(this.state.filteredMovies1);
    const movieCards1 = this.state.filteredMovies1.map(movie => {
      if (movie.toWatch) {
        count1++;
        return <MovieCard key={movie.id} movie={movie} />;
      }
    });

    const movieCards2 = this.state.filteredMovies2.map(movie => {
      if (!movie.toWatch) {
        count2++;
        return <MovieCard key={movie.id} movie={movie} />;
      }
    });
    return (
      <div>
        <div>
          <h3>Movies To Watch</h3>
          <h3>{count1} movies</h3>
          <AddMovie />
          <SearchBar onChange={this.filterMovies1} />
          <div className="row">{movieCards1}</div>
        </div>
        <br />
        <br />
        <div>
          <h3>Watched Movies</h3>
          <h3>{count2} movies</h3>
          <SearchBar onChange={this.filterMovies2} />
          <div className="row">{movieCards2}</div>
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

export default connect(mapStateToProps)(MoviesList);
