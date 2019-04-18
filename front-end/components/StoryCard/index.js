import styled from "styled-components";
import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";

const StoryCardStyle = styled.div`
  @import "~slick-carousel/slick/slick.css";
  @import "~slick-carousel/slick/slick-theme.css";
  height: 70vh;
  width: 100%;
  margin: 6.8vh 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ImgStyle = styled.img`
  background-color: #eee;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 992px) {
    min-width: 200px;
    min-height: 20vh;
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
  }
`;

const ImgDiv = styled.div`
  background-color: #eee;
  display: flex;
  position: relative;
  height: 45.6vh;
  margin-left: 10vw;
  width: 50%;

  @media screen and (max-width: 992px) {
    width: 100%;
    display: flex;
    position: relative;
    margin-left: 0px;
  }
`;

const TextStyle = styled.div`
  height: auto;
  padding: 16px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: Libre Franklin;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 50px;
    letter-spacing: 0.02em;
    color: #046da9;
  }

  p {
    font-family: Helvetica Neue;
    font-size: 16px;
    line-height: 24px;
    color: #747474;
  }

  a {
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
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-family: Libre Franklin;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 50px;
      letter-spacing: 0.02em;
      color: #046da9;
    }

    p {
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
`;

class StoryCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StoryCardStyle>
        <ImgDiv>
          <ImgStyle src={this.props.data.acf.story_image} />
        </ImgDiv>
        <TextStyle>
          <h1>{this.props.data.acf.story_header}</h1>
          <p>{this.props.data.acf.story_ingress}</p>
          {/* Temporär länk */}
          <Link href="/stories/nalah">
            <a>READ FULL STORY</a>
          </Link>
        </TextStyle>
      </StoryCardStyle>
    );
  }
}

export default StoryCard;
