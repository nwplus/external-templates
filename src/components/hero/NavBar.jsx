import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '@assets/logo.png'
import { Columns, Column, SectionContainer } from '@lib/Containers'
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

const Navbar = ({ config, flags }) => {
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

  return (
    <Nav visible={visible} role="navigation" aria-label="main navigation">
      <Banner href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black" target="_blank">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg" alt="Major League Hacking 2021 Hackathon Season" />
      </Banner>

      <NavItemContainer>
        <NavItem href="#about" fontColor={fontColor}>About</NavItem>
        {faqFlag && <NavItem href="#faq" fontColor={fontColor}>FAQ</NavItem>}
        {sponsorFlag && <NavItem href="#sponsors" fontColor={fontColor}>Sponsors</NavItem>}
        <NavItem href={previousYearLink} fontColor={fontColor}>Last Year</NavItem>
        <a href="https://www.nwplus.io/" target="_blank" rel="noopener">
          <Logo
            src="/nwplus-logo.png"
            alt="nwPlus logo"
          />
        </a>
      </NavItemContainer>
    </Nav>
  )
}

export default Navbar
