import React from "react";
import { IoInfiniteOutline } from "react-icons/io5";
import { IoNutritionOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";
import { IoPauseOutline } from "react-icons/io5";
import styled from "styled-components";

const PricingFeatures = () => {
  return (
    <Wrapper className="container grid grid--4-cols">
      <div className="feature">
        <i className="feature-icon">
          <IoInfiniteOutline />
        </i>
        <p className="feature-title">Never cook again!</p>
        <p className="feature-text">
          Our subscriptions cover 365 days per year, even including major
          holidays.
        </p>
      </div>
      <div className="feature">
        <span className="feature-icon">
          <IoNutritionOutline />
        </span>
        <p className="feature-title">Local and organic!</p>
        <p className="feature-text">
          Our cooks only use local, fresh, and organic products to prepare your
          meals.
        </p>
      </div>
      <div className="feature">
        <span className="feature-icon">
          <IoLeafOutline />
        </span>
        <p className="feature-title">No waste</p>
        <p className="feature-text">
          All our partners only use reusable containers to package all your
          meals.
        </p>
      </div>
      <div className="feature">
        <span className="feature-icon">
          <IoPauseOutline />
        </span>
        <p className="feature-title">Pause anytime</p>
        <p className="feature-text">
          Going on vacation? Just pause your subscription, and we refund unused
          days.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .feature-icon {
    color: #e67e22;
    font-size: 2.8rem;
    background-color: #fdf2e9;
    padding: 1.4rem;
    border-radius: 50%;
  }

  .feature-title {
    font-size: 2.4rem;
    color: #333;
    font-weight: 700;
    margin-top: 5rem;
    margin-bottom: 1.6rem;
  }

  .feature-text {
    font-size: 1.8rem;
    line-height: 1.8;
  }
`;

export default PricingFeatures;
