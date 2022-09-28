import { useParallax } from 'react-scroll-parallax';
import { Header2 } from "@components/Typography"
import { SectionContainer } from "@lib/Containers"
import { useEffect, useState } from "react"
import styled from "styled-components"

const InfoContainer = styled.div`
  background: linear-gradient(to bottom, #FEFFCA 0%, #83F6F7 66%, #83F6F7 100%);
  position: relative;
  width: 100%;
  aspect-ratio: 1440/1375;

  z-index: 10;
  overflow: hidden;
  
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/countdown/midground.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`
const MgScroll = styled(SectionContainer)`
  background: url('assets/background/countdown/foreground_tall.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0em 10em;
  position: relative;
  z-index: 2;
  height: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin: 0em 3em;
    padding: 5em 0em 0em;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #361C1C;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 0px;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0 10rem 0;

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    ${p => p.isLastRow && 'margin-bottom: -4em'};
  }
`

const CountdownGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
  font-weight: 900;
  color: #482C16;
`
const Digits = styled.div`
  display: flex;
`
const Digit = styled.div`
  background: url('assets/scroll.svg');
  background-repeat: no-repeat;
  background-position: center top;

  width: 100%;
  aspect-ratio: 152 / 172;
  height: 172px;
  width: 152px;

  transform: scale(1);

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
`

const ShadowText = styled.div`
  font-size: 5rem;
  color: #532A2A;
  font-weight: 900;

  position: relative;

  :before {
    content: '${p => p.text}';
    color: rgba(255,255,255,.05);
    position: absolute;
    top: 1px;
    left: 1px;
  }

  :after {
    content: '${p => p.text}';
    color: rgba(255,255,255,.05);
    position: absolute;
    top: 2px;
    left: 2px;
  }
`

const Count = () => {

  const [count, setCount] = useState({
    days: [0, 0],
    hours: [0, 0],
    minutes: [0, 0]
  })

  useEffect(() => {
    setCount({
      days: [0, 0],
      hours: [0, 0],
      minutes: [0, 0]
    })
  }, [])

  const { ref: ref1 } = useParallax({
    speed: -20,
  });

  const { ref: ref2 } = useParallax({
    speed: -10,
  });

  return (
    <InfoContainer>
      <BgScroll ref={ref1} />
      <MgScroll ref={ref2} />

      <TextContainer>
        <StyledTitle>Registration Closes</StyledTitle>
        <CountdownContainer>
          {[
            {
              label: 'Days',
              key: 'days'
            },
            {
              label: 'Hours',
              key: 'hours'
            },
            {
              label: 'Mins',
              key: 'minutes'
            }
          ].map(item => (
            <CountdownGroup key={item.label}>
              <Digits>
                {[0, 1].map(index => (
                  <Digit>
                    <ShadowText text={count[item.key][index]}>
                      {count[item.key][index]}
                    </ShadowText>
                  </Digit>
                ))}
              </Digits>
              {item.label}
            </CountdownGroup>
          ))}
        </CountdownContainer>
      </TextContainer>
    </InfoContainer>
  )
}

export default Count