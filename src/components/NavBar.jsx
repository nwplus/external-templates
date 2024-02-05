import styled from "styled-components"

import nwPlusLogo from "../../public/assets/nwplus_logo.svg"

const NavBarContainer = styled.div`
  position: fixed;
  top: 2.45vh;
  left: 6vh;
  height: 4.9vh;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4.7vh;
`

const Logo = styled.img`
`

const NavBarLink = styled.a`
  color: #264B65;
  text-align: center;
  font-feature-settings: 'liga' off;

  font-family: "HK Grotesk";
  font-size: 1.76vh;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const LivePortalButton = styled.button`
  position: fixed;
  left: 121.76vh;
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
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 122.222% */
`

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <Logo src={nwPlusLogo} />
        <NavBarLink>About</NavBarLink>
        <NavBarLink>Hackathons</NavBarLink>
        <NavBarLink>Resources</NavBarLink>
        <NavBarLink>FAQ</NavBarLink>
      </NavBarContainer>
      <LivePortalButton>Live Portal</LivePortalButton>
    </>
  )
}

export default NavBar;