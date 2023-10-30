import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
// eslint-disable-next-line import/no-named-default
import anime from 'animejs'
import { Header3 } from '@components/Typography'

const profiles = [
  {
    img: '/assets/profiles/Anna_Kovtunenko.png',
    name: 'Anna Kovtunenko',
    emoji: '🌺',
    color: '#01DACC',
    title: '1st Year Rep',
    social: "https://www.linkedin.com/in/anna-kovtunenko/"
  },
  {
    img: '/assets/profiles/Alan_Wang.png',
    name: 'Alan Wang',
    emoji: '🪐',
    color: '#01DACC',
    title: 'nwHacks Logistics Director',
    social: "https://www.linkedin.com/in/alan-wang-a577b81b5/"
  },
  {
    img: '/assets/profiles/Alex_Hernandez.png',
    name: 'Alex Hernandez',
    emoji: '🦖',
    color: '#A1C9BA',
    title: 'nwHacks Logistics Coordinator',
    social: "https://alexdshernandez.com/"
  },
  {
    img: '/assets/profiles/Alvin_Kam.png',
    name: 'Alvin Kam',
    emoji: '💀',
    color: '#01DACC',
    title: 'Development Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Alvin_Zhou.png',
    name: 'Alvin Zhou',
    emoji: '✨',
    color: '#01DACC',
    title: 'Sponsorship Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Angela_Zhou.png',
    name: 'Angela Zhou',
    emoji: '🐣',
    color: '#FAF4EA',
    title: 'cmd-f Logistics Director',
    social: "https://www.linkedin.com/in/anggelazhou/"
  },
  {
    img: '/assets/profiles/Angelina_Hsu.png',
    name: 'Angelina Hsu',
    emoji: '🧃',
    color: '#90A58A',
    title: 'Design Coordinator',
    social: "https://www.linkedin.com/in/angelina-hsu-54035416a/"
  },
  {
    img: '/assets/profiles/Aurora_Cheng.png',
    name: 'Aurora Cheng',
    emoji: '🍡',
    color: '#01DACC',
    title: 'Marketing Coordinator',
    social: "https://www.linkedin.com/in/aurora-cheng04/"
  },
  {
    img: '/assets/profiles/Bernice_Tang.png',
    name: 'Bernice Tang',
    emoji: '🦋',
    color: '#B19BF0',
    title: 'Engagement Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Byron_Wang.png',
    name: 'Byron Wang',
    emoji: '😌',
    color: '#D1FFDF',
    title: 'HackCamp Logistics Director',
    social: "https://www.byronwang.com/"
  },
  {
    img: '/assets/profiles/Charlene_Chiu.png',
    name: 'Charlene Chiu',
    emoji: '🌸',
    color: '#EBCEDF',
    title: 'cmd-f Logistics Coordinator',
    social: "https://www.linkedin.com/in/charlenechiu-chl/"
  },
  {
    img: '/assets/profiles/Cristen_Lin.png',
    name: 'Cristen Lin',
    emoji: '🍪',
    color: '#59896C',
    title: 'Marketing Coordinator',
    social: "https://www.linkedin.com/in/cristen-lin"
  },
  {
    img: '/assets/profiles/Daphne_Tian.png',
    name: 'Daphne Tian',
    emoji: '🐅',
    color: '#BDB5D5',
    title: 'Marketing Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Donald_Lee.png',
    name: 'Donald Lee',
    emoji: '😮',
    color: '#3988FF',
    title: 'Development Coordinator',
    social: "https://donaldlee.xyz/"
  },
  {
    img: '/assets/profiles/Edward_Li.png',
    name: 'Edward Li',
    emoji: '🧙‍♂️',
    color: '#66b900',
    title: 'nwHacks Logistics Coordinator',
    social: "http://www.edward-li.com/"
  },
  {
    img: '/assets/profiles/Gordon_Wu.png',
    name: 'Gordon Wu',
    emoji: '🤠',
    color: '#5E6B62',
    title: 'Design Coordinator',
    social: "https://www.linkedin.com/in/gordonwu08/"
  },
  {
    img: '/assets/profiles/Irene_Zhang.png',
    name: 'Irene Zhang',
    emoji: '🖌️',
    color: '#AED5D9',
    title: 'Engagement Coordinator',
    social: "https://www.linkedin.com/in/izhang02/"
  },
  {
    img: '/assets/profiles/Isaac_Chung.png',
    name: 'Isaac Chung',
    emoji: '🙈',
    color: '#113969',
    title: 'Sponsorship Director',
    social: "https://www.linkedin.com/in/isaackcchung/"
  },
  {
    img: '/assets/profiles/Jade_Permata.png',
    name: 'Jade Permata',
    emoji: '✨',
    color: '#01DACC',
    title: 'Design Coordinator',
    social: "https://www.linkedin.com/in/jadetjandra"
  },
  {
    img: '/assets/profiles/JaeWu_Chun.png',
    name: 'Jae Wu Chun',
    emoji: '🍗',
    color: '#FFC6ED',
    title: 'Treasurer',
    social: "https://www.jaewuchun.com/"
  },
  {
    img: '/assets/profiles/Janaye_Cheong.png',
    name: 'Janaye Cheong',
    emoji: '🎐',
    color: '#73b791',
    title: 'Treasurer Coordinator',
    social: "https://www.linkedin.com/in/janaye-cheong-105513/"
  },
  {
    img: '/assets/profiles/Jennifer_Nguyen.png',
    name: 'Jennifer Nguyen',
    emoji: '☆',
    color: '#01DACC',
    title: 'nwHacks Logistics Coordinator',
    social: "www.linkedin.com/in/jennguyen-ubc"
  },
  {
    img: '/assets/profiles/Jennifer_Shui.png',
    name: 'Jennifer Shui',
    emoji: '🦜',
    color: '#ABCFFF',
    title: 'Content Writer',
    social: "https://www.linkedin.com/in/jennifershui/"
  },
  {
    img: '/assets/profiles/Jessica_Liu.png',
    name: 'Jessica Liu',
    emoji: '☕️',
    color: '#FFDDE6',
    title: 'Engagement Coordinator',
    social: "https://www.linkedin.com/in/jessicaziliu/"
  },
  {
    img: '/assets/profiles/Joanne_Lee.png',
    name: 'Joanne Lee',
    emoji: '✨',
    color: '#7FBCF5',
    title: 'Design Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Kashish_Garg.png',
    name: 'Kashish Garg',
    emoji: '🐒',
    color: '#01DACC',
    title: 'HackCamp Logistics Coordinator',
    social: "https://www.linkedin.com/in/kashishgarg1/"
  },
  {
    img: '/assets/profiles/Kevin_Gu.png',
    name: 'Kevin Gu',
    emoji: '🍏',
    color: '#13B1C9',
    title: 'Sponsorship Coordinator',
    social: "https://www.linkedin.com/in/kevin-gu-/"
  },
  {
    img: '/assets/profiles/Kitty_Liu.png',
    name: 'Kitty Liu',
    emoji: '🐈',
    color: '#FFE633',
    title: 'Hackcamp Logistics Coordinator',
    social: "https://www.linkedin.com/in/kittyliu3"
  },
  {
    img: '/assets/profiles/Lincoln_Lee.png',
    name: 'Lincoln Lee',
    emoji: '🦝',
    color: '#2E2E54',
    title: 'Development Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Linda_Ma.png',
    name: 'Linda Ma',
    emoji: '💫',
    color: '#dcd0ff',
    title: 'Engagement Director',
    social: "https://www.linkedin.com/in/linda--ma"
  },
  {
    img: '/assets/profiles/Lucas_Gingera.png',
    name: 'Lucas Gingera',
    emoji: '😶',
    color: '#01DACC',
    title: '1st Year Rep',
    social: ""
  },
  {
    img: '/assets/profiles/Martin_Cai.png',
    name: 'Martin Cai',
    emoji: '🍵',
    color: '#FFF8DC',
    title: 'Co-President',
    social: "https://www.martincai.xyz"
  },
  {
    img: '/assets/profiles/Maureen_Luo.png',
    name: 'Maureen Luo',
    emoji: '🫶🏻',
    color: '#c4d6bf',
    title: 'Design Director',
    social: "https://www.maureenluo.com/"
  },
  {
    img: '/assets/profiles/Melvin_Teo.png',
    name: 'Melvin Teo',
    emoji: '💡',
    color: '#003366',
    title: 'Development Director',
    social: "https://www.linkedin.com/in/melvinhteo/"
  },
  {
    img: '/assets/profiles/Michelle_Fung.png',
    name: 'Michelle Fung',
    emoji: '🤩',
    color: '#D9E7E2',
    title: 'Sponsorship Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Michelle_Kim.png',
    name: 'Michelle Kim',
    emoji: '🧸',
    color: '#0DEFE1',
    title: 'Project Manager',
    social: "https://www.linkedin.com/in/michelle-yeojin-kim/"
  },
  {
    img: '/assets/profiles/Michelle_Wang.png',
    name: 'Michelle Wang',
    emoji: '❄️',
    color: '#9CDDFB',
    title: 'Sponsorship Coordinator',
    social: "https://www.linkedin.com/in/michelle-wang-mw/"
  },
  {
    img: '/assets/profiles/Nicholas_Wong.png',
    name: 'Nicholas Wong',
    emoji: '😎',
    color: '#01DACC',
    title: 'HackCamp Logistics Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Oliver_Luo.png',
    name: 'Oliver Luo',
    emoji: '👴',
    color: '#FFA500',
    title: 'Sponsorship Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Samantha_Tseng.png',
    name: 'Samantha Tseng',
    emoji: '🍁',
    color: '#FF6666',
    title: 'Development Coordinator',
    social: ""
  },
  {
    img: '/assets/profiles/Sami_Nourji.png',
    name: 'Sami Nourji',
    emoji: '🌊',
    color: '#EFC69A',
    title: 'nwHacks Logistics Coordinator',
    social: "www.linkedin.com/in/saminourji"
  },
  {
    img: '/assets/profiles/Sophia_Lee.png',
    name: 'Sophia Lee',
    emoji: '🤡',
    color: '#be86f7',
    title: 'Sponsorship Coordinator',
    social: "https://www.linkedin.com/in/iiaylee"
  },
  {
    img: '/assets/profiles/Taryn_Wou.png',
    name: 'Taryn Wou',
    emoji: '🦦',
    color: '#ABF0E3',
    title: 'Co-President',
    social: "https://www.tarynwou.xyz/"
  },
  {
    img: '/assets/profiles/Trisha_Sia.png',
    name: 'Trisha Sia',
    emoji: '🌱',
    color: '#9fb9e7',
    title: 'cmd-f Logistics Coordinator',
    social: "https://www.linkedin.com/in/trisha-sia/"
  },
  {
    img: '/assets/profiles/Victoria_Lim.png',
    name: 'Victoria Lim',
    emoji: '✨',
    color: '#BDE6EC',
    title: 'Marketing Director',
    social: "https://www.linkedin.com/in/lim-victoria/"
  },
  {
    img: '/assets/profiles/Yan_Sidyakin.png',
    name: 'Yan Sidyakin',
    emoji: '🌚',
    color: '#FF7E4D',
    title: 'Development Coordinator',
    social: "https://linkedin.com/in/sidyakinian"
  },
  {
    img: '/assets/profiles/Yeojun_Han.png',
    name: 'Yeojun Han',
    emoji: '🧸',
    color: '#B3CEE5',
    title: 'cmd-f Logistics Coordinator',
    social: "https://www.linkedin.com/in/yeojun/"
  }
];

const StyledTitle = styled(Header3)`
  margin-top: 1em;
  color: #E2D6FF;
  filter: drop-shadow(0 0 4px #E2D6FF);

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 5.5vw;
  }
`

const ProfileContent = styled.p`
  color: white;
  span {
    margin-right: 8px;
  }
  height: 1em;
  b {
    margin-right: 8px;
  }
`

const ProfileList = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
`

const ProfileImage = styled.img`
  &:hover {
    transform: scale(1.15);
    opacity: 1;
  }
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: ${(p) => p.color};
  object-fit: cover;
  margin: 10px 15px;
  transition: all 100ms ease-in-out;
  opacity: 0.69;
  ${(p) => p.theme.mediaQueries.mobile} {
    width: 50px;
    height: 50px;
  }
`

let lastTime = -1
let accumulateTime = -1
const MAX_SPEED = 2

export default function Team() {
  const [animator, setAnimator] = useState()
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [accel, setAccel] = useState(1)
  const requestRef = useRef()

  // https://codesandbox.io/s/anime-js-speed-adjustment-lm0ui?file=/src/index.js:158-166
  // https://animejs.com/documentation/#tick
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  const animate = (animatorP, accelP, velocity, t) => {
    let vel
    if (accumulateTime === -1) {
      accumulateTime = t
    } else {
      const deltaT = t - lastTime
      vel = velocity + 0.05 * accelP
      vel = Math.max(0, vel)
      vel = Math.min(MAX_SPEED, vel)
      accumulateTime += deltaT * vel
    }
    lastTime = t
    animator.tick(accumulateTime)
    requestRef.current = window.requestAnimationFrame((tP) =>
      animate(animatorP, accelP, vel || velocity, tP)
    )
  }

  useEffect(() => {
    if (animator) {
      const vel = accel === 1 ? 0 : MAX_SPEED
      requestRef.current = window.requestAnimationFrame((t) =>
        animate(animator, accel, vel, t)
      )
    }
    // Cleanup animation frame listener
    return () => window.cancelAnimationFrame(requestRef.current)
  }, [animator, accel])

  useEffect(() => {
    setAnimator(
      anime({
        targets: ['#anim-profiles'],
        easing: 'linear',
        loop: true,
        translateX: [-(90 * profiles.length), 0],
        duration: 3000 * profiles.length,
        autoplay: false
      })
    )
  }, [setAnimator])

  return (
    <>
      <StyledTitle>Meet the minds behind HackCamp</StyledTitle>
      <ProfileContent>
        <span>
          <b>{selectedProfile?.name}</b> {selectedProfile?.emoji}
        </span>{' '}
        {selectedProfile?.title}
      </ProfileContent>
      <ProfileList
        onMouseEnter={() => {
          setAccel(-1)
        }}
        onMouseLeave={() => {
          setAccel(1)
        }}
      >
        {
          // will-change enables hardware acceleration for smoother animations
          // duplicate profile maps so that the carousel can loop infinitely
        }
        <div style={{ willChange: 'transform' }} id='anim-profiles'>
          {profiles.map((profile) => (
            <a href={profile.social} key={profile.img}>
              <ProfileImage
                src={profile.img}
                color={profile.color}
                onClick={() => setSelectedProfile(profile)}
                onMouseEnter={() => setSelectedProfile(profile)}
                onMouseLeave={() => setSelectedProfile({})}
              />
            </a>
          ))}
          {profiles.map((profile) => (
            <a href={profile.social} key={`${profile.img}2`}>
              <ProfileImage
                src={profile.img}
                color={profile.color}
                onClick={() => setSelectedProfile(profile)}
                onMouseEnter={() => setSelectedProfile(profile)}
                onMouseLeave={() => setSelectedProfile({})}
              />
            </a>
          ))}
        </div>
      </ProfileList>
    </>
  )
}
