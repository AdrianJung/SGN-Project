import styled from "styled-components";
import React, { Component } from "react";
import axios from 'axios'

import LoadingScreen from '../LoadingScreen/'

const ConstactCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 69.8vh;
    margin-top: 12.5vh;
    margin-bottom: 6.9vh;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
  }
`;

const ImgStyle = styled.img`
  width: 92vw;
  height: 32vh;
  background-color: #eee;
  object-fit: cover;
  object-position: top;

  @media screen and (min-width: 992px) {
    width: 50%;
    height: 69.8vh;
    background-color: #eee;
  }
`;

const FormCardStyle = styled.div`
  height: auto;
  padding: 20px 0;
  width: 92vw;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 992px) {
    height: 69.8vh;
    width: 50%;
    background-color: #fdfdfd;
  }
`;

const FormStyle = styled.form`
  height: auto;
  background-color: none;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    margin-bottom: 0.8vh;
    font-size: 15px;
    font-family: "roboto";
    color: black;
  }

  @media screen and (min-width: 992px) {
    height: 59.5vh;
    width:100%;
    padding:0 32px;
    background-color: #fdfdfd;
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
      margin-bottom: 0.8vh;
      font-size: 13px;
      font-family: "roboto";
    }
  }
`;

const InputStyle = styled.input`
  width: 91vw;
  height: 6vh;
  margin-bottom: 3vh;
  border: solid 1px lightgray;
  padding: 0 5px;

  @media screen and (min-width: 992px) {
    width: 100%;
    height: 3.7vh;
    margin-bottom: 3vh;
  }
`;

const InputMessageStyle = styled.textarea`
  width: 91vw;
  height: 25vh;
  border: solid 1px lightgray;
  resize: none;
  font-size: 14px;
  padding:5px;

  @media screen and (min-width: 992px) {
    width: 100%;
    height: 18.5vh;
    resize: none;
    font-size: 12px;
  }
`;

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
`;

const InputCheckboxStyle = styled.input`
  height: 7vw;
  width: 7vw;
  margin-right: 4vw;

  @media screen and (min-width: 992px) {
    height: 1.4vw;
    width: 1.4vw;
    margin-right: 0.8vw;
  }
`;

const InputSubmitStyle = styled.button`
  width: 93vw;
  min-height: 7vh;
  margin-bottom: 6vh;
  background-color: #005b91;
  color: white;
  border-radius: 5px;
  font-size: 14px;

  @media screen and (min-width: 992px) {
    width: 100%;
    min-height: 4.5vh;
    margin-bottom: 3.3vh;
    background-color: #005b91;
    color: white;
    font-size: 12px;
  }
`;

class MailForm extends Component {

  constructor() {
      super()
      this.state = {
          name: "",
          email: "",
          message: "",
          isTermsAccepted: false,
          isSubmitting: false,
          isSubmitted: false,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleSubmit(event) {

    event.preventDefault()

    this.setState({
      isSubmitting: true
    })

    if(this.state.isTermsAccepted){
      axios.post('http://localhost:8888/wp-json/messages/post', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
      .then(res => {
        this.setState({
          name: "",
          email: "",
          message: "",
          isTermsAccepted: false,
          isSubmitted: true,
        })
      })
    } else {
      this.setState({
        isSubmitting:false
      })
    }
  }

  render (){
    return (
      <ConstactCardStyle>
        <ImgStyle src="https://lh3.google.com/u/0/d/163rxcYPSDGnT-F2XAk1tD7iiSDid8TOi=w2304-h1642-iv1" />
        <FormCardStyle>
          {this.state.isSubmitting && ( !this.state.isSubmitted && <LoadingScreen />)}
          {this.state.isSubmitted && <img width="48" src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png" />}

          {!this.state.isSubmitted && ( !this.state.isSubmitting &&
          <FormStyle>
            <label>
              <p>Name</p>
              <InputStyle value={this.state.name} onChange={this.handleChange} type="text" name="name" />
            </label>
            <label>
              <p>E-mail</p>
              <InputStyle value={this.state.email} onChange={this.handleChange} type="email" name="email" />
            </label>
            <label>
              <p>Message</p>
              <InputMessageStyle value={this.state.message} onChange={this.handleChange} type="text" name="message" />
            </label>
            <CheckboxStyle>
              <InputCheckboxStyle checked={this.state.isTermsAccepted} name="isTermsAccepted" onChange={this.handleChange} type="checkbox" />
              <p>I agree to the terms and conditions</p>
            </CheckboxStyle>
            <InputSubmitStyle onClick={e => this.handleSubmit(e)}>Send message</InputSubmitStyle>
            <p>Would you rather give us a call?</p>
            <p>072 326 42 44</p>
          </FormStyle>)}
        </FormCardStyle>
      </ConstactCardStyle>
    )
  }
};

export default MailForm;
