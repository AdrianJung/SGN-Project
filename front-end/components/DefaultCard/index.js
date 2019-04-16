import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 420px;
  background: white;
  padding: 95px 100px;
  box-sizing: border-box;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

  p {
    font: ${props => props.theme.fontDesktopBodyText};
  }
`;

const DefaultCard = props => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default DefaultCard;
