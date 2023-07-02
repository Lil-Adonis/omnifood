import React, { useContext, useEffect, useReducer } from "react";
import { useMealsContext } from "./Meals_context";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_MEALS,
  UPDATE_SEARCH,
  FILTER_MEALS,
  UPDATE_CATEGORY,
} from "../actions";

const initialState = {
  all_meals: [],
  filtered_meals: [],
  search: "",
  category: "all",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { meals } = useMealsContext();

  useEffect(() => {
    dispatch({ type: LOAD_MEALS, payload: meals });
  }, [meals]);

  useEffect(() => {
    dispatch({ type: FILTER_MEALS });
  }, [meals, state.search, state.category]);

  const updateSearch = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SEARCH, payload: value });
  };

  const updateCategory = (e) => {
    const value = e.target.textContent;
    dispatch({ type: UPDATE_CATEGORY, payload: value });
  };

  return (
    <FilterContext.Provider value={{ ...state, updateSearch, updateCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
