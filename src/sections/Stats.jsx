import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes, createGlobalStyle, css } from 'styled-components'

const GlobalCounterStyles = createGlobalStyle`
  /* declare animated custom property for numeric counters */
  @property --num {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
  }
  /* (removed hard-coded keyframes; dynamic keyframes are injected at runtime) */
`

const StatsContainer = styled.div`
  width: 100vw;
  aspect-ratio: 1512/1800;
  position: relative;
  z-index: 2;
  background: linear-gradient(to bottom, #f9f2ea 0%, #76c7ea 15%, #c1eefe 50%, #b0e2fb 70%, #74b0e4 100%);

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1800;
  }
`

const Rain = styled.img`
  position: absolute;
  width: calc(100vw * (1805 / 1512));
  top: calc(100vw * (-30 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (600 / 393));
    top: calc(100vw * (-10 / 393));
    right: calc(100vw * (-100 / 393));
    opacity: 0.6;
  }
`

const Whale = styled.img`
  position: absolute;
  width: calc(100vw * (590 / 1512));
  top: calc(100vw * (170 / 1512));
  right: calc(100vw * (300 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (295 / 393));
    top: calc(100vw * (200 / 393));
    right: calc(100vw * (20 / 393));
    transform: scaleX(-1);
  }
`

const CloudBehindHacker = styled.img`
  position: absolute;
  width: calc(100vw * (371 / 1512));
  top: calc(100vw * (350 / 1512));
  right: calc(100vw * (200 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Hackers = styled.img`
  position: absolute;
  width: calc(100vw * (785 / 1512));
  top: calc(100vw * (250 / 1512));
  right: calc(100vw * (100 / 1512));
  z-index: 5;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (340 / 393));
    top: calc(100vw * (240 / 393));
    right: calc(100vw * (100 / 393));
  }
`

const Projects = styled.img`
  position: absolute;
  width: calc(100vw * (608 / 1512));
  top: calc(100vw * (550 / 1512));
  right: calc(100vw * (850 / 1512));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (350 / 393));
    top: calc(100vw * (480 / 393));
    right: calc(100vw * (150 / 393));
  }
`

const ProjectsCloudOne = styled.img`
  position: absolute;
  width: calc(100vw * (280 / 1512));
  top: calc(100vw * (760 / 1512));
  right: calc(100vw * (1150 / 1512));
  z-index: 3;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const ProjectsCloudTwo = styled.img`
  position: absolute;
  width: calc(100vw * (400 / 1512));
  top: calc(100vw * (480 / 1512));
  right: calc(100vw * (1150 / 1512));
  z-index: 0;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MentorsCloudOne = styled.img`
  position: absolute;
  width: calc(100vw * (550 / 1512));
  top: calc(100vw * (600 / 1512));
  right: 0;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (230 / 393));
    top: calc(100vw * (300 / 393));
  }
`

const MentorsCloudTwo = styled.img`
  position: absolute;
  width: calc(100vw * (229 / 1512));
  top: calc(100vw * (850 / 1512));
  right: calc(100vw * (350 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MentorsCloudThree = styled.img`
  position: absolute;
  width: calc(100vw * (243 / 1512));
  top: calc(100vw * (1000 / 1512));
  right: calc(100vw * (200 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Mentors = styled.img`
  position: absolute;
  width: calc(100vw * (404 / 1512));
  top: calc(100vw * (800 / 1512));
  right: 0;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (250 / 393));
    top: calc(100vw * (360 / 393));
    right: 0;
  }
`

const BaseRecapVideo = styled.img`
  position: absolute;
  width: calc(100vw * (728 / 1512));
  top: calc(100vw * (865 / 1512));
  right: calc(100vw * (385 / 1512));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (550 / 393));
    top: calc(100vw * (800 / 393));
    right: calc(100vw * (-83 / 393));
  }
`

const RecapCloud = styled.img`
  position: absolute;
  width: calc(100vw * (274 / 1512));
  top: calc(100vw * (1370 / 1512));
  right: calc(100vw * (450 / 1512));
  z-index: 1;
`

const SmallBlueSphere = styled.img`
  position: absolute;
  width: calc(100vw * (357 / 1512));
  top: calc(100vw * (1470 / 1512));
  right: calc(100vw * (150 / 1512));
  z-index: 0;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (260 / 393));
    top: calc(100vw * (660 / 393));
    right: calc(100vw * (-40 / 393));
  }
`

const SmallJellyfish = styled.img`
  position: absolute;
  width: calc(100vw * (159 / 1512));
  top: calc(100vw * (1000 / 1512));
  left: 0;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const BigJellyfish = styled.img`
  position: absolute;
  width: calc(100vw * (450 / 1512));
  top: calc(100vw * (1000 / 1512));
  left: calc(100vw * (50 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (300 / 393));
    top: calc(100vw * (1250 / 393));
    left: calc(100vw * (-80 / 393));
  }
`

const BigCloud = styled.img`
  position: absolute;
  width: calc(100vw * (390 / 1512));
  top: calc(100vw * (1250 / 1512));
  left: 0;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (180 / 393));
    top: calc(100vw * (1150 / 393));
    left: calc(100vw * (250 / 393));
    transform: scaleX(-1);
  }
`

const SectionHeader = styled.p`
  position: absolute;
  top: calc(100vw * (350 / 1512));
  font-size: calc(100vw * (50 / 1512));
  left: calc(100vw * (150 / 1512));
  color: #1c5f7f;
  font-weight: 500;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 487));
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    top: calc(100vw * (110 / 393));
  }
`

const bob = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`

const HackerDome = styled.div`
  position: relative;
  animation: ${bob} 3s ease-in-out infinite;
  will-change: transform;
`

const ProjectDome = styled.div`
  position: relative;
  animation: ${bob} 3s ease-in-out infinite;
  will-change: transform;
  z-index: 1;
`

const MentorDome = styled.div`
  position: relative;
  animation: ${bob} 3s ease-in-out infinite;
  will-change: transform;
`

const RecapVideo = styled.div`
  position: relative;
  animation: ${bob} 3s ease-in-out infinite;
  will-change: transform;
`

const VideoContainer = styled.div`
  position: absolute;
  width: calc(100vw * (456 / 1512));
  height: calc(100vw * (285 / 1512));
  top: calc(100vw * (900 / 1512));
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (350 / 393));
    height: calc(100vw * (220 / 393));
    top: calc(100vw * (828 / 393));
  }
`

// HACKER NUMBERS container(s)
const NumberHackerContainer = styled.div`
  width: calc(100vw * (166 / 1512));
  height: calc(100vw * (137 / 1512));
  top: calc(100vw * (440 / 1512));
  position: absolute;
  right: calc(100vw * (385 / 1512));
  z-index: 20;

  /* center number and label */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (80 / 393));
    top: calc(100vw * (330 / 393));
    right: calc(100vw * (220 / 393));
  }
`

// Replace the single HackerNumber with a reusable BaseNumber and two styled variants
const BaseNumber = styled.p`
  color: white;
  /* ensure the counter is driven by the custom property --num */
  counter-reset: num var(--num, 0);
  &::before {
    content: counter(num);
    color: inherit;
    font: inherit;
  }
  /* allow optional CSS-based animation (some browsers will use dynamically-injected keyframes instead) */
  ${props =>
    props.animate &&
    css`
      /* leave empty here; dynamic animation is applied via runtime-injected keyframes or inline style */
    `}
`

const HackerNumber = styled(BaseNumber)`
  font-size: calc(100vw * (92 / 1512));
  font-weight: 500;
  /* add any hacker-specific styling here */

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (44 / 393));
  }
`

const NumberProjectContainer = styled.div`
  width: calc(100vw * (133 / 1512));
  height: calc(100vw * (112 / 1512));
  top: calc(100vw * (730 / 1512));
  position: absolute;
  right: calc(100vw * (1090 / 1512));
  z-index: 20;

  /* center number and label */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (92 / 393));
    top: calc(100vw * (600 / 393));
    left: calc(100vw * (20 / 393));
  }
`

const ProjectNumber = styled(BaseNumber)`
  font-size: calc(100vw * (76 / 1512));
  font-weight: 500;
  /* add any project-specific styling here */
  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (50 / 393));
  }
`

// Mentor number variant
const MentorNumber = styled(BaseNumber)`
  font-size: calc(100vw * (82 / 1512));
  font-weight: 500;
  /* add any mentor-specific styling here */

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (41 / 393));
  }
`

const NumberMentorContainer = styled.div`
  width: calc(100vw * (140 / 1512));
  height: calc(100vw * (120 / 1512));
  top: calc(100vw * (940 / 1512));
  position: absolute;
  right: calc(100vw * (40 / 1512));
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (65 / 393));
    top: calc(100vw * (470 / 393));
    right: calc(100vw * (35 / 393));
  }
`

const Label = styled.p`
  font-size: calc(100vw * (40 / 1512));
  color: white;
  font-weight: 500;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (20 / 393));
  }
`

const SecondaryLabel = styled.p`
  font-size: calc(100vw * (32 / 1512));
  color: white;
  font-weight: 500;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (22 / 393));
  }
`

const RecapText = styled.p`
  font-size: calc(100vw * (43 / 1512));
  color: white;
  font-weight: 500;
  text-align: center;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (40 / 393));
  }
`

const RecapTextContainer = styled.p`
  width: calc(100vw * (246 / 1512));
  height: calc(100vw * (78 / 1512));
  position: absolute;
  top: calc(100vw * (1320 / 1512));
  right: calc(100vw * (630 / 1512));
  z-index: 40;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (246 / 393));
    top: calc(100vw * (1140 / 393));
    right: calc(100vw * (73 / 393));
  }
`

const Stats = () => {
  // use separate refs for each counter so they animate independently
  const hackerRef = useRef(null)
  const projectRef = useRef(null)
  const mentorRef = useRef(null)

  // Reusable hook to animate a counter element based on its aria-label target.
  // It will:
  //  - read the target from aria-label
  //  - observe intersection; on intersect it will try to animate via CSS (dynamic keyframes)
  //    if possible, otherwise fall back to a JS requestAnimationFrame incrementer.
  const useCounter = ref => {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
      const node = ref.current
      if (!node) return () => {}

      let raf = null
      let jsStarted = false
      let styleEl = null
      let prevTop = null // track previous top to detect entering-from-above

      const end = parseInt(node.getAttribute('aria-label') || '0', 10)
      const duration = 2000

      const clearPrevious = () => {
        // cancel any running JS fallback
        if (raf) {
          cancelAnimationFrame(raf)
          raf = null
        }
        jsStarted = false
        // remove previous dynamic keyframe style if present
        if (styleEl) {
          document.head.removeChild(styleEl)
          styleEl = null
        }
        // clear inline animation so we can restart
        node.style.animation = 'none'
        // reset the custom property so counter visually resets before restart
        node.style.setProperty('--num', '0')
      }

      const startJsFallback = () => {
        // ensure previous fallback is cleared
        if (jsStarted) {
          if (raf) cancelAnimationFrame(raf)
        }
        jsStarted = true
        let start = null
        const step = ts => {
          if (!start) start = ts
          const elapsed = ts - start
          const progress = Math.min(elapsed / duration, 1)
          const value = Math.floor(progress * end)
          node.style.setProperty('--num', String(value))
          if (elapsed < duration) {
            raf = requestAnimationFrame(step)
          } else {
            node.style.setProperty('--num', String(end))
            raf = null
            jsStarted = false
          }
        }
        raf = requestAnimationFrame(step)
      }

      const onIntersect = entries => {
        entries.forEach(entry => {
          const currentTop = entry.boundingClientRect && entry.boundingClientRect.top
          // detect entering while scrolling down (element moves up => currentTop < prevTop)
          const enteringWhileScrollingDown = prevTop != null ? currentTop < prevTop : true
          // update prevTop for next callback
          prevTop = currentTop

          if (entry.isIntersecting && enteringWhileScrollingDown) {
            setAnimated(true)

            // clear any previous animation work so we can restart cleanly
            clearPrevious()

            // If browser supports CSS.registerProperty we inject dynamic keyframes
            if (typeof CSS !== 'undefined' && 'registerProperty' in CSS) {
              const name = `counter-${end}-${Math.random().toString(36).slice(2)}`
              styleEl = document.createElement('style')
              styleEl.textContent = `
                @keyframes ${name} {
                  from { --num: 0; }
                  to { --num: ${end}; }
                }
              `
              document.head.appendChild(styleEl)
              // force reflow and then apply the new animation to restart
              // (setting to 'none' above ensures the new animation will start)
              // eslint-disable-next-line no-unused-expressions
              node.offsetWidth
              node.style.animation = `${name} ${duration}ms ease-out forwards`
            } else {
              // fallback
              startJsFallback()
            }
          }
        })
      }

      const obs = new IntersectionObserver(onIntersect, { threshold: 0.5 })
      obs.observe(node)

      return () => {
        if (raf) cancelAnimationFrame(raf)
        obs.disconnect()
        clearPrevious()
      }
    }, [ref])

    return animated
  }

  // attach hook for each counter
  const hackerAnimated = useCounter(hackerRef)
  const projectAnimated = useCounter(projectRef)
  const mentorAnimated = useCounter(mentorRef)

  return (
    <StatsContainer id="stats">
      <GlobalCounterStyles />
      <SectionHeader>Last year we had...</SectionHeader>
      <Rain src="./assets/images/stats/rain.png" />
      <Whale src="./assets/images/stats/whale.svg" />
      <HackerDome>
        <NumberHackerContainer>
          {/* Hacker counter: target comes from aria-label and is styled via HackerNumber */}
          <HackerNumber ref={hackerRef} aria-label="734" animate={hackerAnimated} />
          <Label>Hackers</Label>
        </NumberHackerContainer>
        <CloudBehindHacker src="./assets/images/stats/cloud_behind_hacker.svg" />
        <Hackers src="./assets/images/stats/stats_hackers.png" />
      </HackerDome>
      <ProjectDome>
        <NumberProjectContainer>
          {/* Project counter: target comes from aria-label and is styled via ProjectNumber */}
          <ProjectNumber ref={projectRef} aria-label="182" animate={projectAnimated} />
          <SecondaryLabel>Projects</SecondaryLabel>
        </NumberProjectContainer>
        <Projects src="./assets/images/stats/stats_projects.png" />
      </ProjectDome>
      <ProjectsCloudOne src="./assets/images/stats/projects_cloud_one.svg" />
      <ProjectsCloudTwo src="./assets/images/stats/projects_cloud_two.svg" />
      <MentorDome>
        <NumberMentorContainer>
          {/* Mentor counter: target comes from aria-label and is styled via MentorNumber */}
          <MentorNumber ref={mentorRef} aria-label="68" animate={mentorAnimated} />
          <SecondaryLabel>Mentors</SecondaryLabel>
        </NumberMentorContainer>
        <Mentors src="./assets/images/stats/stats_mentors.png" />
      </MentorDome>
      <MentorsCloudOne src="./assets/images/stats/mentors_cloud_one.svg" />
      <MentorsCloudTwo src="./assets/images/stats/mentors_cloud_two.svg" />
      <MentorsCloudThree src="./assets/images/stats/mentors_cloud_three.svg" />
      <RecapVideo>
        <VideoContainer>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/watch?v=TtYBTPVJCwo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </VideoContainer>
        <BaseRecapVideo src="./assets/images/stats/base_recap_video.png" />
        <RecapTextContainer>
          <RecapText>
            2025
            <br />
            Recap
          </RecapText>
        </RecapTextContainer>
      </RecapVideo>
      <RecapCloud src="./assets/images/stats/recap_cloud.svg" />

      <SmallBlueSphere src="./assets/images/stats/small_blue_sphere.png" />
      <SmallJellyfish src="./assets/images/stats/small_jellyfish.png" />
      <BigJellyfish src="./assets/images/stats/big_jellyfish.png" />
      <BigCloud src="./assets/images/stats/big_cloud.svg" />
    </StatsContainer>
  )
}

export default Stats
