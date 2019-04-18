import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import Menubutton from "../Menubutton/";
import Branchbutton from "../Branchbutton/";

/* font: ${({ theme }) => theme.fontMobileH1}; */
const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  height: 53px;
  padding: 0 16px 0 0;
  ${props =>
    props.primary
      ? `background-color: ${props.theme.colorPrimary}`
      : `background-color: ${props.theme.colorLightGrey}`};
  background: #ffffff;
  font-size: 1rem;
  z-index: 5;

  @media screen and (max-width: 992px) {
    background-color: #046da9;
    height: 84px;
    padding: 0 16px;
  }

  a {
    text-decoration: none;
  }
`;

const NavStyle = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    color: black;
    padding: 0 30px;
    margin: 0px;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const NoDesktop = styled.div`
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const BranchMenu = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const BranchNav = styled.div`
  padding: 50px 0 0 0;
  box-sizing: border-box;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  p {
    display: flex;
    align-items: center;
    border: black solid 1px;
    padding: 0 5px;
    height: 40px;
    font-family: sans-serif;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateX(-2%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes shrink {
    0% {
      width: 95%;
    }
    100% {
      width: 90%;
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      branchOpen: false
    };

    this.handleBranchClick = this.handleBranchClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen };
    });
  }

  handleBranchClick() {
    this.setState(prevState => {
      return { branchOpen: !prevState.branchOpen };
    });
  }

  render() {
    return (
      <HeaderStyle>
        <NoDesktop>
          <p>Logo</p>
        </NoDesktop>

        <Branchbutton title={this.props.title} />

        <NavStyle primary>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
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
          <Link href="/signup">
            <a>Become a member</a>
          </Link>
        </NavStyle>
        <NoDesktop>
          <Menubutton />
        </NoDesktop>
      </HeaderStyle>
    );
  }
}

export default Header;
