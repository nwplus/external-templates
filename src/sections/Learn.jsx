import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'

const InfoContainer = styled.div`
  background: linear-gradient(to bottom, #A9D7EF 0%, #ADDBF3 100%);
  position: relative;

  width: 100%;
  aspect-ratio: 1440/1057;
  z-index: 2;
  overflow: hidden;
  

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/events/bg.svg');
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    
    aspect-ratio: 428/1280;
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/learn/background.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;
  }
`
const MgScroll = styled(SectionContainer)`
  background: url('assets/background/learn/midground.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;
  }

`
const FgScroll = styled(SectionContainer)`
  background: url('assets/background/learn/foreground_tall.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0em 10em;
  padding: 5em 0em;
  position: relative;
  z-index: 2;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin: 0em 3em;
    padding: 5em 0em 0em;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #002F4D;
  font-size: 3rem;
  padding-top: 5rem;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

const PushinP = styled.p`
  color: #002F4D;
  text-align: center;
  width: 50vw;
  min-width: 500px;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 2rem;
`

const ContentInner = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    min-height: 0px;
    display: none;
  }
`

const CardContainer = styled.div`
  width: 75vw;
  min-width: 1000px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
  }
`

const Card = styled.div`
  width: 497px;
  height: 570px;
  aspect-ratio: 497 / 570;
  
  background: url('assets/largescroll_${p => p.type.toLowerCase()}.svg');
  color: #482C16;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem 4rem;
  transform: scale(0.9);
`

const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: 900;
  padding-top: 260px;
`

const CardDate = styled.div`
  font-size: 1.35rem;
  font-weight: 800;
  padding-bottom: 2rem;
`

const CardContent = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 500;
  line-height: 150%;
`

const Learn = () => {
  const { ref: ref1 } = useParallax({
    speed: -25
  })

  const { ref: ref2 } = useParallax({
    speed: -20
  })

  const { ref: ref3 } = useParallax({
    speed: -5
  })

  return (
    <InfoContainer id="about">
      <BgScroll ref={ref1} />
      <MgScroll ref={ref2} />
      <FgScroll ref={ref3} />

      <ContentInner>
        <TextContainer>
          <StyledTitle>Our Events</StyledTitle>
          <PushinP>
            This year, we are bringing you a 2-day in-person event where
            participants can learn new skills, connect with fellow tech
            enthusiasts, and build solutions to tackle challenges together.
          </PushinP>
        </TextContainer>
        <CardContainer>
          {[
            {
              title: 'Learn',
              date: 'Nov. 5, 2022',
              text: 'A day of workshops and skill building. From web development to machine learning, we\'ll have something for you'
            },
            {
              title: 'Build',
              date: 'Nov. 6, 2022',
              text: `A 12-hour hackathon focused around creating projects centered around inclusivity, diversity, and accessibility. 
  Each submission will donate $15 to charity of your choice. Regardless of if it's finished or not`
            }
          ].map(item => (
            <Card type={item.title}>
              <CardTitle>
                {item.title}
              </CardTitle>
              <CardDate>
                {item.date}
              </CardDate>
              <CardContent>
                {item.text}
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </ContentInner>
    </InfoContainer>
  )
}

export default Learn
