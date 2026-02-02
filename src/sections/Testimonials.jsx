import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const TestimonialsContainer = styled.div`
  aspect-ratio: 1512/1200;
  height: 100%;
  position: relative;
  width: 100%;
  background: #c1e8fe;
  z-index: 15;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1200;
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

const RedTeacupHitbox = styled(RedTeacup)`
  z-index: 30;
  width: calc(100vw * (230 / 1512));
  height: calc(100vw * (217 / 1512));
  opacity: 0;
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

const YellowTeacupHitbox = styled(YellowTeacup)`
  z-index: 35;
  width: calc(100vw * (250 / 1512));
  height: calc(100vw * (250 / 1512));
  opacity: 0;
  cursor: pointer;
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
  z-index: 21;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (1000 / 393));
    top: calc(100vw * (700 / 393));
    left: calc(100vw * (-50 / 393));
    z-index: 1;
  }
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
  top: calc(100vw * (560 / 1512));
  left: calc(100vw * (550 / 1512));
  gap: calc(100vw * (40 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (280 / 393));
    top: calc(100vw * (270 / 393));
    left: calc(100vw * (65 / 393));
    gap: calc(100vw * (20 / 393));
    z-index: 30;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: calc(100vw * (20 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (20 / 393));
  }
`

const OvalImage = styled.img`
  width: calc(100vw * (154 / 1512));
  height: calc(100vw * (200 / 1512));
  border-radius: calc(100vw * (1000 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (93 / 393));
    height: calc(100vw * (121 / 393));
    border-radius: calc(100vw * (200 / 393));
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (10 / 393));
  }
`

const Name = styled.p`
  font-family: 'Bree Serif';
  font-size: calc(100vw * (34 / 1512));
  font-weight: 400;
  color: #0e172c;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (20 / 393));
  }
`

const Role = styled.p`
  font-family: 'Bree Serif';
  font-size: calc(100vw * (18 / 1512));
  font-weight: 400;
  padding: calc(100vw * (10 / 1512)) calc(100vw * (13 / 1512));
  border-radius: calc(100vw * (10 / 1512));
  background: linear-gradient(to bottom, #3976df41 0%, #8d95ea4b 100%);
  color: #0e172c;

  ${p => p.theme.mediaQueries.mobile} {
    border-radius: calc(100vw * (5 / 393));
    padding: calc(100vw * (5 / 393)) calc(100vw * (8 / 393));
    font-size: calc(100vw * (11 / 393));
  }
`

const Pronouns = styled.p`
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: calc(100vw * (22 / 1512));
  color: #0e172c;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (13 / 393));
  }
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

    ${p => p.theme.mediaQueries.mobile} {
      display: none;
    }
  }

  &::after {
    content: '”';
    position: absolute;
    bottom: calc(100vw * (-120 / 1512));
    right: calc(100vw * (-40 / 1512));
    font-family: 'Averia Serif Libre';
    font-size: calc(100vw * (80 / 1512));
    color: #294587;

    ${p => p.theme.mediaQueries.mobile} {
      display: none;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (13 / 393));
  }
`

const Bushes = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (393 / 393));
    top: calc(100vw * (-100 / 393));
    left: calc(100vw * (0 / 393));
    z-index: 20;
  }
`

const GreenTeapotMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (205 / 393));
    top: calc(100vw * (10 / 393));
    right: 0;
    z-index: 2;
  }
`

const LeftGreenery = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (250 / 393));
    top: calc(100vw * (-20 / 393));
    left: 0;
    z-index: 2;
  }
`

const RightGreenery = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (100 / 393));
    top: calc(100vw * (-10 / 393));
    right: calc(100vw * (-2 / 393));
    z-index: 3;
  }
`

const TopCloud = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (393 / 393));
    top: calc(100vw * (20 / 393));
  }
`

const SmokeOne = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (360 / 393));
    top: calc(100vw * (200 / 393));
    right: 0;
    z-index: 2;
  }
`

const TeaPath = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (250 / 393));
    top: calc(100vw * (120 / 393));
    right: calc(100vw * (120 / 393));
    z-index: 3;
  }
`

const Title = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (243 / 393));
    top: calc(100vw * (170 / 393));
    right: calc(100vw * (80 / 393));
    z-index: 5;
  }
`

const RedTeacupMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (203 / 393));
    top: calc(100vw * (590 / 393));
    left: calc(100vw * (0 / 393));
    z-index: 2;
  }
`

const RedTeacupMobileHitbox = styled(RedTeacupMobile)`
  ${p => p.theme.mediaQueries.mobile} {
    z-index: 35;
    opacity: 0;
    width: calc(100vw * (190 / 393));
    height: calc(100vw * (170 / 393));
  }
`

const YellowTeacupMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (220 / 393));
    top: calc(100vw * (670 / 393));
    left: calc(100vw * (190 / 393));
    z-index: 2;
  }
`

const YellowTeacupMobileHitbox = styled(YellowTeacupMobile)`
  ${p => p.theme.mediaQueries.mobile} {
    z-index: 35;
    opacity: 0;
    width: calc(100vw * (190 / 393));
    height: calc(100vw * (170 / 393));
  }
`

const RedYellowSpillMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (250 / 393));
    top: calc(100vw * (580 / 393));
    left: calc(100vw * (80 / 393));
    z-index: 3;
  }
`

const Flower = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (150 / 393));
    top: calc(100vw * (980 / 393));
    left: calc(100vw * (230 / 393));
    z-index: 1;
  }
`

const GreenBg = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (393 / 393));
    top: calc(100vw * (1000 / 393));
    left: calc(100vw * (0 / 393));
    z-index: 0;
  }
`

const SmokeTwo = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (282 / 393));
    top: calc(100vw * (550 / 393));
    left: calc(100vw * (100 / 393));
    z-index: 0;
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }

    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const handleHackerClick = teacup => {
    setSelectedHacker(hackerData[teacup])
  }

  return (
    <TestimonialsContainer id="testimonials">
      {!isMobile ? (
        <>
          <Background src="/assets/images/testimonials/testimonials_bg.svg" />
          <RedTeaSpill src="/assets/images/testimonials/red_tea_spill.svg" />
          <GreenTeacup src="/assets/images/testimonials/green_teacup.svg" />
          <GreenTeacupLeaf src="/assets/images/testimonials/green_teacup_leaf.svg" />
          <RedYellowSpill src="/assets/images/testimonials/red_yellow_spill.svg" />
          <YellowBlueSpill src="/assets/images/testimonials/yellow_blue_spill.svg" />

          <RedTeacup src="/assets/images/testimonials/red_teacup.svg" />
          <YellowTeacup src="/assets/images/testimonials/yellow_teacup.svg" />
          <BlueTeacup src="/assets/images/testimonials/blue_teacup.svg" />

          <RedTeacupHitbox onClick={() => handleHackerClick(0)} />
          <YellowTeacupHitbox onClick={() => handleHackerClick(1)} />

          <TextContainer>
            <Info>
              <OvalImage src={selectedHacker.imageUrl} />
              <PersonalInfo>
                <NameRole>
                  <Name>{selectedHacker.name}</Name>
                  <Role>{selectedHacker.role}</Role>
                </NameRole>
                <Pronouns>{selectedHacker.pronouns}</Pronouns>
              </PersonalInfo>
            </Info>
            <Text>{selectedHacker.description}</Text>
          </TextContainer>
        </>
      ) : (
        <>
          <Bushes src="/assets/images/testimonials/mobile/bushes.svg" />
          <GreenTeapotMobile src="/assets/images/testimonials/mobile/green_teapot.svg" />
          <LeftGreenery src="/assets/images/testimonials/mobile/left_greenery.svg" />
          <RightGreenery src="/assets/images/testimonials/mobile/right_greenery.svg" />
          <TopCloud src="/assets/images/testimonials/mobile/top_cloud.svg" />
          <SmokeOne src="/assets/images/testimonials/mobile/smoke.svg" />
          <TeaPath src="/assets/images/testimonials/mobile/tea_path.svg" />
          <Title src="/assets/images/testimonials/mobile/title.svg" />
          <RedYellowSpillMobile src="/assets/images/testimonials/mobile/red_yellow_spill.svg" />

          <RedTeacupMobile src="/assets/images/testimonials/mobile/red_teacup.svg" />
          <YellowTeacupMobile src="/assets/images/testimonials/mobile/yellow_teacup.svg" />

          <RedTeacupMobileHitbox onClick={() => handleHackerClick(0)} />
          <YellowTeacupMobileHitbox onClick={() => handleHackerClick(1)} />

          <BlueTeacup src="/assets/images/testimonials/blue_teacup.svg" />
          <Flower src="/assets/images/testimonials/mobile/flower.svg" />
          <GreenBg src="/assets/images/testimonials/mobile/green_bg.svg" />
          <SmokeTwo src="/assets/images/testimonials/mobile/smoke_two.svg" />

          <TextContainer>
            <Info>
              <OvalImage src={selectedHacker.imageUrl} />
              <PersonalInfo>
                <NameRole>
                  <Name>{selectedHacker.name}</Name>
                  <Role>{selectedHacker.role}</Role>
                </NameRole>
                <Pronouns>{selectedHacker.pronouns}</Pronouns>
              </PersonalInfo>
            </Info>
            <Text>{selectedHacker.description}</Text>
          </TextContainer>
        </>
      )}
    </TestimonialsContainer>
  )
}

export default Testimonials
