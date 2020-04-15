import React, { Component, useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { fetchMoviesAction } from "../actions/movieActions";
import { fetchMovies } from "../Api";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import preloader from "../assets/images/preloader.gif";
import Card from "./Card/Card";
function MovieListing() {
  const buttonRef = useRef(null);

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=571da57303345f5f0911e883540343d4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    fetchMovies(endpoint);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        // console.log("Movies", ...Movies);
        // console.log('result',...result.results)
        setMovies([...Movies, ...result.results]);
        setMainMovieImage(MainMovieImage || result.results[0]);
        setCurrentPage(result.page);
      }, setLoading(false))
      .catch((error) => console.error("Error:", error));
  };

  const loadMoreItems = () => {
    let endpoint = "";
    setLoading(true);
    console.log("CurrentPage", CurrentPage);
    endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=571da57303345f5f0911e883540343d4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 1) {
      // loadMoreItems()
      console.log("clicked");
      buttonRef.current.click();
    }
  };
  return Loading ? (
    <div
      id="gifContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "calc(100vh - 132px)",
      }}
    >
      <img src={preloader} id="preloaderGif" alt="preloader" />
    </div>
  ) : (
    <div>
      <div className="card-columns">
        {Movies &&
          Movies.map((movie, index) => (
            <Link to={`/movie/${movie.id}`} key={index}>
              <Card
                img={movie.backdrop_path}
                movieId={movie.id}
                title={movie.original_title}
                description={movie.overview}
                likes={movie.vote_count}
              />
            </Link>
          ))}
      </div>

      {Loading && <div>Loading...</div>}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn btn-danger loadMore"
          ref={buttonRef}
          onClick={loadMoreItems}
        >
          Load More Movies
        </button>
      </div>
    </div>
  );
}

export default MovieListing;
