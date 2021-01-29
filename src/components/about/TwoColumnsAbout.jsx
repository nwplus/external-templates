import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo__cmdf.png'
import background from '@assets/about__bg.svg'
import { LAPTOP, fontsize } from '@constants/measurements'
import { SectionContainerWithBackground as Base } from '@lib/Containers'

const SectionContainer = styled(Base)`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap');

    font-size: ${() => fontsize(320, 1440, 6, 28)};
    text-align: center;
    height: 93vw;
    .intro {
        width: 61vw;
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        padding: 5vw;
    }
    .copy {
        margin: auto;
        width: 66vw;
    }
    .countdown {
        color: #fff;
        font-family: 'Fira Code', monospace;
        font-size: ${() => fontsize(320, 1440, 10, 48)};
        font-weight: 700;
    }
    img {
        display: block;
        margin: auto;
        margin-bottom: 4vw;
        width: 12vw;
    }
    @media (max-width: ${LAPTOP}) {
        div {
            width: inherit;
            margin: 2vw;
        }
    }
`

const CountDown = () => {
    const countDownDate = new Date("Mar 8, 2021").getTime()
    const now = new Date().getTime()
    const distance = countDownDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    return (
        <div className="countdown">{days}d {hours}h</div>
    )
}

const About = ({ about }) => {
    const { top, bottom } = about
    return (
        <SectionContainer src={background}>
            <div className="intro">
                <img src={logo} />
                <p className="title">{top}</p>
            </div>
            <div className="copy">
                {bottom}
            </div>
            <CountDown />
        </SectionContainer>
    )
}

export default About
