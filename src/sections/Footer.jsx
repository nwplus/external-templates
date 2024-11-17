import React, { useEffect, useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import Team from '@components/Team'
import Newsletter from '@components/Newsletter'
import confetti from '../../public/assets/images/confetti.svg'

const FooterContainer = styled.div`
  position: relative;
  aspect-ratio: 1280/1150;
  width: 100%;
  overflow: hidden;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487/820;
  }
`

const FooterBackground = styled.div`
  background-image: url('./assets/images/footer_background.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    background-image: url('./assets/images/footer_background_mobile.png');
  }
`

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: calc(100vw * (40 / 1280));

  a {
    width: calc(100vw * (53 / 1280));
    text-decoration: none;
    color: #f0d4a1;

    &:hover {
      color: #eac669;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    a {
      width: calc(100vw * (40 / 487));
    }
    justify-content: space-evenly;
  }
`

const Links = styled.div`
  display: flex;
  gap: calc(100vw * (20 / 1280));
  font-size: calc(100vw * (27 / 1280));

  a {
    font-weight: 600;
    color: #f0d4a1;

    &:hover {
      color: #eac669;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    font-size: calc(100vw * (20 / 487));
    justify-content: space-evenly;

    a {
      white-space: nowrap;
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding-top: calc(100vw * (40 / 1280));
  gap: calc(100vw * (16 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    padding-top: calc(100vw * (90 / 487));
  }
`

const SmallText = styled.div`
  user-select: none;
  padding-top: calc(100vw * (15 / 1280));
  text-align: center;

  color: #f9c745;
  font-size: calc(100vw * (14 / 1280));
  font-weight: 600;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (12 / 487));
  }
`

const TeamContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0%;
  text-align: center;
  width: 100%;

  ${p => p.theme.mediaQueries.tabletLarge} {
    width: 40vw;
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    bottom: 1rem;
  }
`

const StaticContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    padding: 0 6vw;
  }
`

const confettiFall = keyframes`
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 130%);
  }
`

const ConfettiImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 100%;
  height: auto;
  animation: ${confettiFall} 4s forwards ease-in-out;
  z-index: 9999;
  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Footer = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observerCallback = entries => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setShowConfetti(true)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  const handleAnimationEnd = () => {
    setShowConfetti(false)
  }

  return (
    <FooterContainer ref={footerRef}>
      <FooterBackground />
      {showConfetti && <ConfettiImage src={confetti} alt="Confetti" onAnimationEnd={handleAnimationEnd} />}

      <StaticContainer>
        <TextContainer>
          <SocialMediaIcons>
            <a href="https://www.facebook.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/nwplus" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.youtube.com/c/nwPlusUBC" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://medium.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faMediumM} />
            </a>
          </SocialMediaIcons>
          <Links>
            <a href="mailto:info@nwplus.io" target="_blank" rel="noreferrer">
              Email Us
            </a>
            <a href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel="noreferrer">
              Become a Sponsor
            </a>
            <a href="http://hackp.ac/coc" target="_blank" rel="noreferrer">
              Code of Conduct
            </a>
          </Links>
          <Newsletter />
        </TextContainer>
        <TeamContainer>
          <Team />
          <SmallText>Copyright &copy; nwHacks 2025</SmallText>
        </TeamContainer>
      </StaticContainer>
    </FooterContainer>
  )
}

export default Footer
