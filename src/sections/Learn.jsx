/* eslint-disable react/react-in-jsx-scope */
import { SectionContainer } from '@lib/Containers'
import { useState } from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'

const InfoContainer = styled.div`
  /* background: #150c27; */
  position: relative;
  top: -26vw;
  aspect-ratio: 1440/989;
  z-index: 4;

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/events/background.svg'); */
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;

    aspect-ratio: 412/1154;
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/learn/learnmore_background.png');
  background-size: 105vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 1;

  position: absolute;
  bottom: 0;
  height: 100%;
  width: 105%;
  left: -3.5vw;

  ${p => p.theme.mediaQueries.mobile} {
    background: none;
  }
`

const LeftPanel = styled.div`
  background: url('assets/background/learn/left-panel.svg') no-repeat center;
  background-size: 21.5vw;
  /* background-color: pink; */
  height: 26.7vw;
  width: 21.3vw;
  top: 22.4vw;
  left: 7.1vw;
  position: absolute;
  z-index: 5;
`

const LeftPanelNoHover = styled.div`
  background: url('assets/background/learn/left-panel-no-hover.svg') no-repeat center;
  background-size: 21.5vw;
  height: 26.7vw;
  width: 21.3vw;
  top: 22.4vw;
  left: 7.1vw;
  position: absolute;
  opacity: ${props => (props.isHovered ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  z-index: 6; /* Higher than LeftPanel to appear on top */
`

const RightPanel = styled.div`
  background: url('assets/background/learn/right-panel.svg') no-repeat center;
  background-size: 21.5vw;
  height: 26.7vw;
  width: 21.3vw;
  top: 22.4vw;
  left: 31.38vw;
  position: absolute;
  z-index: 5;
`

const RightPanelNoHover = styled.div`
  background: url('assets/background/learn/right-panel-no-hover.svg') no-repeat center;
  background-size: 21.5vw;
  height: 26.7vw;
  width: 21.3vw;
  top: 22.4vw;
  left: 31.38vw;
  position: absolute;
  opacity: ${props => (props.isHovered ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  z-index: 6; /* Higher than LeftPanel to appear on top */
`

const OurEventsTitle = styled.div`
  background: url('assets/background/learn/our-events-title.svg') no-repeat right;
  background-size: 38vw;
  height: 6.5vw;
  width: 40%;
  z-index: 1;
  position: absolute;
  top: 7vw;
  right: 10vw;
  left: 7.2vw;
  /* aspect-ratio: 1 / 1.5; */
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CustomText = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  width: ${props => props.width};
  position: absolute;
  z-index: 99;

  ${props => props.fontStyle && `font-style: ${props.fontStyle};`}

  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.right && `right: ${props.right};`}
`

const PositionedList = styled.ul`
  position: absolute;
  top: 31.2vw;
  left: 68.5vw;
  width: 30vw;
`

const BulletText = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  width: ${props => props.width};
  z-index: 99;
  font-weight: 200;
  padding-top: 0.5vw;

  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.right && `right: ${props.right};`}
`

const ToggleText = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  width: ${props => props.width};
  position: absolute;
  z-index: 99;

  ${props => props.fontStyle && `font-style: ${props.fontStyle};`}

  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.right && `right: ${props.right};`}

  &:hover {
    cursor: pointer;
  }
`

const ToggleOpenIcon = styled.div`
  background: url('assets/background/learn/toggleOpen.png') no-repeat center;
  background-size: contain;
  height: 1.3vw;
  width: 1.3vw;
  margin-right: 0.5vw;
  display: inline-block;
  position: relative;
  vertical-align: middle;
`

const ToggleClosedIcon = styled.div`
  background: url('assets/background/learn/toggleClosed.png') no-repeat center;
  background-size: contain;
  height: 1.3vw;
  width: 1.3vw;
  margin-right: 0.5vw;
  display: inline-block;
  position: relative;
  vertical-align: middle;
`

const LearnMoreIcon = styled.div`
  background: url('assets/background/learn/learn-more-icon.svg') no-repeat center;
  background-size: contain;
  height: 1.3vw;
  width: 1.3vw;
  display: inline-block;
  position: relative;
  vertical-align: middle;
`

const YouTubeContainer = styled.div`
  position: absolute;
  top: 36vw;
  left: 66.4vw;
  width: 30vw;
  padding-bottom: 15.4vw;
  z-index: 10;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const EventBox = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 100;
  position: absolute;

  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.right && `right: ${props.right};`}
`

const FadeContent = styled.div`
  opacity: ${props => (props.isHovered ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  position: absolute;

  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.right && `right: ${props.right};`}
`

const EventTitle = styled.h2`
  color: #45171a;
  font-size: 2.3vw;
  /* font-weight: 900; */
  font-weight: 900;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 6vw;
  }
`

const Date = styled.div`
  color: #45171a;
  font-size: 1.6vw;
  font-style: normal;
  font-weight: 600;
  margin-top: 0.34vw;
  /* margin-bottom: 4vw; */

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 4vw;
    margin-top: 0;
    margin-bottom: 12px;
  }
`

const Learn = () => {
  const [isLeftHovered, setIsLeftHovered] = useState(false)
  const [isRightHovered, setIsRightHovered] = useState(false)
  const [toggleOpen, setToggleOpen] = useState(false)

  return (
    <InfoContainer id="events">
      <BgScroll>
        {/* <StyledTitle>Our Events</StyledTitle> */}
        <OurEventsTitle />
        <CustomText left="67vw" top="8vw" color="white" fontSize="3vw">
          What is a Hackathon
        </CustomText>
        <CustomText left="68.9vw" top="15.4vw" color="white" fontSize="1.3vw">
          Team
        </CustomText>
        <CustomText left="78.7vw" top="15.4vw" color="white" fontSize="1.3vw">
          Team Formation
        </CustomText>
        <CustomText left="94.4vw" top="15.4vw" color="white" fontSize="1.3vw">
          Solo
        </CustomText>
        <CustomText left="9.4vw" color="#45171A" top="15.7vw" width="42vw" fontSize="1.1vw">
          This year, we are bringing you a 2-day, in-person event where you’ll learn new skills, connect with
          like-minded enthusiasts, build solutions to tackle challenges together, and hopefully leave having developed a
          newfound passion for tech!
        </CustomText>
        <CustomText left="64.5vw" width="34.5vw" top="20.5vw" fontSize="1.1vw">
          A hackathon is a collaborative, typically multi-day invention marathon where participants come together to
          ideate, design, and build projects in a limited time frame. It’s a space to learn, experiment, and bring your
          unique ideas to life, regardless of your experience level.
        </CustomText>
        <ToggleText onClick={() => setToggleOpen(!toggleOpen)} left="66.5vw" width="34.5vw" top="29vw" fontSize="1.2vw">
          {toggleOpen ? <ToggleOpenIcon /> : <ToggleClosedIcon />} What are the benefits of attending a hackathon?
        </ToggleText>
        {toggleOpen
          ? (
          <div>
            <PositionedList>
              <li>
                <BulletText color="white" width="30vw" fontSize="1.1vw">
                  Learn new technologies with the help of workshops and mentors
                </BulletText>
              </li>
              <li>
                {' '}
                <BulletText color="white" width="30vw" fontSize="1.1vw">
                  {' '}
                  Network with like-minded peers and industry recruiters{' '}
                </BulletText>
              </li>
              <li>
                {' '}
                <BulletText color="white" width="30vw" fontSize="1.1vw">
                  {' '}
                  Collect swag, eat free food, engage in fun activities, and make memories to last a lifetime{' '}
                </BulletText>
              </li>
              <li>
                <BulletText color="white" width="30vw" fontSize="1.1vw">
                  {' '}
                  At the end of it all, have your own project to show off and add to your resume!{' '}
                </BulletText>
              </li>
            </PositionedList>
            <CustomText left="64.5vw" width="34.5vw" top="45vw" fontSize="1.1vw">
              To learn more about hackathons and what to expect, check out our article on{' '}
              <a
                href="https://medium.com/nwplusubc/nwchats-what-is-a-hackathon-7b5032011487"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Medium
              </a>
              .{' '}
            </CustomText>
          </div>
            )
          : (
          <div>
            <CustomText left="64.5vw" width="34.5vw" top="32vw" fontSize="1.1vw">
              To learn more about hackathons and what to expect, check out our article on{' '}
              <a
                href="https://medium.com/nwplusubc/nwchats-what-is-a-hackathon-7b5032011487"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Medium
              </a>
              .{' '}
            </CustomText>
            <YouTubeContainer>
              <YouTube
                opts={{
                  height: '100%',
                  width: '100%'
                }}
                videoId="CA5YRDdyu90"
              />
            </YouTubeContainer>
            <CustomText fontStyle="italic" left="70vw" width="34.5vw" top="52.5vw" fontSize="1.1vw">
              Check out our recap from HackCamp 2023!
            </CustomText>
          </div>
            )}
        <LeftPanel onMouseEnter={() => setIsLeftHovered(true)} onMouseLeave={() => setIsLeftHovered(false)} />
        <LeftPanelNoHover
          onMouseEnter={() => setIsLeftHovered(true)}
          onMouseLeave={() => setIsLeftHovered(false)}
          isHovered={!isLeftHovered}
        />
        <RightPanel onMouseEnter={() => setIsRightHovered(true)} onMouseLeave={() => setIsRightHovered(false)} />
        <RightPanelNoHover
          onMouseEnter={() => setIsRightHovered(true)}
          onMouseLeave={() => setIsRightHovered(false)}
          isHovered={!isRightHovered}
        />
        <EventBox
          onMouseEnter={() => setIsLeftHovered(true)}
          onMouseLeave={() => setIsLeftHovered(false)}
          left="10vw"
          top="25vw"
        >
          <EventTitle>Learn Day</EventTitle>
          <Date>Nov 18, 2024</Date>
          <FadeContent top="5.4vw" isHovered={!isLeftHovered}>
            <CustomText fontSize="1.1vw" color="#45171a" width="8vw">
              learn more <LearnMoreIcon />
            </CustomText>
          </FadeContent>
          <FadeContent top="6.5vw" isHovered={isLeftHovered}>
            <CustomText width="15vw" color="#45171a" fontSize="1.1vw">
              A day of workshops and skill building in preparation for Build Day. With topics ranging from web
              development, version control, design and more, we will have something for you!
            </CustomText>
          </FadeContent>
        </EventBox>
        <EventBox
          onMouseEnter={() => setIsRightHovered(true)}
          onMouseLeave={() => setIsRightHovered(false)}
          left="34.5vw"
          top="25vw"
        >
          <EventTitle>Build Day</EventTitle>
          <Date>Nov 19, 2024</Date>
          <FadeContent top="5.4vw" isHovered={!isRightHovered}>
            <CustomText fontSize="1.1vw" color="#45171a" width="8vw">
              learn more <LearnMoreIcon />
            </CustomText>
          </FadeContent>
          <FadeContent top="6.5vw" isHovered={isRightHovered}>
            <CustomText fontSize="1.1vw" width="15.5vw" color="#45171a">
              A 12-hour hackathon focused around creating projects centred around accessibility, inclusivity, and
              diversity. For project submission, HackCamp will donate $5 to the{' '}
              <a
                href="http://www.bcchildrens.ca/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#45171a', textDecoration: 'underline' }}
              >
                BC Children’s Hospital
              </a>
              ,{' '}
              <a
                href="https://www.naturetrust.bc.ca/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#45171a', textDecoration: 'underline' }}
              >
                Nature Trust of British Columbia
              </a>
              , or{' '}
              <a
                href="https://alzheimer.ca/en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#45171a', textDecoration: 'underline' }}
              >
                Alzheimer&apos;s Society of Canada
              </a>
              .
            </CustomText>
          </FadeContent>
        </EventBox>
      </BgScroll>
    </InfoContainer>
  )
}

export default Learn
