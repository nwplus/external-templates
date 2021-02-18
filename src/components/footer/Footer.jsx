import React from 'react'
import styled from 'styled-components'
import Window from '@components/Window'
import iconFb from '@assets/icon_fb.svg'
import iconTwitter from '@assets/icon_twitter.svg'
import iconInsta from '@assets/icon_insta.svg'
import iconMedium from '@assets/icon_medium.svg'
import footerIcons from '@assets/footer_icons.svg'
import background from '@assets/footer_plants.svg'
import leftGif from '@assets/footer_art.gif'
import rightGif from '@assets/footer_google.gif'
import { SectionContainerWithBackground as Base, Columns } from '@lib/Containers'
import { TABLET } from '@constants/measurements'

const Container = styled(Base)`
  text-align: center;
  position: relative;
  background-image: url(${p => p.src});
  background-position: bottom;
  padding-top: 2em;
  min-height: 34vw;
`

const StyledA = styled.a`
  color: #b95d1d;
  margin: 3em 1em;
`

const Icons = styled.img`
  margin: 3em 0;
  max-width: 90vw;
`

const StyledIcon = styled.img`
  margin: 1em;
`

const LeftWindow = styled(Window)`
  max-width: 350px;
  max-height: 380px;
  margin: initial;
  margin-top: 2em;
  margin-right: 5em;
  @media (max-width: ${TABLET}) {
    margin: auto;
  }
`

const RightWindow = styled(Window)`
  max-width: 600px;
  margin: initial;
  @media (max-width: ${TABLET}) {
    display: none;
  }
`

const WindowImage = styled.img`
  width: 100%;
  display: block;
`

const StyledColumns = styled(Columns)`
  margin-bottom: 4em;
  justify-content: center;
`

const Footer = () => (
  <Container src={background}>
    <StyledColumns>
      <LeftWindow title="say hi.svg" padding="0">
        <WindowImage src={leftGif} />
      </LeftWindow>
      <RightWindow title="graphics.png">
        <WindowImage src={rightGif} />
      </RightWindow>
    </StyledColumns>
    <Window title="footer.png">
      <a href="https://www.facebook.com/nwplusubc/">
        <StyledIcon src={iconFb} alt="Facebook" />
      </a>
      <a href="https://twitter.com/nwplusubc">
        <StyledIcon src={iconTwitter} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/nwplusubc/">
        <StyledIcon src={iconInsta} alt="Instagram" />
      </a>
      <a href="https://medium.com/nwplusubc">
        <StyledIcon src={iconMedium} alt="Medium" />
      </a>
      <br />
      <StyledA href="mailto: cmd-f@nwplus.io">E-mail Us</StyledA>
      <StyledA href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Code of Conduct</StyledA>
      <StyledA href="mailto: sponsorship@nwplus.uo">Become a Sponsor</StyledA>
      <p>Organized and held by nwPlus</p>
      <p>Copyright © cmd-f 2021</p>
    </Window>

    <Icons src={footerIcons} alt="Computer icons" />
  </Container>
)

export default Footer
