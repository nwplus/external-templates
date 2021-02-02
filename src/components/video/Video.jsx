import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo__nwplus.jpg'
import background from '@assets/video__frame.svg'
import { fontsize } from '@constants/measurements'
import { SectionContainerWithBackground as Base, SectionContainer as Container } from '@lib/Containers'

const SectionContainer = styled(Base)`
    height: 82vw;
    .info {
        display: flex;
        margin: auto;
        height: 8vw;
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
            font-size: ${() => fontsize(320, 1440, 6, 24)};
        }
        .subtitle {
            font-size: ${() => fontsize(320, 1440, 6, 18)};
        }
    }
`
const VideoContainer = styled(Container)`
    padding: 15vw 31vw;
`
const Iframe = styled.iframe`
    display: block;
    width: 38vw;
    height: 21.4vw;
    margin: auto;
`

const Video = () => {
    return (
        <SectionContainer src={background}>
            <VideoContainer>
                <Iframe
                src="https://www.youtube.com/embed/HwSv6NsqDWM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen />
                <div className="info">
                    <div>
                        <img src={logo} />
                        <div>
                            <p className="title">cmd-f 2020 | British Columbia's largest all-women* hackathon 🌱</p>
                            <p className="subtitle">nwPlus • Mar 21, 2020</p>
                        </div>
                    </div>
                </div>
            </VideoContainer>
        </SectionContainer>
    )
}

export default Video
