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
    justify-content: flex-end;
    align-items: center;
    margin-right: 80px;
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
  margin: 20px 20px;
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
    </Nav>
  )
}

export default Navbar
