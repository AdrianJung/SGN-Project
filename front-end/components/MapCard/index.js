import styled from 'styled-components';
import React, { Component } from 'react'

const MapCardStyle = styled.div`
        width: 100vw;
        height: 58.4vh;
        margin-top: 6.8vh;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    @media screen and (max-width: 992px) {
        width: 100vw;
        height: 50vh;
        margin-top: 10vh;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

const MapCard = () => {
    return(
        <MapCardStyle>
            <img src="https://screenshot.codepen.io/25320.LpNMEX.fd43ffa7-c3e4-40f7-9597-8a8df79f30d7.png"></img>
        </MapCardStyle>
    )
}

export default MapCard;