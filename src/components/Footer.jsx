import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import Team from '@components/Team'
import Button from '@lib/Button'
import { LAPTOP } from '@constants/measurements'

const CaveTop = styled.div`
  /* background: url('assets/background/footer/footer-background.png');
  background-size: 100%; */
  background-repeat: no-repeat;
  background-position: center top;
  /* overflow: hidden; */

  display: flex;
  justify-content: center;
  align-items: center;
  

  position: relative;
  top: -151vw;
  /* top: -80vw; */
  left: 0;
  /* z-index: 2; */

  width: 100%;
  aspect-ratio: 1440/934;
  height: 100%;
  /* height: 200vw; */
  /* background-color: pink; */
  height: 100vw;

  a {
    transition: ${p => p.theme.transition.small};
    color: #c4b2f0;
    :hover {
      cursor: pointer;
      color: #f9c745;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/footer/background.svg') #150c27; */
    /* background-size: 100vw; */
    height: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    aspect-ratio: 412/506;
    top: 0vw;
    /* overflow: hidden; */
  }
`

const FooterBackground = styled.div`
  background-position-y: bottom;
  background: url('assets/background/footer/new-footer-background.png');
  background-size: 250vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -106.5vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 3; /* Ensure it's beneath other content in CaveTop */

  ${p => p.theme.mediaQueries.desktop} {
    bottom: -92.5vw;
  }

  ${p => p.theme.mediaQueries.tabletLarger} {
    bottom: -88.5vw;
  }
  
  ${p => p.theme.mediaQueries.tabletLarge} {
    bottom: -84.5vw;
  }

  ${p => p.theme.mediaQueries.tablet} {
    bottom: -70.5vw;
  }

  ${p => p.theme.mediaQueries.tabletSmall} {
    bottom: -68.5vw;
  }

  ${p => p.theme.mediaQueries.mobile} {
    bottom: 10vw;
    height: 64vw;
  }
`

const FooterSpotlights = styled.div`
  background-position-y: bottom;
  background: url('assets/background/footer/footer-spotlights.png');
  background-size: 84vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -72vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 2;

  ${p => p.theme.mediaQueries.tabletLarger} {
    bottom: -68vw;
  }
  
  ${p => p.theme.mediaQueries.tablet} {
    bottom: -70vw;
  }

  ${p => p.theme.mediaQueries.tabletSmall} {
    bottom: -48vw;
  }

  ${p => p.theme.mediaQueries.mobile} {
    bottom: 14vw;
    background-size: 100vw;
    /* display: none; */
  }
`

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  /* z-index: 20; */
  width: 36vw;
  height: 6vw;
  font-size: 4vw;
  a {
    color: #c4b2f0;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  gap: 2rem;

  ${p => p.theme.mediaQueries.mobile} {
    width: 60vw;
    top: 0vw;
    font-size: 6vw;
    a {
      color: #c4b2f0;
      width: 65px;
      height: 65px;
      display: flex; /* Add display flex to center icons */
      justify-content: center;
      align-items: center;
    }
    gap: 1.6rem;
  }
`

const Links = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.6vw;
  a {
    color: #c4b2f0;
  }
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3vw;
    gap: 1rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 1rem;
  color: #e2d6ff;
  position: absolute;
  z-index: 999 !important;
  /* bottom: 463.5vw; */
  top: 80vw;
  z-index: 2000;

  ${p => p.theme.mediaQueries.tablet} {
    /* top: -700vw; */
    top: 68vw;
  }

  ${p => p.theme.mediaQueries.mobile} {
    /* top: -700vw; */
    top: 10vw;
  }
`

const TeamContainer = styled.div`
  z-index: 4;
  position: absolute;
  left: 0;
  top: 138vw;
  text-align: center;
  width: 100%;
  padding-bottom: 2vw;
  ${p => p.theme.mediaQueries.desktop} {
    top: 132vw;
  }

  ${p => p.theme.mediaQueries.tabletLarger} {
    top: 118vw;
  }

  ${p => p.theme.mediaQueries.tabletLarge} {
    top: 119vw;
  }

  ${p => p.theme.mediaQueries.tabletMd} {
    top: 115vw;
  }
  
  ${p => p.theme.mediaQueries.tablet} {
    top: 108vw;
  }

  ${p => p.theme.mediaQueries.tabletSmall} {
    top: 100vw;
  }

  ${p => p.theme.mediaQueries.mobile} {
    top: 57vw;
  }

  ${p => p.theme.mediaQueries.xs} {
    top: 50vw;
  }
`

const GreenFireWork = styled.div`
  background: url('assets/background/footer/green-firework.png');
  background-size: 21vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -51vw;
  left: -40vw;
  z-index: 4;
  background-repeat: no-repeat;
  background-position: center top;
  animation: fadeInOut 3s ease-in-out infinite;

  ${p => p.theme.mediaQueries.mobile} {
    bottom: 24vw;
    background-size: 28vw;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`
const YellowFireWork = styled.div`
  background: url('assets/background/footer/yellow-firework.png');
  background-size: 27vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -80vw;
  left: -35vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 4;
  animation: fadeInOut 4.4s ease-in-out infinite;
  animation-delay: 0.2s;

  ${p => p.theme.mediaQueries.mobile} {
   bottom: -10vw; 
  }

  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`
const RedFireWork = styled.div`
  background: url('assets/background/footer/red-firework.png');
  background-size: 28vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -62vw;
  left: 36vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 4;
  animation: fadeInOut 3.3s ease-in-out infinite;
  animation-delay: 0.3s;

  ${p => p.theme.mediaQueries.mobile} {
    bottom: 10vw;
    background-size: 32vw;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`

const InputContainer = styled.div`
  position: relative;
  margin-top: 2vw;
  width: 35vw;
  ${p => p.theme.mediaQueries.mobile} {
    width: 70vw;
  }
`

const StyledInput = styled.input`
  border-radius: 8px;
  border: 0;
  /* margin-top: 1vw; */
  padding: 11px 14px;
  background: white;
  font-weight: 100;
  font-size: 1.5vw;
  width: 100%;
  @media (max-width: ${LAPTOP}) {
    font-size: 1.5vw;
  }

  ${p => p.theme.mediaQueries.mobile} {
    padding: 4px 8px;
    font-size: 2.4vw;
    line-height: 4vw;
  }
`

const ComboButton = styled(Button)`
  position: absolute;
  right: -0.5vw;
  top: 0.35vw;
  width: auto;
  background-color: #8e7eb4 !important;
  height: 80%;
  border-radius: 8px;
  padding: 0 20px !important;
  font-size: 1.7vw;

  &:hover {
    cursor: pointer;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2.5vw;
    top: 1.1vw;
    height: 70%;
  }
`

const StyledMessage = styled.div`
  font-size: 1.4vw;
`

export default function Footer () {
  const [inputMessage, setInputMessage] = useState('')
  const emailInput = React.createRef()

  function addToMailingList () {
    // Reset any error/info messages from before
    setInputMessage('')

    const email = emailInput.current.value
    const validEmail = validateEmail(email)
    if (validEmail) {
      axios({
        method: 'POST',
        url: 'https://us-central1-nwplus-ubc.cloudfunctions.net/addToMailingList',
        data: {
          email
        }
      })
        .then(() => {
          setInputMessage(`${email} is now subscribed!`)
        })
        .catch(err => {
          // If the email is already subscribed we get a 409
          if (err.response.status === 409) {
            setInputMessage(`${email} is already subscribed!`)
          } else {
            setInputMessage('Something went wrong, please try again later.')
          }
        })
    } else {
      setInputMessage('Please enter a valid email.')
    }
  }

  function validateEmail (email) {
    if (!email.includes('@')) {
      return false
    }
    const emailArray = email.split('@')
    if (emailArray.length !== 2) {
      return false
    }
    if (emailArray[0].length < 1) {
      return false
    }

    const domain = emailArray[1]
    if (!domain.includes('.')) {
      return false
    }
    if (domain.split('.')[0].length < 1 || domain.split('.')[1].length < 1) {
      return false
    }

    return true
  }
  return (
    <>
      <CaveTop>
        <TextContainer id="contact">
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
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer">
              Code of Conduct
            </a>
          </Links>
          <InputContainer>
            <StyledInput ref={emailInput} name="email" type="email" placeholder="Sign up for our newsletter!" />
            <ComboButton onClick={addToMailingList}>Submit</ComboButton>
          </InputContainer>
          {inputMessage && <StyledMessage>{inputMessage}</StyledMessage>}
        </TextContainer>
        <GreenFireWork />
        <YellowFireWork />
        <RedFireWork />
        <FooterBackground />
        <FooterSpotlights />
        <TeamContainer>
          <Team />
        </TeamContainer>
      </CaveTop>
    </>
  )
}
