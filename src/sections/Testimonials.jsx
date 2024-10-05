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
  

  /* background: #150c27; */

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/faq/background.svg') #150C27; */
    aspect-ratio: 412/1359;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    top: 60vw;
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
    background-size: 80vw;
    width: 80vw;
    top: -33.5vw;
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
  transition: ${props => (props.isMobile ? 'none' : 'opacity 0.3s ease-in-out')};

  ${p => p.theme.mediaQueries.mobile} {
    top: -15vw;
    left: 5vw;
    width: 90vw;
    height: 92vw;
  }
`)

const Headshot = React.memo(styled.img`
  width: 27.4vw;
  height: 28.4vw;
  object-fit: cover;
  position: relative;
  top: 3.2vw;
  left: 5vw;
  margin-bottom: 1.5vw;

  ${p => p.theme.mediaQueries.mobile} {
    left: 0vw;
    width: 32.4vw;
    height: 33.4vw;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: 50%;
    top: 7vw;
    left: 2vw;
  }
`)

const Name = React.memo(styled.h2`
  font-size: 2.73vw;
  font-weight: bold;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 4.6vw;
    line-height: 1.5;
    width: 44vw;
    padding-bottom: 1vw;
    text-align: center;
  }
`)

const Position = React.memo(styled.h3`
  font-size: 1.85vw;
  font-weight: 600;
  font-family: 'HK Grotesk';
  text-align: left;
  padding-bottom: 0.5vw;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3.5vw;
    text-align: center;
    padding-top: 1vw;
  }
`)

const Quote = React.memo(styled.p`
  font-size: 1.12vw;
  font-family: 'HK Grotesk';
  text-align: left;
  font-weight: 400;
  margin: 0.5vw 0;
  padding-bottom: 0.5vw;
  line-height: 1.5vw;

  ${p => p.theme.mediaQueries.mobile} {
    position: relative;
    text-align: center;
    width: 75vw;
    height: 38vw;
    top: 7vw;
    left: -34.5vw;
    font-size: 3.3vw;
    line-height: 1.4;

    ${p => p.currentTestimonial === 1 && `
      padding-top: 2vw;
    `}
  }
`)

const LinksContainer = React.memo(styled.div`
  display: flex;
  gap: 1vw;
  color: #45171A;
  gap: 0.5vw; 
  font-family: 'HK Grotesk';
  font-weight: 500;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    font-size: 3.2vw;
    top: 71vw;
    left: -11vw;
  }

`)

const LinkButton = styled.a`
  font-size: 1.10vw;
  color: #45171A;
  text-decoration: underline;
  border-radius: 0.5vw;

  &:hover {
    scale: 1.1
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3.3vw;
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

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
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

  ${p => p.theme.mediaQueries.mobile} {
    width: 1.5vw;
    height: 1.5vw;
    left: -2.7vw;
    top: 70vw;
  }
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
  const [startX, setStartX] = useState(0)
  const [isMouseDown, setIsMouseDown] = useState(false)

  const isMobile = window.innerWidth < 770

  useEffect(() => {
    testimonials.forEach((testimonial) => {
      const img = document.createElement('img')
      img.src = testimonial.headshot
    })
  }, [])

  const handleNext = () => {
    if (!isMobile) setFadeType('fade-out') // Apply fade on desktop only
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      if (!isMobile) setFadeType('fade-in') // Apply fade on desktop only
    }, isMobile ? 0 : 500)
  }

  const handlePrev = () => {
    if (!isMobile) setFadeType('fade-out') // Apply fade on desktop only
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      if (!isMobile) setFadeType('fade-in') // Apply fade on desktop only
    }, isMobile ? 0 : 500)
  }

  // Add touch event handlers
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX
    const diffX = startX - endX

    if (diffX > 50) {
      // Swipe left - show next testimonial
      handleNext()
    } else if (diffX < -50) {
      // Swipe right - show previous testimonial
      handlePrev()
    }
  }

  // Add mouse event handlers
  const handleMouseDown = (e) => {
    if (!isMobile) return // If not in mobile view, do nothing
    setStartX(e.clientX)
    setIsMouseDown(true)
  }

  const handleMouseUp = (e) => {
    if (!isMouseDown) return // If mouse is not down, do nothing
    if (!isMobile) return // If not in mobile view, do nothing
    const endX = e.clientX
    const diffX = startX - endX

    if (diffX > 50) {
      // Swipe left - show next testimonial
      handleNext()
    } else if (diffX < -50) {
      // Swipe right - show previous testimonial
      handlePrev()
    }
    setIsMouseDown(false) // Reset mouse down state
  }

  const { headshot, name, position, text, links } = testimonials[currentTestimonial]

  return (
    <BgSectionContainer id="testimonials" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <TestimonialsTitle />
      <LeftButton onClick={handlePrev} />
      <TestimonialContainer fadeType={fadeType} isMobile={isMobile}>
        <Headshot src={headshot} alt={`${name} headshot`} />
        <TextContainer>
          <Name>{name}</Name>
          <Position>{position}</Position>
          <Quote currentTestimonial={currentTestimonial}>{text}</Quote>
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
