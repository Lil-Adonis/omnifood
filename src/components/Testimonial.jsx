import React from "react";
import styled from "styled-components";

const Testimonial = ({ image, text, name }) => {
  return (
    <Wrapper>
      <figure className="testimonial">
        <img src={image} className="testimonial-img" alt={`customer ${name}`} />
        <blockquote className="testimonial-text">{text}</blockquote>
        <p className="testimonial-name">&mdash; {name}</p>
      </figure>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  .testimonial-img {
    width: 6.4rem;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }

  .testimonial-text {
    font-size: 1.8rem;
    line-height: 1.8;
    margin-bottom: 1.6rem;
  }

  .testimonial-name {
    font-size: 1.6rem;
    color: #6f6f6f;
  }
`;

export default Testimonial;
