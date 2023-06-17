import React from "react";
import styled from "styled-components";
import image1 from "../assets/img/app/app-screen-1.png";
import image2 from "../assets/img/app/app-screen-2.png";
import image3 from "../assets/img/app/app-screen-3.png";

const HowItWorks = () => {
  return (
    <Wrapper>
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container grid grid--2-cols grid--center-v">
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>
          <p className="step-description">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={image1}
            className="step-img"
            alt="iphone app selection screen"
          />
        </div>
        <div className="step-img-box">
          <img
            src={image2}
            className="step-img"
            alt="iphone app confirm plan"
          />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
          <p className="step-description">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Receive meals at convenient time</h3>
          <p className="step-description">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className="step-img-box">
          <img src={image3} className="step-img" alt="iphone app delivery" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9.6rem 0;

  .step-number {
    font-size: 8.6rem;
    font-weight: 600;
    color: #ddd;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 59em) {
    .step-number {
      font-size: 7.4rem;
    }
  }

  .step-description {
    font-size: 1.8rem;
    line-height: 1.8;
  }

  .step-img-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step-img-box::before,
  .step-img-box::after {
    content: "";
    display: block;

    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .step-img-box::before {
    width: 60%;
    /* 60% of parent's width */
    padding-bottom: 60%;

    background-color: #fdf2e9;
    z-index: -2;
  }

  .step-img-box::after {
    width: 45%;
    padding-bottom: 45%;
    background-color: #fae5d3;
    z-index: -1;
  }

  .step-img {
    width: 35%;
  }
  @media (max-width: 34em) {
    .step-img-box:nth-child(2) {
      grid-row: 1;
    }
    .step-img-box:nth-child(6) {
      grid-row: 5;
    }
    .step-img-box {
      transform:translateY(2.4rem)
    }
  }
`;

export default HowItWorks;
