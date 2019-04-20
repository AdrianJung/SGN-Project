import styled from 'styled-components';
import React, { Component } from 'react';
const SponsorCardStyle = styled.div`
    height: auto;
    margin-top: 6.8vh;
    padding: 50px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

    display:flex;
    flex-wrap:wrap;
    justify-content:center;

    img {
      height:60px;
      width:auto;
      margin: 30px;
    }

    @media screen and (max-width: 992px) {
        margin-top: 10vh;

        img {
          height:50px;
          margin: 15px;
        }
    }
`

const SponsorCard = (props) => {
    return(
        <SponsorCardStyle>
            {props.data.map(sponsor => {
              return (
                <img src={sponsor.image} />
              )
            })}
        </SponsorCardStyle>
    )
}

export default SponsorCard;
