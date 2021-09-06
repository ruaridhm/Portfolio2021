import React from "react"
import styled from "styled-components"

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;

  @media (min-width: 600px) {
    display: none;
  }

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: var(--clr-black);
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ mobileNav }) =>
        mobileNav ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ mobileNav }) => (mobileNav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ mobileNav }) =>
        mobileNav ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const Hamburger = ({ mobileNav, setMobileNav }) => {
  return (
    <MenuIcon
      mobileNav={mobileNav}
      onClick={() => {
        setMobileNav(!mobileNav)
        window[`scrollTo`]({ top: 0 })
      }}
    >
      <div />
      <div />
      <div />
    </MenuIcon>
  )
}

export default Hamburger
