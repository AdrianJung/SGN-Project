import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
      response.data.map(item => {
        console.log(item.acf.name)
      });
      this.setState({branches: response.data})
    })
  }

  render() {
    return (
      <FooterStyle>
        <FooterNavStyle>
          <h5>NAVIGATION</h5>
          <a href="">Legal terms</a>
          <a href="/contact">Contact us</a>
          <a href="">Team</a>
          <a href="">Stories</a>
          <a href="/events">Events</a>
        </FooterNavStyle>
        <FooterContactStyle>
          <h5>CONTACT US</h5>
        </FooterContactStyle>
        <FooterBranchesStyle>
          <h5>BRANCHES</h5>
        </FooterBranchesStyle>
      </FooterStyle>
    )
  }
}

export default Footer

