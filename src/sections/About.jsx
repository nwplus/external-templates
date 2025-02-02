import styled from 'styled-components'
import { useState, useEffect } from 'react'
// import { TABLET } from '@constants/measurements'

const AboutContainer = styled.div`
  aspect-ratio: 1920/1204;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    background-color: gray;
    aspect-ratio: 393 / 958;
  }
`

const AboutBackground = styled.div`
  background-color: #F0E9D7
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

  ${p => p.theme.mediaQueries.mobile} {
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: calc(calc(400 / 1920) * 100vw);
  left: calc(calc(605 / 1920) * 100vw);
  width: calc(100vw * (682 / 1920));

  display: flex;
  flex-direction: column;
  gap: calc(100vw * (24 / 1920));
  z-index: 11;

  ${p => p.theme.mediaQueries.mobile} {
    left: 50%;
    transform: translateX(-50%);
    top: calc(100vw * (485 / 393));
    width: calc(100vw * (335 / 393));
    gap: calc(100vw * (20 / 393));
  }
`

const Title = styled.p`
  font-family: 'Gloock';
  font-size: calc(100vw * (62 / 1920));
  font-weight: 400;
  text-align: center;
  color: #A6321E;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 393));
  }
`

const Description = styled.p`
  font-family: 'Poppins';
  font-size: calc(100vw * (18 / 1920));
  font-weight: 400;
  font-style: normal;
  color: #4F2F22;
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (18 / 393));
  }
`

const AboutImage = styled.img`
  position: absolute;
  height: auto;
  width: ${({ width }) => `calc(100vw * (${width} / 1920))`};
  top: ${({ top, scroll }) => `calc(calc(${top} / 1920) * 100vw + ${scroll * 0.09}px)`};
  left: ${({ left }) => `calc(calc(${left} / 1920) * 100vw)`};
  transition: top 0.75s ease-out;

  ${p => p.theme.mediaQueries.mobile} {
    top: ${({ top }) => `calc(${top} / 1920 * 100vw)`};
  }
`;

const images = [
  { src: 'piping_bag.svg', alt: 'Piping Bag', width: 160, top: -10, left: 800 },
  { src: 'measuring_glass.svg', alt: 'Measuring Glass', width: 220, top: 0, left: 1200 },
  { src: 'flour_sifter.svg', alt: 'Flour Sifter', width: 160, top: 130, left: 1650 },
  { src: 'spatula.svg', alt: 'Spatula', width: 150, top: 380, left: 1450 },
  { src: 'oven_mitts.svg', alt: 'Oven Mitts', width: 330, top: 700, left: 1400 },
  { src: 'measuring_cup.svg', alt: 'Measuring Cup', width: 120, top: 860, left: 900 },
  { src: 'rolling_pin.svg', alt: 'Rolling Pin', width: 300, top: 730, left: 320 },
  { src: 'cookie_cutter.svg', alt: 'Cookie Cutter', width: 100, top: 830, left: 100 },
  { src: 'mixing_bowl.svg', alt: 'Mixing Bowl', width: 240, top: 380, left: 150 },
  { src: 'hand_mixer.svg', alt: 'Hand Mixer', width: 320, top: 5, left: 235 }
];

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AboutContainer id="about">
      <AboutBackground />
      {images.map(({ src, alt, width, top, left }) => (
        <AboutImage
          key={src}
          src={`assets/images/about/${src}`}
          alt={alt}
          width={width}
          top={top}
          left={left}
          scroll={scrollY}
        />
      ))}
      <TextContainer>
        <Title>What is cmd-f?</Title>
        <Description>
          cmd-f is a 24-hour hackathon focused on addressing gender inequality in technology. Our main purpose is
          to create a safe and dedicated space for individuals who identify with underrepresented genders in tech
          to hack together. We&apos;re trying to create access for people who have faced systemic barriers to inclusion
          on the basis of gender. We encourage participation from women, trans, non-binary, Two-Spirit and gender
          diverse people. Thus, cmd-f prioritizes and centers individuals who identify as a member of an
          underrepresented gender in technology.<br /><br />

          We&apos;re aware that gender is not the only inequality in technology. We appreciate allyship and recognize
          it is important in the community. We invite allies to show their support by volunteering or mentoring,
          as opposed to hacking. Please make sure your participation in this event is aligned with the intentions
          of the event. We also ask all participants who attend to trust that everyone attending is meant to be here.<br /><br />

          For more information on who is an underrepresented gender in technology, please email us at <a href="mailto:cmd-f@nwplus.io" style={{ textDecoration: 'underline', color: 'inherit' }}>cmd-f@nwplus.io</a>.
        </Description>
      </TextContainer>
    </AboutContainer>
  )
}

export default About
