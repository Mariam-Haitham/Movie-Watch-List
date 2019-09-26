import React, { Component } from "react";

// Components
import MoviesList from "./MoviesList";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="content col-10">
            <MoviesList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
