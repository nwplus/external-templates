import React from 'react'
import styled from 'styled-components'
import { LAPTOP, TABLET } from '@constants/measurements'
import { scale } from '@utilities/format'

const HeaderContainer = styled.div`
  position: relative;
`

const OuterContainer = styled.div`
  position: absolute;
  top: 35vh;
  margin-left: 10vw;
  width: 100%;
  text-align: left;
  color: #433860;
`

const Opening = styled.p`
  position: relative;
  top: 25px;
  font-family: HK Grotesk;
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.44999998807907104px;
`

const Title = styled.p`
  position: relative;
  font-family: HK Grotesk;
  font-size: 100px;
  font-weight: 900;
  line-height: 100px;
  letter-spacing: 0em;
  background: linear-gradient(265.48deg, #959afb 80.67%, #9ad4de);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: ${LAPTOP}) {
    background: linear-gradient(265.48deg, #959afb 70.67%, #9ad4de);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: ${TABLET}) {
    background: linear-gradient(265.48deg, #959afb 60.67%, #9ad4de);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Subtitle = styled.p`
  position: relative;
  font-family: HK Grotesk;
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.25999999046325684px;
`

const Description = styled.p`
  position: relative;
  font-family: HK Grotesk;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
`

const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`

const ApplyButton = styled.button.attrs(({ applyActive }) => ({
  type: 'button',
  disabled: applyActive,
}))`
  position: relative;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  font-size: ${() => scale(320, 1440, 6, 18)};
  background: linear-gradient(265.48deg, #959afb 3.67%, #9ad4de 78.93%);
  height: 60px;
  width: 175px;
  border-radius: 12px;
`

const ApplyButtonText = styled.p`
  font-family: HK Grotesk;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.44999998807907104px;
`

const BeAMentorButton = styled.button.attrs(({ applyActive }) => ({
  type: 'button',
  disabled: applyActive,
}))`
  position: relative;
  border: double 1em transparent;
  color: white;
  cursor: pointer;
  display: block;
  font-size: ${() => scale(320, 1440, 6, 18)};
  background: white;
  height: 60px;
  width: 175px;
  border-radius: 12px;
  border: 3px solid;
  border-radius: 3px;
  border-image-source: linear-gradient(263.82deg, #9ea4fc 38.58%, #9bd3df 78.17%);
  // border-image-slice: 1;
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-left: 40px;
`

const BeAMentorText = styled.p`
  font-family: HK Grotesk;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.44999998807907104px;
  background: #8486e4;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Header = () => {
  const func = () => {}
  return (
    <HeaderContainer>
      <OuterContainer>
        <Opening>Welcome to</Opening>
        <Title>nwHacks</Title>
        <Subtitle>Western Canada’s Largest Hackathon</Subtitle>
        <Description>January 14 - 15 2023 | In-Person Event @ UBC Life Sciences Institute </Description>
        <ButtonsContainer>
          <ApplyButton applyActive={func} onClick={func}>
            <ApplyButtonText>Apply Now!</ApplyButtonText>
          </ApplyButton>
          <BeAMentorButton applyActive={func} onClick={func}>
            <BeAMentorText>Be a Mentor!</BeAMentorText>
          </BeAMentorButton>
        </ButtonsContainer>
      </OuterContainer>
    </HeaderContainer>
  )
}

export default Header
