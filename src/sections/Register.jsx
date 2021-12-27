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
  margin-top: 100vw;
`

const GridContainer = styled.div`
  grid-column: 3 / span 4;

  ${p => p.theme.mediaQueries.mobile} {
    grid-column: 3 / span 10;
  }
`

const ContentContainer = styled.div`
  margin-top: 60px;
`

const StyledH3 = styled(Header3)`
    margin-top: 50px;
    ${p => p.theme.mediaQueries.mobile}{
      margin-top: 0;
      padding: 2px;
    }    
`

const H3Container = styled.div`
    margin-top: 100vw;
`

const IS_APPLICATIONS_OPEN = true;

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
              <Body color='#FFFFFF'>Virtual event</Body>

              {!IS_APPLICATIONS_OPEN &&
                <H3Container>
                  <StyledH3>Applications</StyledH3>
                  <StyledH3>Open Soon</StyledH3>
                </H3Container>}
            </BodyContainer>
            {IS_APPLICATIONS_OPEN &&
              <MobileButtonContainer>
                <Button target="_blank" rel="noopener noreferrer" href="https://portal.nwplus.io/application" width='259px' height='40px' backgroundColor='linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)' borderRadius='100px' textColor='#224260' borderColor="#FFB72C" isHover isGradientText>
                  Apply Now!
                </Button>
                <Button target="_blank" rel="noopener noreferrer" href="https://forms.gle/aTdVwx1d9GWHmrQ16" width='259px' height='40px' borderRadius='100px' textColor='#FFB72C' borderColor="#FFB72C" isHover secondary isGradientText isOutline>
                  Be a Mentor!
                </Button>
              </MobileButtonContainer>}
          </MobileContainer>
          <MediaContainer>
            <ContentContainer>
              <Header1 isGradient background='linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)'>nwHacks</Header1>
              <BodyContainer>
                <Header3 color='#FFFFFF'>Western Canada’s largest hackathon</Header3>
                <Body color='#FFFFFF'>Virtual event</Body>
                {!IS_APPLICATIONS_OPEN && <StyledH3 color='#FFFFFF'>Applications Open Soon</StyledH3>}
              </BodyContainer>
            </ContentContainer>
            {IS_APPLICATIONS_OPEN &&
              <ButtonContainer>
                <Button target="_blank" rel="noopener noreferrer" href="https://portal.nwplus.io/application" width='137px' height='44px' backgroundColor='linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)' borderRadius='100px' textColor='#224260' borderColor="#FFB72C" isHover isGradientText>
                  Apply Now!
                </Button>
                <Button target="_blank" rel="noopener noreferrer" href="https://forms.gle/aTdVwx1d9GWHmrQ16" width='137px' height='44px' borderRadius='100px' textColor='#FFB72C' borderColor="#FFB72C" isHover secondary isGradientText isOutline>
                  Be a Mentor!
                </Button>
              </ButtonContainer>}
          </MediaContainer>
        </div>
      </GridContainer>
    </BgSectionContainer>
  )
}
