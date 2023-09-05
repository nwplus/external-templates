import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'

const InfoContainer = styled.div`
  background: linear-gradient(to bottom, #150C27 0%, #ADDBF3 100%);
  position: relative;

  width: 100%;
  aspect-ratio: 1440/989;
  z-index: 99;
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
  background-position: center top;

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

  return (
    <InfoContainer id="events">
      <BgScroll/>
    </InfoContainer>
  )
}

export default Learn
