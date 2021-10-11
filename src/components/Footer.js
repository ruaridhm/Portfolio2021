import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  clip-path: polygon(0 0, 100% 6vw, 100% 100%, 0 100%);
  height: 25vh;
  min-height: 150px;
  background: linear-gradient(
    180deg,
    var(--clr-mainColor),
    var(--clr-secondaryColor)
  );
  color: var(--clr-white);
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  top: -12vw;
`
const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 70%;
`
const Copyright = styled.p`
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Copyright>
          © 2021, All rights reserved. Generated with Gatsby
        </Copyright>
      </FooterContent>
    </StyledFooter>
  )
}

export default Footer
