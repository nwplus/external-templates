import { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import { scale } from '@utilities/format'
import { BANNER_OFFSET } from '../constants/measurements'

const NavBarContainer = styled.nav`
  position: ${p => (p.stayAtTop ? 'absolute' : 'fixed')};
  top: ${p => (p.stayAtTop ? BANNER_OFFSET : '10')}px;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: stretch;
  visibility: ${p => p.visibility};
  opacity: ${p => p.opacity};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  padding: calc(100vw * (20 / 1280)) 64px;

  ${p => p.theme.mediaQueries.mobile} {
    background: none;
    padding: 20px 24px 0 0;
    z-index: 999;
    justify-content: flex-end;
    align-items: flex-start;
  }
`

const NavGroupContainer = styled.div`
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const NavTextContainer = styled.div`
  display: flex;
  gap: calc(100vw * (55 / 1512));
  align-items: center;
  width: 100%;
  justify-content: center;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const NwPlusLogoContainer = styled.div`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    left: 24px;
    top: 20px;
    z-index: 1000;
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
  font-size: ${() => scale(1024, 1440, 12, 16)};
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: center;

  ${p => p.theme.mediaQueries.mobile} {
    color: #3a2f21;
    font-size: 16px;
  }
`

const HamburgerMenu = styled.img`
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    width: calc(100vw * (30 / 487));

    filter: invert(1) brightness(2);
    -webkit-filter: invert(1) brightness(2);
  }
`

const DropDownContentContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 998;
  padding: 20px 40px 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  background: #eddecc;
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
  padding: calc(100vw * (11 / 1512)) calc(100vw * (21 / 1512));
  border-radius: 8px;
  font-weight: bold;
  background: linear-gradient(to bottom right, #5b4862ff 50%, #887655ff 100%) padding-box,
    linear-gradient(270deg, #ffffff 0%, #836a8c 100%) border-box;
  border: 1px solid transparent;
  font-size: ${() => scale(1024, 1440, 12, 16)};
  color: #f3f5f4;
  ${p => p.theme.mediaQueries.mobile} {
    right: 0;
  }

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
    content: 'Live Portal';
    color: #f3f5f4;

    border-radius: 8px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 1;
    transition: opacity 0.25s ease-in-out;
    opacity: 0;

    background: linear-gradient(to bottom right, #5b4862ff 50%, #887655ff 100%) padding-box,
      linear-gradient(270deg, #ffffff 0%, #836a8c 100%) border-box;
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
    left: 25px;
  }
`

const NwPlusLogo = styled.img`
  width: calc(100vw * (28 / 487));
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
      width="calc(100vw * (130 / 1512))"
      height="calc(100vw * (45 / 1512))"
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
    {isMobile && (
      <NwPlusLogoContainer>
        <a href="/#home">
          <NwPlusLogo src="/assets/images/hero/nwhacks_logo.svg" />
        </a>
      </NwPlusLogoContainer>
    )}
    <MenuItem name="About" href="/#about" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Recap" href="/#stats" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Testimonials" href="/#testimonials" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Past Projects" href="/#past-projects" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="FAQ" href="/#faq" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Sponsors" href="/#sponsors" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Contact us" href="/#footer" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem
      name="2025"
      href="https://2025.nwhacks.io/"
      target="_blank"
      rel="noreferrer"
      isAnchor
      isMobile={isMobile}
      closeDropdown={closeDropdown}
    />
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
    <img
      src="/assets/images/mlhTrustBadgeWhite.svg"
      alt="Major League Hacking 2026 Hackathon Season"
      style={{ width: '100%' }}
    />
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
    const scroll = window.scrollY || document.documentElement.scrollTop
    const scrollThreshold = 25

    if (scroll <= BANNER_OFFSET) {
      setStayAtTop(bannerExists)
      setVisibility('visible')
      setOpacity('1')
    } else if (scroll > lastScrollRef.current) {
      setStayAtTop(false)
      setVisibility('hidden')
      setOpacity('0')
    } else if (lastScrollRef.current - scroll > scrollThreshold) {
      // only show nav after scrolling up by threshold
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
        </DropDownContentContainer>
        <TrustBadge stayAtTop={stayAtTop} />
      </>
    )
  }

  // Only for desktop version
  return (
    <NavBarContainer visibility={visibility} opacity={opacity} stayAtTop={stayAtTop}>
      <NwPlusLogoContainer>
        <a href="/#home">
          <NwPlusLogo src="/assets/images/hero/nwhacks_logo.svg" />
        </a>
      </NwPlusLogoContainer>
      <NavGroupContainer>
        <PortalButton portalOpen />
        <NavTextContainer>
          <MenuList isMobile={false} />
        </NavTextContainer>
        {/* Make sure mobile (above) has the same portalOpen value */}
        <TrustBadge stayAtTop={stayAtTop} />
      </NavGroupContainer>
      <HamburgerMenu src="/images/icons/menu.svg" alt="dropdown menu icon" onClick={() => setShowDropdown(true)} />
    </NavBarContainer>
  )
}

export default NavigationBar
