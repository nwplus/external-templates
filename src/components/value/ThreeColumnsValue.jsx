import React from 'react'
import styled from 'styled-components'
import background from '@assets/value__bg.svg'
import mobile from '@assets/value__bg_sm.svg'
import { TABLET, fontsize } from '@constants/measurements'
import { Columns as ColumnsBase, Column as ColumnBase, SectionContainerWithBackground as Base } from '@lib/Containers'

const SectionContainer = styled(Base)`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Fira+Mono:wght@700&display=swap');
    
    height: 153vw;
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
    .main {
        &.title {
            padding: 13vw 0 1rem;
            font-family: 'Fira Mono', monospace;
            font-size: ${() => fontsize(787, 1440, 28, 48)};
        }
        &.subtitle {
            text-align: center;
            font-size: ${() => fontsize(787, 1440, 18, 28)};
        }
    }
    .covid {
        padding-left: 5vw;
        padding-top: ${() => fontsize(787, 1440, 220, 532)};
        .title {
            font-size: ${() => fontsize(787, 1440, 32, 48)};
            width: fit-content;
        }
        .blob {
            padding-top: ${() => fontsize(787, 1440, 0, 75)};
            font-size: ${() => fontsize(787, 1440, 14, 20)};
            width: 28vw;
            p:first-child {
                padding-bottom: 5vw
            }
        }
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
        .main {
            &.title {
                padding: 35vw 0 0;
                font-size: ${() => fontsize(320, 786, 28, 48)};
            }
            &.subtitle {
                display: none;
            }
        }
        .covid {
            padding: 116vw 5vw 0;
            .title {
                font-size: ${() => fontsize(320, 786, 32, 72)};
                text-align: left;
                width: 66vw;
            }
            .blob {
                font-size: ${() => fontsize(320, 786, 12, 20)};
                width: 100%;
            }
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
        &:first-child {
            margin: ${() => fontsize(320, 786, 45, 150)} 0 ${() => fontsize(320, 786, 145, 506)};
        }
        &:last-child {
            margin: ${() => fontsize(320, 786, 112, 506)} 0 0;
        }
    }
`
const Announcement = ({ title, top, bottom }) => {
    return (
        <div className="covid">
            <p className="title">{title}</p>
            <div className="blob">
                <p>{top}</p>
                <p>{bottom}</p>
            </div>
        </div>
    )
}

const Value = ({ title, blob }) => {
    return (
        <div>
            <p className="title">{title}</p>
            <p className="subtitle">{blob}</p>
        </div>
    )
}

const Values = ({ title, subtitle, COVID, ...columns }) => {
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
            <Announcement {...COVID}/>
        </SectionContainer>
    )
}

export default Values
