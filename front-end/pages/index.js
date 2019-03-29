import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: beige;
height: 100vh;
width: 100vw;
p {
  color: goldenrod;
  font-size: 25px;
}
`
export const TEST_QUERY = gql`
  query GET_POSTS {
    activities {
      edges {
        node {
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
          console.log(data.activities.edges.map(item => {
            console.log(item.node.title)
          }))
            return (
              <div>
                {data.activities.edges.map(item => {
                  return <p>{item.node.title}</p>
                })}
              </div>
                );
              }}
      </Query>
  </StyledDiv>
);

export default Index;