import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';

const FooterStyle = styled.div`
  height: 41.9vh;
  display: flex;

  h5 {
    font-family: 'roboto';
  }

  a {
    font-family: 'roboto';
    text-decoration: none;
  }
`

const FooterNavStyle = styled.div`
  margin: 0;
  margin-top: 9.9vh;
  display: flex;
  flex-direction: column;
`

const FooterContactStyle = styled.div`
  margin: 0;
  margin-top: 9.9vh;
`

const FooterBranchesStyle = styled.div`
  margin: 0;
  margin-top: 9.9vh;
  display: flex;
  flex-direction: column;
`

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      branches: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/wp-json/wp/v2/branches')
    .then((response) => {
      // handle success
      // response.data.map(item => {
      //   console.log(item.acf.name)
      // });
      this.setState({branches: response.data})
    })
  }

  render() {

    return (
      <FooterStyle>
        <FooterNavStyle>
          <h5>NAVIGATION</h5>
          <Link href=""><a>Legal terms</a></Link>
          <Link href="/contact"><a>Contact us</a></Link>
          <Link href=""><a>Team</a></Link>
          <Link href=""><a>Stories</a></Link>
          <Link href="/events"><a>Events</a></Link>
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
             as={`/branches/${item.slug}`}>
               {item.acf.name}
           </Link>
            )
          })}
        </FooterBranchesStyle>
      </FooterStyle>
    )
  }
}

export default Footer
