import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw * (800 / 1512));
  // margin-top: calc(100vw * (25 / 1280));
  // margin-left: calc(100vw * (70 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (300 / 393));
  }
`

const Input = styled.input`
  font-family: 'Space Grotesk';
  width: 80%;
  height: 100%;
  padding: calc(100vw * (4 / 1280)) calc(100vw * (16 / 1280));
  border-radius: calc(100vw * (10 / 1280));
  border: 1px solid #ffffff;
  outline: none;
  font-size: calc(100vw * (18 / 1280));
  color: #a96778;

  ${p => p.theme.mediaQueries.mobile} {
    padding: calc(100vw * (6 / 487)) calc(100vw * (10 / 487));
    border-radius: calc(100vw * (7 / 487));
    font-size: calc(100vw * (7 / 393));
  }
`

const Button = styled.button`
  font-family: 'Space Grotesk';
  position: absolute;
  right: calc(100vw * (50 / 1280));
  top: calc(100vw * (-5 / 1280));
  width: calc(100vw * (72 / 1280));
  height: calc(100vw * (50 / 1280));
  padding: calc(100vw * (10 / 1280));
  background-color: #c63359;
  color: white;
  border-radius: calc(100vw * (20 / 1280));
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  font-size: calc(100vw * (18 / 1512));

  &:hover {
    background-color: #eb7f9cff;
  }

  ${p => p.theme.mediaQueries.mobile} {
    right: calc(100vw * (5 / 393));
    top: 0;
    width: calc(100vw * (40 / 393));
    height: calc(100vw * (20 / 393));
    padding: calc(100vw * (2.14 / 393)) calc(100vw * (5.71 / 393));
    border-radius: calc(100vw * (5 / 393));
    margin-right: calc(100vw * (5 / 393));

    font-size: calc(100vw * (7 / 393));
  }
`

const MessageText = styled.p`
  margin-top: calc(100vw * (8 / 1280));
  font-size: calc(100vw * (12 / 1280));
  color: #000000;
  margin-left: calc(100vw * (2 / 1280));
  font-weight: 600;

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (8 / 487));
    font-size: calc(100vw * (12 / 487));
    margin-left: calc(100vw * (2 / 487));
  }
`

const NewsletterObj = styled.div`
  display: flex;
  align-items: center;
  width: calc(100vw * (800 / 1512));
  height: calc(100vw * (50 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (300 / 393));
    height: calc(100vw * (20 / 393));
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

  const addToMailingList = async () => {
    setInputMessage('')

    const email = emailInput.current.value
    if (!validateEmail(email)) {
      setInputMessage('Please enter a valid email.')
      return
    }

    const result = await submitEmail(email)

    if (result.success) {
      setInputMessage('Thank you for subscribing!')
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
      <NewsletterObj>
        <Input ref={emailInput} type="email" placeholder="Enter your email" />
        <Button onClick={addToMailingList}>Submit</Button>
      </NewsletterObj>
      {inputMessage && <MessageText color="#000000">{inputMessage}</MessageText>}
    </Container>
  )
}

export default Newsletter
