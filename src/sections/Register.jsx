import { useWindowWidth } from '@react-hook/window-size';
import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import { Body, Header1 } from '@components/Typography';
import Button from '@components/Button';
import Logo from '@components/icons/logo';

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/hero.png'), radial-gradient(50% 50% at 50% 50%, #F9F0DF 0%, #9FB4E6 100%);
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  height: 76vw;

  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/background/hero_mobile.png');
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center top;
    height: 152vw;
    padding: 3.625rem 0 0;
    text-align: center;
  }
`

const HeroContainer = styled.div`
  padding-top: 12vw;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const BodyContainer = styled.div`
  width: 244px;
`

const GridContainer = styled.div`
  grid-column: 3 / span 4;

  ${p => p.theme.mediaQueries.mobile} {
    grid-column: 3 / span 10;
  }
`

export default function Register() {

  return (
    <BgSectionContainer>
      <GridContainer>
        <HeroContainer>
          <Body color='#244A5C'>nwPlus presents</Body>
          <Header1 color='#234B5C'>HackCamp</Header1>
          <BodyContainer>
            <Body color='#244A5C'>Western Canada’s biggest
              beginner-friendly hackathon</Body>
          </BodyContainer>
          <Button target="_blank" rel="noopener noreferrer" href="https://forms.gle/z8NRDBzewHpMsV7bA" width='257px' height='60px' backgroundColor='#224B5C' borderRadius='8px' textColor='#AFBFE5' isHover>
            Register Now
          </Button>
        </HeroContainer>
      </GridContainer>
    </BgSectionContainer>
  )
}
