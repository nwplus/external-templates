import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo.png'
import { Columns, Column, SectionContainer } from '@lib/Containers'

const Nav = styled.nav`
    position: fixed;
    width: 100vw;
    visibility: visible;
    transition: 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 80px;

    & > a {
      color: ${p => p.fontColor};
    }

    & > a::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      transition: width 0.3s;
      background: ${p => p.fontColor};
    }

    & > a:hover::after {
      width: 100%;
    }

    & > a:hover,
    & > a:focus,
    & > a:focus-within {
      background: none;
      color: ${p => p.fontColor};
    }
`

const NavItem = styled.a`
    font-size: 18px;
    padding: 0px 32px;
    text-decoration: none;
`

const Logo = styled.img`
  height: 50px;
  margin: 20px 20px;
`

const Navbar = ({ config, flags }) => {
    const { fontColor, previousYearLink } = config
    const { faqFlag, sponsorFlag } = flags
    return (
        <Nav fontColor={fontColor} role="navigation" aria-label="main navigation">
            <NavItem href="#about">About</NavItem>
            {faqFlag && <NavItem href="#faq">FAQ</NavItem>}
            {sponsorFlag && <NavItem href="#sponsors">Sponsors</NavItem>}
            <NavItem href={previousYearLink}>Last Year</NavItem>
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
