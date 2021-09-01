import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"
import ThemeContext from "../context/ThemeContext"
import "./layout.css"

const LayoutContainer = styled.div`
  height: 172vh;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  * {                  
  font-family: 'Roboto';             
  }`

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeContext.Consumer>
          {theme => (
            <div className={theme.dark ? "dark" : "light"}>
              <LayoutContainer>
                <GlobalStyle />
                <Navbar />
                {children}
                <Footer />
              </LayoutContainer>
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    />
  )
}

export default Layout
