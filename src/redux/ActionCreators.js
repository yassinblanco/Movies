import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseurl";

//(Filters) action creators
export const fetchFilters = () => dispatch => {
  dispatch(filtersLoading());
  return fetch(baseUrl + "filters")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(filters => dispatch(addFilters(filters)))
    .catch(error => dispatch(filtersFailed(error.message)));
};

export const filtersLoading = () => ({
  type: ActionTypes.FILTERS_LOADING
});

export const filtersFailed = errMess => ({
  type: ActionTypes.FILTERS_FAILED,
  payload: errMess
});

export const addFilters = data => ({
  type: ActionTypes.ADD_FILTERS,
  payload: data
});

//(Movies) action creators

export const fetchMovies = () => dispatch => {
  dispatch(moviesLoading);
  return fetch(baseUrl + "movies")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            "Error " + response.status + " : " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(movies => dispatch(addMovies(movies)))
    .catch(err => dispatch(moviesFailed(err.message)));
};

export const addMovies = data => ({
  type: ActionTypes.ADD_MOVIES,
  payload: data
});

export const moviesLoading = () => ({
  type: ActionTypes.MOVIES_LOADING
});

export const moviesFailed = errMess => ({
  type: ActionTypes.MOVIES_FAILED,
  payload: errMess
});
