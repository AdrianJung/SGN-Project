import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

const StyledDiv = styled.div`
background-color: #222;
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
export const TEST_QUERY = gql`
  query GET_POSTS {
    branches {
      edges {
        node {
            slug
            title
        }
      }
    }
  }
`;

const Index = () => (
  <StyledDiv>
      <Query query={TEST_QUERY}>
        {({ data }) => {
          console.log(data.branches.edges.map(item => {
            console.log(item.node.title)
          }))
            return (
              <div>
                {data.branches.edges.map(item => {
                  return <Link href={ `/branches/${ item.node.slug }` }><a href={ `/branches/${ item.node.slug }` }>{ item.node.title }</a></Link>
                })}
              </div>
                );
              }}
      </Query>
  </StyledDiv>
);

export default Index;
