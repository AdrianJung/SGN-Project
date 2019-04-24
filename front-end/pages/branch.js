import styled from "styled-components";
import Layout from "../components/Layout/";
import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";

import ActivityCard from "../components/ActivityCard/";
import MailForm from "../components/MailForm/";
import CategoryItem from "../components/CategoryItem/";
import LoadingScreen from "../components/LoadingScreen/";
import Mapcard from "../components/MapCard/";

const BranchStyle = styled.div``;
const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding-right: 150px;
  box-sizing: border-box;

  button {
    z-index: 3;
    margin-right: 20px;
    cursor: pointer;
  }

  h1 {
    font-family: sans-serif;
    z-index: 3;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: normal;
    letter-spacing: 0.03em;
    margin-bottom: 16px;
  }

  h2 {
    color: black;
  }

  img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    object-fit: cover;
  }

  section {
    z-index: 3;
    margin-left: 150px;
  }

  article {
    margin: 25px 0 0 0;
  }

  div {
    width: 100vw;
    height: 100vh;
    position: absolute;
    opacity: 0.5;
    z-index: 2;
    background: black;
  }

  .white {
    background: white;
    border-radius: 4px;
    color: black;
    border: none;
    padding: 15px 20px;
    font-size: 14px;
  }

  .black {
    background: none;
    border: solid white 2px;
    border-radius: 4px;
    color: white;
    padding: 13px 24px;
    font-size: 14px;
  }

  @media screen and (max-width: 992px) {
    justify-content: flex-end;

    button {
      margin-top: 16px;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 60px 16px;
      box-sizing: border-box;
      width: 100vw;
      margin: 0;
      height: auto;
    }

    h1 {
      margin: 0 0 10px 0;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: normal;
      letter-spacing: 0.03em;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 150px;

  label {
    color: black;
  }

  @media screen and (max-width: 992px) {
    padding: 0;
  }
`;

const Card = styled.div`
  margin: 64px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 420px;
  background: white;
  padding: 0 100px;
  box-sizing: border-box;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

  h1 {
    font-family: Libre Franklin;
    color: #046da9;
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: normal;
    text-align: center;
    letter-spacing: 0.02em;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.03em;
    margin: 10px 0;
    color: #898989;
  }

  button {
    background: #046da9;
    border-radius: 4px;
    color: white;
    border: none;
    padding: 15px 20px;
    margin: 10px 0;
    font-size: 14px;
  }

  @media screen and (max-width: 992px) {
    padding: 0 16px;
    margin: 0;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: normal;
      letter-spacing: 0.02em;
      color: #046da9;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.03em;
    }
  }
`;

const Banner = styled.div`
  margin: 32px -150px 0 -150px;
  width: 100vw;
  height: 420px;
  background: #046da9;
  padding: 0 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-family: Libre Franklin;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 50px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin: 10px 0;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    margin: 10px 0;
    width:70%;
  }

  button {
    background: white;
    border-radius: 4px;
    color: #046da9;
    border: none;
    padding: 15px 20px;
    margin: 10px 0;
    font-size: 14px;
  }

  @media screen and (max-width: 992px) {
    padding: 0 16px;
    height: 330px;
    margin: 0 0 64px 0;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: normal;
      letter-spacing: 0.02em;
      color: #ffffff;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.03em;
      text-align: left;
    }
  }
`;

const ActivityHeader = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: normal;
  letter-spacing: 0.02em;
  color: #046da9;
  margin: 72px 16px 0 16px;
`;

const EventBanner = styled.div`
  margin: 64px 0 0 0;
  width: 100%;
  height: 420px;
  background: white;
  padding: 0 150px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 992px) {
    margin: 32px 0;
    padding: 0 16px;
    overflow-y: scroll;
  }
`;

const NotFound = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
`;

const FullWidth = styled.div`
  width: 100vw;
  margin: 0 -150px;
`;

const ActivitiesContainer = styled.div`
  margin: 64px 0 0 0;
`;

class Branch extends Component {
  static async getInitialProps({ query }) {
    const slug = query.slug;
    return { slug };
  }

  constructor(props) {
    super(props);
    this.state = {
      branch: {},
      isLoading: true,
      notFound: false,
      activities: [],
      funthings: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:8888/wp-json/wp/v2/branches?search=${this.props.slug}`
      )
      .then(response => {
        if (response.data.length == 1) {
          this.setState({
            branch: response.data[0],
            funthings: response.data[0].acf.activity
              ? response.data[0].acf.activity
              : [],
            isLoading: false
          });
        } else {
          this.setState({
            isLoading: false,
            notFound: true
          });
        }
      });

    axios
      .get(
        `http://localhost:8888/wp-json/activities/search?branch=${
          this.props.slug
        }`
      )
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            activities: response.data
          });
        }
      });
  }

  render() {
    return (
      <Layout
        title={
          !this.state.isLoading &&
          (!this.state.notFound ? this.state.branch.acf.name : "Välj Stad")
        }
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #eeeeee;
            font-family: sans-serif;
            color: white;
          }
        `}</style>

        {this.state.isLoading && <LoadingScreen />}

        {this.state.notFound && <NotFound><h3>Branch {`"${this.props.slug}"`} not found.</h3></NotFound>}

        {!this.state.isLoading && ( !this.state.notFound &&
        <BranchStyle>


          <Hero>
            <div></div>
            <img src={this.state.branch.acf.header_image} />
            <section>
              <h1>{this.state.branch.acf.name}. We have to think of a headline with this length.</h1>
              <article>
                <Link href="/events"><button className="white">Upcoming Events</button></Link>
                <Link href="/contact"><button className="black">Contact Us</button></Link>
              </article>
            </section>
          </Hero>

          <ContentWrapper>

            <Card>
              <h1>Do you want to contribute?</h1>
              <p>If you have locals or space that match the capacity for our activities, we would love to have your assistance. We also take donations.</p>
              <Link href="/contribute"><button>Read More</button></Link>
            </Card>

            <ActivitiesContainer>
              {this.state.activities.length > 0 && this.state.activities.map(activity => <ActivityCard data={activity} />)}
            </ActivitiesContainer>

            <Banner>
              <h1>Do you want to participate?</h1>
              <p>We strongly believe that any skills can be of assistance. If you have locals or space that match the capacity for our activities, we would love to have your assistance. We also take donations.</p>
              <Link href="/contribute"><button>Read More</button></Link>
            </Banner>

            {this.state.funthings.length > 0 &&
              <EventBanner>
                {this.state.funthings.length > 0 && this.state.funthings.map(funthing => <CategoryItem data={funthing} />)}
              </EventBanner>}

            <MailForm />






          </ContentWrapper>

          <Mapcard location={this.state.branch.acf.location}/>

        </BranchStyle>)}
      </Layout>
    );
  }
}

export default Branch;
