import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 45px;
  width: 45px;
  background-color: #046da9;
  z-index: 6;
  position: absolute;
  top: 38.6vh;
  right: 0;
  margin-right: 6vh;
  border: none;
  @media screen and (max-width: 992px) {
    top: 25vh;
    margin-right: 0;
  }
`;
const SlideButtonRight = props => {
  return (
    <StyledButton onClick={props.onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-1.05503e-06 10L18 10M18 10L9.2 19M18 10L9.2 1"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </StyledButton>
  );
};

export default SlideButtonRight;
