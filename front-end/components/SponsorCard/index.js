import styled from 'styled-components';
import React, { Component } from 'react';
const SponsorCardStyle = styled.div`
    height: auto;
    padding: 50px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
`

const SponsorCard = () => {
    return(
        <SponsorCardStyle>
            <h1>Sponsorer</h1>
        </SponsorCardStyle>
    )
}

export default SponsorCard;