import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import "../styles/global.css"

const LayoutContainer = styled.div`
  height: 172vh;
`

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
  body {
    margin: 0;
  }
  * {                  
  font-family: 'Roboto';             
  }`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
