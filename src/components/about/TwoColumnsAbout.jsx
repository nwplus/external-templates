import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo__cmdf.png'
import background from '@assets/about__bg.svg'
import { LAPTOP, fontsize } from '@constants/measurements'
import { Columns, Column, SectionContainerWithBackground as Base } from '@lib/Containers'

const SectionContainer = styled(Base)`
    font-size: ${() => fontsize(320, 1440, 6, 32)};
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
    @media (max-width: ${LAPTOP}) {
        div {
            width: inherit;
            margin: 2vw;
        }
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
