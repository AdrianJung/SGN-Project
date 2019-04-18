import styled from 'styled-components';
import React, { Component } from 'react'
import Link from 'next/link';

const HeroComponent = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    height:70.5vh;
    width:100vw;
    padding-right:150px;
    box-sizing:border-box;

    button {
        z-index:3;
        margin-right:20px;
        cursor:pointer;
        min-width: 150px;
    }

    h1 {
        font-family: sans-serif;
        z-index:3;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: normal;
        letter-spacing: 0.03em;
        color:white;
        margin-bottom:16px;
    }

    h2 {
        color:black;
    }

    img {
        width:100vw;
        height:70.5vh;
        position:absolute;
        object-fit:cover;
    }

    section {
        z-index:3;
        margin-left:150px;
    }

    div {
        width:100vw;
        height:70.5vh;
        position:absolute;
        opacity:0.5;
        z-index:2;
        background:black;
    }

    .white {
        background:white;
        border-radius:4px;
        color:black;
        border:none;
        padding:15px 20px;
        font-size:14px;
    }

    .black {
        background:none;
        border:solid white 1px;
        border-radius:4px;
        color:white;
        padding:13px 24px;
        font-size:14px;
    }

    @media screen and (max-width: 992px) {

        justify-content:flex-end;

        button {
        margin-top:16px;
        }

        section {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        padding: 60px 16px;
        box-sizing:border-box;
        width:100vw;
        margin:0;
        height:40vh;
        }

        h1 {
        margin:0 0 10px 0;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: normal;
        letter-spacing: 0.03em;
        }
    }
  `

const Hero = () => {
    return (

        <HeroComponent>
        <div></div>
        <img src="https://lh3.google.com/u/0/d/1a-3nXeHtnxTPgnDj3Ouq4QOQEtpZK4fX=w2880-h1472-iv1" />
        <section>
          <h1>We have to think of a headline with this length.</h1>
          <article>
            <Link href="/events"><button className="white">Upcoming Events</button></Link>
            <Link href="/contact"><button className="black">Contact Us</button></Link>
          </article>
        </section>
         </HeroComponent>
    )
}

export default Hero;
