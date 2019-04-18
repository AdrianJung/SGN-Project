import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  height: 45px;
  width: 45px;
  z-index: 6;
  background-color: #046da9;
  position: absolute;
  top: 24.6vh;
  left: 0;
  margin-left: 6vh;
  margin-top: 15vh;
  border: none;

  @media screen and (max-width: 992px) {
    top: 10.2vh;
    margin-left: 0;
  }
`;
const SlideButtonLeft = props => {
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
          d="M20 10L2 10M2 10L10.8 1M2 10L10.8 19"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </StyledButton>
  );
};

export default SlideButtonLeft;
