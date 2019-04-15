import styled from 'styled-components';
import React, { Component } from 'react'

const VideoCardStyle = styled.div`
    height: 70vh;
    width: 100vw;
    margin-top: 6.8vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

    @media screen and (min-width: 992px) {
        height: 94.1vh;
        width: 100vw;
        margin-top: 6.8vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
        
    }
`
const VideoPlayer = styled.iframe`
    height: 30vh;
    width: 94vw;
    margin-top: 7vh;
    margin-left: 3vw;

    @media screen and (min-width: 992px) {
        height: 59.1vh;
        width: 57.8vw;
        margin-top: 10.9vh;
        margin-left: 21vw;
    }
`

const VideoText = styled.div`
    margin-top: 4vh;
    margin-left: 3vw;

    h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 23px;
        letter-spacing: 0.03em;
        color: #046DA9;
    }

    p {
        width: 94vw;
        margin-top: 1vh;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        color: rgba(0, 0, 0, 0.6);
    }

    @media screen and (min-width: 992px) {
        margin-top: 4vh;
        margin-left: 21vw;

        h1 {
            font-family: Libre Franklin;
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 50px;
            letter-spacing: 0.02em;
            color: #046DA9;
        }

        p {
            width: 35vw;
            margin-top: 1vh;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 23px;
            color: rgba(0, 0, 0, 0.6);
        }
    }
`

const VideoCard = (props) => {
    return (
        <VideoCardStyle>         
            <VideoPlayer src={props.url} width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></VideoPlayer>
            <VideoText>
                <h1>Video text</h1>
                <p>Restad Gård ligger i Vänersborg kommun och är ett levande utvecklingsområde som blant annet huser dagis, hotell, småföretagare och en rad kulturella aktiviteter.</p>
            </VideoText>
        </VideoCardStyle>
    )
}

export default VideoCard;