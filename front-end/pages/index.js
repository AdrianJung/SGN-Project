import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios'
import Link from 'next/link';
import Head from 'next/head'
import Layout from '../components/Layout/'
import Hero from '../components/Hero/';
import WhoAreWeCard from '../components/WhoAreWeCard/';
import WhatDoWeDoCard from '../components/WhatDoWeDoCard/';
import WorkWithUsCard from '../components/WorkWithUsCard/';
import FacebookCard from '../components/FacebookCard/';
import VideoCard from '../components/VideoCard/'
import ActivityCard from '../components/ActivityCard/'
import StoryCard from '../components/StoryCard/'

const EventStyle = styled.div`
    padding:0;

    @media screen and (min-width: 992px) {
      display:flex;
      flex-direction:column;
      align-items:center;
      padding:0 150px;
    }
`

class Index extends Component {
  
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      events: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/wp-json/activities/search`)
    .then((response) => {
      // handle success
      console.log(response.data);
      if(response.data.length > 0){
        this.setState({
          events: response.data.slice(0,2),
          isLoading: false
        })
      }
    })
    
    // axios.get(`http://localhost:8888/wp-json/wp/v2/projects`)
    // .then((response) => {
    //   // handle success
    //   console.log(response.data);
    //   if(response.data.length > 0){
    //     this.setState({
    //       projects: response.data,
    //       isLoading: false
    //     })
    //   }
    // })
  }

  render () {
    return (

      <Layout>
        <Head>
        </Head>
        <Hero/>
        <WhoAreWeCard/>
        <WhatDoWeDoCard/>
        <WorkWithUsCard/>
        <FacebookCard/>
        <VideoCard
          url = "https://player.vimeo.com/video/316874134"
        />
        <EventStyle>
          {!this.state.isLoading && this.state.events.map(event => <ActivityCard data={event} />)}
        </EventStyle>
        <StoryCard/>
        <WorkWithUsCard/>
      </Layout>

    )
  }
};

export default Index;
