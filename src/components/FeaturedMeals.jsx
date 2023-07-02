import React from "react";
import styled from "styled-components";
import { useMealsContext } from "../context/Meals_context";
import Meal from "./Meal";
import Diets from "./Diets";
import Loading from "./Loading";
import Error from "./Error";
import { Link } from "react-router-dom";

const FeaturedMeals = () => {
  const { meals, meals_loading, meals_error } = useMealsContext();

  if (meals_loading) {
    return <Loading />;
  }

  if (meals_error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        {meals.slice(8, 10).map((meal) => {
          return <Meal key={meal.idMeal} {...meal} />;
        })}
        <Diets />
      </div>

      <div className="container all-recipes">
        <Link className="link" to="/meals">
          See all recipes &rarr;
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9.6rem 0;
  .all-recipes {
    text-align: center;
    font-size: 1.8rem;
  }
`;

export default FeaturedMeals;
