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
    text-decoration:none;
  }

  .aboutContainer {
    height: 100%;
    width: 100%;
    padding: 9rem 9rem;
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
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }
    h3 {
      padding-bottom: 10px;
    }
    @media screen and (max-width: 992px) {
      min-width: 100%;
      padding: 30px 0 0 0;
    }
  }

  .contactBox {
    align-self: center;
    @media screen and (max-width: 992px) {
      align-self: flex-start;
      padding: 30px 0;
    }

    .contact {
      font-size: 15px;
      font-weight: bold;
    }
    p {
      line-height: 2;
    }
  }

  .headerImage {
    position: relative;
    top: 5px;
    width: 100vw;
    margin:0 -9rem;
    object-fit: cover;
    object-position: 50% 50%;
    height: 100%;

    @media screen and (max-width: 992px) {
      min-height: 400px;
      margin:0;
    }
  }

  .ourMission {
    display: flex;
    justify-content: flex-start;
    background-color: ${props => props.theme.colorTextPrimary};
    margin-bottom: 64px;
    width:100vw;
    margin:64px -9rem 0 -9rem;

    @media screen and (max-width: 992px) {
      justify-content: center;
      align-items: center;
      margin:0;
    }
    div {
      width: 70%;
      text-align: left;
      height: 23rem;
      color: white;
      padding: 105px;
      font: ${props => props.theme.fontDesktopBodyText};

      @media screen and (max-width: 992px) {
        height: auto;
        flex-direction: row;
        width: 100%;
        padding: 80px 30px;
      }

      h2 {
        margin-bottom: 1rem;
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
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    margin:0 20px 0 0;
`

class Branch extends Component {
  // static async getInitialProps({ query }) {
  //   const slug = query.slug;
  //   return { slug };
  // }

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
    console.log(this.state.awards);
    console.log(typeof this.state.awards);
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
                <img src="https://svgshare.com/i/CXg.svg" />
                <h3>Support Group Network</h3>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, totam deserunt quo incidunt at vero fugiat tenetur
                  adipisci delectus quos. Obcaecati non pariatur dolore dolorum,
                  quam error recusandae laboriosam. Vel! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Saepe, velit.
                </h4>
              </div>
              <div className="contactBox">
                <p className="contact">KONTAKT</p>
                <p>
                  072 326 42 44 <br />
                  info@supportgroup.se
                </p>
              </div>
            </div>
            <img
              className="headerImage"
              src="https://imgplaceholder.com/1000x400"
              alt=""
            />
            <div className="ourMission">
              <div>
                <h2>Our Mission</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam nobis sint asperiores autem obcaecati cumque nam
                  magnam dolor aut provident. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Tenetur, libero.
                </p>
              </div>
            </div>
            <DefaultCard isColumn={true}>
              <h3>Arbetsområden</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                optio vel vero corporis animi incidunt, voluptatibus eaque magni
                eligendi at amet explicabo voluptate dicta nisi impedit
                distinctio dolorum nostrum laboriosam repellendus voluptatem,
                dolore eius omnis. Repellendus necessitatibus obcaecati expedita
                vero?
              </p>
              <Link href="/contact">
                <button>Contact Us</button>
              </Link>
            </DefaultCard>
            <ScrollBox header="Awards">
              {this.state.awards.map(item => {
                return (
                  <a target="blank" href={item.acf.award_url}>
                    <CardContainer>
                      <AwardCard
                        image={item.acf.award_image}
                        title={item.acf.award_title}
                        text={item.acf.award_date}
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

export default Branch;
