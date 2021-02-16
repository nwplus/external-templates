import React from 'react'
import Window from '@components/Window'
import icon_fb from '@assets/icon_fb.svg'
import icon_twitter from '@assets/icon_twitter.svg'
import icon_insta from '@assets/icon_insta.svg'
import icon_medium from '@assets/icon_medium.svg'
import footer_icons from '@assets/footer_icons.svg'
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
    color: #B95D1D;
    margin: 3em 1em;
`

const Icons = styled.img`
    margin: 3em 0;
    max-width: 90vw;
`

const StyledIcon = styled.img`
    margin: 1em;
`

const Footer = () => {
  return (
    <Container src={background}>
      <Window title="footer.png">
        <a href="https://www.facebook.com/nwplusubc/">
          <StyledIcon src={icon_fb} alt="Facebook" />
        </a>
        <a href="https://twitter.com/nwplusubc">
          <StyledIcon src={icon_twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/nwplusubc/">
          <StyledIcon src={icon_insta} alt="Instagram" />
        </a>
        <a href="https://medium.com/nwplusubc">
          <StyledIcon src={icon_medium} alt="Medium" />
        </a>
        <br />
        <StyledA href="mailto: cmd-f@nwplus.io">E-mail Us</StyledA>
        <StyledA href="http://google.com">Code of Conduct</StyledA>
        <StyledA href="mailto: sponsorship@nwplus.uo">Become a Sponsor</StyledA>
        <p>Organized and held by nwPlus</p>
        <p>Copyright © cmd-f 2021</p>
      </Window>

      <Icons src={footer_icons} alt="Computer icons" />
    </Container>
  )
}

export default Footer
