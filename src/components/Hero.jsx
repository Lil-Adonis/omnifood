import React from "react";
import styled from "styled-components";
import CustomersImages from "./CustomersImages";
import hero from "../assets/img/hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Link to="/pricing" className="btn btn--full margin-right-sm">
            Start eating well
          </Link>
          <Link to="/cta" className="btn btn--outline">
            Sign up
          </Link>

          <CustomersImages />
        </div>
        <div className="hero-img-box">
          <img src={hero} className="hero-img" alt="Woman enjoying food" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-primary-4);
  padding: 4.8rem 0 9.6rem 0;

  .hero {
    max-width: 130rem;
    margin: 0 auto;
    padding: 0 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9.6rem;
    align-items: center;
  }

  .hero-description {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4.8rem;
  }

  .hero-img {
    width: 100%;
  }

  .delivered-meals {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-top: 8rem;
  }

  .delivered-imgs {
    display: flex;
  }

  .delivered-imgs img {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    margin-right: -1.6rem;
    border: 3px solid #fdf2e9;
  }

  .delivered-imgs img:last-child {
    margin-right: 0;
  }

  .delivered-text {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .delivered-text span {
    color: #cf711f;
    font-weight: 700;
  }

  @media (max-width: 84em) {
    .hero {
      max-width: 120rem;
    }
    .heading-primary {
      font-size: 4.4rem;
    }
  }

  @media (max-width: 75em) {
    .hero {
      gap: 4.8rem;
    }
  }

  @media (max-width: 59em) {
    .hero {
      grid-template-columns: 1fr;
      padding: 0 8rem;
      gap: 6.4rem;
    }

    .hero-text-box,
    .hero-img-box {
      text-align: center;
    }

    .hero-img {
      width: 60%;
    }

    .delivered-meals {
      justify-content: center;
      margin-top: 3.2rem;
    }
  }

  @media (max-width: 34em) {
    & {
      padding: 2.4rem 0 6.4rem 0;
    }
    .hero {
      padding: 0 3.2rem;
    }
    .hero-img {
      width: 80%;
    }
    .heading-primary {
      font-size: 4rem;
    }
  }
`;

export default Hero;
