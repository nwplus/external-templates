import styled from 'styled-components'
// import { TABLET } from '@constants/measurements'

const AboutContainer = styled.div`
  aspect-ratio: 1512/900;
  height: 100%;
  position: relative;
  z-index: 11;
  display: flex;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom, #f6dbc8 0%, #f9dcae 50%, #ffc973 100%);

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 922;
  }
`

// const TextContainer = styled.div`
//   position: absolute;
//   top: calc(calc(450 / 1280) * 100vw);
//   left: calc(calc(140 / 1280) * 100vw);
//   width: calc(100vw * (347 / 1280));
//   color: white;

//   display: flex;
//   flex-direction: column;
//   gap: calc(100vw * (24 / 1280));
//   z-index: 11;
//   transform: perspective(1000px) rotateX(2deg);
//   transform-origin: center top;

//   ${p => p.theme.mediaQueries.mobile} {
//     left: 50%;
//     transform: translateX(-50%);
//     top: calc(100vw * (485 / 487));
//     width: calc(100vw * (335 / 487));
//     gap: calc(100vw * (20 / 487));
//   }
// `

// const Title = styled.p`
//   font-family: 'LT Museum';
//   font-size: calc(100vw * (30 / 1280));
//   font-weight: 700;

//   ${p => p.theme.mediaQueries.mobile} {
//     font-size: calc(100vw * (30 / 487));
//   }
// `

// const Description = styled.p`
//   font-family: 'LT Museum';
//   font-size: calc(100vw * (16 / 1280));
//   font-weight: 400;
//   line-height: 1.5;

//   ${p => p.theme.mediaQueries.mobile} {
//     font-size: calc(100vw * (18 / 487));
//   }
// `

const Tracks = styled.img`
  position: absolute;
  width: calc(100vw * (760 / 1512));
  top: calc(100vw * (-450 / 1512));
  right: calc(100vw * (750 / 1512));
  z-index: 1;
`

const Rails = styled.img`
  position: absolute;
  width: 100vw;
  top: calc(100vw * (-150 / 1512));
`

const About = () => (
  <AboutContainer id="about">
    <Tracks src="./assets/images/about/about_train.png" />
    <Rails src="./assets/images/about/about_rails.svg" />
    {/* <TextContainer>
      <Title>One for the history books</Title>
      <Description>
        Join us for the 11th iteration of nwHacks! Everyone is welcome at nwHacks, whether you are just getting into
        tech or are a seasoned hacker. Join us in-person on January 17-18, 2026 for a weekend of creativity, community,
        and innovation. All you need is an open mind and an insatiable desire to learn - we’ll take care of the rest.
        Create a project, learn new skills, and bond with friends, all in 24 hours!
      </Description>
    </TextContainer> */}
  </AboutContainer>
)

export default About
