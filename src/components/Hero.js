import React from "react"
import styled from "styled-components"

const HeaderShadow = styled.div`
  z-index: 1;
  filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
  position: relative;
  top: 0px;
  left: 0px;
`
const Header = styled.header`
  background: linear-gradient(180deg, #37319b, #711bce);
  height: 80vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 10px 10px 5px grey;
  position: relative;
  top: 0px;
  left: 0px;

  filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
`
const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wave = styled.div`
  display: inline-block;
  font-size: 5.5em;
  padding-bottom: 5px;
  padding-right: 10px;
  user-select: none;

  &:hover {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
  }
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`
const Introduction = styled.h1`
  color: white;
  display: flex;
  flex-direction: column;
`
const About = styled.p`
  color: white;
  max-width: 450px;
  padding-left: 10em;
  padding-top: 1em;
  font-family: "Montserrat";
`

const Hero = () => {
  return (
    <HeaderShadow>
      <Header>
        <IntroWrapper>
          <Wave>👋</Wave>
          <Introduction>
            <span>Hey! I'm Ruaridh McGuckin.</span>
            <span>A front-end developer.</span>
            <span>Living in Dublin.</span>
          </Introduction>
        </IntroWrapper>
        <About>
          Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
          perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
          modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
          minima consectetur.
        </About>
      </Header>
    </HeaderShadow>
  )
}

export default Hero
