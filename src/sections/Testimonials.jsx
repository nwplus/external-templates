import React, { useState } from 'react';
import styled from 'styled-components';

import QaziImage from '@assets/images/testimonials/qazi.png';
import VaibhavImage from '@assets/images/testimonials/vaibhav.png';
import PascaleImage from '@assets/images/testimonials/pascale.png';

const TestimonialsContainer = styled.div`
  aspect-ratio: 1280/832;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
`;

const TestimonialsBackground = styled.div`
  background-image: url('./assets/images/testimonials_background.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const TestimonialLeft = styled.div`
  width: 27.5%;
  padding: 40px;
  height: 100%;
`;

const TestimonialRight = styled.div`
  width: 72.5%;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80%;
`;

const Title = styled.h1`
  font-size: calc(100vw * (40 / 1280));
  font-weight: bold;
  color: white;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: white;
`;

const HackerList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 75%;
  width: 95%;
  margin-left: 5px;
`;

const Hacker = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${(props) => (props.selected ? '#7E7976' : 'transparent')};

  &:hover {
    background-color: ${(props) => (props.selected ? '#7E7976' : '#7E7976')};
  }
`;

const Number = styled.span`
  font-weight: bold;
  float: left;
  font-size: 2.2em;
  margin-right: 20px;
  color: white;
`;

const Name = styled.span`
  font-size: 1.5rem;
  color: white;
`;

const Role = styled.span`
  font-size: 1rem;
  color: white;
  display: block;
`;

const HackerImageContainer = styled.div`
  width: 25%;
  height: 200px;
  top: -110px;
  position: relative;
`;

const HackerImage = styled.img`
  width: auto;
  height: 100%;
  margin: 0 auto;
  display: block;
  position: relative;
`;

const HackerInfo = styled.div`
  display: flex;
  width: 75%;
  padding: 30px 0%;
  padding-left: 5%;
  padding-right: 20%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #FFECD6;
`;

const HackerName = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`;

const HackerHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const HackerDescription = styled.p`
  font-size: 1.1rem;
  display: block;
  margin-bottom: 40px;
`;

const ProfileURL = styled.a`
  color: #FFECD6;
  text-decoration: underline;
  display: inline;
  font-weight: bold;
  padding-right: 30px;
`;

const FAQTitle = styled.p`
  position: relative;
  font-size: calc(100vw * (40 / 1280));
  font-weight: bold;
  color: white;
  top: 25%;

  ${p => p.theme.mediaQueries.tablet} {
    display: none;
  }
`;

const hackerData = [
  {
    id: 1,
    name: "Qazi Omair Ahmed",
    role: "Hacker",
    imageUrl: QaziImage,
    description: "For the first hour, I did feel very overwhelmed because it’s such a big hackathon, and there’s people from outside of Canada too — I met people from Michigan, Washington, and all parts of North America. But I would say that it was very engaging. The organizers are really friendly, there’s a lot of resources, and it’s very accessible.\n\nEven if you don’t win, I feel like you do learn a lot.",
    pronouns: "he/him/his",
    heading: "2nd year, Computer Science Major, Developer",
    links: [
      { Label: "DevPost", URL: "https://devpost.com/software/nature-s-choice" },
      { Label: "LinkedIn", URL: "https://www.linkedin.com/in/qazi-omair-ahmed/" }
    ],
  },
  {
    id: 2,
    name: "Vaibhav Sharma",
    role: "Mentor",
    imageUrl: VaibhavImage,
    description: "I believe that I’ve done enough hackathons, so I thought, ‘Why not try this new field of mentoring?’. I feel really great helping people — during HackCamp, I helped a lot of teams and even someone who ended up being a winner. Today in the opening ceremony, he recognized me and thanked me for helping him, so that was a great moment. I like sharing my knowledge; I even have a course on YouTube on full-stack web development.",
    pronouns: "he/him",
    heading: "2nd year, Statistics Major, Mentor",
    links: [
      { Label: "LinkedIn", URL: "http://linkedin.com/in/v-sharma03" }
    ],
  },
  {
    id: 3,
    name: "Pascale Walters",
    role: "Sponsor",
    imageUrl: PascaleImage,
    description: "One idea that the developer relations and marketing teams [at Mappedin] had was to reach out to hackathons and have students use our products to get some initial feedback and show what potential use cases could be. nwHacks in particular is a Canadian hackathon and it’s a good size, so it worked out for me since I was in Vancouver and I could pop down to UBC and say hi.\n\nI truly value mentoring other people. I always jumped at the opportunity when I was an undergrad student, and in grad school, I participated as a hacker and then also as a mentor. So, coming back as a sponsor is pretty cool and it feels like I’m giving back because I’ve been there — I can offer some advice on what it’s like.\n\nnwHacks has been fantastic. The engagement and enthusiasm of the hackers have been so inspiring to me, and I’ve been encouraging people to reach out to me or connect with me on LinkedIn.",
    pronouns: "she/her",
    heading: "Sponsor from Mappedin",
    links: [
      { Label: "LinkedIn", URL: "https://www.linkedin.com/in/pascalewalters/" }
    ],
  },
];

const Testimonials = () => {
  const [selectedHacker, setSelectedHacker] = useState(hackerData[0]);

  const handleHackerClick = (hacker) => {
    setSelectedHacker(hacker);
  };

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsBackground />
      <TestimonialLeft>
        <Title>Testimonials</Title>
        <Description>Here’s what previous nwHacks attendees have to say!</Description>
        <HackerList>
          {hackerData.map((hacker) => (
            <Hacker key={hacker.id} onClick={() => handleHackerClick(hacker)} selected={selectedHacker.id === hacker.id}>
              <Number>{hacker.id}</Number>
              <Name>{hacker.name}</Name>
              <Role>{hacker.role}</Role>
            </Hacker>
          ))}
        </HackerList>

        <FAQTitle>FAQ</FAQTitle>
      </TestimonialLeft>
      <TestimonialRight>
        {/* Left - Hacker Image */}
        <HackerImageContainer>
          <HackerImage src={selectedHacker.imageUrl} alt={selectedHacker.name} />
        </HackerImageContainer>
        {/* Right - Hacker Info */}
        <HackerInfo>
          <HackerName>{selectedHacker.name} ({selectedHacker.pronouns})</HackerName>
          <HackerHeading>{selectedHacker.heading}</HackerHeading>
          <HackerDescription>{selectedHacker.description}</HackerDescription>
          {selectedHacker.links.map((link) => (
            <ProfileURL href={link.URL} target="_blank">{link.Label}</ProfileURL>
          ))}
        </HackerInfo>
      </TestimonialRight>
    </TestimonialsContainer>
  );
};

export default Testimonials;
