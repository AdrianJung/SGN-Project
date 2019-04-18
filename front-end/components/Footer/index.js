import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Link from "next/link";

const FooterStyle = styled.div`
  height: 400px;
  background: #046da9;
  display: flex;
  justify-content: space-between;
  padding: 95px 135px;
  align-items: center;
  box-sizing: border-box;

  h5 {
    font: ${props => props.theme.fontNavItemsDesktop};
  }

  h5,
  a,
  p {
    color: white;
  }
  p {
    font-size: 14px;
  }
  a {
    font-family: "roboto";
    text-decoration: none;
    color: white;
  }
  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
    height: auto;
    padding: 95px 16px;

    p,
    a {
      margin: 10px 0;
    }

    h5 {
      margin: 0 0 10px 0;
    }
  }
`;

const FooterNavStyle = styled.div`
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    width: 50%;
    height: auto;
    margin-bottom: 75px;

    &:after {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      bottom: -35px;
      opacity: 0.5;
      background: white;
      height: 2px;
    }
  }
`;

const FooterContactStyle = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    width: 50%;
    height: auto;
    margin-bottom: 75px;

    &:after {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      bottom: -35px;
      opacity: 0.5;
      background: white;
      height: 2px;
    }
  }
`;

const FooterBranchesStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    width: 50%;
    height: auto;
  }
`;

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      branches: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8888/wp-json/wp/v2/branches").then(response => {
      // handle success
      // response.data.map(item => {
      //   console.log(item.acf.name)
      // });
      this.setState({ branches: response.data });
    });
  }

  render() {
    return (
      <FooterStyle>
        <FooterNavStyle>
          <h5>NAVIGATION</h5>
          <Link href="">
            <a>Legal terms</a>
          </Link>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
          <Link href="">
            <a>Team</a>
          </Link>
          <Link href="">
            <a>Stories</a>
          </Link>
          <Link href="/events">
            <a>Events</a>
          </Link>
        </FooterNavStyle>
        <FooterContactStyle>
          <h5>CONTACT US</h5>
          <p>Vägenvägen 20</p>
          <p>574 56 Stadeborg</p>
          <p>Sweden</p>
          <p>0707 07 07 07</p>
          <p>info@supportgroup.se</p>
        </FooterContactStyle>
        <FooterBranchesStyle>
          <h5>BRANCHES</h5>
          {this.state.branches.map((item, key) => {
            return (
              <Link
                key={key}
                href={`/branches/${item.slug}?slug=${item.slug}}`}
                as={`/branches/${item.slug}`}
              >
                <a>{item.acf.name}</a>
              </Link>
            );
          })}
        </FooterBranchesStyle>
      </FooterStyle>
    );
  }
}

export default Footer;
