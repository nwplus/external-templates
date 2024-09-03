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
  /* background-color: pink; */
  background-repeat: no-repeat;
  background-position: center top;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: relative;
  top: -51vw;
  left: 0;
  z-index: 997;

  width: 100%;
  aspect-ratio: 1440/934;
  height: 100%;

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
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    aspect-ratio: 412/506;
  }
`

const FooterBackground = styled.div`
  background-position-y: bottom;
  background: url('assets/background/footer/footer-background.png');
  background-size: 250vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -98vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 3; /* Ensure it's beneath other content in CaveTop */
`

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 5;
  width: 36vw;
  height: 6vw;
  font-size: 4vw;
  a {
    color: #c4b2f0;
    width: 500px;
  }
  gap: 2rem;

  ${p => p.theme.mediaQueries.mobile} {
    a {
      color: #c4b2f0;
      width: 25px;
    }
    gap: 1rem;
  }
`

const Links = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.6vw;
  a {
    color: #c4b2f0;
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
  z-index: 999;
  bottom: 62.5vw;

  ${p => p.theme.mediaQueries.mobile} {
    bottom: 50vw;
  }
`

const TeamContainer = styled.div`
  z-index: 4;
  position: absolute;
  left: 0;
  bottom: 2vw;
  text-align: center;
  width: 100%;
`

const GreenFireWork = styled.div`
  background: url('assets/background/footer/green-firework.png');
  background-size: 21vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -51vw;
  left: -39vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 2;
  animation: fadeInOut 3s ease-in-out infinite;

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
    font-size: 1.5vw;
    line-height: 2vw;
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

  &:hover {
    cursor: pointer;
  }

  // Override the font-size media query
  @media (max-width: ${LAPTOP}) {
    font-size: 1.5vw;
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
        <TextContainer id='contact'>
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
        <TeamContainer>
          <Team />
        </TeamContainer>
      </CaveTop>
    </>
  )
}
