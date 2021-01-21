import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo.png'
import { Columns, Column, SectionContainer } from '@lib/Containers'

const Logo = styled.img`
    display: block;
    margin: auto;
`
const Title = styled.p`
    text-align: center;
`

const About = ({ about }) => {
    const { top, left, right } = about
    return (
        <SectionContainer>
            <Logo src={logo} />
            <div>
                <Title>{top}</Title>
                <Columns>
                    <Column>{left}</Column>
                    <Column>{right}</Column>
                </Columns>
            </div>
        </SectionContainer>
    )
}

export default About
