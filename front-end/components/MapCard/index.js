import styled from 'styled-components';
import React, { Component } from 'react'

const MapCardStyle = styled.div`
        width: 100vw;
        height: 58.4vh;
        margin-top: 6.8vh;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    @media screen and (max-width: 992px) {
        width: 100vw;
        height: 50vh;
        margin-top: 10vh;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

const Mapouter = styled.div`
  position:relative;
  text-align:right;
  height:500px;
  width:100vw;
  margin:64px 0 0 0;

  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:500px;
    width:100vw;
  }

  iframe {
    width:100vw;
  }
`



const MapCard = (props) => {
    return(
        <Mapouter>
          <div className="gmap_canvas">
            <iframe height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${encodeURI(props.location)}&t=&z=11&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
            <a href="https://www.emojilib.com">
            </a>
          </div>
        </Mapouter>
    )
}

export default MapCard;
