import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link';

const BranchStyle = styled.div`
`
const Hero = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  height:100vh;
  width:100vw;
  padding-right:150px;
  box-sizing:border-box;

  button {
    z-index:3;
    margin-right:20px;
  }

  h1 {
    font-family: sans-serif;
    z-index:3;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: normal;
    letter-spacing: 0.03em;
  }

  img {
    width:100vw;
    height:100vh;
    position:absolute;
  }

  section {
    z-index:3;
    margin-left:150px;
  }

  div {
    width:100vw;
    height:100vh;
    position:absolute;
    opacity:0.5;
    z-index:2;
    background:black;
  }

  .white {
    background:white;
    border-radius:4px;
    color:black;
    border:none;
    padding:15px 20px;
    font-size:14px;
  }

  .black {
    background:none;
    border:solid white 2px;
    border-radius:4px;
    color:white;
    padding:13px 24px;
    font-size:14px;
  }

  @media screen and (max-width: 992px) {

    justify-content:flex-start;

    div {
      position:static;
      height:60vh;
    }

    img {
      height:60vh;
    }

    section {
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      padding: 60px 16px;
      box-sizing:border-box;
      width:100vw;
      margin:0;
      height:40vh;
      background:#005874;
    }

    h1 {
      margin:0 0 10px 0;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: normal;
      letter-spacing: 0.03em;
    }
  }
`


class Branch extends Component {

  static async getInitialProps({ query }) {
    console.log('SLUG', query.slug);
    console.log("AAAAHHHH!!")
    const slug = query.slug;
    return { slug };
  }

  constructor(props){
    super(props);
    this.state={
      branch: {},
      isLoading: true
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/wp-json/wp/v2/branches?search=${this.props.slug}`)
    .then((response) => {
      // handle success
      console.log(response.data);
      if(response.data.length == 1){
        this.setState({
          branch: response.data[0],
          isLoading: false
        })
      }
    })
  }

  render() {
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
        {!this.state.isLoading &&
        <BranchStyle>


          <Hero>
            {/*<h1>We have to think of a headline with this length.</h1>
            <section>
              <Link href="/events"><button className="white">Upcoming Events</button></Link>
              <Link href="/contact"><button className="black">Contact Us</button></Link>
            </section>*/}

            <div></div>
            <img src={this.state.branch.acf.header_image} />
            <section>
              <h1>We have to think of a headline with this length.</h1>
              <article>
                <Link href="/events"><button className="white">Upcoming Events</button></Link>
                <Link href="/contact"><button className="black">Contact Us</button></Link>
              </article>
            </section>
          </Hero>

        </BranchStyle>}
      </Layout>
    )
  }
};

export default Branch;
