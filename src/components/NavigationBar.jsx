import { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import { scale } from '@utilities/format'
import { BANNER_OFFSET } from '../constants/measurements'

const NavBarContainer = styled.nav`
  position: ${p => (p.stayAtTop ? 'absolute' : 'fixed')};
  top: ${p => (p.stayAtTop ? BANNER_OFFSET : '0')}px;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: stretch;
  visibility: ${p => p.visibility};
  opacity: ${p => p.opacity};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  padding: calc(100vw * (40 / 1920)) calc(100vw * (160 / 1920));
  gap: 2rem;

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
  justify-content: left;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
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
    background: #4f2f22;
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
  font-family: Hanken Grotesk, sans-serif;
  font-size: ${() => scale(1024, 1440, 12, 16)};
  font-weight: 800;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: center;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 16px;
  }
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
  padding: 50px 40px 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  background: #eddecc;
`

const PortalButtonContainer = styled.div`
  display: ${p => (p.portalOpen ? 'block' : 'none')};
  opacity: ${p => (p.portalOpen ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  user-select: none;
`

const StyledPortalText = styled.div`
  color: ${p => p.disabled && p.theme.colors.disabledText};
`

const Button = styled.a`
  color: #f0e9d7;
  background: #4c9b7b;
  display: table;
  text-decoration: none;
  padding: 10px 21px;
  border-radius: 15px;
  font-weight: bold;
  font-size: ${() => scale(1024, 1440, 12, 16)};
  font-family: Space Grotesk, sans-serif;
  white-space: nowrap;
  ${p => p.theme.mediaQueries.mobile} {
    right: 0;
  }

  transition: all 0.3s ease;
  &:hover {
    background: #55ae8b;
  }

  // Removes the button if on mobile
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }

  ${p =>
    !p.disabled &&
    `
    &:hover {
      cursor:pointer;
    }
  `}
`

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
  }
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background: rgba(237, 222, 204, 0.6);
  min-width: 160px;
  border-radius: 8px;
  padding: 8px 0;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);

  ${DropdownContainer}:hover & {
    display: block;
  }

  ${p => p.theme.mediaQueries.mobile} {
    position: static;
    display: ${p => (p.isOpen ? 'block' : 'none')};
    transform: none;
    background: transparent;
    padding: 16px 0 0 16px;
  }
`

const DropdownItem = styled(LinkText)`
  padding: 8px 16px;
  display: block;
  white-space: nowrap;

  &:hover {
    background: rgba(79, 47, 34, 0.1);
  }
`

const DropdownLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const DropdownIcon = styled.img`
  width: 18px;
  height: 18px;
`

const TrustBadgeLink = styled.a`
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: ${p => (p.stayAtTop ? 'absolute' : 'fixed')};
  top: 0px;
  right: 30px;
  width: 5%;
  z-index: 1000;

  ${p => p.theme.mediaQueries.mobile} {
    left: 30px;
  }
`

const TrustBadge = ({ stayAtTop }) => (
  <TrustBadgeLink
    id="mlh-trust-badge"
    rel="noreferrer"
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
    target="_blank"
    stayAtTop={stayAtTop}
  >
    <img
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
      alt="Major League Hacking 2026 Hackathon Season"
      style={{ width: '100%' }}
    />
  </TrustBadgeLink>
)

const Dropdown = ({ label, items, isMobile, closeDropdown }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = e => {
    if (isMobile) {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  return (
    <DropdownContainer>
      <LinkText href="#" onClick={handleClick}>
        <DropdownLabel>
          <StyledLinkHeaders>{label}</StyledLinkHeaders>
          <DropdownIcon src="/assets/images/dropdown.svg" alt="dropdown arrow" />
        </DropdownLabel>
      </LinkText>
      <DropdownContent isOpen={isMobile ? isOpen : undefined}>
        {items.map(({ name, href }) => (
          <DropdownItem
            key={name}
            href={href}
            onClick={e => {
              e.preventDefault()
              document.getElementById(href.replace('/#', '')).scrollIntoView({ behavior: 'smooth', block: 'start' })
              if (isMobile) {
                closeDropdown(false)
              }
            }}
          >
            <StyledLinkHeaders>{name}</StyledLinkHeaders>
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  )
}

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
    <Button href="https://portal.nwplus.io" target="_blank" disabled={!portalOpen}>
      <StyledPortalText disabled={!portalOpen}>Live Portal</StyledPortalText>
    </Button>
  </PortalButtonContainer>
)

const MenuList = ({ isMobile, closeDropdown }) => (
  <>
    <Dropdown
      label="About"
      items={[
        { name: 'What is cmd-f?', href: '/#about' },
        { name: 'Values', href: '/#values' },
      ]}
      isMobile={isMobile}
      closeDropdown={closeDropdown}
    />
    <MenuItem name="Stats" href="/#stats" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <Dropdown
      label="History"
      items={[
        { name: 'Past Projects', href: '/#past-projects' },
        { name: 'Recap', href: '/#gallery' },
      ]}
      isMobile={isMobile}
      closeDropdown={closeDropdown}
    />
    <MenuItem name="FAQ" href="/#faq" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Sponsors" href="/#sponsors" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Contact" href="/#footer" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem
      name="2025"
      href="https://cmd-f2025.nwplus.io/"
      isAnchor
      isMobile={isMobile}
      closeDropdown={closeDropdown}
    />
  </>
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
          <TrustBadge stayAtTop={stayAtTop} />
        </NavBarContainer>
        <DropDownContentContainer>
          <MenuList isMobile={showDropdown} closeDropdown={setShowDropdown} />
          {/* Make sure desktop (below) has the same portalOpen value */}
        </DropDownContentContainer>
      </>
    )
  }

  // Only for desktop version
  return (
    <NavBarContainer visibility={visibility} opacity={opacity} stayAtTop={stayAtTop}>
      <PortalButton portalOpen={null} />
      <NavGroupContainer>
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
