/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/meals_reducer";
import axios from "axios";
import { meals_url as url } from "../utils/constants";

import {
  GET_MEALS_BEGIN,
  GET_MEALS_SUCCESS,
  GET_MEALS_ERROR,
  SHOW_SIDEBAR,
  CLOSE_SIDEBAR,
} from "../actions";

const initialState = {
  meals: [],
  meals_loading: false,
  meals_error: false,
  sidebar_open: false,
};

const MealsContext = React.createContext();

export const MealsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search] = useState("c");

  const fetchMeals = async (url) => {
    dispatch({ type: GET_MEALS_BEGIN });
    try {
      const response = await axios.get(url);
      const { meals } = response.data;
      dispatch({ type: GET_MEALS_SUCCESS, payload: meals });
    } catch (error) {
      dispatch({ type: GET_MEALS_ERROR });
    }
  };

  useEffect(() => {
    fetchMeals(`${url}${search}`);
  }, []);

  const showSidebar = () => {
    dispatch({ type: SHOW_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <MealsContext.Provider value={{ ...state, showSidebar, closeSidebar }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsContext = () => {
  return useContext(MealsContext);
};
