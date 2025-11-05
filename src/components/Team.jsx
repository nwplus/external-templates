import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
// eslint-disable-next-line import/no-named-default
import anime from 'animejs'
import { Header3 } from '@components/Typography'

const profiles = [
  {
    img: '/profiles/Anna_Kovtunenko.png',
    name: 'Anna Kovtunenko',
    emoji: '🌺',
    color: '#5e0808',
    title: 'Co-President',
    social: 'https://www.linkedin.com/in/anna-kovtunenko/',
  },
  {
    img: '/profiles/Donald_Lee.png',
    name: 'Donald Lee',
    emoji: '😮',
    color: '#3988FF',
    title: 'Co-President',
    social: 'https://donaldlee.xyz/',
  },
  {
    img: '/profiles/Kevin_Gu.png',
    name: 'Kevin Gu',
    emoji: '🗿',
    color: '#13b1c9',
    title: 'Treasurer',
    social: 'https://www.linkedin.com/in/kevin-gu-/',
  },
  {
    img: '/profiles/Jessica_Liu.png',
    name: 'Jessica Liu',
    emoji: '☕️',
    color: '#FFDDE6',
    title: 'HackCamp Logistics Director',
    social: 'https://www.linkedin.com/in/jessicaziliu/',
  },
  {
    img: '/profiles/Jonathan_Cai.png',
    name: 'Jonathan Cai',
    emoji: '🫨',
    color: '#01DACC',
    title: 'HackCamp Logistics Coordinator',
    social: 'https://www.linkedin.com/in/jonathan-cai-843873314/',
  },
  {
    img: '/profiles/Khoa_Bui.png',
    name: 'Khoa Bui',
    emoji: '🐧',
    color: '#E96868',
    title: 'HackCamp Logistics Coordinator',
    social: 'https://www.linkedin.com/in/khoa-d-bui/',
  },
  {
    img: '/profiles/Kashish_Garg.png',
    name: 'Kashish Garg',
    emoji: '🐨',
    color: '#01DACC',
    title: 'nwHacks Logistics Director',
    social: 'https://www.linkedin.com/in/kashishgarg1/',
  },
  {
    img: '/profiles/Caitlyn_Chan.png',
    name: 'Caitlyn Chan',
    emoji: '🤠',
    color: '#f5bf53',
    title: 'nwHacks Logistics Coordinator',
    social: 'linkedin.com/in/cait-chan/',
  },
  {
    img: '/profiles/Angelina_Hsu.png',
    name: 'Angelina Hsu',
    emoji: '🧃',
    color: '#90A58A',
    title: 'nwHacks Logistics Coordinator',
    social: 'https://www.linkedin.com/in/angelina-hsu-54035416a/',
  },
  {
    img: '/profiles/Indy_Sowy.png',
    name: 'Indy Sowy',
    emoji: '💌',
    color: '#F5B8D0',
    title: 'nwHacks Logistics Coordinator',
    social: 'https://www.linkedin.com/in/indirasowy/',
  },
  {
    img: '/profiles/Eric_Shuai.png',
    name: 'Eric Shuai',
    emoji: '',
    color: '#01DACC',
    title: 'nwHacks Logistics Coordinator',
    social: 'https://www.linkedin.com/in/ericshuai',
  },
  {
    img: '/profiles/Tracy_La.png',
    name: 'Tracy La',
    emoji: '🍞',
    color: '#234036',
    title: 'cmd-f Logistics Director',
    social: 'https://www.linkedin.com/in/tracy--la/',
  },
  {
    img: '/profiles/Angela_Chiang.png',
    name: 'Angela Chiang',
    emoji: '🫡',
    color: '#00A3FF',
    title: 'cmd-f Logistics Coordinator',
    social: 'https://www.linkedin.com/in/a-hc-chiang/',
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
    img: '/profiles/Angela_Cheng.png',
    name: 'Angela Cheng',
    emoji: '🪷',
    color: '#9ADDFB',
    title: 'cmd-f Logistics Coordinator',
    social: 'https://www.linkedin.com/in/angela-cheng-/',
  },
  {
    img: '/profiles/Karen_Agustino.png',
    name: 'Karen Agustino',
    emoji: '',
    color: '#01DACC',
    title: 'cmd-f Logistics Coordinator',
    social: 'linkedin.com/in/karenagustino/',
  },
  {
    img: '/profiles/Ara_Kwon.png',
    name: 'Ara Kwon',
    emoji: '🎀',
    color: '#01DACC',
    title: 'Sponsorship Director',
    social: 'https://www.linkedin.com/in/arakwon/',
  },
  {
    img: '/profiles/Stellar_Shar.png',
    name: 'Stellar Shar',
    emoji: '🪿',
    color: '#FFC0CB',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/stellar-shar-4005b219a/',
  },
  {
    img: '/profiles/Fahim_Gbonjubola.png',
    name: 'Fahim Gbonjubola',
    emoji: '😋',
    color: '#E4F6F8',
    title: 'Sponsorship Coordinator',
    social: 'http://fahimgbon.com',
  },
  {
    img: '/profiles/Elena_Guo.png',
    name: 'Elena Guo',
    emoji: '',
    color: '#E69A8D',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/guo-elena/',
  },
  {
    img: '/profiles/Anna_Fang.png',
    name: 'Anna Fang',
    emoji: '🌻',
    color: '#A76D5B',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/anna-fang-5312a0235/',
  },
  {
    img: '/profiles/Jagathi_Moturi.png',
    name: 'Jagathi Moturi',
    emoji: '🌟',
    color: '#ADD0B3',
    title: 'Sponsorship Coordinator',
    social: '',
  },
  {
    img: '/profiles/Fabian_Siswanto.png',
    name: 'Fabian Siswanto',
    emoji: '💯',
    color: '#BFA98E',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/fabiansiswanto/',
  },
  {
    img: '/profiles/Paul_Tiberghien.png',
    name: 'Paul Tiberghien',
    emoji: '🤝',
    color: '#003C62',
    title: 'Marketing Director',
    social: 'http://linkedin.com/in/paultibe',
  },
  {
    img: '/profiles/Lilit_Vanyan.png',
    name: 'Lilit Vanyan',
    emoji: '💋',
    color: '#F2ACB9',
    title: 'Marketing Coordinator',
    social: 'https://www.linkedin.com/in/lilit-vanyan-5626a2240/',
  },
  {
    img: '/profiles/Ramika_De_Silva.png',
    name: 'Ramika De Silva',
    emoji: '🦥',
    color: '#F7F141',
    title: 'Marketing Coordinator',
    social: 'https://www.linkedin.com/in/ramika-de-silva-4995b9203/',
  },
  {
    img: '/profiles/Tiffany_Nguyen.png',
    name: 'Tiffany Nguyen',
    emoji: '🍵',
    color: '#FFF8BF',
    title: 'Marketing Coordinator',
    social: '',
  },
  {
    img: '/profiles/Joyce_Park.png',
    name: 'Joyce Park',
    emoji: '📚',
    color: '#FFF8BF',
    title: 'Content Writer',
    social: 'https://joycesoyeonpark.wixsite.com/joyce-park',
  },
  {
    img: '/profiles/Daksh_Shahani.png',
    name: 'Daksh Shahani',
    emoji: '👾',
    color: '#008581',
    title: 'Media Coordinator',
    social: 'https://www.linkedin.com/in/dakshit-shahani/',
  },
  {
    img: '/profiles/Mackenzie_Dy.png',
    name: 'Mackenzie Dy',
    emoji: '🦖',
    color: '#4E2A84',
    title: 'Media Coordinator',
    social: 'linkedin.com/in/mackenzie-tenefrancia-dy',
  },
  {
    img: '/profiles/Daisy_Han.png',
    name: 'Daisy Han',
    emoji: '😙',
    color: '#A7CCFF',
    title: 'Design Director',
    social: 'https://www.linkedin.com/in/daiisyhan/',
  },
  {
    img: '/profiles/Maureen_Luo.png',
    name: 'Maureen Luo',
    emoji: '🫶🏻',
    color: '#2205a3',
    title: 'Designer',
    social: 'https://www.maureenluo.com/',
  },
  {
    img: '/profiles/Jennifer_Shui.png',
    name: 'Jennifer Shui',
    emoji: '🦜',
    color: '#ABCFFF',
    title: 'Designer',
    social: 'https://www.linkedin.com/in/jennifershui/',
  },
  {
    img: '/profiles/Elaine_Chen.png',
    name: 'Elaine Chen',
    emoji: '🌼',
    color: '#D9A5B3',
    title: 'Designer',
    social: 'https://www.linkedin.com/in/elaine-chen00/',
  },
  {
    img: '/profiles/Roberta_Lee.png',
    name: 'Roberta Lee',
    emoji: '💗',
    color: '#D7BDE2',
    title: 'Designer',
    social: 'https://www.linkedin.com/in/roberta-lee-3381662ba/',
  },
  {
    img: '/profiles/Rachel_Wang.png',
    name: 'Rachel Wang',
    emoji: '😑',
    color: '#CBC3E3',
    title: 'Designer',
    social: 'https://www.linkedin.com/in/rachel-wang-894626217/',
  },
  {
    img: '/profiles/Trisha_Sia.png',
    name: 'Trisha Sia',
    emoji: '🌱',
    color: '#9FB9E7',
    title: 'Dev Director',
    social: 'https://www.linkedin.com/in/trisha-sia/',
  },
  {
    img: '/profiles/Erping_Sun.png',
    name: 'Erping Sun',
    emoji: '✈️',
    color: '#669aed',
    title: 'Product Manager',
    social: 'http://linkedin.com/in/erping-sun',
  },
  {
    img: '/profiles/Nara_Iamsakun.png',
    name: 'Nara Iamsakun',
    emoji: '🧸',
    color: '#0277a6',
    title: 'Developer',
    social: 'https://www.linkedin.com/in/nara-iamsakun/',
  },
  {
    img: '/profiles/Daniel_Pan.png',
    name: 'Daniel Pan',
    emoji: '🤠',
    color: '#01DACC',
    title: 'Developer',
    social: 'http://danielpanhead.com',
  },
  {
    img: '/profiles/Lincoln_Lee.png',
    name: 'Lincoln Lee',
    emoji: '🍦',
    color: '#BAE5F9',
    title: 'Developer',
    social: '',
  },
  {
    img: '/profiles/Martin_Cai.png',
    name: 'Martin Cai',
    emoji: '🍵',
    color: '#FFF8DC',
    title: 'Developer',
    social: 'https://www.martincai.xyz',
  },
  {
    img: '/profiles/Kezia_Rijadi.png',
    name: 'Kezia Rijadi',
    emoji: '🍊',
    color: '#FFCC99',
    title: 'Developer',
    social: 'https://keziarijadi.vercel.app/',
  },
  {
    img: '/profiles/Geoff_Jiang.png',
    name: 'Geoff Jiang',
    emoji: '🥀',
    color: '#7F11E0',
    title: 'Developer',
    social: '',
  },
  {
    img: '/profiles/Jae_Wu_Chun.png',
    name: 'Jae Wu Chun',
    emoji: '',
    color: '#7F11E0',
    title: 'Developer',
    social: '',
  },
  {
    img: '/profiles/Keira_Wong.png',
    name: 'Keira Wong',
    emoji: '🤍',
    color: '#66D6A8',
    title: 'EDI Co-Director',
    social: 'https://www.linkedin.com/in/keirawong/',
  },
  {
    img: '/profiles/Ryan_Lowe.png',
    name: 'Ryan Lowe',
    emoji: '🪼',
    color: '#99DEBC',
    title: 'EDI Co-Director',
    social: 'https://www.linkedin.com/in/ryanc-lowe/',
  },
  {
    img: '/profiles/Sarah_Chenwang.png',
    name: 'Sarah Chenwang',
    emoji: '😛',
    color: '#cfe2f3',
    title: 'EDI Coordinator',
    social: '',
  },
  {
    img: '/profiles/Avery_Chong.png',
    name: 'Avery Chong',
    emoji: '☹️',
    color: '#414141',
    title: 'EDI Coordinator',
    social: '',
  },
  {
    img: '/profiles/Newgen_Bao.png',
    name: 'Newgen Bao',
    emoji: '🥐',
    color: '#01DACC',
    title: 'Engagement Co-Director',
    social: 'https://www.linkedin.com/in/newgen-bao/',
  },
  {
    img: '/profiles/Kelly_Hum.png',
    name: 'Kelly Hum',
    emoji: '🐳',
    color: '#FFD1A0',
    title: 'Engagement Co-Director',
    social: 'https://www.linkedin.com/in/kellyhum',
  },
  {
    img: '/profiles/Makafui_Amouzouvi.png',
    name: 'Makafui Amouzouvi',
    emoji: '😭',
    color: '#01DACC',
    title: 'Engagement Coordinator',
    social: 'https://www.linkedin.com/in/makafui-amouzouvi/',
  },
  {
    img: '/profiles/Jia_Jin.png',
    name: 'Jia Jin',
    emoji: '',
    color: '#F8D7E1',
    title: 'Engagement Coordinator',
    social: 'https://www.linkedin.com/in/jiahui-jin',
  },
  {
    img: '/profiles/Ege_Taslicay.png',
    name: 'Ege Taslicay',
    emoji: '',
    color: '#00a378',
    title: 'Engagement Coordinator',
    social: '',
  },
  {
    img: '/profiles/Hannah_Baek.png',
    name: 'Hannah Baek',
    emoji: '😽',
    color: '#91213a',
    title: 'Engagement Coordinator',
    social: '',
  }
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
