import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components';
import Theme from '../Styles/Theme';
class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
          <ThemeProvider theme={Theme}>

            <Component {...pageProps }>
            </Component>

          </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
