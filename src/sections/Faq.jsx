import styled from "styled-components";
import { SectionContainer } from "@lib/Containers";
import FaqCollection from "@components/FaqCollection";

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/faq/cave.png') center/100vw no-repeat, linear-gradient(180deg, #5695AC 0%, #002B52 100%);
  padding: 6rem 0;
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
`

export default function FAQ() {
  return (
    <BgSectionContainer>
      <Wrapper>
        <FaqCollection />
      </Wrapper>
    </BgSectionContainer>
  )
}
