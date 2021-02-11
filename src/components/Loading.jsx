import React from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground as Base } from '@lib/Containers'
import logo from '@assets/loading_logo.svg'
import background from '@assets/loading_bg.svg'

const Background = styled(Base)`
    background-color: transparent;
    position: absolute;
    margin: -8px;
    @media (max-width: 768px) {
        display: none;
    }
`
const SectionContainer = styled(Base)`
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Logo = styled.img`
    margin: auto;
    @media (max-width: 768px) {
        width: 50%;
    }
`

const Loading = () => {
    return (
        <SectionContainer height="calc(100vh - 16px)">
            <Background src={background} height="100vh" width="100vw" />
            <Logo src={logo} alt="cmd-f logo" />
        </SectionContainer>
    )
}

export default Loading
