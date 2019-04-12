import React from 'react'
import Header from '../Header/'
import Footer from '../Footer/'
import GlobalStyle from '../../Styles/GlobalStyle'

const Layout = (props) => {
  return (
    <div>
      <Header />
      <GlobalStyle />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout
