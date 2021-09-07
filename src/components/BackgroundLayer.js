import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import BIRDS from "./vanta.birds.min"
import * as THREE from "three"

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
`

const BackgroundLayer = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,
          birdSize: 1.1,
          wingSpan: 28.0,
          speedLimit: 6.0,
          separation: 36.0,
          alignment: 100.0,
          cohesion: 57.0,
          quantity: 2.0,
          backgroundAlpha: 0.0,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <BackgroundContainer ref={myRef}>{children}</BackgroundContainer>
}

export default BackgroundLayer
