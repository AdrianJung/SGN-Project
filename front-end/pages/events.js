import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link';

import ActivityCard from '../components/ActivityCard/'

const EventsWrapper = styled.div`
  margin-top:63px;
  padding:0 150px;

  @media screen and (max-width: 992px) {
    padding:0 16px;
    margin-top:95px;
  }
`

class Events extends Component {

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
          events: response.data,
          isLoading: false
        })
      }
    })
  }

  render() {
    console.log(this.state.events)
    return (
      <Layout>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
          body {
            margin:0;
            padding:0;
            background-color:#EEEEEE;
            font-family:sans-serif;
            color:white;
          }
        `}</style>
        <EventsWrapper>
        {!this.state.isLoading && this.state.events.map(event => <ActivityCard data={event} />)}
        </EventsWrapper>
      </Layout>
    )
  }
};

export default Events;
