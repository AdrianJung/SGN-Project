import styled from "styled-components";
import Layout from "../components/Layout";
import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import Article from "../components/Article";
import LoadingScreen from "../components/LoadingScreen";

const AboutStyle = styled.div`
  * {
    border: 1px solid black;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  .aboutContainer {
    width: 80vw;
    padding: 9rem 0 9rem 0;
    margin-top: 5rem;
    border: 1px solid black;
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
`;

class Branch extends Component {
  // static async getInitialProps({ query }) {
  //   const slug = query.slug;
  //   return { slug };
  // }

  constructor(props) {
    super(props);
    this.state = {
      about: {},
      isLoading: true
    };
  }

  // componentDidMount() {
  //   axios
  //     .get(
  //       `http://localhost:8888/wp-json/wp/v2/stories?search=${this.props.slug}`
  //     )
  //     .then(response => {
  //       // handle success

  //       if (response.data.length == 1) {
  //         this.setState({
  //           story: response.data,
  //           isLoading: false
  //         });
  //       }
  //     });
  // }

  render() {
    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        {!this.state.isLoading && <LoadingScreen />}

        {this.state.isLoading && (
          <AboutStyle>
            <div className="aboutContainer">
              <div className="flexContainer">
                <div className="headerBox">
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, totam deserunt quo incidunt at vero fugiat tenetur
                    adipisci delectus quos. Obcaecati non pariatur dolore
                    dolorum, quam error recusandae laboriosam. Vel! Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Saepe, velit.
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
            </div>
          </AboutStyle>
        )}
      </Layout>
    );
  }
}

export default Branch;
