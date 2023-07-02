import React from "react";
import styled from "styled-components";
import MealsList from "../components/MealsList";
import Filters from "../components/Filters";
const MealsPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <Filters />
      <div>
        <MealsList />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9.6rem 0;
`;

export default MealsPage;
