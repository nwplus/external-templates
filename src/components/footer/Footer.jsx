import React from 'react'
import Window from '@components/Window'
import icon_fb from '@assets/icon_fb.svg'
import icon_twitter from '@assets/icon_twitter.svg'
import icon_insta from '@assets/icon_insta.svg'
import icon_medium from '@assets/icon_medium.svg'
import { SectionContainerWithBackground as Base, SectionContainer as Container } from '@lib/Containers'

const StyledA = styled.a`
    color: #B95D1D;
    margin: 3em 1em;
`

const StyledIcon = styled.img`
    margin: 1em;
`

const Footer = ({ test }) => {
  return (
    <Base>
      <Window title="footer.png">
        <StyledIcon src={icon_fb} alt="Facebook" />
        <StyledIcon src={icon_twitter} alt="Facebook" />
        <StyledIcon src={icon_insta} alt="Facebook" />
        <StyledIcon src={icon_medium} alt="Facebook" />
        <br />
        <StyledA href="mailto: test@nwplus.io">E-mail Us</StyledA>
        <StyledA href="http://google.com">Code of Conduct</StyledA>
        <StyledA href="http://google.com">Become a Sponsor</StyledA>
        <p>Organized and held by nwPlus</p>
        <p>Copyright © cmd-f 2021</p>
      </Window>
    </Base>
  )
}

export default Footer
