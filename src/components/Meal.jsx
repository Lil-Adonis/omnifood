import React from "react";
import styled from "styled-components";
import { IoFlameOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const Meal = ({ strMeal, strCategory, strMealThumb }) => {
  return (
    <Wrapper>
      <img src={strMealThumb} className="meal-img" alt={strMeal} />
      <div className="meal-content">
        <div className="meal-tags">
          <span className="tag tag--vegetarian">{strCategory}</span>
        </div>
        <p className="meal-title">{strMeal}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <span className="meal-icon">
              <IoFlameOutline />
            </span>
            <span>
              <strong>{Math.floor(Math.random() * 500)}</strong> calories{" "}
            </span>
          </li>
          <li className="meal-attribute">
            <span className="meal-icon">
              <IoRestaurantOutline />
            </span>
            <span>
              NutriScore &reg;{" "}
              <strong>{Math.floor(Math.random() * 9 + 1)}</strong>
            </span>
          </li>
          <li className="meal-attribute">
            <span className="meal-icon">
              <IoStarOutline />
            </span>
            <span>
              <strong>{(Math.random() * 4 + 1).toFixed(1)}</strong> rating
            </span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden;
  transition: all 0.4s;
  height: 48rem;

  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  }

  .meal-content {
    padding: 3.2rem 4.8rem 4.8rem 4.8rem;
  }

  @media (max-width: 59em) {
    .meal-content {
      padding: 2.4rem 3.2rem 3.2rem 3.2rem;
    }
  }

  .meal-tags {
    margin-bottom: 1.2rem;
    display: flex;
    gap: 0.4rem;
  }

  .tag {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #333;
    border-radius: 100px;
    font-weight: 600;
  }

  .tag--vegetarian {
    background-color: #51cf66;
  }
  .tag--vegan {
    background-color: #94d82d;
  }
  .tag--paleo {
    background-color: #ffd43b;
  }

  .meal-title {
    font-size: 2rem;
    color: #333;
    font-weight: 600;
    margin-bottom: 3.2rem;
    text-transform: capitalize;
  }

  .meal-attributes {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .meal-attribute {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .meal-icon {
    color: #e67e22;
    font-size: 2.4rem;
  }

  .meal-img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;

export default Meal;
