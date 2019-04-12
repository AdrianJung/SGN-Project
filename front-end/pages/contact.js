import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'

const ContactStyle = styled.div`
  display:flex;
  justify-content: center;
  background-color: #FDFDFD;
`

const ConstactCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw; 
  margin-top: 12.2vh;

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    width: 59vw;
    height: 69.8vh;
    margin-top: 12.5vh;
    margin-bottom: 6.9vh;
  }
`

const ImgStyle = styled.img`
  width: 92vw;
  height: 32vh;
  background-color: #EEE;

  @media screen and (min-width: 992px) {
    width: 29vw;
    height: 69.8vh;
    background-color: #EEE;
  }
`

const FormCardStyle = styled.div`
  height: 90vh;
  width: 92vw;
  margin-top: 2vh;
  background-color: #FDFDFD;

  @media screen and (min-width: 992px) {
  height: 69.8vh;
  width: 30vw;
  background-color: #FDFDFD;
  }
`

const FormStyle = styled.form`
  height: 59.5vh;
  margin-top: 3vh;
  background-color: #FDFDFD;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    margin-bottom: 0.8vh;
    font-size: 14px;
    font-family: 'roboto';
  }

  @media screen and (min-width: 992px) {
    height: 59.5vh;
    margin-top: 3vh;
    margin-left: 3vw;
    background-color: #FDFDFD;
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
      margin-bottom: 0.8vh;
      font-size: 12px;
      font-family: 'roboto';
    }
  }
`

const InputStyle = styled.input`
  width: 91vw;
  height: 6vh;
  margin-bottom: 3vh;
  border: solid 1px lightgray;

  @media screen and (min-width: 992px) {
    width: 24vw;
    height: 3.7vh;
    margin-bottom: 3vh;
  }
`

const InputMessageStyle = styled.textarea`
  width: 91vw;
  height: 25vh;
  border: solid 1px lightgray;
  resize: none;
  font-size: 14px;

  @media screen and (min-width: 992px) {
    width: 24vw;
    height: 18.5vh;
    resize: none;
    font-size: 12px;
  }
`

const CheckboxStyle = styled.div`
  width: 90vw;
  height: 1.6vw;
  margin-top: 4vh;
  margin-bottom: 4vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
    
  p {
    margin-top: 0.9vh;
  }

  @media screen and (min-width: 992px) {
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
  }
`

const InputCheckboxStyle = styled.input`
  height: 7vw;
  width: 7vw;
  margin-right: 4vw;

  @media screen and (min-width: 992px) {
    height: 1.4vw;
    width: 1.4vw;
    margin-right: 0.8vw;
  }
`

const InputSubmitStyle = styled.input`
  width: 93vw;
  min-height: 7vh;
  margin-bottom: 6vh;
  background-color: #005B91;
  color: white;
  border-radius: 5px;
  font-size: 14px;

  @media screen and (min-width: 992px) {
    width: 24.5vw;
    min-height: 4.5vh;
    margin-bottom: 3.3vh;
    background-color: #005B91;
    color: white;
    font-size: 12px;
  }
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
                    <InputMessageStyle type="text" name="message"></InputMessageStyle>
                    {/* <InputMessageStyle type="text" name="message" /> */}
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