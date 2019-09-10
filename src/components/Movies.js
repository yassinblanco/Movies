import React from "react";
import { baseUrl } from "../shared/baseurl";
import { Loading } from "./MoviesLoading";
import { Link } from "react-router-dom";

const Movies = props => {
  console.log(props.isLoading);
  let title = "";

  switch (props.active) {
    case "Japan":
      title = "Best Japanese Movies";
      break;
    case "Korea":
      title = "Best Korean Movies";
      break;
    case "India":
      title = "Best Indian Movies";
      break;
    case "France":
      title = "Best French Movies";
      break;
    case "Argentina":
      title = "Best Argentinian Movies";
      break;
    case "Spain":
      title = "Best Spanish Movies";
      break;
    default:
      title = "Best Of Movies";
  }

  if (props.isLoading) {
    return (
      <div className="row mb-5">
        <h2 className="col-12  mb-5">{title}</h2>
        <Loading />
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="row mb-5">
        <h2 className="col-12  mb-5">{title}</h2>
        <h4 className="col-12 mt-5 text-danger">{props.errMess}</h4>
      </div>
    );
  } else {
    return (
      <div className="row mb-5">
        <h2 className="col-12  mb-5">{title}</h2>
        {props.movies.map(movie => {
          return (
            <div key={movie.id} className="col-md-4 ">
              <img
                alt={movie.title}
                className="img-thumbnail"
                src={baseUrl + movie.image}
              />
              <h5>
                <Link className="text-secondary" to={"/home/" + movie.id}>
                  {movie.name}
                </Link>
              </h5>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Movies;
