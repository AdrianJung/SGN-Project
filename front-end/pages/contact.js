import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'
import MailForm from '../components/MailForm/';

const ContactStyle = styled.div`
  display:flex;
  justify-content: center;
  background-color: #FDFDFD;
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