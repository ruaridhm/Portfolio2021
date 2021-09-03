import React, { useState } from "react"
import styled from "styled-components"
import { StyledA } from "./ProjectContainer"
import { GithubOutline } from "@styled-icons/evaicons-outline"

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  color: var(--clr-white);
  z-index: 2;
  height: 5rem;
`
const SiteLogo = styled.a`
  margin: 1em;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid var(--clr-black);
  height: 46.5px;
  min-width: 46.5px;
  transform: rotate(0deg);
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: rotate(90deg);
    transition: transform 0.4s ease-in-out;
  }
`
const LogoText = styled.span`
  color: var(--clr-white);
  text-decoration: none;
  transform: rotate(0deg);
  transition: transform 0.4s ease-in-out;
  ${SiteLogo}:hover & {
    transform: rotate(-90deg);
    transition: transform 0.4s ease-in-out;
  }
`
const NavRight = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`
const NavItem = styled(StyledA)`
  color: var(--clr-white);
  text-decoration: none;
  font-size: 30px;
  margin-right: 10%;
  &::before {
    background-color: var(--clr-white);
  }
`
const StyledLink = styled(StyledA)`
  color: var(--clr-white);
  text-decoration: none;
  font-size: 30px;
  margin-right: 10%;
`
const IconButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  cursor: pointer;
  margin-right: 10%;
`
const StyledSVG = styled.svg`
  fill: var(--clr-white);
  cursor: pointer;
  min-height: 30px;
  min-width: 30px;
`
const Github = styled(GithubOutline)`
  height: 30px;
  width: 30px;
`

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <StyledNav>
      <SiteLogo href="/">
        <LogoText>RM</LogoText>
      </SiteLogo>
      <NavRight>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
        <StyledLink href="https://github.com/ruaridhm" target="_blank">
          <Github />
        </StyledLink>
        <IconButton
          onClick={() => {
            setDarkMode(!darkMode)
          }}
        >
          {darkMode ? (
            <StyledSVG
              id="i-moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
            </StyledSVG>
          ) : (
            <StyledSVG
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129"
              enable-background="new 0 0 129 129"
            >
              <g>
                <g>
                  <path d="m64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z" />
                  <path d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z" />
                  <path d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z" />
                  <path d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z" />
                  <path d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z" />
                  <path d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z" />
                  <path d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z" />
                  <path d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z" />
                  <path d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z" />
                </g>
              </g>
            </StyledSVG>
          )}
        </IconButton>
      </NavRight>
    </StyledNav>
  )
}

export default Navbar
