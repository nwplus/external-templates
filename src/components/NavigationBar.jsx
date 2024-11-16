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
  padding: 0 64px;

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
  gap: 3%;
  align-items: center;
  width: 100%;
  justify-content: center;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const NwPlusLogoContainer = styled.div`
  svg {
    max-height: 40px;

    ${p => p.theme.mediaQueries.mobile} {
      width: 30px;
    }
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
  font-size: ${() => scale(1024, 1440, 12, 18)};
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
    width: 30px;
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
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: bold;
  background: linear-gradient(36deg, #d69a0e 23.92%, #f0bb3e 68.82%);
  font-size: ${() => scale(1024, 1440, 12, 18)};
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

    border-radius: 50px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 1;
    transition: opacity 0.25s ease-in-out;
    opacity: 0;

    background: linear-gradient(36deg, #b88a0d 23.92%, #d69a0e 68.82%);
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

const NwPlusLogo = ({ fill }) => (
  <NwPlusLogoContainer>
    <svg width="44" height="50" viewBox="0 0 44 50" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.3923 5.81787L43.7849 5.81787V9.069L32.3923 9.069V5.81787Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.8683 0L39.8683 11.8067L36.3081 15.229L36.3081 3.59335L39.8683 0Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5292 20.1916L41.6721 13.3472L41.6721 42.2151L34.5292 38.6218L34.5292 20.1916Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.35144 9.58227V0L41.6496 39.698V49.2802L0.35144 9.58227Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.35144 0L7.47181 6.84448L7.47181 42.4358L0.35144 49.2802L0.35144 0Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.351534 49.2798L17.7964 32.8531L12.8122 28.0619L0.462376 39.2835L0.351534 49.2798Z"
        fill={fill}
      />
    </svg>
  </NwPlusLogoContainer>
)

const MenuList = ({ isMobile, closeDropdown }) => (
  <>
    {isMobile && <NwPlusLogo fill="#3A2F21" />}
    <MenuItem name="About" href="/#about" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Recap" href="/#recap" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Workshops" href="/#workshops" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Past Projects" href="/#past-projects" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    {!isMobile && <NwPlusLogo fill="white" />}
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
