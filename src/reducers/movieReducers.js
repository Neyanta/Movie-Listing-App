import { FETCH_MOVIES } from "../actions/types";
const initialState = {
  movies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      console.log("Debug", action.type, action.payload, state);
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
}
