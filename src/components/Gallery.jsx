import React from "react";
import styled from "styled-components";

const Gallery = ({ image }) => {
  return (
    <Wrapper>
      <img src={image} alt="arranged food" />
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  overflow: hidden;
  & img {
    display: block;
    width: 100%;
    transition: all 0.4s;
  }
  & img:hover {
    transform: scale(1.1);
  }
`;

export default Gallery;
