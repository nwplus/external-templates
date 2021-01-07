import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const Logo = styled.img`
    display: block;
    margin: auto;
`
const Intro = styled.p`
    text-align: center;
`
const Section = styled.div`
    column-count: 2;
`

const About = ({ intro }) => {
    const { top, left, right } = intro
    return (
        <>
            <Logo src={logo} />
            <div>
                <Intro>{top}</Intro>
                <Section>
                    <p>{left}</p>
                    <p>{right}</p>
                </Section>
            </div>
        </>
    )
}

export default About
