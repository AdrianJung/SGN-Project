import styled from 'styled-components';
import React, { Component } from 'react';
const SponsorCardStyle = styled.div`
    height: auto;
    margin-top: 6.8vh;
    padding: 50px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 992px) {
        margin-top: 10vh;
    }
`

const SponsorCard = () => {
    return(
        <SponsorCardStyle>
            <h1>Sponsorer</h1>
        </SponsorCardStyle>
    )
}

export default SponsorCard;