import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  clip-path: polygon(0 0, 100% 6vw, 100% 100%, 0 100%);
  height: 20vh;
  background: linear-gradient(180deg, #37319b, #711bce);
  color: white;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2021, All rights reserved. Generated with Gatsby</p>
    </StyledFooter>
  )
}

export default Footer
