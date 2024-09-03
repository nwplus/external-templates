import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const BgSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  gap: 1.25vw;
  position: relative;
  top: -51vw;
  width: 100%;
  height: 53.5vw;
  aspect-ratio: 1440/1072;
  z-index: 17;
  overflow: hidden;

  /* background: #150c27; */

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/faq/background.svg') #150C27; */
    aspect-ratio: 412/1359;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
  }
`

const TestimonialsTitle = styled.div`
  background: url('assets/background/testimonials/testimonials-title.svg');
  background-size: 60vw;
  background-repeat: no-repeat;
  height: 12vw;
  width: 60vw;
  z-index: 1;
  position: absolute;
  top: 3.3vw;
  left: 50%;
  transform: translateX(-50%);

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
  }
`

const TestimonialContainer = React.memo(styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2vw;
  padding: 2vw;
  justify-content: center;
  text-align: center;
  border-radius: 1vw;
  width: 79vw;
  height: 39vw;
  top: 15vw;
  left: 1vw;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  animation: ${props => (props.fadeType === 'fade-out' ? fadeOut : fadeIn)} 0.3s ease-in-out;
  opacity: ${props => (props.fadeType === 'fade-out' ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
`)

const Headshot = React.memo(styled.img`
  width: 27.4vw;
  height: 28.4vw;
  object-fit: cover;
  position: relative;
  top: 3.2vw;
  left: 5vw;
  margin-bottom: 1.5vw;
`)

const TextContainer = React.memo(styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 44%;
  left: 5vw;
  top: 7vw;
  color: #45171A;
`)

const Name = React.memo(styled.h2`
  font-size: 2.73vw;
  font-weight: bold;
`)

const Position = React.memo(styled.h3`
  font-size: 1.85vw;
  font-weight: 600;
  font-family: 'HK Grotesk';
  text-align: left;
  padding-bottom: 0.5vw;
`)

const Quote = React.memo(styled.p`
  font-size: 1.12vw;
  font-family: 'HK Grotesk';
  text-align: left;
  margin: 0.5vw 0;
  padding-bottom: 0.5vw;
  line-height: 1.5vw;
`)

const LinksContainer = React.memo(styled.div`
  display: flex;
  gap: 1vw;
  color: #45171A;
  gap: 0.5vw; 
  font-family: 'HK Grotesk';
  font-weight: 500;

`)

const LinkButton = styled.a`
  font-size: 1.10vw;
  color: #45171A;
  text-decoration: underline;
  border-radius: 0.5vw;

  &:hover {
    scale: 1.1
  }
`

const Button = styled.button`
  background-size: cover;
  border: none;
  border-radius: 50%;
  width: 3vw;
  height: 3vw;
  position: relative;
  left: 5.5vw;
  top: 15vw;
  font-size: 1.5vw;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const LeftButton = styled(Button)`
  background: url('assets/background/testimonials/left-button.svg') no-repeat center center;
  background-size: cover;
  z-index: 2000;
  left: 13vw;
  top: 32vw;

`

const RightButton = styled(Button)`
  background: url('assets/background/testimonials/right-button.svg') no-repeat center center;
  background-size: cover;
  left: -1vw;
  top: 32vw;
`

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-size: 50vw;
  margin-top: 2vw;
  position: relative;
  width: 50vw;
  left: -63.9vw;
`

const Dot = styled.div`
  width: 1vw;
  height: 1vw;
  top: 49vw;
  position: relative;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'rgba(110, 14, 92, 1)' : 'rgba(110, 14, 92, 0.4)')};
  margin: 0 0.5vw;
`

const testimonials = [
  {
    headshot: 'assets/background/testimonials/headshot-1.png',
    name: 'Rahul Behal (he/him)',
    position: 'Sponsor, Co-founder of Gumloop',
    text: '“Gumloop is still a new product and we’re in the beta phase. We wanted to interact with users and see what they were using it for, watch them build, and help them if they run into issues. That way, we can improve the product and make it much more usable. We always went to hackathons during university. So it’s just a nice way to give back now that we’re on the other side.”',
    links: []
  },
  {
    headshot: 'assets/background/testimonials/headshot-2.png',
    name: 'Selina Ye (she/her)',
    position: 'First-time hacker, Masters student, non-tech background',
    text: '“Prior to this hackathon, the notion of coding felt like a black box I was too intimidated to breach. However, thanks to Learn Day and watching my amazing teammates at work (shoutout to Kathleen and Matt), I feel more prepared to approach some beginner coding in my free time. Thank you to nwPlus for organizing HackCamp and giving me such a positive first hackathon experience!”',
    links: [
      { name: 'DevPost', url: 'https://devpost.com/software/readai' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/selina-ye21/' }
    ]
  },
  {
    headshot: 'assets/background/testimonials/headshot-3.png',
    name: 'Paul Tiberghien (he/him)',
    position: 'First-time hacker, Bachelors student',
    text: '“A hackathon is a coding marathon. Just like other marathons, it can be quite grueling in the moment, but this kind of big effort often leaves you feeling very fulfilled and inspired on the other side. For people who are exploring their interests, a hackathon can be the perfect fuel to dive into the deep end of something and impress employers!”',
    links: [
      { name: 'DevPost', url: 'https://devpost.com/software/ootd' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/paultibe/' }
    ]
  }
]

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export default function Testimonials () {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [fadeType, setFadeType] = useState('fade-in')

  useEffect(() => {
    testimonials.forEach((testimonial) => {
      const img = document.createElement('img')
      img.src = testimonial.headshot
    })
  }, [])

  const handleNext = () => {
    setFadeType('fade-out')
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setFadeType('fade-in')
    }, 500)
  }

  const handlePrev = () => {
    setFadeType('fade-out')
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setFadeType('fade-in')
    }, 500)
  }

  const { headshot, name, position, text, links } = testimonials[currentTestimonial]

  return (
    <BgSectionContainer id="testimonials">
      <TestimonialsTitle/>
      <LeftButton onClick={handlePrev} />
      <TestimonialContainer fadeType={fadeType}>
        <Headshot src={headshot} alt={`${name} headshot`} />
        <TextContainer>
          <Name>{name}</Name>
          <Position>{position}</Position>
          <Quote>{text}</Quote>
          {links.length > 0 && (
            <LinksContainer>
              {links.map((link, index) => (
                <React.Fragment key={index}>
                  <LinkButton href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </LinkButton>
                  {index < links.length - 1 && ' | '}
                </React.Fragment>
              ))}
            </LinksContainer>
          )}
        </TextContainer>
      </TestimonialContainer>
      <RightButton onClick={handleNext} />
      <DotsContainer>
        {testimonials.map((_, index) => (
          <Dot key={index} active={index === currentTestimonial} />
        ))}
      </DotsContainer>
    </BgSectionContainer>
  )
}
