import styled from 'styled-components';
import React, { Component } from 'react'

const VideoCardStyle = styled.div`
    height: 430px;
    width: 100vw;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    padding:16px;
    position:relative;

    @media screen and (min-width: 992px) {
        height:auto;
        padding-top: 56.25%;
        padding:56.25% 50px 50px 50px;

        width: 100%;
        margin-top: 6.8vh;
        margin-bottom: 6.8vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

    }
`
const VideoPlayer = styled.iframe`
    /* height: 30vh;
    width: 94vw; */
    height:60%;
    width:100%;
    border:none;
    align-self:flex-start;
    @media screen and (min-width: 992px) {
        height:80%;
        position:absolute;
        padding:0 85px;
        top:0;
        left:0;
        /* margin-left: 21vw; */
    }
`

const VideoText = styled.div`
    margin-top: 4vh;
    margin-left: 3vw;
    background-color: #FFFFFF;

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
        width: 100%;
        margin-top: 1vh;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        color: rgba(0, 0, 0, 0.6);
    }

    @media screen and (min-width: 992px) {
        margin-top: 0;

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
            <VideoPlayer src={props.url} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></VideoPlayer>
            <VideoText>
                <h1>{props.header}</h1>
                <p>{props.description}</p>
            </VideoText>
        </VideoCardStyle>
    )
}

export default VideoCard;
