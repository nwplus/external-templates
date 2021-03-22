import React, { useState, useEffect } from 'react'
import hamburger from '@assets/navbar__hamburger.svg'
import close from '@assets/navbar__close.svg'
import styled from 'styled-components'
import debounce from '@utilities/debounce'

const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  visibility: ${p => (p.visible ? 'visible' : 'hidden')};
  opacity: ${p => (p.visible ? 1 : 0)};
  transition: 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 80px;
  z-index: 999;
`

const NavItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavItem = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  padding: 0px 32px;
  text-decoration: none;

  color: ${p => p.fontColor};

  &::after {
    content: '';
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

const NwLogo = ({ logo, ...props }) => (
  <a href="https://www.nwplus.io/" target="_blank" rel="noopener noreferrer" {...props}>
    <Logo src={logo} alt="nwPlus logo" />
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
  z-index: 999;
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
  const { fontColor, previousYearLink, mlhBannerLink, mlhBannerLogo, nwLogo } = config
  const { faqFlag, sponsorFlag, mentorFlag, mlhFlag } = flags

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
  const [width, setWidth] = useState(0)
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
        {mlhFlag ? (
          <Banner href={mlhBannerLink} target="_blank">
            <img src={mlhBannerLogo} alt="Major League Hacking 2021 Hackathon Season" />
          </Banner>
        ) : (
          <div></div>
        )}

        {width <= 786 ? (
          <Hamburger onClick={toggle}>
            <img src={hamburger} alt="hamburger menu" />
          </Hamburger>
        ) : (
          <NavItemContainer>
            <NavItem href="#about" fontColor={fontColor}>
              About
            </NavItem>
            {faqFlag && (
              <NavItem href="#faq" fontColor={fontColor}>
                FAQ
              </NavItem>
            )}
            {sponsorFlag && (
              <NavItem href="#sponsors" fontColor={fontColor}>
                Sponsors
              </NavItem>
            )}
            {mentorFlag && (
              <NavItem href="#mentors" fontColor={fontColor}>
                Mentors
              </NavItem>
            )}
            <NavItem href={previousYearLink} fontColor={fontColor}>
              Last Year
            </NavItem>
            <NwLogo logo={nwLogo} />
          </NavItemContainer>
        )}
      </Nav>
    )
  }
  return (
    <Sidebar>
      <NwLogo logo={nwLogo} style={{ height: '40px' }} />
      <SidebarItems>
        <NavItem onClick={toggle} href="#about" fontColor="white">
          About
        </NavItem>
        {faqFlag && (
          <NavItem onClick={toggle} href="#faq" fontColor="white">
            FAQ
          </NavItem>
        )}
        {sponsorFlag && (
          <NavItem onClick={toggle} href="#sponsors" fontColor="white">
            Sponsors
          </NavItem>
        )}
        {mentorFlag && (
          <NavItem onClick={toggle} href="#mentors" fontColor="white">
            Mentors
          </NavItem>
        )}
        <NavItem onClick={toggle} href={previousYearLink} fontColor="white">
          Last Year
        </NavItem>
      </SidebarItems>
      <Hamburger onClick={toggle}>
        <img src={close} alt="close hamburger menu" />
      </Hamburger>
    </Sidebar>
  )
}

export default Navbar
