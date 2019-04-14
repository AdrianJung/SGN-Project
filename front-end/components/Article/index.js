import React, { Component } from "react";
import styled from "styled-components";

const StyledArticle = styled.div`
  height: 100%;
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
