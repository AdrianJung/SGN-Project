import styled from "styled-components";
import Layout from "../components/Layout";
import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import LoadingScreen from "../components/LoadingScreen";
import DefaultCard from "../components/DefaultCard";
import AwardCard from "../components/AwardCard";

const AboutStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .aboutContainer {
    width: 100%;
    padding: 9rem 150px 9rem 150px;
  }

  .flexContainer {
    justify-content: space-between;
    display: flex;
    padding: 0 8rem 8rem 8rem;
    flex-direction: row;
    width: 100%;
  }

  .headerBox {
    width: 70%;
  }

  .contactBox {
    align-self: center;
  }

  img {
    width: 100%;
  }

  .ourMission {
    display: flex;
    justify-content: flex-start;
    background-color: ${props => props.theme.colorTextPrimary};
    margin-bottom: 64px;

    div {
      width: 70%;
      text-align: left;
      height: 23rem;
      color: white;
      padding: 105px;
      font: ${props => props.theme.fontDesktopBodyText};

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

class Branch extends Component {
  // static async getInitialProps({ query }) {
  //   const slug = query.slug;
  //   return { slug };
  // }

  constructor(props) {
    super(props);
    this.state = {
      awards: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/wp-json/wp/v2/awards`).then(response => {
      this.setState({
        awards: response.data
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
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, totam deserunt quo incidunt at vero fugiat tenetur
                  adipisci delectus quos. Obcaecati non pariatur dolore dolorum,
                  quam error recusandae laboriosam. Vel! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Saepe, velit.
                </h4>
              </div>
              <div className="contactBox">
                <p>
                  KONTAKT
                  <br />
                  <br />
                  072 326 42 44
                  <br />
                  <br />
                  info@supportgroup.se
                </p>
              </div>
            </div>
            <img src="https://imgplaceholder.com/1000x400" alt="" />
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
            <DefaultCard scroll={true}>
              {this.state.awards.map(item => {
                console.log(item);
                return (
                  <AwardCard
                    image={item.acf.award_image}
                    title={item.acf.award_title}
                    date={item.acf.award_date}
                    grid
                  />
                );
              })}
            </DefaultCard>
          </div>
        </AboutStyle>
      </Layout>
    );
  }
}

export default Branch;