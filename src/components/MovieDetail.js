import React from "react";
import { baseUrl } from "../shared/baseurl";
import { Loading } from "./MoviesLoading";
import { Table } from "reactstrap";

const MovieDetail = props => {
  if (props.isLoading) {
    return (
      <div className="container text-center" style={{ minHeight: "100vh" }}>
        <div className="row" style={{ marginTop: "8rem" }}>
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div
        className="container text-center text-danger"
        style={{ minHeight: "100vh" }}
      >
        <div className="row" style={{ marginTop: "8rem" }}>
          <h4 className="col-12">{props.errMess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container pt-5" style={{ minHeight: "100vh" }}>
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="mt-3 text-center">{props.movie.name}</h2>
            <Table bordered className="mt-5">
              <tbody>
                <tr>
                  <th scope="row">Title</th>
                  <td>{props.movie.name}</td>
                </tr>
                <tr>
                  <th scope="row">Image</th>
                  <td>
                    <img
                      alt={props.movie.name}
                      src={baseUrl + props.movie.image}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Genre</th>
                  <td>
                    {props.movie.genre.map((g, i) => (
                      <span key={i}>{g + " "} </span>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Director</th>
                  <td>{props.movie.director}</td>
                </tr>
                <tr>
                  <th scope="row">Rate</th>
                  <td>{props.movie.rate}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-12">
            <iframe
              title="unique title"
              width="420"
              height="315"
              src="https://www.youtube.com/embed/7mw6LyyoeGE"
            ></iframe>
          </div>
          <div className="col-12">
            <video width="320" height="240" controls>
              <source src={baseUrl + props.movie.movie} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetail;
