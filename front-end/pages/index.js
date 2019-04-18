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
import LoadingScreen from "../components/LoadingScreen";
import Slider from "react-slick";
import SlideButtonLeft from "../components/SlideButtonLeft";
import SlideButtonRight from "../components/SlidebuttonRight";
import DefaultCard from "../components/DefaultCard/";
import AwardCard from "../components/AwardCard/";

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
`;

const ProjectCard = styled.div`
  padding-left: 0;
  padding-right: 0;

  @media screen and (min-width: 992px) {
    width: 100%;
    padding-left: 150px;
    padding-right: 150px;
  }
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.state = {
      stories: [],
      events: [],
      projects: [],
      isLoading: true
    };
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/wp-json/wp/v2/projects`).then(response => {
      // handle success
      console.log(response.data);
      if (response.data.length > 0) {
        this.setState({
          projects: response.data,
          isLoading: false
        });
      }
    });

    axios
      .get(`http://localhost:8888/wp-json/activities/search`)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            events: response.data.slice(0, 2),
            isLoading: false
          });
        }
      });
    axios.get(`http://localhost:8888/wp-json/wp/v2/stories`).then(response => {
      if (response.data.length > 0) {
        console.log(response.data);
        this.setState({
          stories: response.data,
          isLoading: false
        });
      }
    });
  }

  render() {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Layout>
          {this.state.isLoading && <LoadingScreen />}
          <Head>
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          </Head>
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
          <ActiivitiesCard />
          <div>
            <SlideButtonLeft onClick={this.previous} />
            <SlideButtonRight onClick={this.next} />

            <Slider ref={c => (this.slider = c)} {...settings}>
              {!this.state.isLoading &&
                this.state.stories.map(story => <StoryCard data={story} />)}
            </Slider>
          </div>
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
        </Layout>
      </div>
    );
  }
}

export default Index;
