import React from 'react'
import styled from 'styled-components'
import background from '@assets/value__bg.svg'
import { SectionContainerWithBackground as Base } from '@lib/Containers'

const SectionContainer = styled(Base)`
    height: 71vw;
`

const Values = () => {
    return (
        <SectionContainer src={background} />
    )
}

export default Values
