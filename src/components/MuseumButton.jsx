import React from 'react'
import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: 125% 0;
    opacity: 1;
  }
  50% {
    background-position: -125% 0;
    opacity: 0;
  }
`

const ButtonContainer = styled.div`
  width: ${props => (props.variant === 'sponsor' ? 'calc(100vw * (134 / 1280))' : `calc(100vw * (134 / 1280))`)};

  ${p => p.theme.mediaQueries.mobile} {
    width: ${props => (props.variant === 'sponsor' ? 'calc(100vw * (160 / 487))' : `calc(100vw * (138 / 487))`)};
  }
`

const ButtonInnerContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${props => (props.variant === 'sponsor' ? '134/50' : '134/68')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%);
    background-size: 300% 100%;
    animation: ${shimmer} 6s linear infinite;
    mask-image: url('./assets/images/museum_button.svg');
    mask-size: 100% 100%;
    -webkit-mask-image: url('./assets/images/museum_button.svg');
    -webkit-mask-size: 100% 100%;
    z-index: 2;
  }

  &:hover {
    transform: scale(1.07);
    transform-origin: center;
    filter: brightness(0.95);
  }

  transition: transform 0.3s ease;

  ${p => p.theme.mediaQueries.mobile} {
    ${p =>
      p.variant === 'sponsor' &&
      `
    aspect-ratio: 160/35;
    &::before {
      mask-image: url('./assets/images/sponsor_button_mobile.svg');
    }
  `}
  }
`

const ButtonBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  content: url('./assets/images/museum_button.svg');

  ${p => p.theme.mediaQueries.mobile} {
    ${p =>
      p.variant === 'sponsor' &&
      `
    content: url('./assets/images/sponsor_button_mobile.svg');
  `}
  }
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
  gap: max(calc(100vw * (6 / 1280)), 8px);

  width: 100%;
`

const ButtonTopText = styled.p`
  font-weight: 600;
  font-size: calc(100vw * (12 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (13 / 487));
  }
`

const ButtonBottomText = styled.p`
  font-weight: 700;
  margin-top: -10px;
  font-size: calc(100vw * (18 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (20 / 487));
  }
`

const SponsorText = styled.p`
  font-weight: 600;
  font-size: calc(100vw * (12 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 487));
  }
`

const MuseumButton = props => {
  const { top, left, topText, bottomText, variant } = props

  return (
    <ButtonContainer top={top} left={left} variant={variant}>
      <ButtonInnerContainer variant={variant}>
        <ButtonBackground variant={variant} />
        <ButtonTextContainer>
          {variant === 'sponsor' ? (
            <SponsorText>{topText}</SponsorText>
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
