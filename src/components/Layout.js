import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }`

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <GlobalStyle />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
