import { Filters } from "./reducers/filters";
import { Movies } from "./reducers/movies";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      filters: Filters,
      movies: Movies
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
