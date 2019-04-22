import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  @media screen and (max-width: 992px) {
    padding: 95px 10px;
  }
  margin: 64px 0;
  padding: 95px 100px;
  display: flex;
  width: 100%;
  height: 420px;
  background: white;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
  @media screen and (max-width: 992px) {
    padding: 50px 30px;
  }
  p {
    font: ${props => props.theme.fontDesktopBodyText};
  }
`;

const DefaultCard = props => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default DefaultCard;
