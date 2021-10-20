import styled from 'styled-components';
import { GridContainer, SectionContainer } from '@lib/Containers';
import { Body, Header1 } from '@components/Typography';

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/welcome/welcome_2.png') center bottom, url('assets/background/welcome/welcome_1.png') center top, radial-gradient(82.82% 82.82% at 50% 94%, rgba(87, 112, 121, 0) 0%, rgba(46, 30, 85, 0.5) 100%), #A1C1D9;
  background-size: 100vw;
  background-repeat: no-repeat;
  height: min-content;
  padding: 20% 0;
`

const Callout = styled.div`
  color: ${p => p.theme.colors.darkBlue};
  font-weight: 600;
  font-size: 1.25rem;
`;

export default function Welcome() {
  return (
    <BgSectionContainer>
      <GridContainer gridColumn="3 / span 4">
        <Header1>Welcome to HackCamp</Header1>
        <Callout>Presented by nwPlus</Callout>
        <Body>HackCamp revolves around inclusivity, diversity, and accessibility — we want you to bring your unique perspectives and experiences to the table!</Body>
        <Body>Over the past 4 years, HackCamp, or formerly UBC Local Hack Day, has been focused on encouraging beginners and people who are curious about technology to work on a project that focuses on these three main pillars.</Body>
      </GridContainer>
    </BgSectionContainer>
  )
}
