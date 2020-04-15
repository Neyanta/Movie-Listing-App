import { createStore, compose } from "redux";

import movieReducers from "./reducers/movieReducers";

const initialState = {};

const store = createStore(
  movieReducers,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
