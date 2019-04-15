import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'
import MailForm from '../components/MailForm/';

const ContactStyle = styled.div`
  display:flex;
  justify-content: center;
  background-color: #FDFDFD;
  margin-top: 1vh;
  padding:92px 120px 0 120px;

  @media screen and (min-width: 992px) {
    padding:0 120px;
  }
`

class Contact extends Component {

  render() {
    return (
      <Layout>
        <ContactStyle>
          <MailForm/>
        </ContactStyle>
      </Layout>
    )
  }
};

export default Contact;
