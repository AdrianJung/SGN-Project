import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

import Layout from '../components/Layout/'

const StyledDiv = styled.div`
background-color: #faebd7;
height: 100vh;
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
    <StyledDiv>

    </StyledDiv>
  </Layout>
);

export default Index;
