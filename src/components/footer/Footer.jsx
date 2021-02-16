import React from 'react'
import styled from 'styled-components'
import Window from '@components/Window'
import iconFb from '@assets/icon_fb.svg'
import iconTwitter from '@assets/icon_twitter.svg'
import iconInsta from '@assets/icon_insta.svg'
import iconMedium from '@assets/icon_medium.svg'
import footerIcons from '@assets/footer_icons.svg'
import background from '@assets/footer_plants.svg'
import { SectionContainerWithBackground as Base } from '@lib/Containers'

const Container = styled(Base)`
  text-align: center;
  position: relative;
  background-image: url(${p => p.src});
  background-position: bottom;
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

const Footer = () => (
  <Container src={background}>
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
