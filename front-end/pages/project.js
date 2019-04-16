import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link';

import LoadingScreen from '../components/LoadingScreen/'

const ProjectStyle = styled.div`

  padding: 85px 0 0 0;

  img {
    width:100%;
    height:500px;
    object-fit:cover;
    margin-bottom:64px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #000000;
    margin: 0 0 25px 0;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #046DA9;
    margin: 0 0 25px 0;
  }

  p,h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.5);
  }

  section,article {
    padding:0 16px;
    margin-bottom:64px;
  }

  @media screen and (min-width: 992px) {
    padding: 53px 0 0 0;

    section {
      width:70%;
    }

    section,article {
      padding:0 150px;
    }

    article {
      display:flex;
    }

    h3,h1 {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 31px;
      letter-spacing: 0.03em;
      color: #000000;
    }
  }

}
`

const ParagraphStyle = styled.div`

  @media screen and (min-width: 992px) {
    width:50%;
  }

}
`

class Project extends Component {

  static async getInitialProps({ query }) {
    console.log('SLUG', query.slug);
    console.log("AAAAHHHH!!")
    const slug = query.slug;
    return { slug };
  }

  constructor(props){
    super(props);
    this.state={
      project: {},
      isLoading: true,
    }
  }

  componentDidMount() {
    const url = `http://localhost:8888/wp-json/wp/v2/projects?search=${this.props.slug}`
    axios.get(url)
    .then((response) => {
      // handle success
      console.log(response.data);
      if(response.data.length == 1){
        this.setState({
          project: response.data[0].acf,
          isLoading: false
        })
      }
    })
  }

  render() {
    console.log(this.state.project)
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

        {this.state.isLoading && <LoadingScreen />}

        <ProjectStyle>

          <img src={this.state.project.header_image} />

          <section>
            <h1>{this.state.project.name}</h1>
            <h3>{this.state.project.description}</h3>
          </section>

          <img src={this.state.project.sub_header_image} />

          <article>

          {!this.state.isLoading && this.state.project.content.map(paragraph => (
            <ParagraphStyle>
              <h2>{paragraph.header}</h2>
              <p>{paragraph.text}</p>
            </ParagraphStyle>
          ))}

          </article>

        </ProjectStyle>
      </Layout>
    )
  }
};

export default Project;
