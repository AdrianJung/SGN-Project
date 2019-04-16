import styled from 'styled-components';
import React, {
  Component
} from 'react'
import axios from "axios";
import Link from 'next/link';

const StoryCardStyle = styled.div `
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

const ImgStyle = styled.img `
    height: 35vh;
    width: 100vw;
    background-color: #EEE;
    object-fit:cover;

    @media screen and (min-width: 992px) {
        height: 45.6vh;
        width: 28vw;
        background-color: #EEE;
        margin-left: 11vw;
    }
`

const TextStyle = styled.div `
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
const ButtonLeft = styled.button `
    /* height: 45px;
    width: 45px;
    background-color: #046DA9; */

    @media screen and (min-width: 992px) {
        height: 45px;
        width: 45px;
        background-color: #046DA9;

    }
`

const ButtonRight = styled.button `
    /* height: 45px;
    width: 45px;
    background-color: #046DA9; */

    @media screen and (min-width: 992px) {
        height: 45px;
        width: 45px;
        background-color: #046DA9;

    }
`

class StoryCard extends Component {

  static async getInitialProps({query}) {
    const slug = query.slug;
    return {slug};
  }

  constructor(props) {
    super(props);
    this.state = {
      story: {},
      isLoading: true
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/wp-json/wp/v2/stories`)
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
        {!this.state.isLoading && this.state.story.map(item => {
          return (
            <StoryCardStyle >
              <ButtonLeft></ButtonLeft>
              <ImgStyle src = {item.acf.story_image}/>
              <TextStyle>
                <h1> {item.acf.story_header}</h1>
                <p> {item.acf.story_ingress} </p>

                {/* Temporär länk */ }
                <Link href="/stories/nalah" >
                <a> READ FULL STORY </a>
                </Link>
              </TextStyle>
              <ButtonRight></ButtonRight>
            </StoryCardStyle>
          );
        })
      }
      </div>
    );
  }
}

export default StoryCard;
