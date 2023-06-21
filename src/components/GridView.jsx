import React from "react";
import Meal from "./Meal";

const GridView = ({ meals }) => {
  const tempMeals = [...meals];
  return (
    <div className="container grid grid--3-cols margin-bottom-md">
      {tempMeals.slice(0, 9).map((meal) => {
        return <Meal key={meal.idMeal} {...meal} />;
      })}
    </div>
  );
};

export default GridView;
