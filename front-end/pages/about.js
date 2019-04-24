import styled from "styled-components";
import Layout from "../components/Layout";
import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import LoadingScreen from "../components/LoadingScreen";
import DefaultCard from "../components/DefaultCard";
import AwardCard from "../components/AwardCard";
import ScrollBox from "../components/ScrollBox";

const AboutStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  .paragraph {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: rgba(0, 0, 0, 0.6);

    @media screen and (max-width: 992px) {
      width:100%;
    }
  }

  .aboutContainer {
    height: 100%;
    width: 100%;
    padding: 9rem 9rem 0 9rem;
    @media screen and (max-width: 992px) {
      margin: 100px 0px 100px 0px;
      padding: 0;
    }
  }

  .flexContainer {
    justify-content: space-between;
    display: flex;
    padding: 5rem 8rem 8rem 8rem;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 992px) {
      flex-direction: column;
      padding: 0px 40px;
    }
  }

  .headerBox {
    max-width: 70%;
    min-width: 50%;
    img {
      height: 65px;
      margin-bottom: 20px;
    }
    h3 {
      padding-bottom: 10px;
    }

    h4 {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.03em;
      color: #747474;
    }

    @media screen and (max-width: 992px) {
      min-width: 100%;
      padding: 30px 0 0 0;
    }

  }
  .greyParagraph {
    color: #747474;
  }

  .contactBox {
    align-self: center;
    @media screen and (max-width: 992px) {
      align-self: flex-start;
      padding: 30px 0;
    }

    h2 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 23px;
      letter-spacing: 0.03em;
      color: #000000;
    }

    p {
      line-height: 2;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: normal;
      letter-spacing: 0.02em;
      color: #000000;
      opacity: 0.5;
      margin:15px 0;
    }
  }

  .headerImage {
    position: relative;
    top: 5px;
    width: 100vw;
    margin: 0 -9rem;
    object-fit: cover;
    object-position: 50% 50%;
    height: 395px;

    @media screen and (max-width: 992px) {
      min-height: 400px;
      margin: 0;
    }
  }

  .ourMission {
    display: flex;
    justify-content: flex-start;
    align-items:center;
    padding:0 0 0 150px;
    background-color: ${props => props.theme.colorTextPrimary};
    margin-bottom: 64px;
    width: 100vw;
    margin: 64px -9rem 0 -9rem;

    h2 {
      font-family: Libre Franklin;
      font-style: normal;
      font-weight: 600;
      font-size: 42px;
      line-height: normal;
      letter-spacing: 0.02em;
      color: #ffffff;
      margin-bottom:10px;
    }

    p {
      width:80%;
      min-width:400px;
    }

    div {
      display:flex;
      justify-content:center;
      flex-direction:column;
    }

    @media screen and (max-width: 992px) {
      justify-content: center;
      padding:0;
      align-items: center;
      margin: 0;
    }
    div {
      width: 70%;
      text-align: left;
      height: 23rem;
      color: white;
      font: ${props => props.theme.fontDesktopBodyText};

      @media screen and (max-width: 992px) {
        height: auto;
        flex-direction: column;
        width: 100%;
        padding: 80px 30px;

        h2 {
          font-family: Libre Franklin;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: normal;
          letter-spacing: 0.02em;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }

        p {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 23px;
          letter-spacing: 0.03em;
          color: #FFFFFF;
          min-width:0;
        }
      }

    }
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
`;

const CardContainer = styled.div`
  height:100%;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
  margin: 0 20px 0 0;
`;

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      awards: [],
      employees: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/wp-json/wp/v2/awards`).then(response => {
      this.setState({
        awards: response.data
      });
    });
    axios
      .get(`http://localhost:8888/wp-json/wp/v2/employees`)
      .then(response => {
        this.setState({
          employees: response.data
        });
      });
  }

  render() {
    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>

        <AboutStyle>
          <div className="aboutContainer">
            <div className="flexContainer">
              <div className="headerBox">
                <img src="https://i.imgur.com/kHML8dw.png" />
                <h4>
                  Support Group Network is a NGO initiated by refugees and locals to improve integration for immigrats whom SGN provides psychosocial support by arranging activities and projects aiming to enhance their future in Europe or home countries if they go back.
                </h4>
              </div>
              <div className="contactBox">
                <h2 className="contact">KONTAKT</h2>
                <p>
                  072 326 42 44
                </p>
                <p>
                  info@supportgroup.se
                </p>
              </div>
            </div>
            <img
              className="headerImage"
              src="http://localhost:8888/uploads/2019/03/all-support.jpg"
              alt=""
            />
            <div className="ourMission">
              <div>
                <h2>Our mission</h2>
                <p>
                  Our mission is to empower refugees during the asylum seeking process, in order to maintain their motivation and aspirations.
                </p>
              </div>
            </div>
            <DefaultCard isColumn={true}>
              <h3>Active members in society</h3>
              <p className="paragraph">
                We work to promote understanding of the norms of society in order to contribute to integration, inclusion, and coexistence for kids, youth, Adults and families, in a way that takes care of their competence and give them the tools to become active members in the society.
              </p>
              <Link href="/contact">
                <button>Contact Us</button>
              </Link>
            </DefaultCard>
            <ScrollBox header="Awards">
              {this.state.awards.map(item => {
                return (
                  <a style={{height:'100%'}} target="blank" href={item.acf.award_url}>
                    <CardContainer>
                      <AwardCard
                        image={item.acf.award_image}
                        title={item.acf.award_title}
                        text={item.acf.award_date}
                        isProject={true}
                      />
                    </CardContainer>
                  </a>
                );
              })}
            </ScrollBox>
            <ScrollBox header="Employees">
              {this.state.employees.map(item => {
                return (
                  <CardContainer>
                    <AwardCard
                      image={item.acf.image}
                      title={item.acf.name}
                      text={item.acf.phone_number}
                      secondText={item.acf.email}
                    />
                  </CardContainer>
                );
              })}
            </ScrollBox>
          </div>
        </AboutStyle>
      </Layout>
    );
  }
}

export default About;
