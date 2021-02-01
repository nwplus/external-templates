import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo__nwplus.jpg'
import background from '@assets/video__frame.svg'
import mobile from '@assets/video__frame_sm.svg'
import { TABLET, fontsize } from '@constants/measurements'
import { SectionContainerWithBackground as Base, SectionContainer as Container } from '@lib/Containers'

const SectionContainer = styled(Base)`
    height: 82vw;
    .info {
        display: flex;
        margin: auto;
        height: 7.5vw;
        > div {
            display: flex;
            align-items: flex-start;
            margin: auto;
        }
        img {
            border-radius: 50%;
            margin-right: 1.5vw;
            width: 3vw;
        }
        .title {
            font-size: ${() => fontsize(787, 1440, 12, 20)};
        }
        .subtitle {
            font-size: ${() => fontsize(787, 1440, 8, 16)};
        }
    }
    @media (max-width: ${TABLET}) {
        background-image: url(${mobile});
        height: 179vw;
        .info {
            width: 72vw;
            margin: 5vw auto;
            .title {
                font-size: ${() => fontsize(320, 786, 12, 36)};
            }
            .subtitle {
                font-size: ${() => fontsize(320, 786, 10, 24)};
                margin-top: 2vw;
            }
            img {
                width: 6vw;
            }
        }
    }
`
const VideoContainer = styled(Container)`
    padding: 15vw 30vw 0;
    @media (max-width: ${TABLET}) {
        padding: 24vw 11vw 0;
    }
`
const Iframe = styled.iframe`
    display: block;
    width: 40vw;
    height: 22vw;
    margin: auto;
    @media (max-width: ${TABLET}) {
        width: 78vw;
        height: 44vw;
    }
`

const Video = ({ url, title, subtitle }) => {
    return (
        <SectionContainer src={background}>
            <VideoContainer>
                <Iframe
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen />
                <div className="info">
                    <div>
                        <img src={logo} />
                        <div>
                            <p className="title">{title}</p>
                            <p className="subtitle">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </VideoContainer>
        </SectionContainer>
    )
}

export default Video
