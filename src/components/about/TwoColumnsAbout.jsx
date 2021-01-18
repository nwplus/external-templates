import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo.png'
import { Columns, Column } from '@lib/Containers'

const Logo = styled.img`
    display: block;
    margin: auto;
`
const Intro = styled.p`
    text-align: center;
`

const About = ({ intro }) => {
    const { top, left, right } = intro
    return (
        <>
            <Logo src={logo} />
            <div>
                <Intro>{top}</Intro>
                <Columns>
                    <Column>{left}</Column>
                    <Column>{right}</Column>
                </Columns>
            </div>
        </>
    )
}

export default About
