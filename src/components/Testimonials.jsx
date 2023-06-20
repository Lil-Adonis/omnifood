import React from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import { testimonials } from "../utils/constants";
import { useMealsContext } from "../context/Meals_context";

const Testimonials = () => {
  const { meals } = useMealsContext();
  return (
    <Wrapper>
      <div className="testimonial-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => {
            return <Testimonial key={index} {...testimonial} />;
          })}
        </div>
      </div>
      <div className="gallery">
        {meals.slice(0, 12).map((meal, index) => {
          const { strMealThumb } = meal;
          return <Gallery key={index} image={strMealThumb} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #fdf2e9;
  display: grid;
  grid-template-columns: 55fr 45fr;
  align-items: center;

  @media (max-width: 59em) {
    & {
      grid-template-columns: 1fr;
    }
  }

  .testimonials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 4.8rem;
    column-gap: 8rem;
  }
  .testimonial-container {
    padding: 9.6rem;
  }
  @media (max-width: 75em) {
    .testimonial-container {
      padding: 9.6rem 3.2rem;
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    padding: 1.6rem;
  }
  @media (max-width: 84em) {
    .gallery {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 59em) {
    .gallery {
      grid-template-columns: repeat(6, 1fr);
    }
  }
  @media (max-width: 34em) {
    .testimonials {
      grid-template-columns: 1fr;
    }
    .gallery {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.2rem;
    }
  }
`;

export default Testimonials;
