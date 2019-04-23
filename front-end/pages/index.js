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
import AwardCard from "../components/AwardCard/";
import ScrollBox from "../components/ScrollBox";
import SponsorCard from "../components/SponsorCard";
import MapCard from "../components/MapCard";

const Wrapper = styled.div`
  padding-left: 0;
  padding-right: 0;

  .slick-dots li {
    top: -50px;
    transform: scale(2);
  }

  .slick-dots > .slick-active > button:before {
    color: #046da9;
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    padding-left: 150px;
    padding-right: 150px;
  }
`;
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

const SliderDiv = styled.div`
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
  margin: 64px 0 0 0;
  width: 100vw;
  overflow: hidden;

  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;

const ProjectContainer = styled.div`
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
  margin: 0 20px 0 0;
  cursor: pointer;
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
      content: {},
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
      if (response.data.length > 0) {
        this.setState({
          projects: response.data
        });
      }

      axios
        .get(`http://localhost:8888/wp-json/activities/search`)
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              events: response.data.slice(0, 2)
            });
          }

          axios
            .get(`http://localhost:8888/wp-json/wp/v2/startpage`)
            .then(response => {
              this.setState({
                content: response.data[0].acf
              });

              axios
                .get(`http://localhost:8888/wp-json/wp/v2/stories`)
                .then(response => {
                  if (response.data.length > 0) {
                    this.setState({
                      stories: response.data,
                      isLoading: false
                    });
                  }
                });
            });
        });
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
          {this.state.isLoading && <LoadingScreen />}
          {!this.state.isLoading && (
            <div>
              <Hero
                imgUrl={this.state.content.header_image}
                text={this.state.content.header_text}
              />

              <Wrapper>
                <WhoAreWeCard image={this.state.content.who_image} />
                <WhatDoWeDoCard image={this.state.content.what_image} />
              </Wrapper>
              <WorkWithUsCard />
              <FacebookCard />
              <Wrapper>
                <VideoCard
                  url={this.state.content.video_url}
                  header={this.state.content.video_header}
                  description={this.state.content.video_description}
                />
              </Wrapper>
              <EventStyle>
                <Wrapper>
                  {!this.state.isLoading &&
                    this.state.events.map(event => (
                      <ActivityCard data={event} />
                    ))}
                </Wrapper>
                <Link href="/events">
                  <button>View All Events</button>
                </Link>
              </EventStyle>
              <Wrapper>
                <SliderDiv>
                  <SlideButtonLeft onClick={this.previous} />
                  <SlideButtonRight onClick={this.next} />
                  <Slider ref={c => (this.slider = c)} {...settings}>
                    {!this.state.isLoading &&
                      this.state.stories.map(story => (
                        <StoryCard data={story} />
                      ))}
                  </Slider>
                </SliderDiv>

                <ActiivitiesCard data={this.state.content.activities} />

                <ScrollBox header="Projects">
                  {this.state.projects.map(project => {
                    return (
                      <Link href={`/projects/${project.slug}`}>
                        <ProjectContainer>
                          {/* div required for Link to work */}
                          <AwardCard
                            image={project.acf.header_image}
                            title={project.acf.name}
                            text={project.acf.description}
                            url={project.slug}
                          />
                        </ProjectContainer>
                      </Link>
                    );
                  })}
                </ScrollBox>
              </Wrapper>

              <WorkWithUsCard />
              <SponsorCard data={this.state.content.sponsors} />
              <MapCard location={this.state.content.location} />
            </div>
          )}
        </Layout>
      </div>
    );
  }
}

export default Index;
