import styled from 'styled-components';
import React, { Component } from 'react'

const FacebookCardStyle = styled.div`
    height: 40vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: normal;
        letter-spacing: 0.03em;
        color: #000000;
    }
    
    @media screen and (min-width: 992px) {
        height: 58.1vh;
        width: 100vw;
        margin-top: 6.8vh;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 64px;
            line-height: 97px;
            letter-spacing: 0.03em;
            color: #000000;
        }
    }
`

const FacebookCard = () => {
    return (
        <FacebookCardStyle>
            <h1>Facebook Feed?</h1>
        </FacebookCardStyle>
    )
}

export default FacebookCard;