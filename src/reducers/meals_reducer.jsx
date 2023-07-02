import {
    GET_MEALS_BEGIN,
    GET_MEALS_SUCCESS,
    GET_MEALS_ERROR,
    SHOW_SIDEBAR,
    CLOSE_SIDEBAR,
  } from "../actions";
  
  const meals_reducer = (state, action) => {
    if (action.type === GET_MEALS_BEGIN) {
      return { ...state, meals_loading: true };
    }
  
    if (action.type === GET_MEALS_SUCCESS) {
      return {
        ...state,
        meals_loading: false,
        meals: action.payload,
      };
    }
    if (action.type === GET_MEALS_ERROR) {
      return { ...state, meals_loading: false, meals_error: true };
    }
    if (action.type === SHOW_SIDEBAR) {
      return { ...state, sidebar_open: true };
    }
    if (action.type === CLOSE_SIDEBAR) {
      return { ...state, sidebar_open: false };
    }
    throw new Error(`No Matching "${action.type}" - action type`);
  };
  
  export default meals_reducer;
  