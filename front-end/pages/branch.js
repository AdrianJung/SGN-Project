import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'
import Head from 'next/head'

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
        <BranchStyle>
          <h1>{this.props.slug}</h1>
        </BranchStyle>
      </Layout>
    )
  }
};

export default Branch;
