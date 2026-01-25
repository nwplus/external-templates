import styled, { keyframes } from 'styled-components'

const smokeBreath = keyframes`
  0% {
    transform: scaleY(1) scaleX(1);
    opacity: 0.85;
  }
  50% {
    transform: scaleY(1.05) scaleX(1.03);
    opacity: 1;
  }
  100% {
    transform: scaleY(1) scaleX(1);
    opacity: 0.85;
  }
`

const SmokeContainer = styled.div`
  position: absolute;
  top: calc(100vw * (-70 / 1920));
  right: calc(100vw * (-190 / 1920));
`

const SmokeImg = styled.img`
  width: calc(100vw * (1400 / 1920));
  pointer-events: none;
  transform-origin: bottom center;
  animation: ${smokeBreath} 8s ease-in-out infinite;
`

const Smoke = () => (
  <SmokeContainer>
    <SmokeImg src="/assets/images/smoke.svg" alt="" />
  </SmokeContainer>
)

export default Smoke
