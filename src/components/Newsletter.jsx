import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  //position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw * (600 / 1920));
  height: calc(100vw * (50 / 1920));
  margin-top: calc(100vw * (25 / 1280));
  margin-left: calc(100vw * (70 / 1280));
  transform: rotate(-4deg);

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (130 / 393));
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: calc(100vw * (4 / 1280)) calc(100vw * (16 / 1280));
  border-radius: calc(100vw * (10 / 1280));
  border: 1px solid #d4ccc3;
  outline: none;
  font-size: calc(100vw * (14 / 1280));
  color: #8d603f;

  ${p => p.theme.mediaQueries.mobile} {
    padding: calc(100vw * (6 / 487)) calc(100vw * (16 / 487));
    border-radius: calc(100vw * (7 / 487));
    font-size: calc(100vw * (5 / 393));
  }
`

const Button = styled.button`
  position: absolute;
  right: calc(100vw * (5 / 1280));
  top: 50%;
  width: calc(100vw * (72 / 1280));
  height: calc(100vw * (26 / 1280));
  height: 80%;
  transform: translateY(-50%);
  padding: calc(100vw * (3 / 1280)) calc(100vw * (8 / 1280));
  background-color: #2f1713;
  color: white;
  border-radius: calc(100vw * (6 / 1280));
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  font-size: calc(100vw * (11 / 1280));

  &:hover {
    background-color: #612c25;
  }

  ${p => p.theme.mediaQueries.mobile} {
    right: calc(100vw * (-1 / 393));

    width: calc(100vw * (30 / 393));
    height: calc(100vw * (10 / 393));
    padding: calc(100vw * (2.14 / 487)) calc(100vw * (5.71 / 487));
    border-radius: calc(100vw * (5 / 487));

    font-size: calc(100vw * (5 / 393));
  }
`

const MessageText = styled.p`
  margin-top: calc(100vw * (8 / 1280));
  font-size: calc(100vw * (12 / 1280));
  color: #f0d4a1;
  margin-left: calc(100vw * (2 / 1280));
  font-weight: 600;

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (8 / 487));
    font-size: calc(100vw * (12 / 487));
    margin-left: calc(100vw * (2 / 487));
  }
`

const validateEmail = email => {
  if (!email.includes('@')) return false
  const [localPart, domain] = email.split('@')
  if (!localPart || !domain.includes('.') || domain.split('.').some(part => part.length < 1)) {
    return false
  }
  return true
}

const submitEmail = async email => {
  try {
    await axios({
      method: 'POST',
      url: 'https://us-central1-nwplus-ubc.cloudfunctions.net/addToMailingList',
      data: { email },
    })
    return { success: true }
  } catch (err) {
    if (err.response?.status === 409 || err.response?.status === 502) {
      return { success: false, error: 'alreadySubscribed' }
    }
    return { success: false, error: 'unknown' }
  }
}

const Newsletter = () => {
  const emailInput = useRef(null)
  const [inputMessage, setInputMessage] = useState('')
  const [inputMessageColor, setinputMessageColor] = useState('')

  const addToMailingList = async () => {
    setInputMessage('')
    setinputMessageColor('#F65C5C')

    const email = emailInput.current.value
    if (!validateEmail(email)) {
      setInputMessage('Please enter a valid email.')
      return
    }

    const result = await submitEmail(email)

    if (result.success) {
      setInputMessage('Thank you for subscribing!')
      setinputMessageColor('#78FF96')
      emailInput.current.value = ''
    } else if (result.error === 'alreadySubscribed') {
      setInputMessage(`${email} is already subscribed!`)
      emailInput.current.value = ''
    } else {
      setInputMessage('Something went wrong, please try again later.')
    }
  }

  return (
    <Container>
      <Input ref={emailInput} type="email" placeholder="Sign up for our newsletter!" />
      <Button onClick={addToMailingList}>Submit</Button>
      {inputMessage && <MessageText color={inputMessageColor}>{inputMessage}</MessageText>}
    </Container>
  )
}

export default Newsletter
