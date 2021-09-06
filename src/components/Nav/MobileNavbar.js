import React from "react"
import styled from "styled-components"
import { StyledLink, NavItem, Github } from "./Navbar"
import SiteLogo from "./SiteLogo"

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: var(--clr-grey);
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ mobileNav }) =>
    mobileNav ? "translateX(0)" : "translateX(100%)"};

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin-top: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: var(--clr-white);
    font-size: 1.5rem;
    transition: color 300ms;

    &:hover {
      color: var(--clr-mainColor);
    }
  }
`

const MobileNav = ({ mobileNav, setMobileNav }) => {
  const handleOnClick = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <MenuLinks mobileNav={mobileNav}>
      <ul>
        <li>
          <SiteLogo hover={false} />
        </li>
        <li>
          <a onClick={handleOnClick} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a onClick={handleOnClick} href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a
            onClick={handleOnClick}
            href="https://github.com/ruaridhm"
            target="_blank"
          >
            <Github />
          </a>
        </li>
      </ul>
    </MenuLinks>
  )
}

export default MobileNav
