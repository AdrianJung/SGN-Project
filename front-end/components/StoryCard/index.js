import styled from 'styled-components';
import React, { Component } from 'react'
import axios from "axios";
import Link from 'next/link';

const StoryCardStyle = styled.div`
    @media screen and (min-width: 992px) {
        height: 59vh;
        width: 100vw;
        margin-top: 6.8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: gray; */
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    }
`

const ImgStyle = styled.img`
    @media screen and (min-width: 992px) {
        height: 45.6vh;
        width: 28vw;
        background-color: #EEE;
    }
`

const TextStyle = styled.div`
    @media screen and (min-width: 992px) {
        height: 45.6vh;
        width: 28vw;
        margin-left: 8.2vw;
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
                    <ImgStyle src={item.acf.story_image} />
                    <TextStyle>
                      <h1>{item.acf.story_header}</h1>
                      <p>{item.acf.story_ingress}</p>
    
                      {/* Temporär länk */}
                      <Link href="/stories/nalah">
                        <a>READ FULL STORY</a>
                      </Link>
                    </TextStyle>
                  </StoryCardStyle>
                );
              })}
          </div>
        );
    }
}

export default StoryCard;