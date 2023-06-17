import React from "react";
import styled from "styled-components";
import logo1 from "../assets/img/logos/techcrunch.png";
import logo2 from "../assets/img/logos/business-insider.png";
import logo3 from "../assets/img/logos/the-new-york-times.png";
import logo4 from "../assets/img/logos/forbes.png";
import logo5 from "../assets/img/logos/usa-today.png";

const Featured = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={logo1} alt="techcrunch logo" />
          <img src={logo2} alt="Business Insider logo" />
          <img src={logo3} alt="Newyork Times logo" />
          <img src={logo4} alt="forbes logo" />
          <img src={logo5} alt="usa today logo" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4.8rem 0 3.2rem 0;
  .heading-featured-in {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2.4rem;
    color: #888;
  }

  .logos {
    display: flex;
    justify-content: space-around;
  }

  .logos img {
    height: 3.2rem;
    filter: brightness(0);
    opacity: 50%;
  }

  @media (max-width: 59em) {
    .logos img {
      height: 2.4rem;
    }
  }
  @media (max-width: 34em) {
    .logos img {
      height: 1.2rem;
    }
  }
`;

export default Featured;
