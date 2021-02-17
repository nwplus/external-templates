import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo__nwplus.jpg'
import background from '@assets/video__frame.svg'
import mobile from '@assets/video__frame_sm.svg'
import { TABLET } from '@constants/measurements'
import { scale } from '@utilities/format'
import { SectionContainerWithBackground as Base, SectionContainer as Container } from '@lib/Containers'

const SectionContainer = styled(Base)`
  height: 82vw;
  h1 {
    text-align: center;
    font-family: 'Fira Mono', monospace;
    font-size: ${() => scale(787, 1440, 28, 48)};
  }
  .info {
    display: flex;
    margin: auto;
    height: 7vw;
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
      font-size: ${() => scale(787, 1440, 12, 20)};
    }
    .subtitle {
      font-size: ${() => scale(787, 1440, 8, 16)};
    }
  }
  @media (max-width: ${TABLET}) {
    background-image: url(${mobile});
    height: 272vw;
    h1 {
      font-size: ${() => scale(320, 786, 28, 48)};
      padding-top: 76vw;
    }
    .info {
      width: 72vw;
      margin: 5vw auto;
      .title {
        font-size: ${() => scale(320, 786, 12, 36)};
      }
      .subtitle {
        font-size: ${() => scale(320, 786, 10, 24)};
        margin-top: 2vw;
      }
      img {
        width: 6vw;
      }
    }
  }
`
const VideoContainer = styled.div`
  padding: 11vw 30vw 0;
  @media (max-width: ${TABLET}) {
    padding: 33vw 11vw 0;
  }
`
const Iframe = styled.iframe`
  display: block;
  width: 40vw;
  height: 22vw;
  margin: auto;
  @media (max-width: ${TABLET}) {
    width: 78vw;
    height: 45vw;
  }
`

const Video = ({ url, title, subtitle }) => (
  <SectionContainer src={background}>
    <h1>2020 Recap</h1>
    <VideoContainer>
      <Iframe
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <div className="info">
        <div>
          <img src={logo} alt="nwplusLogo" />
          <div>
            <p className="title">{title}</p>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </VideoContainer>
  </SectionContainer>
)

export default Video
