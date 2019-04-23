import styled from "styled-components";
import Layout from "../components/Layout/";
import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";

const ContributeWrapper = styled.div`
  margin-top: 63px;
  padding: 0 16px;

  @media screen and (max-width: 992px) {
    padding: 0 16px;
    margin-top: 95px;
  }
`;

const ContributeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 60px 120px;
  background: white;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: normal;
    letter-spacing: 0.02em;
    color: #046da9;
  }

  p {
    color: black;
  }

  h1,
  p {
    width: 65%;
    margin: 16px 0;
  }

  section {
    width: 100%;
    display: flex;
  }

  article {
    margin: 16px 32px 0 0;
  }

  article > p {
    margin: 20px 20px 20px 0;
    width: 100%;
  }

  button {
    margin: 16px 0 0 0;
    cursor: pointer;
  }

  .contact {
    background: #046da9;
    border-radius: 4px;
    color: white;
    padding: 13px 75px;
    border: none;
    font-size: 14px;
    margin: 0 16px 0 0;
  }

  .paypal {
    background: #2d9cdb;
    border-radius: 4px;
    color: white;
    border: none;
    padding: 13px 100px;
    font-size: 14px;
  }

  @media screen and (max-width: 992px) {
    padding: 16px;

    button {
      width: 100%;
    }

    h1,
    p {
      width: 100%;
      margin: 0 0 16px 0;
    }

    section {
      flex-wrap: wrap;
      margin: 16px 0 0 0;
    }

    article {
      width: 100%;
      margin: 0;
    }

    article > p {
      margin: 0 20px 20px 0;
      width: 100%;
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: normal;
      letter-spacing: 0.02em;
      color: #046da9;
    }
  }
`;

class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #eeeeee;
            font-family: sans-serif;
            color: white;
          }
        `}</style>
        <ContributeWrapper>
          <ContributeContainer>
            <h1>Want to work with us or contribute to our cause?</h1>
            <p>
              We gladly accept donations in the form of payment, as well as
              helping us out with arranging activities.
            </p>
            <div>
              <Link href="/contact">
                <button className="contact">Contact</button>
              </Link>
              <a target="blank" href="https://paypal.com">
                <button className="paypal">PayPal</button>
              </a>
            </div>
            <section>
              <article>
                <p>Swish: 123 223 37 32</p>
                <p>Bankgiro: 5138–5854</p>
                <p>IBAN: 71041234567</p>
              </article>
              <article>
                <p>Org-nr: 802503–7097</p>
                <p>Support Group Network (SGN)</p>
              </article>
            </section>
          </ContributeContainer>
        </ContributeWrapper>
      </Layout>
    );
  }
}

export default Contribute;
