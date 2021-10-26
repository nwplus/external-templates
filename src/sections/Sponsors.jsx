import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import SponsorSection from '@components/SponsorSection';

// There's a random black line under the last section, so this margin is here for it
const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/sponsors/northern_lights.png') top center/100vw no-repeat, linear-gradient(180deg, #0F1529 0%, #002B52 100%);
  min-height: 700px;
  height: 120vw;
  padding: 6rem 0;
  margin-top: -6px;
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
`

export default function Sponsors() {
  return (
    <BgSectionContainer>
      <Wrapper>
        <SponsorSection />
      </Wrapper>
    </BgSectionContainer>
  )
}
