import styled from 'styled-components';
import React, { Component } from 'react'
import Head from 'next/head'

const FacebookCardStyle = styled.div`
    height: auto;
    width: 100%;
    display:flex;
    justify-content:center;
    margin:32px 0;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

    h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: normal;
        letter-spacing: 0.03em;
        color: #000000;
    }

    @media screen and (min-width: 992px) {
        height: 58.1vh;
        margin-top: 6.8vh;

        h1 {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 64px;
            line-height: 97px;
            letter-spacing: 0.03em;
            color: #000000;
        }
    }
`

const FacebookFeed = styled.div`
`

const Container = styled.div`
  height:auto;
  width:500px;
  padding:16px;
  overflow:hidden;

  @media screen and (min-width: 992px) {
    width:500px;
    height:auto;
    padding:0;
  }
`

const FacebookCard = () => {
  return (
      <FacebookCardStyle>
        <Head>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
        </Head>
        <Container>
          <div class="fb-page" data-href="https://www.facebook.com/SupportRestadGard/" data-tabs="timeline" data-width="500" data-height="500" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/SupportRestadGard/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/SupportRestadGard/">Support Group Network - SGN</a></blockquote></div>
        </Container>
        <div id="fb-root"></div>
    </FacebookCardStyle>
  )
}

export default FacebookCard;
