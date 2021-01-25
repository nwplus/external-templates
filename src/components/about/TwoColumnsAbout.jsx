import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo__cmdf.png'
import background from '@assets/about__bg.svg'
import { MOBILE_S, MOBILE_M, MOBILE, MOBILE_H, TABLET, LAPTOP, LAPTOP_L } from '@constants/measurements'
import { Columns, Column, SectionContainerWithBackground as Base } from '@lib/Containers'

const SectionContainer = styled(Base)`
    font-size: 2rem;
    height: 125.5vw;
    .intro {
        width: 61vw;
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        padding: 22vw 5vw 10vw;
    }
    .title {
        text-align: center;
    }
    img {
        display: block;
        margin: auto;
        margin-bottom: 4vw;
        width: 12vw;
    }
    @media (max-width: ${LAPTOP_L}) {
        font-size: 1.5rem;
    }
    @media (max-width: ${LAPTOP}) {
        font-size: 1rem;
        div {
            width: inherit;
            margin: 2vw;
        }
    }
    @media (max-width: ${TABLET}) {
        font-size: .75rem;
    }
    @media (max-width: ${MOBILE_H}) {
        font-size: .65rem;
    }
    @media (max-width: ${MOBILE}) {
        font-size: .5rem;
    }
    @media (max-width: ${MOBILE_M}) {
        font-size: 8px;
    }
    @media (max-width: ${MOBILE_S}) {
        font-size: 6px;
    }
`

const About = ({ about }) => {
    const { top, left, right } = about
    return (
        <SectionContainer src={background}>
            <div className="intro">
                <img src={logo} />
                <p className="title">{top}</p>
            </div>
            <Columns>
                <Column>{left}</Column>
                <Column>{right}</Column>
            </Columns>
        </SectionContainer>
    )
}

export default About
