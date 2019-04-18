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

  ${props =>
    props.scroll &&
    css`
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      overflow-y: hidden;
      white-space: nowrap;
    `}
  flex-direction: ${props => (props.isColumn ? "column" : "row")};
  align-items: ${props => (props.isColumn ? "flex-start" : "center")};
  justify-content: ${props => (props.isColumn ? "space-between" : "none")};
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

  p {
    font: ${props => props.theme.fontDesktopBodyText};
  }
`;

const DefaultCard = props => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default DefaultCard;
