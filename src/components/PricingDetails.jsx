import React from "react";
import styled from "styled-components";

const PricingDetails = () => {
  return (
    <Wrapper className="container grid">
      <aside className="plan-details">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .plan-details {
    font-size: 1.6rem;
    line-height: 1.6;
    text-align: center;
  }
`;

export default PricingDetails;
