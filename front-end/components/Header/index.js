import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

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

const HeaderStyle = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  position:relative;
  height:50px;

  a {
    font-family: sans-serif;
    margin: 0 10px;
    text-decoration:none;
    color:#0070ba;
  }
`

const NavStyle = styled.div`
  display:flex;
  justify-content:space-evenly;
`
const BranchNav = styled.div`
  padding: 50px 0 0 0;
  box-sizing:border-box;
  height:100vh;
  background-color:white;
  position:fixed;
  top:0;
  left:0;
  display:flex;
  flex-direction:column;

  p {
    display:flex;
    align-items:center;
    border: black solid 1px;
    padding:0 5px;
    height:40px;
    margin: 10px 0;
    font-family: sans-serif;
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <BranchNav>
          <Query query={BRANCH_QUERY}>
            {({ data }) => {
                return (
                  <section>
                    {data.branches.edges.map(item => {
                      return (
                        <Link href={`/branches/${item.node.slug}?slug=${item.node.slug}}`} as={`/branches/${item.node.slug}`}><p>{item.node.title}</p></Link>
                      )
                    })}
                  </section>
                    );
                  }}
          </Query>
        </BranchNav>

        <NavStyle>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/branches">
            <a>Branches</a>
          </Link>
          <Link href="/events">
            <a>Events</a>
          </Link>
          <Link href="/contribute">
            <a>Contribute</a>
          </Link>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
        </NavStyle>
      </HeaderStyle>
    )
  }
}

export default Header
