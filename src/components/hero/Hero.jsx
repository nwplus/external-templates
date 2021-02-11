import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@lib/Containers'
import Button from './Button'

const Title = styled.p`
    text-align: center;
`

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin: auto;
`

const Hero = ({ hero }) => {
    const { buttonText, applyActive } = hero
    return (
        <SectionContainer>
            <HeroContainer>
                <Button enabled={applyActive}>{buttonText}</Button>
                <p>March 2021</p>
            </HeroContainer>
        </SectionContainer>
    )
}

export default Hero
