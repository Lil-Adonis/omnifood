import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_context";
import { getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const { all_meals, category, updateCategory } = useFilterContext();

  const categories = getUniqueValues(all_meals, "strCategory");

  return (
    <Wrapper>
      {categories.slice(0, 4).map((c, index) => {
        return (
          <div className="cat" key={index}>
            <button
              key={index}
              onClick={updateCategory}
              name="category"
              type="button"
              className={
                category === c ? "btn btn--outline active" : "btn btn--outline"
              }
            >
              {c}
            </button>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 4rem;
  @media (max-width: 34em) {
    gap: 1.5rem;
  }
  button {
    background-color: #fff;
    text-transform: capitalize;
    padding: 1rem 2rem;
    color: #e67e22;
    box-shadow: inset 0 0 0 3px #fae5d3;
    &:hover,
    &:active {
      background-color: #e67e22;
      color: #fff;
    }
    transition: all 0.3s;
  }

  .active {
    background-color: #e67e22;
    color: #fff;
  }
`;

export default Filters;
