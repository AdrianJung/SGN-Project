import React from "react";
import Header from "../Header/";
import Footer from "../Footer/";
import GlobalStyle from "../../Styles/GlobalStyle";
import Head from 'next/head'
import Favicon from 'react-favicon';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Support Group Network</title>
      </Head>
      <Favicon url="https://i.imgur.com/07qLFa0.png" />
      <Header title={props.title} />
      <GlobalStyle />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
