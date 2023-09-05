import { useParallax } from 'react-scroll-parallax'
import { SectionContainer } from '@lib/Containers'
import styled, { keyframes } from 'styled-components'
import { Header2 } from './Typography'

const gallery = [
  '/assets/gallery/1.png',
  '/assets/gallery/2.png',
  '/assets/gallery/3.png',
  '/assets/gallery/4.png',
  '/assets/gallery/5.png',
  '/assets/gallery/6.png',
  '/assets/gallery/7.png'
]

const BgSectionContainer = styled(SectionContainer)`
  background: #150C27;
  display: grid;
  align-items: center;
  width: 100%;
  aspect-ratio: 1440/1415;
  position: relative;

  z-index: 15;
  overflow: hidden;

  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/stats/static.svg');
    
    aspect-ratio: 428/1129;
  }
`

const BgScroll = styled(SectionContainer)`
  background: url('assets/background/stats/background.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;
  }
`

const Stems = styled(SectionContainer)`
  background: url('assets/background/stats/stems.svg');
  background-size: 100vw;
  transform: scale(1.205);
  background-repeat: no-repeat;

  position: absolute;
  top: 46.5vw;
  left: -0.5vw;
  width: 100%;
  height: 100%;
  z-index: 12;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;
    z-index: -1;
  }

`

const FgScroll = styled(SectionContainer)`
  background: url('assets/background/stats/foreground.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center bottom;

  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 98;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const ContentInner = styled.div`
  display: flex;
  margin-bottom: auto;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding-top: 4.5rem;
  overflow-x: hidden;
  z-index: 99;
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #FFFAFA;
  font-size: 3.75vw;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
    display: none;
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 4rem 40% 0;
  gap: 2rem;
`

const StatTop = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  font-size: 1.5vw;
  font-weight: 700;
  word-spacing: 200px;
  max-width: 200px;
  line-height: 33px;
`

const StatBottom = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFD7D9;
  font-size: 1.5vw;
  font-weight: 700;
  word-spacing: 200px;
  max-width: 200px;
  line-height: 33px;
`

const Number = styled.div`
  font-size: 3.75vw;
  font-weight: 900;
  margin-bottom: 0.5rem;
`

const scroll = keyframes`
  0% { 
    transform: translateX(0); 
  }
  100% { 
    transform: translateX(-2568.38px); 
  }
`
// animation translation matches full width of images + gap

const Gallery = styled.div`
  background: #150C27;
  animation: ${scroll} 40s linear infinite;
  display: flex;
  position: absolute;
  top: 73.5%;
  z-index: 97;
`

const GalleryImage = styled.img`
  margin: 10px 15px;
`

export default function Stats() {
  // const { ref: ref1 } = useParallax({
  //   speed: -20,
  // });

  // const { ref: ref2 } = useParallax({
  //   speed: -10,
  // });

  return (
    <BgSectionContainer id="statistics">
      <BgScroll />
      <Stems />
      <FgScroll />
      <ContentInner>
        <StyledTitle>
          Last year we had:
          <StatsGrid>
            <StatTop>
              <Number>26</Number>
              Projects Submitted
            </StatTop>
            <StatTop>
              <Number>197</Number>
              Hackers Registered
            </StatTop>
            <StatBottom>
              <Number>40%</Number>
              Gender Minority
            </StatBottom>
            <StatBottom>
              <Number>64%</Number>
              First-Time Hackers
            </StatBottom>
          </StatsGrid>
        </StyledTitle>
      </ContentInner>
      <Gallery>
        {gallery.map((img) => (
          <GalleryImage
            key={img}
            src={img}
          />
        ))}
        {gallery.map((img) => (
          <GalleryImage
            key={`${img}2`}
            src={img}
          />
        ))}
      </Gallery>
    </BgSectionContainer>
  )
}
