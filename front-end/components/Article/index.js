import React, { Component } from "react";
import styled from "styled-components";

const StyledArticle = styled.div`
  height: 100%;

  p {
    margin-top: 1rem;
    font-size: 18px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const Article = props => {
  return (
    <StyledArticle>
      <h3>{props.headerText}</h3>
      <p>{props.paragraphText}</p>
    </StyledArticle>
  );
};

export default Article;
