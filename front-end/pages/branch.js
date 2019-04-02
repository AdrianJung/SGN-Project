import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: #222;
height: 100vh;
width: 100vw;
p {
  color: #999;
  font-size: 25px;
}
`
export const TEST_QUERY = gql`
  query GET_POSTS {
    branches {
      edges {
        node {
            title
        }
      }
    }
  }
`;

const Branch = () => (
  <StyledDiv>
      <Query query={TEST_QUERY}>
        {({ data }) => {
          console.log(data.branches.edges.map(item => {
            console.log(item.node.title)
          }))
            return (
              <div>
                {data.branches.edges.map(item => {
                  return <p>{item.node.title}</p>
                })}
              </div>
                );
              }}
      </Query>
  </StyledDiv>
);

export default Branch;
