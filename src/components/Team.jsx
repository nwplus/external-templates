import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
// eslint-disable-next-line import/no-named-default
import anime from 'animejs'
import { Header3 } from '@components/Typography'

const profiles = [
  {
    img: '/profiles/Alan_Wang.png',
    name: 'Alan Wang',
    emoji: '🪐',
    color: '#01DACC',
    title: 'nwHacks Logistics Coordinator',
    social: 'https://www.linkedin.com/in/alan-wang-a577b81b5/',
  },
  {
    img: '/profiles/Alissa_Guo.png',
    name: 'Alissa Guo',
    emoji: '🥘',
    color: '#FFC0CB',
    title: 'Cmd-f logistics coordinator',
    social: 'https://www.linkedin.com/in/alissa-guo/',
  },
  {
    img: '/profiles/Allison_Chu.png',
    name: 'Allison Chu',
    emoji: '🚅',
    color: '#01DACC',
    title: '',
    social: '',
  },
  {
    img: '/profiles/Alvin_Kam.png',
    name: 'Alvin Kam',
    emoji: '💀',
    color: '#01DACC',
    title: 'nwHacks Logistics Coordinator',
    social: '',
  },
  {
    img: '/profiles/Angela_Chiang.png',
    name: 'Angela Chiang',
    emoji: '🫡',
    color: '#00A3FF',
    title: 'Content Writer',
    social: 'https://www.linkedin.com/in/angela-chiang-a12a02231/',
  },
  {
    img: '/profiles/Angelina_Hsu.png',
    name: 'Angelina Hsu',
    emoji: '🧃',
    color: '#90A58A',
    title: 'Design Director',
    social: 'https://www.linkedin.com/in/angelina-hsu-54035416a/',
  },
  {
    img: '/profiles/Anna_Kovtunenko.png',
    name: 'Anna Kovtunenko',
    emoji: '🌺',
    color: '#01DACC',
    title: 'HackCamp Logistics Director',
    social: 'https://www.linkedin.com/in/anna-kovtunenko/',
  },
  {
    img: '/profiles/Ara_Kwon.png',
    name: 'Ara Kwon',
    emoji: '🪵',
    color: '#01DACC',
    title: 'HackCamp Logistics Coordinator',
    social: '',
  },
  {
    img: '/profiles/Ben_Beckford.png',
    name: 'Ben Beckford',
    emoji: '🫧',
    color: '#CF9FFF',
    title: 'EDI Coordinator',
    social: 'https://www.linkedin.com/in/benbeckford',
  },
  {
    img: '/profiles/Byron_Wang.png',
    name: 'Byron Wang',
    emoji: '😌',
    color: '#d1ffdf',
    title: 'Dev Coordinator',
    social: 'https://www.byronwang.com/',
  },
  {
    img: '/profiles/Caitlyn_Chan.png',
    name: 'Caitlyn Chan',
    emoji: '🤠',
    color: '#FFCADC',
    title: 'Sponsorship Coordinator',
    social: 'http://linkedin.com/in/cait-chan/',
  },
  {
    img: '/profiles/Charlene_Chiu.png',
    name: 'Charlene Chiu',
    emoji: '🌸',
    color: '#EBCEDF',
    title: 'cmd-f Logistics Director',
    social: 'www.linkedin.com/in/charlenechiu-chl/',
  },
  {
    img: '/profiles/Cristen_Lin.png',
    name: 'Cristen Lin',
    emoji: '🍪',
    color: '#59896C',
    title: 'Marketing Director',
    social: 'https://www.linkedin.com/in/cristen-lin',
  },
  {
    img: '/profiles/Daisy_Han.png',
    name: 'Daisy Han',
    emoji: '🙆🏼‍♀️',
    color: '#A7CCFF',
    title: 'Design Coordinator',
    social: 'https://www.linkedin.com/in/daiisyhan/',
  },
  {
    img: '/profiles/Daksh_Shahani.png',
    name: 'Daksh Shahani',
    emoji: '👾',
    color: '#008581',
    title: 'Media Specialist',
    social: 'https://www.linkedin.com/in/dakshit-shahani/',
  },
  {
    img: '/profiles/Daniel_Pan.png',
    name: 'Daniel Pan',
    emoji: '🤠',
    color: '#01DACC',
    title: 'Dev Coordinator',
    social: 'http://danielpanhead.com',
  },
  {
    img: '/profiles/Donald_Lee.png',
    name: 'Donald Lee',
    emoji: '😮',
    color: '#3988FF',
    title: 'Dev Director',
    social: 'https://donaldlee.xyz/',
  },
  {
    img: '/profiles/Erping_Sun.png',
    name: 'Erping Sun',
    emoji: '✈️',
    color: '#669aed',
    title: 'Dev Coordinator',
    social: 'http://linkedin.com/in/erping-sun',
  },
  {
    img: '/profiles/Fahim_Gbonjubola.png',
    name: 'Fahim Gbonjubola',
    emoji: '😋',
    color: '#E4F6F8',
    title: 'EDI Director',
    social: 'http://fahimgbon.com',
  },
  {
    img: '/profiles/Grace_Co.png',
    name: 'Grace Co',
    emoji: '🦭',
    color: '#00A86B',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/grace--co/',
  },
  {
    img: '/profiles/Indy_Sowy.png',
    name: 'Indy Sowy',
    emoji: '💌',
    color: '#F5B8D0',
    title: 'Dev Coordinator',
    social: 'https://www.linkedin.com/in/indirasowy/',
  },
  {
    img: '/profiles/Jade_Permata.png',
    name: 'Jade Permata',
    emoji: '🌤️',
    color: '#355834',
    title: 'Marketing Coordinator',
    social: 'www.linkedin.com/in/jadetjandra',
  },
  {
    img: '/profiles/Jason_Kuo.png',
    name: 'Jason Kuo',
    emoji: '🦭',
    color: '#01DACC',
    title: 'Dev Coordinator',
    social: 'https://www.linkedin.com/in/jasonwkuo/',
  },
  {
    img: '/profiles/Jennifer_Kim.png',
    name: 'Jennifer Kim',
    emoji: '🌸',
    color: '#01DACC',
    title: 'Engagement Coordinator',
    social: '',
  },
  {
    img: '/profiles/Jennifer_Nguyen.png',
    name: 'Jennifer Nguyen',
    emoji: '☆',
    color: '#FFFFE0',
    title: 'nwHacks Logistics Director',
    social: 'http://www.linkedin.com/in/jennguyen-ubc',
  },
  {
    img: '/profiles/Jennifer_Shui.png',
    name: 'Jennifer Shui',
    emoji: '🦜',
    color: '#ABCFFF',
    title: 'HackCamp Logistics Coordinator',
    social: 'https://www.linkedin.com/in/jennifershui/',
  },
  {
    img: '/profiles/Jessica_Liu.png',
    name: 'Jessica Liu',
    emoji: '☕️',
    color: '#FFDDE6',
    title: 'HackCamp Logistics Coordinator',
    social: 'https://www.linkedin.com/in/jessicaziliu/',
  },
  {
    img: '/profiles/Joanne_Lee.png',
    name: 'Joanne Lee',
    emoji: '✌️',
    color: '#7FBCF5',
    title: 'PM',
    social: 'https://www.linkedin.com/in/joannelex/',
  },
  {
    img: '/profiles/Kashish_Garg.png',
    name: 'Kashish Garg',
    emoji: '🐒',
    color: '#01DACC',
    title: 'Dev Coordinator',
    social: 'https://www.linkedin.com/in/kashishgarg1/',
  },
  {
    img: '/profiles/Kelly_Hum.png',
    name: 'Kelly Hum',
    emoji: '🐳',
    color: '#FFD1A0',
    title: 'Engagement Coordinator',
    social: 'https://www.linkedin.com/in/kellyhum',
  },
  {
    img: '/profiles/Kevin_Gu.png',
    name: 'Kevin Gu',
    emoji: '🗿',
    color: '#d1e1e6',
    title: 'Sponsorship Director',
    social: 'https://www.linkedin.com/in/kevin-gu-/',
  },
  {
    img: '/profiles/Kezia_Rijadi.png',
    name: 'Kezia Rijadi',
    emoji: '🍊',
    color: '#FFCC99',
    title: 'Engagement Coordinator',
    social: 'https://keziarijadi.vercel.app/',
  },
  {
    img: '/profiles/Khoa_Bui.png',
    name: 'Khoa Bui',
    emoji: '🐧',
    color: '#e46060',
    title: 'Logistics Coordinator',
    social: '',
  },
  {
    img: '/profiles/Kitty_Liu.png',
    name: 'Kitty Liu',
    emoji: '🐈',
    color: '#F1b5c2',
    title: 'Design Coordinator',
    social: 'linkedin.com/in/kittyliu3',
  },
  {
    img: '/profiles/Lilit_Vanyan.png',
    name: 'Lilit Vanyan',
    emoji: '💋',
    color: '#F2ACB9',
    title: 'cmd-f Logistics Coordinator',
    social: 'https://www.linkedin.com/in/lilit-vanyan-5626a2240/',
  },
  {
    img: '/profiles/Lincoln_Lee.png',
    name: 'Lincoln Lee',
    emoji: '🦝',
    color: '#2E2E54',
    title: 'Dev Coordinator',
    social: '',
  },
  {
    img: '/profiles/Lucas_Gingera.png',
    name: 'Lucas Gingera',
    emoji: '😶',
    color: '#01DACC',
    title: 'Sponsorship Coordinator',
    social: '',
  },
  {
    img: '/profiles/Maiah_Lee.png',
    name: 'Maiah Lee',
    emoji: '🦦',
    color: '#3f6645',
    title: 'EDI Coordinator',
    social: '',
  },
  {
    img: '/profiles/Martin_Cai.png',
    name: 'Martin Cai',
    emoji: '🍵',
    color: '#fff8dc',
    title: 'Dev Coordinator',
    social: 'https://www.martincai.xyz',
  },
  {
    img: '/profiles/Maureen_Luo.png',
    name: 'Maureen Luo',
    emoji: '🫶🏻',
    color: '#2205a3',
    title: 'Co-President',
    social: 'https://www.maureenluo.com/',
  },
  {
    img: '/profiles/Melvin_Teo.png',
    name: 'Melvin Teo',
    emoji: '💡',
    color: '#003366',
    title: 'Co-President',
    social: 'https://www.linkedin.com/in/melvinhteo/',
  },
  {
    img: '/profiles/Michelle_Wan.png',
    name: 'Michelle Wan',
    emoji: '🙆🏻‍♀️',
    color: '#e8dcfc',
    title: 'Sponsorships Coordinator',
    social: 'https://mwchelle.me',
  },
  {
    img: '/profiles/Michelle_Wang.png',
    name: 'Michelle Wang',
    emoji: '❄️',
    color: '#9CDDFB',
    title: 'Tres',
    social: 'https://www.linkedin.com/in/michelle-wang-mw/',
  },
  {
    img: '/profiles/Nara_Iamsakun.png',
    name: 'Nara Iamsakun',
    emoji: '🧸',
    color: '#0277a6',
    title: 'nwHacks Logistics Coordinator',
    social: 'https://www.linkedin.com/in/nara-iamsakun/',
  },
  {
    img: '/profiles/Newgen_Bao.png',
    name: 'Newgen Bao',
    emoji: '🥐',
    color: '#01DACC',
    title: 'Engagement Director',
    social: 'https://www.linkedin.com/in/newgen-bao/',
  },
  {
    img: '/profiles/Oliver_Luo.png',
    name: 'Oliver Luo',
    emoji: '👴',
    color: '#FFA500',
    title: 'Sponsorship Coordinator',
    social: '',
  },
  {
    img: '/profiles/Paul_Tiberghien.png',
    name: 'Paul Tiberghien',
    emoji: '🤝',
    color: '#003C62',
    title: 'Media Specialist',
    social: 'http://linkedin.com/in/paultibe',
  },
  {
    img: '/profiles/Ridhwanlai_Badmos.png',
    name: 'Ridhwanlai Badmos',
    emoji: '🤩',
    color: '#0B5221',
    title: 'EDI Coordinator',
    social: 'http://www.linkedin.com/in/ridhwanlai-badmos-05739a26b',
  },
  {
    img: '/profiles/Shannon_Aurelia.png',
    name: 'Shannon Aurelia',
    emoji: '🩰',
    color: '#01DACC',
    title: 'cmd-f Logistics Coordinator',
    social: 'https://www.linkedin.com/in/shannon-aurelia-s/',
  },
  {
    img: '/profiles/Sophia_Lee.png',
    name: 'Sophia Lee',
    emoji: '🔫',
    color: '#be86f7',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/iiaylee',
  },
  {
    img: '/profiles/Stellar_Shar.png',
    name: 'Stellar Shar',
    emoji: '🪿',
    color: '#FFC0CB',
    title: 'Marketing Coordinator',
    social: 'https://www.linkedin.com/in/stellar-shar-4005b219a/',
  },
  {
    img: '/profiles/Taryn_Wou.png',
    name: 'Taryn Wou',
    emoji: '🦦',
    color: '#ABF0E3',
    title: 'Design Coordinator',
    social: 'https://www.tarynwou.xyz/',
  },
  {
    img: '/profiles/Tracy_La.png',
    name: 'Tracy La',
    emoji: '🍞',
    color: '#234036',
    title: 'cmd-f Logistics Coordinator',
    social: 'https://www.linkedin.com/in/tracy--la/',
  },
  {
    img: '/profiles/Trisha_Sia.png',
    name: 'Trisha Sia',
    emoji: '🌱',
    color: '#9fb9e7',
    title: 'Dev Coordinator',
    social: 'https://www.linkedin.com/in/trisha-sia/',
  },
  {
    img: '/profiles/Yan_Sidyakin.png',
    name: 'Yan Sidyakin',
    emoji: '🌚',
    color: '#FF7E4D',
    title: 'Design Coordinator',
    social: 'https://linkedin.com/in/sidyakinian',
  },
  {
    img: '/profiles/Zahra_Fiandika.png',
    name: 'Zahra Fiandika',
    emoji: '',
    color: '#ffffff',
    title: 'Design Coordinator',
    social: '',
  },
]

const StyledTitle = styled(Header3)`
  color: #f9c745;
  font-size: calc(100vw * (40 / 1280));
  font-weight: 700;
  margin-bottom: calc(100vw * (5 / 1280));
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.1rem;
  }
`

const ProfileContent = styled.p`
  color: white;
  padding: calc(100vw * (10 / 1280)) 0;
  span {
    margin-right: 8px;
  }
  height: 1em;
  b {
    margin-right: 8px;
  }

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const ProfileList = styled.div`
  padding-top: 1rem;
  overflow-x: hidden;
  white-space: nowrap;

  ${p => p.theme.mediaQueries.mobile} {
    padding-top: 0;
  }
`

const ProfileImage = styled.img`
  &:hover {
    transform: scale(1.15);
    opacity: 1;
  }
  width: calc(100vw * (75 / 1280));
  height: calc(100vw * (75 / 1280));
  border-radius: calc(100vw * (10 / 1280));
  background-color: ${p => p.color};
  object-fit: cover;
  margin: 10px 15px;
  transition: all 100ms ease-in-out;
  opacity: 0.69;
  ${p => p.theme.mediaQueries.mobile} {
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
    requestRef.current = window.requestAnimationFrame(tP => animate(animatorP, accelP, vel || velocity, tP))
  }

  useEffect(() => {
    if (animator) {
      const vel = accel === 1 ? 0 : MAX_SPEED
      requestRef.current = window.requestAnimationFrame(t => animate(animator, accel, vel, t))
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
        translateX: [0, -(90 * profiles.length)],
        duration: 3000 * profiles.length,
        autoplay: false,
      })
    )
  }, [setAnimator])

  return (
    <>
      <StyledTitle>Meet the minds behind nwHacks</StyledTitle>
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
        <div style={{ willChange: 'transform' }} id="anim-profiles">
          {profiles.map(profile => (
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
          {profiles.map(profile => (
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
