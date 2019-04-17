import styled from 'styled-components';
import React, { Component } from 'react'
import axios from "axios";
import Link from 'next/link';

const StoryCardStyle = styled.div`
    height: 70vh;
    width: 100vw;
    margin-top: 10vh;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

    @media screen and (min-width: 992px) {
        height: 59vh;
        width: 100vw;
        margin-top: 6.8vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* background-color: gray; */
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    }
`

const ImgDiv = styled.div`
    height: 35vh;
    width: 100vw;
    background-color: #EEE;
    object-fit:cover;

    @media screen and (min-width: 992px) {
        height: 45.6vh;
        width: 28vw;
        margin-left: 11vw;
        display: flex;
        position: relative;

    }
`
const ImgStyle = styled.img`
    height: 35vh;
    width: 100vw;
    background-color: #EEE;

    @media screen and (min-width: 992px) {
        height: 45.6vh;
        width: 100%;
        background-color: #EEE;
        position: absolute;
    }
`

const TextStyle = styled.div`
    height: 45vh;
    width: 100vw;
    background-color: #FFF;

    h1 {
        padding: 35px 0px 16px 14px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 23px;
        letter-spacing: 0.03em;
        color: #046DA9;
    }

    p {
        padding: 0px 0px 16px 14px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        color: #747474;
    }

    a {
        padding: 0px 0px 16px 14px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: normal;
        letter-spacing: 0.01em;
        color: #000000;
    }

    @media screen and (min-width: 992px) {
        height: 45.6vh;
        width: 28vw;
        margin-left: 8.2vw;
        margin-right: 11vw;
        background-color: #FFF;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;

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
            /* width: 25vw; */
            font-family: Helvetica Neue;
            font-size: 16px;
            line-height: 24px;
            color: #747474;
        }

        a {
            margin-top: 1.9vh;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: normal;
            letter-spacing: 0.01em;
            color: #000000;
        }
    }
`
// Mobil vyn behöver fixas och klick
const ButtonLeft = styled.button`
    display: none;

    @media screen and (min-width: 992px) {
        height: 45px;
        width: 45px;
        background-color: #046DA9;
        display: block;

    }
`

const ButtonRight = styled.button`
    display: none;

    @media screen and (min-width: 992px) {
        height: 45px;
        width: 45px;
        background-color: #046DA9;
        display: block;
    }
`

const ButtonLeftSmall = styled.button`
    display: block;
    height: 45px;
    width: 45px;
    background-color: #046DA9;
    position: absolute;
    margin-top: 15vh;

    @media screen and (min-width: 992px) {
        display: none;
    }
`

const ButtonRightSmall = styled.button`
    display: block;
    height: 45px;
    width: 45px;
    background-color: #046DA9;
    position: absolute;
    right: 0;
    margin-top: 15vh;

    @media screen and (min-width: 992px) {
        display: none;
    }
`

class StoryCard extends Component {

    static async getInitialProps({ query }) {
        const slug = query.slug;
        return { slug };
    }

    constructor(props) {
        super(props);
        this.state = {
          story: {},
          isLoading: true
        };
    }

    componentDidMount() {
        axios
          .get(
            `http://localhost:8888/wp-json/wp/v2/stories`
          )
          .then(response => {
            // handle success
            console.log(response.data)
            // if (response.data.length == 1) {
              this.setState({
                story: response.data,
                isLoading: false
              });
            // }
          });
    }

    render() {
        console.log(this.state.story);
        return (
          <div>
            {!this.state.isLoading &&
              this.state.story.map(item => {
                return (
                  <StoryCardStyle>
                    <ButtonLeft>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 10L2 10M2 10L10.8 1M2 10L10.8 19" stroke="white" stroke-width="2"/>
                        </svg>
                    </ButtonLeft>
                    <ImgDiv>
                        <ImgStyle src={item.acf.story_image}/>
                        <ButtonLeftSmall>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 10L2 10M2 10L10.8 1M2 10L10.8 19" stroke="white" stroke-width="2"/>
                            </svg>
                        </ButtonLeftSmall>
                        <ButtonRightSmall>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-7.86805e-07 10L18 10M18 10L9.2 19M18 10L9.2 1" stroke="white" stroke-width="2"/>
                            </svg>
                        </ButtonRightSmall>
                    </ImgDiv>

                    <TextStyle>
                      <h1>{item.acf.story_header}</h1>
                      <p>{item.acf.story_ingress}</p>

                      {/* Temporär länk */}
                      <Link href="/stories/nalah">
                        <a>READ FULL STORY</a>
                      </Link>
                    </TextStyle>
                    <ButtonRight>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-1.05503e-06 10L18 10M18 10L9.2 19M18 10L9.2 1" stroke="white" stroke-width="2"/>
                        </svg>
                    </ButtonRight>
                  </StoryCardStyle>
                );
              })}
          </div>
        );
    }
}

export default StoryCard;
