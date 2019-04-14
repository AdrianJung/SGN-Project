import styled from 'styled-components';
import React, { Component } from 'react'
import Link from 'next/link';

const WhatDoWeDoCardStyle = styled.div`
    @media screen and (min-width: 992px) {
        height: 68.6vh;
        width: 100vw;
        margin-top: 6.8vh;
        display: flex;
        flex-direction: row;
        
    }
`
const CardStyle = styled.div`
    @media screen and (min-width: 992px) {
        background-color: #FFF;
        width: 50vw;
        height: 68.6vh;

        h1 {
            margin-top: 12.8vh;
            margin-left: 13vw;
            font-family: Libre Franklin;
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 50px;
            letter-spacing: 0.02em;
            color: #046DA9;
        }

        p {
            width: 30vw;
            margin-top: 1.9vh;
            margin-left: 13vw;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 23px;
            letter-spacing: 0.03em;

            color: #747474;
        }

        button {
            margin-top: 4vh;
            margin-left: 13vw;
            width: 9.5vw;
            height: 4.5vh;
            background: #046DA9;
            border-radius: 4px;
            color: #FFF;
            border: none;
            /* padding: 15px 20px; */
            font-size: 14px;
        }
    }
`

const ImgStyle = styled.img`
    @media screen and (min-width: 992px) {
        width: 50vw;
        height: 68.6vh;
        background-color: #EEE;
    }
`

const WhatDoWeDoCard = () => {
    return (
        <WhatDoWeDoCardStyle>
            <ImgStyle src=""></ImgStyle>
            <CardStyle>
                <h1>What do we do?</h1>
                <p> Motivation and encouragement, showing swedish people what Name has acomplished by unleashing her own inner strength. Maybe another line of text right here as well.</p>
                <Link href=""><button>Read more</button></Link>
            </CardStyle>

        </WhatDoWeDoCardStyle>
    )
}

export default WhatDoWeDoCard;