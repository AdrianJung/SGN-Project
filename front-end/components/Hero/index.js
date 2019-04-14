import styled from 'styled-components';
import React, { Component } from 'react'
import Link from 'next/link';

const HeroStyle = styled.div`
    height: 89vh;
    width: 100vw;
    margin-top: 11vh;
    background-color: gray;
    
    @media screen and (min-width: 992px) {
        height: 70.5vh;
        width: 100vw;
        margin-top: 7.1vh;
        background-color: #EEE;

        img {
            
        }
    }
`
const HeadlineStyle = styled.div`
    margin-top: 57vh;
    margin-left: 5vw;
    margin-right: 12vw;
        
    h1 {
        font-family: sans-serif;
        z-index:3;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: normal;
        letter-spacing: 0.03em;
        color: #FFFFFF;
    }
    
    @media screen and (min-width: 992px) {
        width: 42vw;
        margin-top: 12.4vh;
        margin-left: 22.7vw;
        
        h1 {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 64px;
            line-height: normal;
            letter-spacing: 0.03em;
            color: #FFFFFF;
        }
    }
`
const HeroButtonStyle = styled.div`
    height: 4.5vh;
    margin-top: 3.6vh;
    display: flex;

    button {
        z-index: 3;
        margin-right: 10px;
    }

    .white {
        width: 40vw;
        height: 6vh;
        background: white;
        border-radius: 4px;
        color: black;
        border: none;
        /* padding: 15px 20px; */
        font-size: 14px;
    }

    .black {
        width: 40vw;
        height: 6vh;
        background: none;
        border: solid white 1px;
        border-radius: 4px;
        color: white;
        /* padding: 13px 24px; */
        font-size: 14px;
    }

    @media screen and (min-width: 992px) {
        height: 4.5vh;
        margin-top: 3.6vh;
        display: flex;

        button {
            z-index: 3;
            margin-right: 20px;
        }

        .white {
            width: 9.5vw;
            height: 4.5vh;
            background: white;
            border-radius: 4px;
            color: black;
            border: none;
            /* padding: 15px 20px; */
            font-size: 14px;
        }

        .black {
            width: 9.5vw;
            height: 4.5vh;
            background: none;
            border: solid white 1px;
            border-radius: 4px;
            color: white;
            /* padding: 13px 24px; */
            font-size: 14px;
        }
    }
`

const Hero = () => {
    return (
        <HeroStyle>
            <img src=""></img>
            <HeadlineStyle>
                <h1>We have to think of a headline with this length.</h1>
                <HeroButtonStyle>
                    <Link href="/events"><button className="white">Upcoming events</button></Link>
                    <Link href="/contact"><button className="black">Contact us</button></Link>
                </HeroButtonStyle>
            </HeadlineStyle>
        </HeroStyle>
    )
}

export default Hero;