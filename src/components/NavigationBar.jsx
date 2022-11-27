import React, { Component } from 'react';

import styled from 'styled-components';
import logo from '../assets/logos/nwplus-logo.svg';

const NavbarUl = styled.ul`
    position: fixed;
    list-style-type: none;
    display: inline;
    padding: 0;
    width:100%;
    height: 60px;
    padding-right: 2.5%;
    padding-left: 2.5%;
`

const NavbarLi = styled.li`
    display: inline;
    margin: 20px;
`

const NavbarHyperlink = styled.a`
    color: white;
    text-decoration: none;
    line-height: 20px;
    font-weight: bold;

    background-image: linear-gradient(#FFF, #FFF);
    background-size: 0% 0.1em;
    background-position-y: 100%;
    background-position-x: 0%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease-in-out;

    &:hover, &:focus, &:active {
      background-size: 100% 0.1em;
    }
`

const LivePortalBtn = styled.a`
    position: relative;
    text-decoration: none;
    color: #2C2543;
    font-family: 'HK Grotesk', sans-serif;
    font-weight: bold;
    background: linear-gradient(92.58deg, #0DEFE1 0%, #78FF96 100%);
    border-radius: 100px;
    padding: 10px 20px;
    float: right;
    right: 20px;
    top: 30px;
    transition: 0.5s;

    &:hover {
      background: linear-gradient(90deg, #D7FFF0 0%, #A5FFDE 54.61%, #7BFFCF 100%);
      color: #00A399;
    }
`

function NavigationBar() {
  return (
    <NavbarUl>
      <NavbarLi>
        <NavbarHyperlink style={{ backgroundSize: "0% 0.1em" }} href="https://nwplus.io/">
          <img src={logo} style={{ position: "relative", top: "15px" }} alt="nwPlus Logo" />
        </NavbarHyperlink>
      </NavbarLi>
      <NavbarLi><NavbarHyperlink href="">About</NavbarHyperlink></NavbarLi>
      <NavbarLi><NavbarHyperlink href="">Hackathons</NavbarHyperlink></NavbarLi>
      <NavbarLi><NavbarHyperlink href="">Resources</NavbarHyperlink></NavbarLi>
      <NavbarLi><NavbarHyperlink href="">FAQ</NavbarHyperlink></NavbarLi>

      <NavbarLi><LivePortalBtn href="https://portal.nwplus.io/">Live Portal</LivePortalBtn></NavbarLi>
    </NavbarUl >
  )
}

export default NavigationBar;
