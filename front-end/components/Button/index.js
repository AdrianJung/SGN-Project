import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const StyledDiv = styled.div`
height: 50px;
width: 50px;
background-color: hotpink;
`
const index = () => {
  return (
    <StyledDiv>

    </StyledDiv>
  )
}

export default index
