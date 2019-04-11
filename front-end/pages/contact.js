import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'

const ContactStyle = styled.div`
  display:flex;
  justify-content: center;
  background-color: whitesmoke;
`

const ConstactCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 59vw;
  height: 69.8vh;
  margin-top: 6.9vh;
  margin-bottom: 6.9vh;

  /* div {
    height: 64vh;
    width: 30vw;
    background-color: #FFF;
  } */
`

const ImgStyle = styled.img`
  width: 29vw;
  height: 69.8vh;
  background-color: #E5E5E5;
`

const FormCardStyle = styled.div`
  height: 69.8vh;
  width: 30vw;
  background-color: #FFF;
`

const FormStyle = styled.form`
  height: 59.5vh;
  margin-top: 3vh;
  margin-left: 3vw;
  background-color: white;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    margin-bottom: 0.8vh;
    font-size: 12px;
    font-family: 'roboto';
  }
`

const InputStyle = styled.input`
  width: 24vw;
  height: 3.7vh;
  margin-bottom: 3vh;
`

const InputMessageStyle = styled.input`
  width: 24vw;
  height: 18.5vh;
`

const CheckboxStyle = styled.div`
  width: 20vw;
  height: 1.6vw;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  p {
    margin-top: 0.9vh;
  }
`

const InputCheckboxStyle = styled.input`
  height: 1.4vw;
  width: 1.4vw;
  margin-right: 0.8vw;
`

const InputSubmitStyle = styled.input`
  width: 24vw;
  min-height: 4.5vh;
  margin-bottom: 3.3vh;
  background-color: #005B91;
  color: white;
`

class Contact extends Component {

  render() {
    return (
      <Layout>
        <ContactStyle>
            <ConstactCardStyle>
              <ImgStyle src=""></ImgStyle>
              <FormCardStyle>
                <FormStyle>
                  <label>
                    <p>Name</p>
                    <InputStyle type="text" name="name" />
                  </label>
                  <label>
                    <p>E-mail</p>
                    <InputStyle type="email" name="email" />
                  </label>
                  <label>
                    <p>Message</p>
                    <InputMessageStyle type="text" name="message" />
                  </label>
                  <CheckboxStyle>
                    <InputCheckboxStyle type="checkbox"></InputCheckboxStyle>
                    <p>I agree to the terms and conditions</p>
                  </CheckboxStyle>
                  <InputSubmitStyle type="submit" value="Send message" />
                  <p>Would you rather give us a call?</p>
                  <p>072 326 42 44</p>
                </FormStyle>
              </FormCardStyle>
            </ConstactCardStyle>
        </ContactStyle>
      </Layout>
    )
  }
};

export default Contact;