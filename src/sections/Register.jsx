import { useWindowWidth } from '@react-hook/window-size';
import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import { Body, Header1 } from '@components/Typography';
import Button from '@components/Button';
import Logo from '@components/icons/logo';
import RegisterSvg from '@components/icons/registerSvg';

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/Noise.png'), radial-gradient(50% 50% at 50% 50%, #F9F0DF 0%, #9FB4E6 100%);
  background-size: 100vw;
  background-repeat: no-repeat;
  height: min-content;
  padding: 20% 0;

  ${p => p.theme.mediaQueries.mobile} {
    background: radial-gradient(50% 50% at 50% 50%, #F9F0DF 0%, #9FB4E6 100%);
    padding: 3.625rem 0 0;
    text-align: center;
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

// Mobile styling to make the image extend past the container
const Image = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    width: 100%;
    grid-column: 1 / span 14;
    grid-row: 2;
    margin-bottom: -12%;
  }
`

export default function Register() {
  const windowWidth = useWindowWidth();
  const mobileBreakpoint = 768;

  return (
    <BgSectionContainer>
      <GridContainer>
        <Logo />
        <RegisterSvg />
        <Header1 color='#234B5C'>HackCamp</Header1>
        <BodyContainer>
          <Body color='#244A5C'>Western Canada’s biggest
            beginner-friendly hackathon</Body>
        </BodyContainer>
        <Button width='257px' height='60px' backgroundColor='#224B5C' borderRadius='8px' textColor='#AFBFE5' isHover>
          Register Now
        </Button>
      </GridContainer>
      <Image src="/assets/background/welcome/welcome_mobile.png" />
    </BgSectionContainer>
  )
}
