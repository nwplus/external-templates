import styled from "styled-components"

import nwPlusLogo from "../../public/assets/logos/nwplus_logo.svg"
import nwPlusLogoLight from "../../public/assets/logos/nwplus_logo_light.svg"

const NavBarContainer = styled.div`
  position: fixed;
  top: 2.45vh;
  left: 6vh;
  height: 4.9vh;
  z-index: 1000;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4.7vh;
`

const Logo = styled.img`
`

const NavBarLink = styled.a`
  color: ${props => props.isLight ? "#fff" : "#264B65"};
  text-align: center;
  font-feature-settings: 'liga' off;

  font-family: "HK Grotesk";
  font-size: 1.76vh;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;

  &:visited {
    color: ${props => props.isLight ? "#fff" : "#264B65"};
  }
`

const LivePortalButton = styled.a`
  position: fixed;
  right: 5vh;
  z-index: 1000;
  top: 2.74vh;
  display: inline-flex;
  height: 4.31vh;
  padding: 0vh 2.35vh;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.78vh;
  flex-shrink: 0;
  border: none;
  border-radius: 100px;
  background: #AA4245;
  color: #F3F5F4;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 1.76vh;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 122.222% */
  text-decoration: none;
`

const NavBar = ({ isLight }) => (
    <>
      <NavBarContainer>
        <Logo src={isLight ? nwPlusLogoLight : nwPlusLogo} />
        <NavBarLink href="#about" isLight={isLight}>About</NavBarLink>
        <NavBarLink href="#tracks" isLight={isLight}>Tracks</NavBarLink>
        <NavBarLink href="#faq" isLight={isLight}>FAQ</NavBarLink>
        <NavBarLink href="#sponsors" isLight={isLight}>Sponsors</NavBarLink>
      </NavBarContainer>
      <LivePortalButton href="https://portal.nwplus.io" target="_blank">Live Portal</LivePortalButton>
    </>
  )

export default NavBar;