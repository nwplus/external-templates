import React, { useState } from 'react'
import styled from 'styled-components'

const TestimonialsContainer = styled.div`
  aspect-ratio: 1512/1200;
  height: 100%;
  position: relative;
  width: 100%;
  background: #c1e8fe;

  ${p => p.theme.mediaQueries.tablet} {
    position: relative;
    aspect-ratio: 834 / 1149;
    display: block;
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1085;
  }
`

const Background = styled.img`
  width: calc(100vw * (1512 / 1512));
  position: absolute;
  top: calc(100vw * (-270 / 1512));
`

const GreenTeacup = styled.img`
  width: calc(100vw * (730 / 1512));
  position: absolute;
  top: calc(100vw * (-240 / 1512));
  left: calc(100vw * (830 / 1512));
  z-index: 3;
`

const RedTeaSpill = styled.img`
  width: calc(100vw * (737 / 1512));
  position: absolute;
  top: calc(100vw * (230 / 1512));
  left: calc(100vw * (350 / 1512));
  z-index: 2;
`

const GreenTeacupLeaf = styled.img`
  width: calc(100vw * (375 / 1512));
  position: absolute;
  top: calc(100vw * (-202 / 1512));
  left: calc(100vw * (1123 / 1512));
  z-index: 4;
`

const RedTeacup = styled.img`
  width: calc(100vw * (263 / 1512));
  position: absolute;
  top: calc(100vw * (400 / 1512));
  left: calc(100vw * (250 / 1512));
  cursor: pointer;
`

const YellowTeacup = styled.img`
  width: calc(100vw * (248 / 1512));
  position: absolute;
  top: calc(100vw * (600 / 1512));
  left: calc(100vw * (0 / 1512));
  cursor: pointer;
  z-index: 2;
`

const RedYellowSpill = styled.img`
  width: calc(100vw * (275 / 1512));
  position: absolute;
  top: calc(100vw * (350 / 1512));
  left: calc(100vw * (92 / 1512));
  z-index: 2;
`

const BlueTeacup = styled.img`
  width: calc(100vw * (1400 / 1512));
  position: absolute;
  top: calc(100vw * (680 / 1512));
  left: calc(100vw * (80 / 1512));
`

const YellowBlueSpill = styled.img`
  width: calc(100vw * (244 / 1512));
  position: absolute;
  top: calc(100vw * (590 / 1512));
  left: calc(100vw * (150 / 1512));
  z-index: 0;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: calc(100vw * (412 / 1512));
  height: calc(100vw * (407 / 1512));
  top: 48%;
  left: calc(100vw * (550 / 1512));
  gap: calc(100vw * (40 / 1512));
`

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: calc(100vw * (20 / 1512));
`

const OvalImage = styled.img`
  width: calc(100vw * (154 / 1512));
  height: calc(100vw * (200 / 1512));
  border-radius: calc(100vw * (1000 / 1512));
`

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(100vw * (10 / 1512));
`

const NameRole = styled.div`
  display: flex;
  align-items: center;
  gap: calc(100vw * (15 / 1512));
`

const Name = styled.p`
  font-family: 'Bree Serif';
  font-size: calc(100vw * (34 / 1512));
  font-weight: 400;
  color: #0e172c;
`

const Role = styled.p`
  font-family: 'Bree Serif';
  font-size: calc(100vw * (18 / 1512));
  font-weight: 400;
  padding: calc(100vw * (10 / 1512)) calc(100vw * (13 / 1512));
  border-radius: calc(100vw * (10 / 1512));
  background: linear-gradient(to bottom, #3976df41 0%, #8d95ea4b 100%);
  color: #0e172c;
`

const Pronouns = styled.p`
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: calc(100vw * (22 / 1512));
  color: #0e172c;
`

const Text = styled.p`
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: calc(100vw * (20 / 1512));
  color: #294587;

  &::before {
    content: '“';
    position: absolute;
    top: calc(100vw * (200 / 1512));
    left: calc(100vw * (-50 / 1512));
    font-family: 'Averia Serif Libre';
    font-size: calc(100vw * (80 / 1512));
    color: #294587;
  }

  &::after {
    content: '”';
    position: absolute;
    bottom: calc(100vw * (-120 / 1512));
    right: calc(100vw * (-40 / 1512));
    font-family: 'Averia Serif Libre';
    font-size: calc(100vw * (80 / 1512));
    color: #294587;
  }
`

const hackerData = [
  {
    id: 0,
    name: 'Jess',
    role: 'Hacker',
    imageUrl: '/assets/images/testimonials/jess.png',
    description:
      'cmd-f revolves around celebrating underrepresented genders in tech, [which] is important to me because I’ve taken programming classes when I was younger, but felt really distracted. For example, this one programming web development class I took in high school was mostly guys.',
    pronouns: '(she/they)',
  },
  {
    id: 1,
    name: 'Israel',
    role: 'Mentor',
    imageUrl: '/assets/images/testimonials/israel.png',
    description:
      'I love to mentor! I also create content to mentor other people. I saw cmd-f, and the hackathon was MLH-affiliated, and I used to be a fellow of MLH; I thought it would be cool to see the kind of projects people build over the weekend. I also wanted to reminisce about what it was like to be part of a hackathon as now I’m on the other side — helping people build projects as fast as they can in a short period.',
    pronouns: '(he/him)',
  },
]

const Testimonials = () => {
  const [selectedHacker, setSelectedHacker] = useState(hackerData[0])

  const handleHackerClick = teacup => {
    setSelectedHacker(hackerData[teacup])
  }

  return (
    <TestimonialsContainer id="testimonials">
      <Background src="/assets/images/testimonials/testimonials_faq_bg.svg" />
      <RedTeaSpill src="/assets/images/testimonials/red_tea_spill.svg" />
      <GreenTeacup src="/assets/images/testimonials/green_teacup.svg" />
      <GreenTeacupLeaf src="/assets/images/testimonials/green_teacup_leaf.svg" />
      <RedYellowSpill src="/assets/images/testimonials/red_yellow_spill.svg" />
      <YellowBlueSpill src="/assets/images/testimonials/yellow_blue_spill.svg" />

      <RedTeacup src="/assets/images/testimonials/red_teacup.svg" onClick={() => handleHackerClick(0)} />
      <YellowTeacup src="/assets/images/testimonials/yellow_teacup.svg" onClick={() => handleHackerClick(1)} />
      <BlueTeacup src="/assets/images/testimonials/blue_teacup.svg" />

      <TextContainer>
        <Info>
          <OvalImage src={selectedHacker['imageUrl']} />
          <PersonalInfo>
            <NameRole>
              <Name>{selectedHacker['name']}</Name>
              <Role>{selectedHacker['role']}</Role>
            </NameRole>
            <Pronouns>{selectedHacker['pronouns']}</Pronouns>
          </PersonalInfo>
        </Info>
        <Text>{selectedHacker['description']}</Text>
      </TextContainer>
    </TestimonialsContainer>
  )
}

export default Testimonials
