import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { ArrowCircleUpOutline } from "@styled-icons/evaicons-outline"

const Button = styled.button`
  display: block;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border: none;
  transition: transform 0.2s linear;
  padding: 0;
  background-color: transparent;
  padding-top: 10px;
  cursor: pointer;

  &:hover {
    transform: translateY(-7px);
  }
`

const ArrowUpIcon = styled(ArrowCircleUpOutline)`
  height: 100%;
  width: 100%;
  fill: #37319b;
  &:hover {
    fill: #711bce;
  }
`

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <>
      {show && (
        <Button onClick={handleClick} aria-label="to top">
          <ArrowUpIcon />
        </Button>
      )}
    </>
  )
}
export default Scroll
