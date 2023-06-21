import React from "react";
import styled from "styled-components";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <Wrapper className="container grid grid--2-cols margin-bottom-md">
      <div className="pricing-plan pricing-plan--starter">
        <header className="plan-header">
          <p className="plan-name">Starter</p>
          <p className="plan-price">
            <span>$</span>399
          </p>
          <p className="plan-text">per month. That's just $13 per meal!</p>
        </header>
        <ul className="list">
          <li className="list-item">
            <span className="list-icon" name="checkmark-outline">
              <IoCheckmarkOutline />
            </span>
            <span>1 meal per day</span>
          </li>
          <li className="list-item">
            <span className="list-icon" name="checkmark-outline">
              <IoCheckmarkOutline />
            </span>
            <span>Order from 11am and 9pm</span>
          </li>
          <li className="list-item">
            <span className="list-icon" name="checkmark-outline">
              <IoCheckmarkOutline />
            </span>
            <span>Delivery is free</span>
          </li>
          <li className="list-item">
            <span className="list-icon" name="checkmark-outline">
              <IoCloseOutline />
            </span>
            <span></span>
          </li>
        </ul>
        <div className="plan-sign-up">
          <Link to="/cta" className="btn btn--full">
            Get Plan
          </Link>
        </div>
      </div>

      <div className="pricing-plan pricing-plan--complete">
        <header className="plan-header">
          <p className="plan-name">Complete</p>
          <p className="plan-price">
            <span>$</span>649
          </p>
          <p className="plan-text">per month. That's just $11 per meal!</p>
        </header>
        <ul className="list">
          <li className="list-item">
            <span className="list-icon" name="checkmark-outline">
              <IoCheckmarkOutline />
            </span>
            <span>
              <strong>2 meal</strong> per day
            </span>
          </li>
          <li className="list-item">
            <span className="list-icon" name="checkmark-outline">
              <IoCheckmarkOutline />
            </span>
            <span>
              Order <strong>24/7</strong>
            </span>
          </li>
          <li className="list-item">
            <span className="list-icon" name="checkmark-outline">
              <IoCheckmarkOutline />
            </span>
            <span>Delivery is free</span>
          </li>
          <li className="list-item">
            <span className="list-icon" name="checkmark-outline">
              <IoCheckmarkOutline />
            </span>
            <span>Get access to latest recipes</span>
          </li>
        </ul>
        <div className="plan-sign-up">
          <Link to="/cta" className="btn btn--full">
            Get Plan
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .pricing-plan {
    border-radius: 11px;
    width: 75%;
  }

  .pricing-plan--starter {
    justify-self: end;
    border: 2px solid #fdf2e9;
    padding: 4.6rem;
  }

  .pricing-plan--complete {
    background-color: #fdf2e9;
    padding: 4.8rem;
    position: relative;
    overflow: hidden;
  }

  .pricing-plan--complete::after {
    content: "Best value";
    position: absolute;
    top: 6%;
    right: -18%;

    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    color: #333;
    background-color: #ffd43b;
    padding: 0.8rem 8rem;
    transform: rotate(45deg);
  }

  .plan-header {
    text-align: center;
    margin-bottom: 4.8rem;
  }

  .plan-name {
    color: #cf711f;
    font-weight: 600;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.75;
    margin-bottom: 3.2rem;
  }

  .plan-price {
    font-size: 6.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1.6rem;
  }

  .plan-price span {
    font-size: 3rem;
    font-weight: 500;
    margin-right: 0.8rem;
  }

  .plan-text {
    font-size: 1.6rem;
    line-height: 1.6;
    color: #6f6f6f;
  }

  .plan-sign-up {
    text-align: center;
    margin-top: 4.8rem;
  }

  @media (max-width: 34em) {
    .pricing-plan {
      width: 100%;
    }
  }
`;

export default Pricing;
