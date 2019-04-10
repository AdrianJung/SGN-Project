import React from 'react'
import Link from 'next/link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

export const BRANCH_QUERY = gql`
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

const ContainerDiv = styled.div`
  display:flex;
  align-items: center;
  cursor:pointer;
  @media screen and (min-width: 992px) {
    background-color:#005874;
    width:237px;
    justify-content:space-evenly;
    height:54px;
  }

`

const MenuDiv = styled.div`
  transition: all 0.2s ease;
  width: 100%;
  position: fixed;
  left:0;
  top:0;
  overflow-y:scroll;
  display:flex;
  padding:85px 0 0 0;
  flex-direction:column;
  z-index:-1;
  height:100vh;

  @media screen and (min-width: 992px) {
    padding:54px 0 0 0;
    width:236px;
    height:100vh;
    background-color:rgba(224, 224, 224, 0.98);
    position:fixed;
  }
`

const BranchesDiv = styled.div`
  display:flex;
  flex-direction:column;
  overflow:hidden;
`

const BranchLink = styled.a`
  width:100%;
  margin:0;
  height:63px;
  color:black;
  display:flex;
  align-items:center;
  padding:0 0 0 25px;
  cursor:pointer;

  img {
    margin:0 15px 0 0;
  }
`

const NoMobile = styled.div`
  @media screen and (max-width: 992px) {
    display:none;
  }
`

/* MenuButton.jsx */
class BranchButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  handleClick(){
  this.setState({open:!this.state.open});
  }

  render () {
    const styles = {
      menu: {
        height:this.state.open ? "100vh" : "0",
        maxHeight:this.state.open ? "1100px" : "0",
      }
    }

    return (
      <div>
        <ContainerDiv onClick={this.props.onClick ? this.props.onClick:
            ()=> {this.handleClick();}}>
            <p>Välj Stad</p>
            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7.5 7L14 0.999998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </ContainerDiv>

        <MenuDiv style={{...styles.menu}}>
        <Query query={BRANCH_QUERY}>
          {({ data }) => {
              return (
                <BranchesDiv>
                  <NoMobile>
                    <Link href={`/`}><BranchLink>
                      <img height="16" width="16" src="https://image.flaticon.com/icons/svg/25/25694.svg" />
                      Startsida
                      </BranchLink></Link>
                  </NoMobile>
                  {data.branches.edges.map((item, key) => {
                    return (
                      <Link
                        key={key}
                        href={`/branches/${item.node.slug}?slug=${item.node.slug}}`}
                        as={`/branches/${item.node.slug}`}>

                        <BranchLink
                          style={{...{backgroundColor: key % 2 == 0 ? 'rgba(238, 238, 238, 0.97)' : 'rgba(224, 224, 224, 0.98)'}}}>
                          <img height="16" width="16" src="https://image.flaticon.com/icons/svg/447/447031.svg" />
                          {item.node.title}
                        </BranchLink>
                      </Link>
                    )
                  })}
                  <BranchLink href="https://instagram.com">Instagram</BranchLink>
                  <BranchLink href="https://facebook.com">Facebook</BranchLink>
                  <Link href='/contact'><BranchLink>Contact us</BranchLink></Link>
                </BranchesDiv>
                  );
                }}
        </Query>
        </MenuDiv>
      </div>
    )

  }
}

export default BranchButton