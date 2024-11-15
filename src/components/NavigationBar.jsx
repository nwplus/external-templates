import { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import { scale } from '@utilities/format'
import mlhImage from '@assets/images/mlhTrustBadgeWhite.svg'
import { BANNER_OFFSET } from '../constants/measurements'
import MenuImg from '../../public/images/icons/menu.svg'

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
  width: 100%;
  justify-content: center;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const NwPlusLogo = styled.img`
  max-height: 50px;

  ${p => p.theme.mediaQueries.mobile} {
    width: 30px;
    margin-right: 0;
  }
`

const LinkText = styled.a`
  color: ${p => p.theme.colors.text};
  text-decoration: none;

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    transition: width 0.5s ease;
    background: white;
  }

  &:hover {
    color: ${p => p.theme.colors.text};
    text-decoration: none;

    ::after {
      width: 100%;
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
  background: #aa4245;
`

const PortalButtonContainer = styled.div`
  visibility: ${p => (p.portalOpen !== null ? 'visible' : 'hidden')};
  opacity: ${p => (p.portalOpen !== null ? '1' : '0')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  justify-self: center;
  user-select: none;
  position: absolute;
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
  background: #aa4245;
  color: #f3f5f4;
  ${p => p.theme.mediaQueries.mobile} {
    right: 0;
  }

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
    content: 'Live Portal';
    color: #244556;

    border-radius: 50px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 1;
    transition: opacity 0.25s ease-in-out;
    opacity: 0;

    background: #dcb551;
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
  height: 20px;
  background: #152e3a;
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

const MenuItem = ({ name, href, isAnchor, target, rel, isMobile, closeDropdown }) => {
  const [anchorTarget, setAnchorTarget] = useState(null)

  useEffect(() => {
    if (isAnchor) {
      setAnchorTarget(document.getElementById(href))
    }
  }, [href])

  const handleClick = event => {
    if (isAnchor && anchorTarget) {
      event.preventDefault()
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (isMobile) {
      closeDropdown(false)
    }
  }

  return (
    <LinkText href={href} onClick={handleClick} target={target} rel={rel}>
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

const MenuList = ({ isMobile, closeDropdown }) => (
  <>
    {isMobile && <NwPlusLogo src="/images/logos/nwplus-logo.svg" alt="nwPlus club logo in white" />}
    <MenuItem name="About" href="/#about" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Recap" href="/#recap" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Workshops" href="/#workshops" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Past Projects" href="/#past-projects" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    {!isMobile && <NwPlusLogo src="/images/logos/nwplus-logo.svg" alt="nwPlus club logo in white" />}
    <MenuItem name="Testimonials" href="/#testimonials" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="FAQ" href="/#faq" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Sponsors" href="/#sponsors" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Contact us" href="/#contact" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
  </>
)

const TrustBadge = ({ stayAtTop }) => (
  <TrustBadgeLink
    id="mlh-trust-badge"
    rel="noreferrer"
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
    target="_blank"
    stayAtTop={stayAtTop}
  >
    <img src={mlhImage} alt="Major League Hacking 2025 Hackathon Season" style={{ width: '100%' }} />
  </TrustBadgeLink>
)

const NavigationBar = ({ bannerExists }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [visibility, setVisibility] = useState('visible')
  const [opacity, setOpacity] = useState('1')
  const [stayAtTop, setStayAtTop] = useState(bannerExists)
  const lastScrollRef = useRef(0)

  const handleResize = useCallback(() => {
    if (window.innerWidth >= SCREEN_BREAKPOINTS.mobile) {
      setShowDropdown(false)
    }
  }, [])

  const handleScroll = useCallback(() => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop

    if (scroll <= BANNER_OFFSET) {
      setStayAtTop(bannerExists)
      setVisibility('visible')
      setOpacity('1')
    } else if (scroll > lastScrollRef.current) {
      setStayAtTop(false)
      setVisibility('hidden')
      setOpacity('0')
    } else if (scroll < lastScrollRef.current) {
      setVisibility('visible')
      setOpacity('1')
      setStayAtTop(false)
    }

    lastScrollRef.current = scroll
  }, [bannerExists])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [handleScroll, handleResize])

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
          <MenuList isMobile={showDropdown} closeDropdown={setShowDropdown} />
          {/* Make sure desktop (below) has the same portalOpen value */}
          <DropDownFooter />
        </DropDownContentContainer>
        <TrustBadge stayAtTop={stayAtTop} />
      </>
    )
  }

  // Only for desktop version
  return (
    <NavBarContainer visibility={visibility} opacity={opacity} stayAtTop={stayAtTop}>
      <NavGroupContainer>
        <PortalButton portalOpen />
        <NavTextContainer>
          <MenuList isMobile={false} />
        </NavTextContainer>
        {/* Make sure mobile (above) has the same portalOpen value */}
        <TrustBadge stayAtTop={stayAtTop} />
      </NavGroupContainer>
      <HamburgerMenu src={MenuImg} alt="dropdown menu icon" onClick={() => setShowDropdown(true)} />
    </NavBarContainer>
  )
}

export default NavigationBar
