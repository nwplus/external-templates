import React from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground as Base } from '@lib/Containers'
import logo from '@assets/loading_logo.svg'
import tree from '@assets/loading_tree.svg'
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
    &.logo {
      position: absolute;
      top: 44%;
      width: 8.5vw;
    }
    &.tree {
      position: absolute;
      top: 44%;
      width: 24vw;
    }
    @media (max-width: 768px) {
        width: 50%;
    }
`

const Loading = () => (
        <SectionContainer height="calc(100vh - 16px)">
            <Background src={background} height="100vh" width="100vw" />
            <Logo className="logo" src={logo} alt="cmd-f logo" />
            <Logo className="tree" src={tree} alt="cmd-f tree"/>
        </SectionContainer>
    )

export default Loading
