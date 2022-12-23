import React from 'react'
import styled from 'styled-components'
import NavigationBar from '@components/NavigationBar'
import InfoBackground from '@assets/images/InfoBackground.svg'
import { LAPTOP, MOBILE } from '@constants/measurements'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(211.22deg, #c5ace6 -24.1%, #10186c 80.78%), #ffffff;
  min-height: 100vh;
  top: 250px;
  text-align: left;
`

const InfoContainer = styled.div`
  position: relative;
  padding: 0 10vw;
  padding-right: 25%;
  line-height: 28px;
`

const InfoHeader = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: 500;
  text-align: left;
  color: #ffffff;
  margin-bottom: 70px;
  @media (max-width: ${LAPTOP}) {
    font-size: 3rem;
    line-height: 3rem;
    margin-top: 150px;
  }
`

const InfoText = styled.div`
  color: #ffffff;
  font-size: 1.25rem;
  line-weight: 28px;
  @media (max-width: ${LAPTOP}) {
    font-size: 0.8rem;
  }
`

const InfoBackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: 0;
  @media (max-width: ${LAPTOP}) {
    position: relative;
  }
`

export default function Info() {
  return (
    <Container>
      <NavigationBar />
      <InfoContainer>
        <InfoHeader>nwHacks is rescheduled</InfoHeader>
        <InfoText>Hi all!</InfoText>
        <InfoText>
          nwHacks 2023 is now moved to <b>January 21-22, 2023 </b>from January 14-15, 2023. The event will still take
          place in person at the University of British Columbia (UBC).
          <br />
          <br />
        </InfoText>
        <InfoText>
          This decision was made after considering a variety of factors. The main consideration was the rescheduling of
          some UBC final examinations to January 14-15 due to the snow; hence we wanted to ensure that hackers were able
          to attend nwHacks without worrying about conflicting finals.
          <br />
          <br />
        </InfoText>
        <InfoText>
          The experience of our hackers, mentors, volunteers, and sponsors remains our top priority, and we can bring
          the best experience with this change in dates.
          <br />
          <br />
        </InfoText>
        <InfoText>
          With this reschedule, we also understand that this may affect some individuals’ ability to now attend nwHacks.
          If you wish to withdraw your application, please contact us ASAP via{' '}
          <a href="mailto:nwhacks@nwplus.io" style={{ 'text-decoration': 'underline', color: 'white' }}>
            nwhacks@nwplus.io
          </a>
          . We are also extending our{' '}
          <b>hacker/mentor/volunteer application deadline to December 25, 2022 at 11:59 pm PST</b>
          to accommodate this change.
          <br />
          <br />
        </InfoText>
        <InfoText>
          We hope to see you in person <b>on January 21-22, 2023</b>! Until then, keep an eye out for application
          results sent by email over the winter break.
          <br />
          <br />
          <br />
        </InfoText>
        <InfoText>
          Wishing you a happy holiday season, <br />
          the nwPlus team
        </InfoText>
      </InfoContainer>
      <InfoBackgroundImage src={InfoBackground} />
    </Container>
  )
}
