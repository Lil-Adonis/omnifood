import {
    FILTER_MEALS,
    LOAD_MEALS,
    UPDATE_CATEGORY,
    UPDATE_SEARCH,
  } from "../actions";
  
  const filter_reducer = (state, action) => {
    if (action.type === LOAD_MEALS) {
      return {
        ...state,
        all_meals: [...action.payload],
        filtered_meals: [...action.payload],
      };
    }
  
    if (action.type === UPDATE_SEARCH) {
      return { ...state, search: action.payload };
    }
  
    if (action.type === FILTER_MEALS) {
      const { search, category, all_meals } = state;
      let tempMeals = [...all_meals];
      if (search) {
        tempMeals = tempMeals.filter((meal) =>
          meal.strMeal.toLowerCase().startsWith(search)
        );
      }
      if (category !== "all") {
        tempMeals = tempMeals.filter((meal) => meal.strCategory === category);
      }
      return { ...state, filtered_meals: tempMeals };
    }
  
    if (action.type === UPDATE_CATEGORY) {
      return { ...state, category: action.payload };
    }
    throw new Error(`No Matching "${action.type}" - action type`);
  };
  
  export default filter_reducer;
  