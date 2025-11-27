/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const BGA = styled.div`
  height: 40%;
  position: absolute;
  top: -20%;
  left: -20%;
  aspect-ratio: 926 / 547;
  background-image: url('./assets/images/testim/wheelbarrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const BGB = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  aspect-ratio: 1500 / 1170;
  background-image: url('./assets/images/testim/bg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 0;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 392 / 814;
    background-image: url('./assets/images/testim/mobile_bg.svg');
  }
`

const MobileHeader = styled.div`
  color: #213553;
  display: none;
  background: #7CAFE1;
  padding: 100px 75px;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
  }
`

const Container = styled.div`
  background: linear-gradient(to bottom, #7CAFE1, #CAE1F5);
  position: relative;
  aspect-ratio: 1500 / 1170;
  width: 100vw;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 392 / 814;
  }
`


const BackgroundFrame = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

const ContentGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 20;
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  ${p => p.theme.mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
`

const LeftColumn = styled.div`
  padding-left: 10%;
  padding-bottom: 25%;
  height: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const DefaultStateContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #EDE8E3;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Title = styled.div`
  font-size: calc(100vw * (17 / 834));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (28 / 487));
    text-align: center;
  }
`

const InstructionText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 20px;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 487));
    text-align: center;
    justify-content: center;
  }
`

const SelectedStateContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProfilePanel = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 32px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`

const Name = styled.div`
  font-size: calc(100vw * (14 / 834));
  font-weight: 700;
  color: #1a1a1a;


  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (26 / 487));
    width: 100%;
  }
`

const RoleBadge = styled.div`
  padding: 10px;
  color: white;
  border-radius: 10px;
  background: ${props => props.$gradient};

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (18 / 487));
  }
`

const ProjectBadge = styled.div`
  padding: 10px;
  color: white;
  border-radius: 10px;
  background: linear-gradient(to bottom right, #8D5C97);

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (17 / 487));
  }
`

const LinksRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: calc(100vw * (8 / 834));
  color: #1a1a1a;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (17 / 487));
  }
`

const StyledLink = styled.a`
  color: #2563eb;
  text-decoration: underline;
  cursor: pointer;
`

const Description = styled.div`
  font-size: calc(100vw * (8 / 834));
  line-height: 1.6;
  color: #1a1a1a;
  white-space: pre-line;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 487));
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  aspect-ratio: 509 / 655;
  margin-left: 10%;
  margin-top: 30%;
  height: 40%;
  width: 509px;

  ${p => p.theme.mediaQueries.tablet} {
    height: 300px;
    width: 50%;
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 400 / 550;
    height: 550px;
    width: 100%;
    margin: 0;
    padding: 70px 35px;
    display: ${props => props.$hideOnMobile ? 'none' : 'flex'};
  }
`

const PersonButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: ${props => props.$isRight ? 'flex-end' : 'flex-start'};
  border-radius: 15px;
  border: solid 1px #FFFFFF90;
  background: #FFFFFF40;
  transition: all 0.17s ease;
  backdrop-filter: blur(3px);
  padding: 20px;
  box-shadow: ${props => props.$isSelected ? '0 0 30px rgba(255, 255, 255, 0.6)' : 'none'};
  cursor: pointer;


  ${p => p.theme.mediaQueries.mobile} {
    width: 70%;
    justify-content: space-between;
  }
`

const ButtonName = styled.div`
  font-size: calc(100vw * (12 / 834));

`

const ButtonBadge = styled.div`
  padding: 10px;
  color: white;
  border-radius: 10px;
  background: ${props => props.$gradient};
`

const MobileProfileContainer = styled.div`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: ${props => props.$show ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    padding: 70px 35px;
    height: 550px;
    width: 100%;
  }
`

const MobileProfilePanel = styled(ProfilePanel)`
  ${p => p.theme.mediaQueries.mobile} {
    background-color: rgba(255, 255, 255, 0.4);
  }
`

const CloseButton = styled.button`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    align-self: flex-end;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 10px 20px;
    color: #1a1a1a;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 20px;
    font-family: inherit;
  }
`

const COPY = {
  1: {
    colors: ["#B85B3D", "#B44A4C"],
    name: "Eli M.",
    pronouns: "he/him",
    role: "Sponsor",
    project: "StreamPlace",
    linkedin: "",
    description: `I was with Livepeer two years ago when we were the title sponsor of nwHacks 2023. Livepeer did dozens and dozens of hackathons all over the world.

I've attended hackathons on 4 different continents and nwHacks was my favourite one by far. Just the staff and the quality of hacks produced by the hackers and everything.`,
  },
  2: {
    colors: ["#365BCA", "#6D80CC"],
    name: "Jason F.",
    pronouns: "he/him",
    role: "Mentor",
    project: "Meta",
    linkedin: "",
    description: `I believe that I've done enough hackathons, so I thought, 'Why not try this new field of mentoring?'. I feel really great helping people — during HackCamp, I helped a lot of teams and even someone who ended up being a winner. Today in the opening ceremony, he recognized me and thanked me for helping him, so that was a great moment. `,
  },
  3: {
    colors: ["#B95F89", "#8D5C97"],
    name: "Diego D.",
    pronouns: "he/him",
    role: "Hacker",
    project: "Developer",
    devpost: "",
    linkedin: "",
    description: `My absolute favourite part about hackathons is having a place that forces you to step out of your comfort zone. I consider hackathons an accelerator for growth. What I get in 12 or 24 hours is equivalent to a month or two of growth, if I were to go at my own pace! So, I just love having that environment where I can speed up my learning and speed up the things that I’m doing by leaving my comfort zone and having that competitive pressure. 

You guys are the largest in Western Canada. It's my first time being here, so far loving it. I love the organization, the venue, and the environment. I also really like how friendly everyone is. It's a competitive environment — everyone wants to win, but also everyone's happy to say hi — even if they're strangers. It's just that comradery of having a shared goal.`,
  }
}

const Testimonials = () => {
  const [ selected, setSelected] = useState(null);
  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = (id) => {
    if (!isMobile) {
      setSelected(id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setSelected(null);
    }
  };

  return (
    <>
    <div id="testimonials" />
      <MobileHeader >
        <Title>
          Hear from our nwHacks 2025 community
        </Title>
        <InstructionText>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.904 17.563C7.95718 17.8019 8.08215 18.0189 8.26214 18.1847C8.44214 18.3506 8.66855 18.4574 8.91101 18.491C9.15347 18.5245 9.40037 18.4831 9.61862 18.3722C9.83686 18.2614 10.016 18.0865 10.132 17.871L12.222 14.778L17.129 19.685C17.2281 19.7841 17.3457 19.8627 17.4752 19.9163C17.6046 19.9699 17.7434 19.9975 17.8835 19.9975C18.0236 19.9975 18.1624 19.9699 18.2918 19.9163C18.4213 19.8627 18.5389 19.7841 18.638 19.685L19.685 18.638C19.7841 18.5389 19.8627 18.4213 19.9163 18.2918C19.9699 18.1624 19.9975 18.0236 19.9975 17.8835C19.9975 17.7434 19.9699 17.6046 19.9163 17.4752C19.8627 17.3457 19.7841 17.2281 19.685 17.129L14.778 12.222L17.891 10.132C18.1065 10.0159 18.2814 9.8367 18.3921 9.61839C18.5029 9.40008 18.5442 9.15312 18.5106 8.91064C18.477 8.66816 18.37 8.44177 18.204 8.26184C18.038 8.08191 17.821 7.95704 17.582 7.904L4 4L7.904 17.563Z" stroke="#213553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Select a bubble to learn more!
        </InstructionText>
      </MobileHeader>
      <Container>
        {/* Background framer */}
        <BackgroundFrame>
          <BGA />
          <BGB />
        </BackgroundFrame>

        {/* Real content */}
        <ContentGrid>
          <LeftColumn>
            {selected === null ? (
              <DefaultStateContainer>
                <Title>
                  Hear from our <br/>nwHacks 2025 community
                </Title>
                <InstructionText>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.904 17.563C7.95718 17.8019 8.08215 18.0189 8.26214 18.1847C8.44214 18.3506 8.66855 18.4574 8.91101 18.491C9.15347 18.5245 9.40037 18.4831 9.61862 18.3722C9.83686 18.2614 10.016 18.0865 10.132 17.871L12.222 14.778L17.129 19.685C17.2281 19.7841 17.3457 19.8627 17.4752 19.9163C17.6046 19.9699 17.7434 19.9975 17.8835 19.9975C18.0236 19.9975 18.1624 19.9699 18.2918 19.9163C18.4213 19.8627 18.5389 19.7841 18.638 19.685L19.685 18.638C19.7841 18.5389 19.8627 18.4213 19.9163 18.2918C19.9699 18.1624 19.9975 18.0236 19.9975 17.8835C19.9975 17.7434 19.9699 17.6046 19.9163 17.4752C19.8627 17.3457 19.7841 17.2281 19.685 17.129L14.778 12.222L17.891 10.132C18.1065 10.0159 18.2814 9.8367 18.3921 9.61839C18.5029 9.40008 18.5442 9.15312 18.5106 8.91064C18.477 8.66816 18.37 8.44177 18.204 8.26184C18.038 8.08191 17.821 7.95704 17.582 7.904L4 4L7.904 17.563Z" stroke="#EDE8E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Select a bubble to read
                </InstructionText>
              </DefaultStateContainer>
            ) : (
              <SelectedStateContainer>
                <ProfilePanel>
                  {/* Header with name and tags */}
                  <HeaderRow>
                    <Name>
                      {COPY[selected].name}
                    </Name>
                    <RoleBadge $gradient={`linear-gradient(to bottom right, ${COPY[selected].colors[0]}, ${COPY[selected].colors[1]})`}>
                      {COPY[selected].role}
                    </RoleBadge>
                    <ProjectBadge>
                      {COPY[selected].project}
                    </ProjectBadge>
                  </HeaderRow>
              
                  {/* Pronouns and links */}
                  <LinksRow>
                    <div>
                      {COPY[selected].pronouns}
                    </div>

                    {COPY[selected].linkedin && (
                      <StyledLink href={COPY[selected].linkedin}>
                        LinkedIn
                      </StyledLink>
                    )}
                    
                    {COPY[selected]?.devpost && (
                      <StyledLink href={COPY[selected].devpost}>
                        DevPost
                      </StyledLink>
                    )}
                  </LinksRow>
              
                  {/* Testimonial text */}
                  <Description>
                    {COPY[selected].description}
                  </Description>
                </ProfilePanel>
              </SelectedStateContainer>
            )}
          </LeftColumn>

          <ButtonsContainer onMouseLeave={handleMouseLeave} $hideOnMobile={selected !== null}>
            {[{
              id: 3,
              name: "Diego D.",
              colors: ["#B85B3D", "#B44A4C"],
              position:"Hacker"
            },{
              id: 2,
              name: "Jason F.",
              colors: ["#365BCA", "#6D80CC"],
              position:"Mentor",
              isRight: true
            },{
              id: 1,
              name: "Eli M.",
              colors: ["#B95F89", "#8D5C97"],
              position:"Sponsor"
            }].map((p) => (
              <PersonButton 
                key={p.id}
                $isRight={p.isRight}
                $isSelected={selected === p.id}
                onMouseEnter={() => handleMouseEnter(p.id)}
                onClick={() => setSelected(p.id)}
              >
                <ButtonName>
                  {p.name}
                </ButtonName>
                <ButtonBadge $gradient={`linear-gradient(to bottom right, ${p.colors[0]}, ${p.colors[1]})`}>
                  {p.position}
                </ButtonBadge>
              </PersonButton>
            ))}
          </ButtonsContainer>

          <MobileProfileContainer $show={selected !== null}>
            {selected !== null && (
              <>
                <CloseButton onClick={() => setSelected(null)}>
                  Back
                </CloseButton>
                <MobileProfilePanel>
                  {/* Header with name and tags */}
                  <HeaderRow>
                    <Name>
                      {COPY[selected].name}
                    </Name>
                    <RoleBadge $gradient={`linear-gradient(to bottom right, ${COPY[selected].colors[0]}, ${COPY[selected].colors[1]})`}>
                      {COPY[selected].role}
                    </RoleBadge>
                    <ProjectBadge>
                      {COPY[selected].project}
                    </ProjectBadge>
                  </HeaderRow>
              
                  {/* Pronouns and links */}
                  <LinksRow>
                    <div>
                      {COPY[selected].pronouns}
                    </div>

                    {COPY[selected].linkedin && (
                      <StyledLink href={COPY[selected].linkedin}>
                        LinkedIn
                      </StyledLink>
                    )}
                    
                    {COPY[selected]?.devpost && (
                      <StyledLink href={COPY[selected].devpost}>
                        DevPost
                      </StyledLink>
                    )}
                  </LinksRow>
              
                  {/* Testimonial text */}
                  <Description>
                    {COPY[selected].description}
                  </Description>
                </MobileProfilePanel>
              </>
            )}
          </MobileProfileContainer>
        </ContentGrid>
      </Container>
    </>
  )
}

export default Testimonials
