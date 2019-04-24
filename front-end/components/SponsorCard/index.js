import styled from 'styled-components';
import React, { Component } from 'react';

const SponsorCardStyle = styled.div`
  /* width: 100vw; */
  height: 30vh;
  padding:0 25px;
  margin-top: 10vh;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  overflow-x: scroll;

  @media screen and (min-width: 992px) {
    width: 100%;
    height: auto;
    margin-top: 6.8vh;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap:wrap;
  }
`;

const SponsorContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin:0 20px;

  img {
    width:150px;
  }

  @media screen and (min-width: 992px) {
    width: 75vw;
    padding: 50px 0;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width: 992px) {
        margin:0;
        width: 25%;
        padding:50px 0;
        height:auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }
`

const SponsorCard = (props) => {
    return(
        <SponsorCardStyle>
            {props.data.map(sponsor => {
              return (
                <SponsorContainer>
                  <img src={sponsor.image} />
                </SponsorContainer>
              )
            })}
        </SponsorCardStyle>
    )
}

export default SponsorCard;
