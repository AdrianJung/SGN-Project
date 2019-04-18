import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout/";
import Hero from "../components/Hero/";
import WhoAreWeCard from "../components/WhoAreWeCard/";
import WhatDoWeDoCard from "../components/WhatDoWeDoCard/";
import WorkWithUsCard from "../components/WorkWithUsCard/";
import FacebookCard from "../components/FacebookCard/";
import VideoCard from "../components/VideoCard/";
import ActivityCard from "../components/ActivityCard/";
import StoryCard from "../components/StoryCard/";
import ActiivitiesCard from "../components/ActivitiesCard/";
import DefaultCard from '../components/DefaultCard/';
import AwardCard from '../components/AwardCard/';
import SponsorCard from "../components/SponsorCard";


const EventStyle = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: #046da9;
    border-radius: 4px;
    color: white;
    border: none;
    padding: 15px 20px;
    margin: 10px 0;
    font-size: 14px;
  }

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 150px;
  }
`

const ProjectCard = styled.div`
    padding-left: 0;
    padding-right: 0;

    @media screen and (min-width: 992px) {
        width: 100%;
        padding-left: 150px;
        padding-right: 150px;
    }
`



class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      events: [],
      story: {},
      projects: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/wp-json/wp/v2/projects`)
    .then((response) => {
      // handle success
      console.log(response.data);
      if(response.data.length > 0){
        this.setState({
          projects: response.data,
          isLoading: false
        })
      }
    })

    axios
      .get(`http://localhost:8888/wp-json/activities/search`)
      .then(response => {
        // handle success
        console.log(response.data);
        if (response.data.length > 0) {
          this.setState({
            events: response.data.slice(0, 2),
            isLoading: false
          });
        }
      });

    axios.get(`http://localhost:8888/wp-json/wp/v2/stories`).then(response => {
      // handle success
      console.log(response.data);
      if (response.data.length > 0) {
        this.setState({
          story: response.data,
          isLoading: false
        });
      }
    });
  }

  render() {
    return (
      <Layout>
        <Head />
        <Hero />
        <WhoAreWeCard />
        <WhatDoWeDoCard />
        <WorkWithUsCard />
        <FacebookCard />
        <VideoCard url="https://player.vimeo.com/video/316874134" />
        <EventStyle>
          {!this.state.isLoading &&
            this.state.events.map(event => <ActivityCard data={event} />)}
          <Link href="/events">
            <button>View All Events</button>
          </Link>
        </EventStyle>
        {/* {!this.state.isLoading &&
          this.state.story.map(item => {
            return <StoryCard data={item} />;
          })} */}
        <ActiivitiesCard />
        <ProjectCard> 
          <DefaultCard scroll={true}>
            {this.state.projects.map(project => {
                console.log(project);
                return (
                    <Link href={`/projects/${project.slug}`}>
                      <div>
                        <AwardCard
                          image={project.acf.header_image}
                          title={project.acf.name}
                          text={project.acf.description}
                          url={project.slug}
                        />
                      </div>
                    </Link>
                );
            })}
          </DefaultCard>
        </ProjectCard>
        <WorkWithUsCard />
        <SponsorCard/>
      </Layout>
    );
  }
}

export default Index;
