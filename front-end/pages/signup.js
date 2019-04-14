import styled from 'styled-components';
import Layout from '../components/Layout/'
import React, { Component } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link';

const SignupWrapper = styled.div`
  margin-top:63px;
  padding:0 16px;

  @media screen and (max-width: 992px) {
    padding:0 16px;
    margin-top:95px;
  }
`

const SignupContainer = styled.div`
  width:100%;
  height:auto;
  padding:60px 120px;
  background:white;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: normal;
    letter-spacing: 0.02em;
    color: #046DA9;
  }

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: rgba(0, 0, 0, 0.66);
    margin:10px 0;
  }

  @media screen and (max-width: 992px) {
    padding: 16px;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: normal;
      letter-spacing: 0.02em;
      color: #046DA9;
    }

    h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.03em;
      color: #000000;
    }
  }
`

const Memberform = styled.form`
  display:flex;
  width:100%;
  height:100%;

  @media screen and (max-width: 992px) {
    flex-direction:column;
  }
`

const Formsection = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:50%;
  align-content:space-between;
  height:750px;
  padding:20px 40px 20px 0;
  box-sizing:border-box;

  @media screen and (max-width: 992px) {
    width:100%;
    padding:0;
    height:auto;
  }
`

const SmallInputSection = styled.div`
  display:flex;
  flex-direction:column;
  width:50%;
  color:black;
  height:50px;
  padding:0 5px;

  @media screen and (max-width: 992px) {
    margin:10px 0;
    width:100%;
  }
`

const InputSection = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  color:black;
  height:auto;

  @media screen and (max-width: 992px) {
    margin:10px 0;
  }
`


const Input = styled.input`
  background:white;
  width:100%;
  height:36px;
  color:black;
  border:1px solid lightgrey;
`

const TextArea = styled.textarea`
  background:white;
  width:100%;
  height:120px;
  color:black;
  border:1px solid lightgrey;
`

const CheckboxStyle = styled.div`
  display:flex;
  color:black;
  align-items:center;

  p {
    margin:0 0 0 15px;
  }

  @media screen and (max-width: 992px) {
    margin:10px 0;
  }
`

const InputCheckboxStyle = styled.input`
  height:26px;
  width:26px;
  border:solid 1px lightgrey;
  border-radius:0;
`

const InputSubmitStyle = styled.input`
  width: 100%;
  height:43px;
  background-color: #005B91;
  color: white;
  border-radius: 5px;
  font-size: 14px;

  @media screen and (max-width: 992px) {
    margin:10px 0;
  }
`

class Signup extends Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      events: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/wp-json/activities/search`)
    .then((response) => {
      // handle success
      console.log(response.data);
      if(response.data.length > 0){
        this.setState({
          events: response.data,
          isLoading: false
        })
      }
    })
  }

  render() {
    console.log(this.state.events)
    return (
      <Layout>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
          body {
            margin:0;
            padding:0;
            background-color:#EEEEEE;
            font-family:sans-serif;
            color:white;
          }
        `}</style>
        <SignupWrapper>
          <SignupContainer>
            <h1>Become a member</h1>
            <h2>Becoming a member text here and stuff you know.</h2>
            <Memberform>
              <Formsection>

                <SmallInputSection>
                  <label>
                  <p>First name</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <SmallInputSection>
                  <label>
                  <p>Last name</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <InputSection>
                  <label>
                  <p>Personal number (YYYY – MM– DD – XXXX)</p>
                  </label>
                  <Input />
                </InputSection>

                <SmallInputSection>
                  <label>
                  <p>Birth Date</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <SmallInputSection>
                  <label>
                  <p>LMA Number</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <SmallInputSection>
                  <label>
                  <p>E-mail</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <SmallInputSection>
                  <label>
                  <p>Phone Number</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <SmallInputSection>
                  <label>
                  <p>Adress</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <SmallInputSection>
                  <label>
                  <p>City</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <SmallInputSection>
                  <label>
                  <p>Post Number</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <SmallInputSection>
                  <label>
                  <p>Nationality</p>
                  </label>
                  <Input />
                </SmallInputSection>

                <InputSection>
                  <label>
                  <p>Arrival in Sweden (YYYY – MM – DD)</p>
                  </label>
                  <Input />
                </InputSection>

              </Formsection>

              <Formsection>

                <InputSection>
                  <label>
                  <p>Education</p>
                  </label>
                  <TextArea />
                </InputSection>

                <InputSection>
                  <label>
                  <p>Work Experience</p>
                  </label>
                  <TextArea />
                </InputSection>

                <InputSection>
                  <label>
                  <p>Languages</p>
                  </label>
                  <Input />
                </InputSection>

                <CheckboxStyle>
                  <InputCheckboxStyle type="checkbox"></InputCheckboxStyle>
                  <p>I agree to the terms and conditions</p>
                </CheckboxStyle>

                <InputSubmitStyle type="submit" value="Sign Up" />

              </Formsection>
            </Memberform>
          </SignupContainer>
        </SignupWrapper>
      </Layout>
    )
  }
};

export default Signup;
