import React, { Component } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 10px;

  .awardText {
    font-size: 14px;
  }
  .textContainer {
  }
  p {
    font-size: 12px;
  }
  .imgContainer {
    height: 260px;
    width: 220px;
  }
  img {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
  }
`;

const AwardCard = props => {
  return (
    <StyledCard isColumn={props.isColumn}>
      <div className="imgContainer">
        <img src={props.image} alt="" />
      </div>
      <div className="textContainer">
        <p className="awardText">{props.title}</p>
        <p>{props.text}</p>
      </div>
    </StyledCard>
  );
};

export default AwardCard;
