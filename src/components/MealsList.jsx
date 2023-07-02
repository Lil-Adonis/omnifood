import React from "react";
import { useFilterContext } from "../context/Filter_context";
import GridView from "./GridView";

const MealsList = () => {
  const { filtered_meals: meals } = useFilterContext();

  if (meals.length < 1) {
    return (
      <h5 className="subheading" style={{ textTransform: "none" }}>
        Sorry, no products matched your search
      </h5>
    );
  }

  return <GridView meals={meals} />;
};

export default MealsList;
