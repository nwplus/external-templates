import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import QaziImage from '@assets/images/testimonials/qazi.png'
import VaibhavImage from '@assets/images/testimonials/vaibhav.png'
import PascaleImage from '@assets/images/testimonials/pascale.png'

import leftArrow from '@assets/images/carouselLeft.svg'
import rightArrow from '@assets/images/carouselRight.svg'

const TestimonialsContainer = styled.div`
  aspect-ratio: 1280/832;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;

  ${p => p.theme.mediaQueries.tablet} {
    position: relative;
    aspect-ratio: 834 / 1149;
    display: block;
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1085;
  }
`

const TestimonialsBackground = styled.div`
  background-image: url('./assets/images/testimonials_background.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${p => p.theme.mediaQueries.tablet} {
    background-image: url('./assets/images/tabletTestimonialsBackground.svg');
  }

  ${p => p.theme.mediaQueries.mobile} {
    background-image: url('./assets/images/mobileTestimonialsBackground.svg');
  }
`

const TestimonialLeft = styled.div`
  width: calc(100vw * (340 / 1280));
  padding: calc(100vw * (30 / 1280));
  height: 100%;
  ${p => p.theme.mediaQueries.tablet} {
    display: block;
    width: 100%;
    height: 30%;
    padding: 40px 0;
  }
`

const TestimonialRight = styled.div`
  width: calc(100vw * (940 / 1280));
  padding: calc(100vw * (40 / 1280));
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  ${p => p.theme.mediaQueries.tablet} {
    display: block;
    width: 100%;
    height: 70%;
  }
`

const Title = styled.h1`
  font-size: calc(100vw * (40 / 1280));
  font-weight: bold;
  color: white;
  ${p => p.theme.mediaQueries.tablet} {
    font-size: calc(100vw * (100 / 1280));
    text-align: center;
    margin-top: 20px;
  }
`

const Description = styled.p`
  font-size: calc(100vw * (20 / 1280));
  color: white;
  ${p => p.theme.mediaQueries.tablet} {
    font-size: calc(100vw * (16 / 487));
    text-align: center;
  }
`

const HackerList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: calc(100vw * (175 / 1280));
  width: calc(100vw * (272 / 1280));
  margin-left: calc(100vw * (5 / 1280));

  ${p => p.theme.mediaQueries.tablet} {
    display: none;
  }
`

const Hacker = styled.li`
  padding: calc(100vw * (15 / 1280)) calc(100vw * (20 / 1280));
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${props => (props.selected ? '#7E7976' : 'transparent')};
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${props => (props.selected ? '#7E7976' : '#7E7976')};
  }
`

const Number = styled.span`
  font-weight: bold;
  float: left;
  font-size: calc(100vw * (42 / 1280));
  margin-right: calc(100vw * (15 / 1280));
  color: white;
  ${p => p.theme.mediaQueries.tablet} {
    font-size: calc(100vw * (42 / 487));
  }
`

const Name = styled.span`
  font-size: calc(100vw * (20 / 1280));
  color: white;
  font-weight: 700;
  ${p => p.theme.mediaQueries.tablet} {
    text-align: left;
    font-size: calc(100vw * (30 / 487));
  }
`

const Role = styled.span`
  font-size: calc(100vw * (16 / 1280));
  color: white;
  display: block;
  ${p => p.theme.mediaQueries.tablet} {
    text-align: left;
    font-size: calc(100vw * (20 / 487));
  }
`

const HackerImageContainer = styled.div`
  width: calc(100vw * (215 / 1280));
  height: calc(100vw * (200 / 1280));
  left: calc(100vw * (385 / 1280));
  top: calc(100vw * (204 / 1280));

  position: absolute;
  overflow: hidden;
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileImageContainer = styled.div`
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (250 / 487));
    height: calc(100vw * (200 / 487));
    top: calc(100vw * (335 / 487));
    left: calc(100vw * (57 / 487));
    background-image: url(${props => props.imageUrl});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const HackerInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: calc(100vw * (440 / 1280));
  top: calc(100vw * (225 / 1280));
  left: calc(100vw * (625 / 1280));
  height: calc(100vw * (370 / 1280));
  color: #ffecd6;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    top: calc(100vw * (345 / 487));
    width: calc(100vw * (400 / 487));
    height: calc(100vw * (345 / 487));
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
`

const HackerName = styled.h2`
  font-size: calc(100vw * (32 / 1280));
  font-weight: 700;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 487));
    text-align: center;
    width: 100%;
  }
`

const HackerHeading = styled.h3`
  font-size: calc(100vw * (18 / 1280));
  font-weight: 500;
  font-family: 'HK Grotesk Medium';
  margin-bottom: calc(100vw * (40 / 1280));
  ${p => p.theme.mediaQueries.mobile} {
    margin-bottom: calc(100vw * (30 / 487));
    font-size: calc(100vw * (20 / 487));
    width: 100%;
  }
`

const HackerDescription = styled.p`
  font-size: calc(100vw * (16 / 1280));
  display: block;
  margin-bottom: calc(100vw * (40 / 1280));
  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (16 / 487));
    width: 100%;
    height: calc(100vw * (220 / 487));
    overflow-y: scroll;
  }
`

const ProfileURL = styled.a`
  color: #ffecd6;
  text-decoration: underline;
  display: inline;
  font-weight: bold;
  padding-right: 30px;
`

const FAQTitle = styled.p`
  position: relative;
  font-size: calc(100vw * (40 / 1280));
  font-weight: bold;
  color: white;
  top: 25%;

  ${p => p.theme.mediaQueries.tablet} {
    display: none;
  }
`

const Carousel = styled.div`
  display: none;

  ${p => p.theme.mediaQueries.tablet} {
    display: flex;
    width: 100vw;
    transition: transform 0.5s ease-in-out;
    transform: translateX(${({ currentIndex }) => `-${currentIndex * 100}%`});
  }
`

const HackerCarousel = styled.div`
  width: 100vw;
  position: relative;
  left: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`
const HackerInfoMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: calc(100vw * (20 / 487));
  margin-top: calc(100vw * (27 / 487));
  width: calc(100vw * (320 / 487));
  height: calc(100vw * (100 / 487));
  color: #ffecd6;
`
const NavigationButton = styled.button`
  display: none;
  position: absolute;
  top: calc(100vw * (185 / 487));
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  transform: scale(0.75);
  cursor: pointer;
  z-index: 2;

  &:hover {
    color: #ffc633;
  }
  ${p => p.theme.mediaQueries.tablet} {
    display: block;
  }
`

const LeftButton = styled(NavigationButton)`
  left: calc(100vw * (20 / 487));
`

const RightButton = styled(NavigationButton)`
  right: calc(100vw * (20 / 487));
`

const hackerData = [
  {
    id: 1,
    name: 'Qazi Omair Ahmed',
    role: 'Hacker',
    imageUrl: QaziImage,
    description:
      'For the first hour, I did feel very overwhelmed because it’s such a big hackathon, and there’s people from outside of Canada too — I met people from Michigan, Washington, and all parts of North America. But I would say that it was very engaging. The organizers are really friendly, there’s a lot of resources, and it’s very accessible.\n\nEven if you don’t win, I feel like you do learn a lot.',
    pronouns: 'he/him',
    heading: '2nd year, Computer Science Major, Developer',
    links: [
      { Label: 'DevPost', URL: 'https://devpost.com/software/nature-s-choice' },
      { Label: 'LinkedIn', URL: 'https://www.linkedin.com/in/qazi-omair-ahmed/' },
    ],
  },
  {
    id: 2,
    name: 'Vaibhav Sharma',
    role: 'Mentor',
    imageUrl: VaibhavImage,
    description:
      'I believe that I’ve done enough hackathons, so I thought, ‘Why not try this new field of mentoring?’. I feel really great helping people — during HackCamp, I helped a lot of teams and even someone who ended up being a winner. Today in the opening ceremony, he recognized me and thanked me for helping him, so that was a great moment. I like sharing my knowledge; I even have a course on YouTube on full-stack web development.',
    pronouns: 'he/him',
    heading: '2nd year, Statistics Major, Mentor',
    links: [{ Label: 'LinkedIn', URL: 'http://linkedin.com/in/v-sharma03' }],
  },
  {
    id: 3,
    name: 'Pascale Walters',
    role: 'Sponsor',
    imageUrl: PascaleImage,
    description:
      'One idea that the developer relations and marketing teams [at Mappedin] had was to reach out to hackathons and have students use our products to get some initial feedback and show what potential use cases could be. nwHacks in particular is a Canadian hackathon and it’s a good size, so it worked out for me since I was in Vancouver and I could pop down to UBC and say hi.\n\nI truly value mentoring other people. I always jumped at the opportunity when I was an undergrad student, and in grad school, I participated as a hacker and then also as a mentor. So, coming back as a sponsor is pretty cool and it feels like I’m giving back because I’ve been there — I can offer some advice on what it’s like.\n\nnwHacks has been fantastic. The engagement and enthusiasm of the hackers have been so inspiring to me, and I’ve been encouraging people to reach out to me or connect with me on LinkedIn.',
    pronouns: 'she/her',
    heading: 'Sponsor from Mappedin',
    links: [{ Label: 'LinkedIn', URL: 'https://www.linkedin.com/in/pascalewalters/' }],
  },
]

const Testimonials = () => {
  const [selectedHacker, setSelectedHacker] = useState(hackerData[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = e => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current

    if (swipeDistance > 50) {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex > 0 ? prevIndex - 1 : hackerData.length - 1
        setSelectedHacker(hackerData[newIndex])
        return newIndex
      })
    } else if (swipeDistance < -50) {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex < hackerData.length - 1 ? prevIndex + 1 : 0
        setSelectedHacker(hackerData[newIndex])
        return newIndex
      })
    }
  }

  const handleLeftClick = () => {
    setCurrentIndex(prev => {
      const newIndex = prev > 0 ? prev - 1 : hackerData.length - 1
      setSelectedHacker(hackerData[newIndex]) // Ensure `selectedHacker` updates synchronously with `currentIndex`
      return newIndex
    })
  }

  const handleRightClick = () => {
    setCurrentIndex(prev => {
      const newIndex = prev < hackerData.length - 1 ? prev + 1 : 0
      setSelectedHacker(hackerData[newIndex]) // Ensure `selectedHacker` updates synchronously with `currentIndex`
      return newIndex
    })
  }

  const handleHackerClick = hacker => {
    setSelectedHacker(hacker)
  }

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsBackground />
      <TestimonialLeft>
        <Title>
          Testimonials&nbsp;&nbsp;
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.1548 3.62016L17.8456 17.396M17.8456 17.396L4.05247 17.3799M17.8456 17.396L1.55119 1.88007"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </Title>
        <Description>Here’s what previous nwHacks attendees have to say!</Description>
        <HackerList>
          {hackerData.map(hacker => (
            <Hacker
              key={hacker.id}
              onClick={() => handleHackerClick(hacker)}
              selected={selectedHacker.id === hacker.id}
            >
              <Number>{hacker.id}</Number>
              <div>
                <Name>{hacker.name}</Name>
                <Role>{hacker.role}</Role>
              </div>
            </Hacker>
          ))}
        </HackerList>

        <Carousel
          currentIndex={currentIndex}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {hackerData.map(hacker => (
            <HackerCarousel key={hacker.id} selected={selectedHacker.id === hacker.id}>
              <HackerInfoMobile>
                <Number>{hacker.id}</Number>
                <div>
                  <Name>{hacker.name}</Name>
                  <Role>{hacker.role}</Role>
                </div>
              </HackerInfoMobile>
            </HackerCarousel>
          ))}
        </Carousel>
        <LeftButton onClick={handleLeftClick}>
          <img src={leftArrow} alt="Carousel Left Arrow" />
        </LeftButton>
        <RightButton onClick={handleRightClick}>
          <img src={rightArrow} alt="Carousel Right Arrow" />
        </RightButton>

        <FAQTitle>
          FAQ&nbsp;&nbsp;
          <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.2244 12.75L11.7244 22.75M11.7244 22.75L2.22437 12.75M11.7244 22.75L11.7244 0.25"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </FAQTitle>
      </TestimonialLeft>
      <TestimonialRight>
        <HackerImageContainer imageUrl={selectedHacker.imageUrl} />
        <HackerInfo>
          <HackerName>
            {selectedHacker.name} ({selectedHacker.pronouns})
          </HackerName>
          <HackerHeading>{selectedHacker.heading}</HackerHeading>
          <HackerDescription>
            {selectedHacker.description}
            <br />
            <br />
            {selectedHacker.links.map(link => (
              <ProfileURL href={link.URL} target="_blank">
                {link.Label}
              </ProfileURL>
            ))}
          </HackerDescription>

          <MobileImageContainer imageUrl={selectedHacker.imageUrl} />
        </HackerInfo>
      </TestimonialRight>
    </TestimonialsContainer>
  )
}

export default Testimonials
