import styled from "styled-components";
import { SectionContainer } from "@lib/Containers";
import FaqCollection from "@components/FaqCollection";

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/faq/cave.png') center/100vw no-repeat, linear-gradient(180deg, #5695AC 0%, #002B52 100%);
  min-height: 1200px;
  padding: 6rem 0 0;
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
`

const Image = styled.img`
  width: 100vw;
  pointer-events: none;
  user-select: none;
`

export default function Faq() {
  return (
    <>
      <BgSectionContainer>
        <Wrapper>
          <FaqCollection />
        </Wrapper>
      </BgSectionContainer>
      <Image src="/assets/background/faq/lava_cave.png" />
    </>
  )
}
