import styled from "styled-components";
import { SectionContainer } from "@lib/Containers";
import FaqCollection from "@components/FaqCollection";

const BgSectionContainer = styled(SectionContainer)`
  background: linear-gradient(180deg, #434767 0%, #55597A 99.31%);
  padding: 6rem 0;
`

export default function FAQ() {
  return (
    <BgSectionContainer>
      <FaqCollection />
    </BgSectionContainer>
  )
}
