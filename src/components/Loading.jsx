import React from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground as Base } from '@lib/Containers'
import logo from '@assets/loading_logo.svg'
import h from '@assets/loading_h.svg'
import v from '@assets/loading_v.svg'

const Background = styled(Base)`
    position: absolute;
    margin: -8px;
    height: 71vw;
    width: 100%;
    background-color: transparent;
    @media (max-width: 768px) {
        display: none;
    }
`
const SectionContainer = styled(Base)`
    height: 71vw;
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Logo = styled.img`
    margin: auto;
`

const Loading = () => {
    return (
        <SectionContainer>
            <Background src={v} />
            <Background src={h} height="71vw"/>
            <Logo src={logo} alt="cmd-f logo" />
        </SectionContainer>
    )
}

export default Loading
