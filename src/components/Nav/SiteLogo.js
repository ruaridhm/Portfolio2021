import React from "react"
import styled from "styled-components"

const StyledSiteLogo = styled.a`
  margin: 1em;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 5px solid var(--clr-black);
  max-height: 46.5px;
  max-width: 46.5px;
  min-height: 46.5px;
  min-width: 46.5px;
  transform: rotate(0deg);
  transition: transform 0.4s ease-in-out;

  &:hover {
    ${({ hover }) => hover && "transform: rotate(90deg)"};
    ${({ hover }) => hover && "transition: transform 0.4s ease-in-out"};
  }
`
const LogoText = styled.span`
  color: var(--clr-white);
  text-decoration: none;
`

const HoverLogoText = styled.span`
  color: var(--clr-white);
  text-decoration: none;
  transform: rotate(0deg);
  transition: transform 0.4s ease-in-out;
  ${StyledSiteLogo}:hover & {
    transform: rotate(-90deg);
    transition: transform 0.4s ease-in-out;
  }
`

const SiteLogo = ({ hover }) => {
  return (
    <StyledSiteLogo href="/" hover={hover}>
      {hover ? <HoverLogoText>RM</HoverLogoText> : <LogoText>RM</LogoText>}
    </StyledSiteLogo>
  )
}

export default SiteLogo
