import styled from 'styled-components';
import React, { Component } from 'react'
import Link from 'next/link';

const HeroComponent = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    height:80vh;
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
        height:80vh;
        position:absolute;
        object-fit:cover;
    }

    section {
        z-index:3;
        margin-left:150px;
        width:60%;
        min-width:730px;
    }

    div {
        width:100vw;
        height:80vh;
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

        height:85vh;

        img {
          height:85vh;
        }

        div {
          height:85vh;
        }

        button {
        margin-top:16px;
        }

        section {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        padding: 30px 16px;
        box-sizing:border-box;
        width:100vw;
        margin:0;
        min-width:0;
        }

        h1 {
        margin:0 0 10px 0;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: normal;
        letter-spacing: 0.03em;
        }

        article {
          display:flex;
        }

        button.black, button.white {
          padding:0;
          min-height:43px;
        }
    }
  `

const Hero = (props) => {
    return (

        <HeroComponent>
        <div></div>
        <img src={props.imgUrl} />
        <section>
          <h1>{props.text}</h1>
          <article>
            <Link href="/events"><button className="white">Upcoming Events</button></Link>
            <Link href="/contact"><button className="black">Contact Us</button></Link>
          </article>
        </section>
         </HeroComponent>
    )
}

export default Hero;
