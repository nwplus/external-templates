import React from 'react'
import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  50% {
    background-position: -200% 0;
  }
  50.01%, 100% {
    background-position: -1000% 0;
  }
`

const ButtonContainer = styled.a`
  position: absolute;
  ${props => (props.left ? `left: calc(100vw * (${props.left} / 1280));` : `left: 50%; transform: translateX(-50%);`)}
  top: calc(100vw * (${props => props.top} / 1280));
  width: ${props => (props.variant === 'sponsor' ? 'calc(100vw * (100 / 1280))' : `calc(100vw * (140 / 1280))`)};
  cursor: pointer;
  text-decoration: none;
`

const ButtonInnerContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${props => (props.variant === 'sponsor' ? '100/30' : '134/68')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 10s linear infinite;
    mask-image: url('./assets/images/museum_button.svg');
    mask-size: 100% 100%;
    -webkit-mask-image: url('./assets/images/museum_button.svg');
    -webkit-mask-size: 100% 100%;
    z-index: 2;
  }
`

const ButtonBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ButtonTextContainer = styled.div`
  color: #51483e;
  position: absolute;
  left: 50%;
  top: 40%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-family: 'HK Grotesk';
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: calc(100vw * (6 / 1280));
`

const ButtonTopText = styled.p`
  font-weight: 600;
  font-size: calc(100vw * (12 / 1280));
`

const ButtonBottomText = styled.p`
  font-weight: 700;
  margin-top: -10px;
  font-size: calc(100vw * (18 / 1280));
`

const SponsorText = styled.p`
  font-weight: 600;
  font-size: calc(100vw * (20 / 1280));
`

const MuseumButton = props => {
  const { top, left, topText, bottomText, href, variant } = props
  return (
    <ButtonContainer top={top} left={left} href={href} target="_blank" rel="noopener noreferrer" variant={variant}>
      <ButtonInnerContainer variant={variant}>
        <ButtonBackground src="./assets/images/museum_button.svg" />
        <ButtonTextContainer>
          {variant === 'sponsor' ? (
            <SponsorText>Sponsored by</SponsorText>
          ) : (
            <>
              <ButtonTopText>{topText}</ButtonTopText>
              <ButtonBottomText>{bottomText}</ButtonBottomText>
            </>
          )}
        </ButtonTextContainer>
      </ButtonInnerContainer>
    </ButtonContainer>
  )
}

export default MuseumButton
