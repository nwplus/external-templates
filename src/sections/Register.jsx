import { useWindowWidth } from '@react-hook/window-size';
import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import { Body, Header1, Header3 } from '@components/Typography';
import Button from '@components/Button';

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/hero.png'), radial-gradient(50% 50% at 50% 50%, #F9F0DF 0%, #9FB4E6 100%);
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  height: 60vw;

  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/background/mobileHero.png');
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center top;
    height: 152vw;
    padding: 3.625rem 0 0;
    text-align: center;
  }
`

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MediaContainer = styled.div`
  padding-top: 12vw;
  margin-left: 101px;
`

const BodyContainer = styled.div`
  width: 526px;
  margin-top: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 35px;
`

const MobileButtonContainer = styled.div`
  margin-top: 95vw;
`

const GridContainer = styled.div`
  grid-column: 3 / span 4;

  ${p => p.theme.mediaQueries.mobile} {
    grid-column: 3 / span 10;
  }
`

const SponsorLink = styled.a`
  color: #FFFFFF;
  font-weight: bold;
`

export default function Register() {
  const windowWidth = useWindowWidth();
  const mobileBreakpoint = 768;

  return (
    <BgSectionContainer>
      <GridContainer>
        {windowWidth && windowWidth <= mobileBreakpoint ?
          <MobileContainer>
            <Header1 isGradient background='-webkit-linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)'>nwHacks</Header1>
            <BodyContainer>
              <Header3 color='#FFFFFF'>Western Canada’s largest hackathon</Header3>
              <Body color='#FFFFFF'>In-person event @ <u>UBC Robert H. Lee Alumni Centre</u></Body>
            </BodyContainer>
            <MobileButtonContainer>
              <Button target="_blank" rel="noopener noreferrer" href="https://forms.gle/z8NRDBzewHpMsV7bA" width='259px' height='40px' backgroundColor='linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)' borderRadius='100px' textColor='#224260' borderColor="#FFB72C" isHover isGradientText>
                Apply Now!
              </Button>
              <Button target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1TdvYy6trgRehIdnVhheaLwowBrGmC3zcNUl8UuoMwrI/edit?usp=sharing" width='259px' height='40px' borderRadius='100px' textColor='#FFB72C' borderColor="#FFB72C" isHover secondary isGradientText isOutline>
                Be a Mentor!
              </Button>
              <SponsorLink href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel='noreferrer'>Become a Sponsor!</SponsorLink>
            </MobileButtonContainer>
          </MobileContainer>
          :
          <MediaContainer>
            <Header1 isGradient background='linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)'>nwHacks</Header1>
            <BodyContainer>
              <Header3 color='#FFFFFF'>Western Canada’s largest hackathon</Header3>
              <Body color='#FFFFFF'>In-person event @ <u>UBC Robert H. Lee Alumni Centre</u></Body>
            </BodyContainer>
            <ButtonContainer>
              <Button target="_blank" rel="noopener noreferrer" href="https://forms.gle/z8NRDBzewHpMsV7bA" width='137px' height='44px' backgroundColor='linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)' borderRadius='100px' textColor='#224260' borderColor="#FFB72C" isHover isGradientText>
                Apply Now!
              </Button>
              <Button target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1TdvYy6trgRehIdnVhheaLwowBrGmC3zcNUl8UuoMwrI/edit?usp=sharing" width='137px' height='44px' borderRadius='100px' textColor='#FFB72C' borderColor="#FFB72C" isHover secondary isGradientText isOutline>
                Be a Mentor!
              </Button>
              <Body align="center">
                <SponsorLink href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel='noreferrer'>Become a Sponsor!</SponsorLink>
              </Body>
            </ButtonContainer>
          </MediaContainer>}
      </GridContainer>
    </BgSectionContainer>
  )
}
