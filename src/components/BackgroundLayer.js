import React, {  useRef } from "react"
import styled from "styled-components"


const BackgroundContainer = styled.div`
  margin: 0;
  padding: 6em;
  position: relative;
  top: -6vw;
  @media (max-width: 900px) {
    padding: 4em;
  }
  @media (max-width: 600px) {
    padding: 2em;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`

const BackgroundLayer = ({ children }) => {
  const myRef = useRef(null)
  return <BackgroundContainer ref={myRef}>{children}</BackgroundContainer>
}

export default BackgroundLayer
