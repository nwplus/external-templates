import React from 'react'
import styled from 'styled-components'
import background from '@assets/value__bg.svg'
import mobile from '@assets/value__bg_sm.svg'
import { TABLET, fontsize } from '@constants/measurements'
import { Columns as ColumnsBase, Column as ColumnBase, SectionContainerWithBackground as Base } from '@lib/Containers'

const SectionContainer = styled(Base)`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Fira+Mono:wght@700&display=swap');
    
    height: 152vw;
    color: #2F4246;
    .title {
        padding-bottom: ${() => fontsize(787, 1440, 16, 32)};
        text-align: center;
        font-family: 'Fira Code', monospace;
        font-weight: 700;
        font-size: ${() => fontsize(787, 1440, 12, 25)};
    }
    .subtitle {
        font-size: ${() => fontsize(787, 1440, 12, 18)};
    }
    .main.title {
        padding: 13vw 0 1rem;
        font-family: 'Fira Mono', monospace;
        font-size: ${() => fontsize(787, 1440, 28, 48)};
    }
    .main.subtitle {
        text-align: center;
        font-size: ${() => fontsize(787, 1440, 18, 28)};
    }
    @media (max-width: ${TABLET}) {
        background-image: url(${mobile});
        height: 721vw;
        .title {
            padding-bottom: ${() => fontsize(320, 786, 12, 32)};
            font-size: ${() => fontsize(320, 786, 18, 36)};
        }
        .subtitle {
            font-size: ${() => fontsize(320, 786, 16, 32)};
        }
        .main.title {
            padding: 35vw 0 0;
            font-size: ${() => fontsize(320, 786, 28, 48)};
        }
        .main.subtitle {
            display: none;
        }
    }
`
const Columns = styled(ColumnsBase)`
    padding-top: 10vw;
    width: ${() => fontsize(787, 1440, 650, 1200)};
    margin: auto;
    justify-content: space-between;
    align-items: center;
`
const Column = styled(ColumnBase)`
    width: ${() => fontsize(787, 1440, 180, 330)};
    margin: 0;
    @media (max-width: ${TABLET}) {
        width: ${() => fontsize(320, 786, 230, 600)};
        // margin: ${() => fontsize(320, 786, 45, 85)} 0 ${() => fontsize(320, 786, 95, 95)};
        &:first-child {
            margin: ${() => fontsize(320, 786, 45, 150)} 0 ${() => fontsize(320, 786, 145, 506)};
        }
        &:last-child {
            margin: ${() => fontsize(320, 786, 112, 506)} 0 0;
        }
    }
`

const Value = ({ title, blob }) => {
    return (
        <div>
            <p className="title">{title}</p>
            <p className="subtitle">{blob}</p>
        </div>
    )
}

const Values = ({ title, subtitle, ...columns }) => {
    const { left, mid, right } = columns
    return (
        <SectionContainer src={background}>
            <p className="main title">{title}</p>
            <p className="main subtitle">{subtitle}</p>
            <Columns>
                <Column><Value {...left}/></Column>
                <Column><Value {...mid}/></Column>
                <Column><Value {...right}/></Column>
            </Columns>
        </SectionContainer>
    )
}

export default Values
