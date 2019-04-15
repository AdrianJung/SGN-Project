import styled from 'styled-components';
import React, { Component } from 'react'

const ActivitiesCardStyle = styled.div`
    /* width: 100vw; */
    height: 40vh;
    margin-top: 10vh;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    display: flex;

    @media screen and (min-width: 992px) {
        width: 100vw;
        height: 86.9vh;
        margin-top: 6.8vh;
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Activities = styled.div`
    width: 80vw;
    height: 40vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media screen and (min-width: 992px) {
        width: 75vw;
        height: 65vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
`

const ActivityDivStyle = styled.div`
    height: 40vh;
    width: 80vw;
    padding: 100px 20px;

    h4 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 23px;
        letter-spacing: 0.03em;
        color: #046DA9;
    }

    p {
        width: 60vw;
        margin-top: 3vh;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.03em;
        color: rgba(0, 0, 0, 0.6);
    }
    
    @media screen and (min-width: 992px) {
        height: 20vh;
        width: 20vw;
        padding: 25px 25px;

        h4 {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 23px;
            letter-spacing: 0.03em;
            color: #046DA9;
        }

        p { 
            width: 20vw;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 23px;
            letter-spacing: 0.03em;
            color: rgba(0, 0, 0, 0.6);
        }

    }
`

// Denna behöver en scroll funktion

const ActivitiesCard = () => {
    return (
        <ActivitiesCardStyle>
            <Activities>
                <ActivityDivStyle>
                    <h4>Aktivitet</h4>
                    <p>Restad Gård ligger i Vänersborg kommun och är ett aktivitet.</p>
                </ActivityDivStyle>
                <ActivityDivStyle>
                    <h4>Aktivitet</h4>
                    <p>Restad Gård ligger i Vänersborg kommun och är ett aktivitet.</p>
                </ActivityDivStyle>
                <ActivityDivStyle>
                    <h4>Aktivitet</h4>
                    <p>Restad Gård ligger i Vänersborg kommun och är ett aktivitet.</p>
                </ActivityDivStyle>
                <ActivityDivStyle>
                    <h4>Aktivitet</h4>
                    <p>Restad Gård ligger i Vänersborg kommun och är ett aktivitet.</p>
                </ActivityDivStyle>
                <ActivityDivStyle>
                    <h4>Aktivitet</h4>
                    <p>Restad Gård ligger i Vänersborg kommun och är ett aktivitet.</p>
                </ActivityDivStyle>
                <ActivityDivStyle>
                    <h4>Aktivitet</h4>
                    <p>Restad Gård ligger i Vänersborg kommun och är ett aktivitet.</p>
                </ActivityDivStyle>
                <ActivityDivStyle>
                    <h4>Aktivitet</h4>
                    <p>Restad Gård ligger i Vänersborg kommun och är ett aktivitet.</p>
                </ActivityDivStyle>
                <ActivityDivStyle>
                    <h4>Aktivitet</h4>
                    <p>Restad Gård ligger i Vänersborg kommun och är ett aktivitet.</p>
                </ActivityDivStyle>
                <ActivityDivStyle>
                    <h4>Aktivitet</h4>
                    <p>Restad Gård ligger i Vänersborg kommun och är ett aktivitet.</p>
                </ActivityDivStyle>
            </Activities>
        </ActivitiesCardStyle>
    )
}

export default ActivitiesCard;