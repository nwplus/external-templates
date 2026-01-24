import styled, { keyframes } from 'styled-components'

const floatUp = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  20% {
    transform: translate(-6px, -8px) rotate(-2deg);
  }
  40% {
    transform: translate(4px, -12px) rotate(3deg);
  }
  60% {
    transform: translate(-3px, -6px) rotate(-1deg);
  }
  80% {
    transform: translate(5px, -10px) rotate(2deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`

const floatLeft = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(8px, -5px) rotate(3deg);
  }
  50% {
    transform: translate(-4px, -10px) rotate(-2deg);
  }
  75% {
    transform: translate(6px, -3px) rotate(1deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`

const ButterfliesContainer = styled.div`
  position: absolute;
  top: calc(100vh * (180 / 1080));
  right: calc(100vw * (550 / 1920));
`

const ButterfliesWrapper = styled.div`
  position: relative;
  width: calc(100vw * (120 / 1920));
  height: calc(100vw * (150 / 1920));
`

const ButterflyImg = styled.img`
  position: absolute;
  pointer-events: none;
`

const ButterflyUp = styled(ButterflyImg)`
  width: calc(100vw * (120 / 1920));
  top: calc(100vw * (150 / 1920));
  right: 0;
  animation: ${floatUp} 9s ease-in-out infinite;
`

const ButterflyLeft = styled(ButterflyImg)`
  width: calc(100vw * (90 / 1920));
  top: 0;
  right: calc(100vw * (150 / 1920));
  animation: ${floatLeft} 11s ease-in-out infinite;
`

const ToastButterflies = () => (
  <ButterfliesContainer>
    <ButterfliesWrapper>
      <ButterflyUp src="/assets/images/butterfly_up.svg" alt="A toast butterfly flying up" />
      <ButterflyLeft src="/assets/images/butterfly_left.svg" alt="A toast butterfly flying left" />
    </ButterfliesWrapper>
  </ButterfliesContainer>
)

export default ToastButterflies
