import styled from "styled-components";
import React, { Component } from "react";

const ActivitiesCardStyle = styled.div`
  /* width: 100vw; */
  height: 40vh;
  margin:64px 0;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  overflow-x: scroll;
  background:#fdfdfd;
  @media screen and (min-width: 992px) {
    width: 100%;
    height: auto;
    margin-top: 6.8vh;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Activities = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (min-width: 992px) {
    width: 75vw;
    padding: 50px 0;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width: 992px) {
        width: 75vw;
        padding:50px 0;
        height:auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }
`

const ActivityDivStyle = styled.div`
  height: 40vh;
  width: 80vw;
  padding: 100px 20px;

  h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #046da9;
  }

  p {
    width: 60vw;
    margin-top: 3vh;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: rgba(0, 0, 0, 0.6);
  }

  @media screen and (min-width: 992px) {
    width: 20vw;
    height: auto;
    padding: 35px 0;

    h4 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 23px;
      letter-spacing: 0.03em;
      color: #046da9;
    }

    p {
      width: 20vw;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.03em;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

// Denna behöver en scroll funktion

const ActivitiesCard = props => {
  return (
    <ActivitiesCardStyle>
      <Activities>
        {props.data.map(activity => {
          return (
            <ActivityDivStyle>
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
            </ActivityDivStyle>
          );
        })}
      </Activities>
    </ActivitiesCardStyle>
  );
};

export default ActivitiesCard;
