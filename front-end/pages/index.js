import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head'

import Layout from '../components/Layout/'

const StyledDiv = styled.div`
width: 100vw;

body {
  margin:0;
}

p {
  color: #999;
  font-size: 25px;
}
a {
  color:white;
  margin:20px;
}
`

const Index = () => (
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
    <StyledDiv>

    </StyledDiv>
  </Layout>
);

export default Index;
