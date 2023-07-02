import React from "react";
import styled from "styled-components";
import Pricing from "../components/Pricing";
import PricingDetails from "../components/PricingDetails";
import PricingFeatures from "../components/PricingFeatures";

const PricingPage = () => {
  return (
    <Wrapper className="section-pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>
      <Pricing />
      <PricingDetails />
      <PricingFeatures />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9.6rem 0;
`;

export default PricingPage;
