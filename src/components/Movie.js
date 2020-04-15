import React, { useEffect, useState } from "react";

export default function Movie(props) {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const movieId = props.match.params.movieId;

    fetch(
      `https:/api.themoviedb.org/3/movie/${movieId}?api_key=571da57303345f5f0911e883540343d4&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovie(res);
      });
  }, []);
  return (
    <div>
      <div
        className="card mb-3"
        style={{
          border: "none",
          boxShadow: "0 0 8px 4px rgba(0,0,0,0.1)",
          zIndex: "2",
          borderRadius: "20px",
        }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w780${Movie.backdrop_path}`}
              className="card-img "
              alt="..."
              style={{
                borderRadius: "20px",
              }}
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body ml-4">
              <h5 className="card-title">{Movie.title}</h5>
              <p className="card-text">{Movie.overview}</p>
              <p className="card-text">
                <small className="">
                  <i
                    className="las la-thumbs-up"
                    style={{ fontSize: "20px" }}
                  ></i>
                  {Movie.vote_count}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
