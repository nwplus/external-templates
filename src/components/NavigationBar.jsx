import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import { scale } from '@utilities/format'
import mlhImage from '@assets/images/mlhTrustBadgeWhite.svg'
import { BANNER_OFFSET } from '../constants/measurements'
import MenuImg from '../../out/assets/icons/menu.svg'


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
  background: #AA4245;
`

const PortalButtonContainer = styled.div`
  visibility: ${p => (p.portalOpen !== null ? 'visible' : 'hidden')};
  opacity: ${p => (p.portalOpen !== null ? '1' : '0')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  justify-self: center;
  user-select: none;
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
  right: 120px;
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

    background: #DCB551;
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
    background: #152E3A;
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
    <MenuItem name="About" href="/#about" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    {/* <MenuItem name='Statistics' href='/#statistics' isAnchor isMobile={isMobile} closeDropdown={closeDropdown} /> */}
    <MenuItem name="FAQ" href="/#faq" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name="Sponsors" href="/#sponsors" isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem
      name="2023"
      href="https://2023.nwhacks.io"
      target="_blank"
      rel="noopener"
      isMobile={isMobile}
      closeDropdown={closeDropdown}
    />
  </>
)

const TrustBadge = ({ stayAtTop }) => (
  <TrustBadgeLink
    id="mlh-trust-badge"
    rel="noreferrer"
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
    target="_blank"
    stayAtTop={stayAtTop}
  >
    <img src={mlhImage} alt="Major League Hacking 2024 Hackathon Season" style={{ width: '100%' }} />
  </TrustBadgeLink>
)

const NavigationBar = ({ bannerExists }) => {
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
            <NwPlusLogo src="/images/logos/nwplus-logo.svg" alt="nwPlus club logo in white" />
          </a>
          <MenuList isMobile={showDropdown} closeDropdown={setShowDropdown} />
          {/* Make sure desktop (below) has the same portalOpen value */}
          <PortalButton portalOpen={true} />
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
        <a href="/">
          <NwPlusLogo src="/images/logos/nwplus-logo.svg" alt="nwPlus club logo in white" />
        </a>
        <NavTextContainer>
          <MenuList />
        </NavTextContainer>
        {/* Make sure mobile (above) has the same portalOpen value */}
        <PortalButton portalOpen={true} />
      </NavGroupContainer>
      <HamburgerMenu src={MenuImg} alt="dropdown menu icon" onClick={() => setShowDropdown(true)} />
      <TrustBadge stayAtTop={stayAtTop} />
    </NavBarContainer>
  )
}

export default NavigationBar
