import styled from "styled-components";
import EventBox from "@components/EventBox";
import { SectionContainer } from "@lib/Containers";
import { Header1, Body } from "@components/Typography";

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/noise.png'), linear-gradient(180deg, #434767 0%, #55597A 99.31%);
  padding: 6rem 0;
`

const Description = styled.div`
  grid-row: 1;
  grid-column: 3 / span 10;
`

const EventsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  grid-row: 2;
  grid-column: 3 / span 10;
  overflow-x: auto;
  
  ${p => p.theme.mediaQueries.mobile} {
    width:100%; 
    display:flex;
    flex-direction:column;
    gap:0;
    grid-column: 0;
  }
`

export default function Events() {
  return (
    <BgSectionContainer>
      <Description>
        <Header1 id="events">Our Events</Header1>
        <Body>This year, we are bringing you a 3-day virtual event where participants worldwide can learn new skills, connect with fellow tech enthusiasts, and build solutions to tackle challenges together.</Body>
      </Description>
      <EventsContainer>
        <EventBox
          title="Learn"
          dateString="Nov.6, 2021"
          body="A day of workshops and skill building. We make the entry into the tech field less daunting."
          imgSrc="/assets/learn_deer.png"
          link="https://fb.me/e/1Gm2D9m7o"
          imgAlt="A deer reading a book by a bookshelf"
        />
        <EventBox
          title="Network"
          dateString="Nov.13, 2021"
          body="A day of networking and connecting with industry professionals."
          imgSrc="/assets/network_bear.png"
          link="https://fb.me/e/5NNlzR0Fu"
          imgAlt="A bear using a breadboard"
        />
        <EventBox
          title="Build"
          dateString="Nov.14, 2021"
          body="A 12-hour hackathon focused around creating projects centered around inclusivity, diversity, and accessibility."
          imgSrc="/assets/build_beaver.png"
          imgAlt="A beaver at a craft bench"
          link="https://fb.me/e/5NNlzR0Fu"
          footer="Each submission will donate $25 to a charity of your choice. Regardless if it’s finished or not."
        />
      </EventsContainer>
    </BgSectionContainer>
  )
}
