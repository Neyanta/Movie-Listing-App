import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
const Card = ({ img, title, description, likes, id }) => {
  const imageLink = `https://image.tmdb.org/t/p/w780${img}`;
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <div className="card shadow-lg rounded bg-dark text-white border-0">
        <img src={imageLink} className="card-img-top" alt="movie_pic" />
        <div
          className="card-img-overlay"
          id="cardOverlay"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && (
            <div className="card-body bg-white m-0 " id="cardBody">
              <h5 className="card-title ">{title}</h5>
              <p className="truncate ">{description}</p>
              <p className="">
                <small>
                  <i
                    className="las la-thumbs-up"
                    style={{ fontSize: "20px" }}
                  ></i>
                  {likes}
                </small>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
