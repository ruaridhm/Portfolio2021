import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  clip-path: polygon(0 0, 100% 6vw, 100% 100%, 0 100%);
  min-height: 20vh;
  background: linear-gradient(180deg, #37319b, #711bce);
  color: white;
  display: flex;
  padding: 0 6em;
  box-sizing: border-box;
  position: relative;
  top: -12vw;
`
const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <p>© 2021, All rights reserved. Generated with Gatsby</p>
      </FooterContent>
    </StyledFooter>
  )
}

export default Footer
