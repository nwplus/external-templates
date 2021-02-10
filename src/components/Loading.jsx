import React from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground as Base } from '@lib/Containers'
import logo from '@assets/loading_logo.svg'
import background from '@assets/loading_bg.svg'

const Background = styled(Base)`
    height: 100vh;
    width: 100vw;
    position: absolute;
    margin: -8px;
    background-color: transparent;
    @media (max-width: 768px) {
        display: none;
    }
`
const SectionContainer = styled(Base)`
    height: calc(100vh - 16px);
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
        <SectionContainer>
            <Background src={background} />
            <Logo src={logo} alt="cmd-f logo" />
        </SectionContainer>
    )
}

export default Loading
