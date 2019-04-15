import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';

const LoadingContainer = styled.div`
  height:100vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`

const LoadingScreen = (props) =>  {
  return (
    <LoadingContainer>
      <img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg" />
    </LoadingContainer>
  )
}

export default LoadingScreen
