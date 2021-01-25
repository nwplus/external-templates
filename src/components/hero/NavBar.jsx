import React, { useState, useEffect } from 'react'
import hamburger from '@assets/navbar__hamburger.svg'
import close from '@assets/navbar__close.svg'
import styled from 'styled-components'
import { debounce } from '@lib/Helpers'

const Nav = styled.nav`
    position: fixed;
    width: 100vw;
    visibility: ${p => p.visible ? 'visible' : 'hidden'};
    opacity: ${p => p.visible ? 1 : 0};
    transition: 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 80px;
`

const NavItemContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const NavItem = styled.a`
    font-family: Source Sans Pro;
    font-size: 18px;
    padding: 0px 32px;
    text-decoration: none;

    color: ${p => p.fontColor};

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      transition: width 0.3s;
      background: ${p => p.fontColor};
    }

    &:hover::after {
      width: 100%;
    }

    &:hover,
    &:focus,
    &:focus-within {
      background: none;
      color: ${p => p.fontColor};
    }
`

const Logo = styled.img`
    height: 50px;
    margin: 20px 40px;
`

const Banner = styled.a`
    max-width: 70px;
    min-width: 50px;
    width: 10%;
    margin-left: 50px;
`

const Hamburger = styled.a`
    cursor: pointer;
    margin: 40px;
    height: 20px;
`

const NwLogo = (props) => (
  <a href="https://www.nwplus.io/" target="_blank" rel="noopener" {...props}>
    <Logo
      src="/nwplus-logo.png"
      alt="nwPlus logo"
    />
  </a>
)

const Sidebar = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background: #1e313f;
    overflow: hidden;
`

const SidebarItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    & > a {
      font-size: 22px;
      margin: 25px 0;
    }
`

const Navbar = ({ config, flags }) => {
  // handles the navbar being visible when scrolling
  const { fontColor, previousYearLink } = config
  const { faqFlag, sponsorFlag } = flags

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)

    setPrevScrollPos(currentScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  // handles screen resizing and toggling of the sidebar
  const [width, setWidth] = useState(0);
  const handleWindowSizeChange = debounce(() => setWidth(window.innerWidth))

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    handleWindowSizeChange()

    return () => window.removeEventListener('resize', handleWindowSizeChange)
  }, [width, handleWindowSizeChange])

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  if (!open) {
    return (
      <Nav visible={visible} role="navigation" aria-label="main navigation">
        <Banner href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black" target="_blank">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg" alt="Major League Hacking 2021 Hackathon Season" />
        </Banner>

        {(width <= 786) ? (
          <Hamburger onClick={toggle}>
            <img src={hamburger} alt="hamburger menu" />
          </Hamburger>
        ) : (
            <NavItemContainer>
              <NavItem href="#about" fontColor={fontColor}>About</NavItem>
              {faqFlag && <NavItem href="#faq" fontColor={fontColor}>FAQ</NavItem>}
              {sponsorFlag && <NavItem href="#sponsors" fontColor={fontColor}>Sponsors</NavItem>}
              <NavItem href={previousYearLink} fontColor={fontColor}>Last Year</NavItem>
              <NwLogo />
            </NavItemContainer>

          )}
      </Nav>
    )
  } else {
    return (
      <Sidebar>
        <NwLogo style={{ height: '40px' }} />
        <SidebarItems>
          <NavItem href="#about" fontColor="white">About</NavItem>
          {faqFlag && <NavItem href="#faq" fontColor="white">FAQ</NavItem>}
          {sponsorFlag && <NavItem href="#sponsors" fontColor="white">Sponsors</NavItem>}
          <NavItem href={previousYearLink} fontColor="white">Last Year</NavItem>
        </SidebarItems>
        <Hamburger onClick={toggle}>
          <img src={close} alt="close hamburger menu" />
        </Hamburger>
      </Sidebar>
    )
  }

}

export default Navbar
