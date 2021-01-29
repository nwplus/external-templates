import React from 'react'
import styled from 'styled-components'
import background from '@assets/value__bg.svg'
import { Columns, Column, SectionContainerWithBackground as Base } from '@lib/Containers'

const SectionContainer = styled(Base)`
    height: 71vw;
    .title, .subtitle {
        text-align: center;
    }
`

const Value = ({ title, blob }) => {
    return (
        <div>
            <p className="title">{title}</p>
            <p>{blob}</p>
        </div>
    )
}

const Values = ({ title, subtitle, ...columns }) => {
    const { left, mid, right } = columns
    return (
        <SectionContainer src={background}>
            <p className="title">{title}</p>
            <p className="subtitle">{subtitle}</p>
            <Columns>
                <Column><Value {...left}/></Column>
                <Column><Value {...mid}/></Column>
                <Column><Value {...right}/></Column>
            </Columns>
        </SectionContainer>
    )
}

export default Values
