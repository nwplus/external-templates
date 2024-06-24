import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import { scale } from '@utilities/format'
import { BANNER_OFFSET } from '../constants/measurements'
import MenuImg from '../../public/images/icons/menu.svg'
import WhiteMenuImg from '../../public/images/icons/menu_white.svg'

import MlhImage from '../../public/assets/misc/mlh_image.svg'

const NavBarContainer = styled.nav`
  position: ${p => (p.stayAtTop ? 'absolute' : 'fixed')};
  top: ${p => (p.stayAtTop ? BANNER_OFFSET : '0')}px;
  z-index: 999;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: stretch;
  visibility: ${p => p.visibility};
  opacity: ${p => p.opacity};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  padding: 0.6rem 4rem 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 49.73%, rgba(89, 88, 90, 0) 100%);

  ${p => p.theme.mediaQueries.mobile} {
    background: none;
    padding: 24px 40px 0;
    z-index: 999;
    justify-content: flex-end;
  }
`

const NavGroupContainer = styled.div`
  display: flex;
  gap: 3%;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const NavTextContainer = styled.div`
  display: flex;
  gap: 4%;
  align-items: center;
  flex-grow: 2;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const NwPlusLogo = styled.img`
  max-height: 50px;
  margin-right: 18px;

  ${p => p.theme.mediaQueries.mobile} {
    width: 30px;
    margin-right: 0;
  }
`

const LinkText = styled.a`
  color: ${p => (p.isLight ? p.theme.colors.text : "#264B65")};
  text-decoration: none;

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    transition: width 0.5s ease;
    background: ${p => (p.isLight ? p.theme.colors.text : "#264B65")};;
  }

  &:hover {
    color: ${p => (p.isLight ? p.theme.colors.text : "#264B65")};
    text-decoration: none;

    ::after {
      width: 100%;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    color: white;

    ::after {
      background: white;
    }

    &:hover {
      color: white;
    }
  }
`

const StyledLinkHeaders = styled.h3`
  font-family: HK Grotesk;
  font-size: ${() => scale(768, 1440, 16, 18)};
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: center;
`

const HamburgerMenu = styled.img`
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    width: 30px;
  }
`

const DropDownContentContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 998;
  padding: 30px 40px 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  background: #15513F;
`

const PortalButtonContainer = styled.div`
  visibility: ${p => (p.portalOpen !== null ? 'visible' : 'hidden')};
  opacity: ${p => (p.portalOpen !== null ? '1' : '0')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  justify-self: center;
  user-select: none;
  right: 100px;
  position: relative;
`

const StyledPortalText = styled.div`
  color: ${p => p.disabled && p.theme.colors.disabledText};
`

const Button = styled.a`
  display: table;
  text-decoration: none;
  position: relative;
  padding: 11px 21px;
  border-radius: 50px;
  font-weight: bold;
  background: #AA4245;
  color: #F3F5F4;
  right: 0px;
  ${p => p.theme.mediaQueries.mobile} {
    right: 0;
  }

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
    content: 'Live Portal';

    border-radius: 50px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 1;
    transition: opacity 0.25s ease-in-out;
    opacity: 0;

    background: #8B2929;
  }

  &:hover::before {
    opacity: 1;
  }

  ${p =>
    !p.disabled &&
    `
    &:hover {
      cursor:pointer;
    }
  `}

  ${p =>
    p.disabled &&
    `
    display: none;
    cursor: default;

    &:hover::before {
      opacity: 0;
    }
  `}
`

const DropDownFooter = styled.div`
    height: 8px;
    background: #2E2E2E;
    width: 100vw;
    margin-bottom: -25px;
`

const TrustBadgeLink = styled.a`
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: ${p => (p.stayAtTop ? 'absolute' : 'fixed')};
  top: 0px;
  right: 50px;
  width: 5%;
  z-index: 1000;

  ${p => p.theme.mediaQueries.mobile} {
    left: 50px;
  }
`

const TrustBadge = ({ stayAtTop }) => (
  <TrustBadgeLink
    id="mlh-trust-badge"
    rel="noreferrer"
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
    target="_blank"
    stayAtTop={stayAtTop}
  >
    <img src={MlhImage} alt="Major League Hacking 2024 Hackathon Season" style={{ width: '100%' }} />
  </TrustBadgeLink>
)


const MenuItem = ({ name, href, isLight, target, rel, isMobile, closeDropdown }) => {
  // const [anchorTarget, setAnchorTarget] = useState(null)

  // useEffect(() => {
  //   if (isAnchor) {
  //     setAnchorTarget(document.getElementById(href))
  //   }
  // }, [href])

  const handleClick = () => {
    // if (isAnchor && anchorTarget) {
    //   event.preventDefault()
    //   anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // }
    if (isMobile) {
      closeDropdown(false)
    }
  }

  return (
    <LinkText href={href} onClick={handleClick} target={target} rel={rel} isLight={isLight}>
      <StyledLinkHeaders>{name}</StyledLinkHeaders>
    </LinkText>
  )
}

const PortalButton = ({ portalOpen }) => (
  <PortalButtonContainer portalOpen={portalOpen}>
    <Button
      width="130px"
      height="45px"
      borderRadius="100px"
      isGradient
      textColor="black"
      href="https://portal.nwplus.io"
      target="_blank"
      disabled={!portalOpen}
    >
      <StyledPortalText disabled={!portalOpen}>Live Portal</StyledPortalText>
    </Button>
  </PortalButtonContainer>
)

const MenuList = ({ isLight, isMobile, closeDropdown }) => (
  <>
    <MenuItem name="About" href={isMobile ? "#about-mobile" : "#about"} isLight={isLight} isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Tracks" href={isMobile ? "#tracks-mobile" : "#tracks"} isLight={isLight} isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="FAQ" href={isMobile ? "#faq-mobile" : "#faq"} isLight={isLight} isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Sponsors" href={isMobile ? "#sponsors-mobile" : "#sponsors"} isLight={isLight} isMobile={isMobile} closeDropdown={closeDropdown} />
  </>
)

const NavigationBar = ({ isLight, bannerExists }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [visibility, setVisibility] = useState('visible')
  const [opacity, setOpacity] = useState('1')
  const [stayAtTop, setStayAtTop] = useState(bannerExists && true)

  const handleResize = () => {
    if (window.innerWidth >= SCREEN_BREAKPOINTS.mobile) {
      setShowDropdown(false)
    }
  }

  const handleScroll = () => {
    let lastScroll = 0
    return () => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop
      if (scroll <= BANNER_OFFSET) {
        setStayAtTop(bannerExists && true)
        setVisibility('visible')
        setOpacity('1')
      } else if (scroll > lastScroll) {
        setStayAtTop(false)
        setVisibility('hidden')
        setOpacity('0')
        setStayAtTop(0)
      } else {
        setVisibility('visible')
        setOpacity('1')
      }
      lastScroll = scroll
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll())
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (showDropdown) {
    // Mobile version
    return (
      <>
        <NavBarContainer mobileView>
          <HamburgerMenu
            src="/images/icons/cross.svg"
            alt="dropdown menu icon"
            onClick={() => setShowDropdown(false)}
          />
        </NavBarContainer>
        <DropDownContentContainer>
          <a href="/">
            <NwPlusLogo src="/assets/logos/nwplus_logo_light.svg" alt="nwPlus club logo in white" />
          </a>
          <MenuList isMobile={showDropdown} closeDropdown={setShowDropdown} />
          {/* Make sure desktop (below) has the same portalOpen value */}
          <PortalButton portalOpen />
          <DropDownFooter />
        </DropDownContentContainer>

        <TrustBadge stayAtTop={stayAtTop} />
      </>
    )
  }

  return (
    <NavBarContainer visibility={visibility} opacity={opacity} stayAtTop={stayAtTop}>
      <NavGroupContainer>
        <a href="/">
          <NwPlusLogo src={isLight ? "/assets/logos/nwplus_logo_light.svg" : "/assets/logos/nwplus_logo.svg"} alt="nwPlus club logo in white" />
        </a>
        <NavTextContainer>
          <MenuList isLight={isLight} />
        </NavTextContainer>
        {/* Make sure mobile (above) has the same portalOpen value */}
        <PortalButton portalOpen />
      </NavGroupContainer>
      <HamburgerMenu src={isLight ? WhiteMenuImg : MenuImg} alt="dropdown menu icon" onClick={() => setShowDropdown(true)} />
      <TrustBadge stayAtTop={stayAtTop} />
    </NavBarContainer>
  )
}

export default NavigationBar