import React, { Component } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  .awardText {
    font-size: 14px;
  }
  .textContainer {
    padding:20px;
    width:230px;
    overflow:hidden;
  }

  .lightgrey {
    color: rgba(0, 0, 0, 0.5);
  }
  p {
    font-size: 12px;
    margin:4px 0;
  }
  .imgContainer {
    height: 230px;
    width: 230px;
  }
  img {
    object-fit: ${props => props.project ? 'contain' : 'cover'};
    object-position: ${props => props.project ? 'center' : '20% 20%'};
    padding: ${props => props.project ? '40px' : '0'};
    border-bottom: ${props => props.project ? '1px solid lightgrey' : 'none'};
    width: 100%;
    height: 100%;
  }
`;

const AwardCard = props => {
  return (
    <StyledCard project={props.isProject} isColumn={props.isColumn}>
      <div className="imgContainer">
        <img src={props.image} alt="" />
      </div>
      <div className="textContainer">
        <p className="awardText">{props.title}</p>
        <p>{props.text}</p>
        {props.phone && <p className="lightgrey">{props.phone}</p>}
        {props.secondText && <p className="lightgrey">{props.secondText}</p>}
      </div>
    </StyledCard>
  );
};

export default AwardCard;
