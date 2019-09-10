import * as ActionTypes from "../ActionTypes";

export const Filters = (
  state = { isLoading: true, errMess: null, filters: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FILTERS:
      return { ...state, isLoading: false, filters: action.payload };
    case ActionTypes.FILTERS_LOADING:
      return state;
    case ActionTypes.FILTERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
