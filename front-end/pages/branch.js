import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'

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
        <BranchStyle>
          <h1>{this.props.slug}</h1>
        </BranchStyle>
      </Layout>
    )
  }
};

export default Branch;
