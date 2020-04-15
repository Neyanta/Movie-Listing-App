import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MovieListing from "./components/MovieListing";
import Movie from "./components/Movie";

import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header my-3">
    //     <h1 className="text-center"> The Movie Database</h1>
    //   </header>
    //   <main className="m-5">
    //     <MovieListing />
    //   </main>
    // </div>
    <Router>
      <Switch>
        <main className="mx-5">
          <h3 className="text-center my-3 ">Movie List</h3>
          <Route exact path="/" component={MovieListing} />
          <Route path="/movie/:movieId" component={Movie} />
        </main>
      </Switch>
    </Router>
  );
}

export default App;
