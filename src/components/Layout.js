import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const LayoutContainer = styled.div`
  height: 172vh;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
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
