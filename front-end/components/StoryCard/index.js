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

  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #046DA9;

  }

  p {
    font-family: Helvetica Neue;
    font-size: 16px;
    line-height: 24px;
    color: #747474;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ImgStyle = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 992px) {
    min-width: 200px;
    min-height: 20vh;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  position: relative;
  height: 45.6vh;
  margin-left: 10vw;
  width: 50%;

  @media screen and (max-width: 992px) {
    width: 100%;
    margin-left: 0px;
  }
`;

const TextStyle = styled.div`
  height: 30%;
  padding: 20px 16px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    font-weight:bold;
  }

  @media screen and (min-width: 992px) {
    height: 45.6vh;
    width: 28vw;
    margin-left: 8.2vw;
    margin-right: 11vw;
    padding:90px 16px;

    a {
      margin-top: 1.9vh;
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
          <h5>{this.props.data.acf.story_header}</h5>
          <p>{this.props.data.acf.story_ingress}</p>
          <Link href={`/stories/${this.props.data.slug}`}>
            <a>READ FULL STORY</a>
          </Link>
        </TextStyle>
      </StoryCardStyle>
    );
  }
}

export default StoryCard;
