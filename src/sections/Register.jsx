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

  a {
    :visited {
      color: #FFFFFF;
    } 

  }

  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/background/mobileHero.png');
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center top;
    height: 217vw;
    padding: 3.625rem 0 0;
    text-align: center;
  }
`

const MobileContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
  }
`

const MediaContainer = styled.div`
  padding-top: 12vw;
  margin-left: 101px;
  display: block;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const BodyContainer = styled.div`
  width: 526px;
  margin-top: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 35px;
  align-items: center;
`

const MobileButtonContainer = styled.div`
  margin-top: 120vw;
`

const GridContainer = styled.div`
  grid-column: 3 / span 4;

  ${p => p.theme.mediaQueries.mobile} {
    grid-column: 3 / span 10;
  }
`

const WhiteURL = styled.a`
  color: #FFFFFF;
`

const SponsorLink = styled.a`
    margin-left: 20px;
    transition: 0.25s ease-in-out;
    color: ${p => p.theme.colors.text};
    font-weight: bold;
    :hover {
      cursor: pointer;
      color: #00D88A;
    }
    ${p => p.theme.mediaQueries.mobile} {
      margin-left: 0px;
    }
`

export default function Register() {

  return (
    <BgSectionContainer>
      <GridContainer>
        <div>
          <MobileContainer>
            <Header1 isGradient background='-webkit-linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)'>nwHacks</Header1>
            <BodyContainer>
              <Header3 color='#FFFFFF'>Western Canada’s</Header3>
              <Header3 color='#FFFFFF'>largest hackathon</Header3>
              <Body color='#FFFFFF'>In-person event @</Body>
              <u><WhiteURL target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Robert+H.+Lee+Alumni+Centre/@49.2659434,-123.2517296,17z/data=!3m1!4b1!4m5!3m4!1s0x548672b6360dff9d:0x82fa3ec0bf22ed35!8m2!3d49.2659399!4d-123.2495409">UBC Robert H. Lee Alumni Centre</WhiteURL></u>
            </BodyContainer>
            <MobileButtonContainer>
              <Button target="_blank" rel="noopener noreferrer" href="https://portal.nwplus.io/application" width='259px' height='40px' backgroundColor='linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)' borderRadius='100px' textColor='#224260' borderColor="#FFB72C" isHover isGradientText>
                Apply Now!
              </Button>
              <Button target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1TdvYy6trgRehIdnVhheaLwowBrGmC3zcNUl8UuoMwrI/edit?usp=sharing" width='259px' height='40px' borderRadius='100px' textColor='#FFB72C' borderColor="#FFB72C" isHover secondary isGradientText isOutline>
                Be a Mentor!
              </Button>
              <SponsorLink href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel='noreferrer'>Become a Sponsor!</SponsorLink>
            </MobileButtonContainer>
          </MobileContainer>
          <MediaContainer>
            <Header1 isGradient background='linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)'>nwHacks</Header1>
            <BodyContainer>
              <Header3 color='#FFFFFF'>Western Canada’s largest hackathon</Header3>
              <Body color='#FFFFFF'>In-person event @ <u><WhiteURL target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Robert+H.+Lee+Alumni+Centre/@49.2659434,-123.2517296,17z/data=!3m1!4b1!4m5!3m4!1s0x548672b6360dff9d:0x82fa3ec0bf22ed35!8m2!3d49.2659399!4d-123.2495409">UBC Robert H. Lee Alumni Centre</WhiteURL></u></Body>
            </BodyContainer>
            <ButtonContainer>
              <Button target="_blank" rel="noopener noreferrer" href="https://portal.nwplus.io/application" width='137px' height='44px' backgroundColor='linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)' borderRadius='100px' textColor='#224260' borderColor="#FFB72C" isHover isGradientText>
                Apply Now!
              </Button>
              <Button target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1TdvYy6trgRehIdnVhheaLwowBrGmC3zcNUl8UuoMwrI/edit?usp=sharing" width='137px' height='44px' borderRadius='100px' textColor='#FFB72C' borderColor="#FFB72C" isHover secondary isGradientText isOutline>
                Be a Mentor!
              </Button>
              <Body align="center">
                <SponsorLink href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel='noreferrer'>Become a Sponsor!</SponsorLink>
              </Body>
            </ButtonContainer>
          </MediaContainer>
        </div>
      </GridContainer>
    </BgSectionContainer>
  )
}
