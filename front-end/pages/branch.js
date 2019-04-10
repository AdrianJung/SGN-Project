import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'
import Head from 'next/head'
import axios from 'axios'
const BranchStyle = styled.div`
display:flex;
justify-content:flex-end;

h1 {
  font-family: sans-serif;
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
          <img src={this.state.branch.acf.header_image} />
          <h1>{this.props.slug}</h1>
        </BranchStyle>}
      </Layout>
    )
  }
};

export default Branch;
