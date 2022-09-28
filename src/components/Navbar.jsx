
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider';

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: stretch;
  visibility: ${(p) => p.visibility};
  opacity: ${(p) => p.opacity};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  padding: 1.7rem 4rem 0;

  ${(p) => p.theme.mediaQueries.mobile} {
    background-color: ${p => p.theme.colors.navbar};
    padding: 24px 40px 0;
    z-index:999;
    justify-content:flex-end;
  }
`;

const NavGroupContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content:space-between;
  width: 100%;

  ${(p) => p.theme.mediaQueries.tablet} {
    gap: 5px;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    display:none;
  }
`;

const NavTextContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  flex-grow: 2;

  ${(p) => p.theme.mediaQueries.tablet} {
    gap: 15px;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const NwPlusLogo = styled.img`
  max-height:50px;
  margin-right: 18px;

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 50px;
    margin-right: 0;
  }
`;

const LinkText = styled.a`
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;
  
  ::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    transition: width 0.5s ease;
    background: white;
  }

  &:hover {
    color: ${(p) => p.theme.colors.text};
    text-decoration: none;
    
    ::after {
      width: 100%;
    }
  }
`;

const StyledLinkHeaders = styled.h3`
  font-size: 1.14rem;
  font-weight:400;
`

const HamburgerMenu = styled.img`
  display: none;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: block;
    width: 30px;
  }
`;

const DropDownContentContainer = styled.div`
  position: fixed;
  top:0;
  z-index: 998;
  padding: 30px 40px 24px 40px;
  display: flex;  
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  background: #002F4D;
`;

const PortalButtonContainer = styled.div`
  visibility: ${(p) => p.portalOpen !== null ? 'visible' : 'hidden'};
  opacity: ${(p) => p.portalOpen !== null ? '1' : '0'};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  justify-self: flex-end;
  user-select: none;
`;

const StyledPortalText = styled.div`
  color: ${p => p.disabled && p.theme.colors.disabledText};
`;

const Button = styled.a`
  display: table;
  text-decoration: none;
  position:relative;
  padding:11px 21px;
  border-radius:50px;
  font-weight: bold;
  background: linear-gradient(to right, #0DEFE1, #78FF96);
  color: #2C2543;

  &::before {
    display:flex;
    align-items:center;
    justify-content:center;
    content: "Live Portal";
    color:#2C2543;
    
    border-radius:50px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 1;
    transition: opacity 0.25s ease-in-out;
    opacity: 0;
    
    background: linear-gradient(to right, #00DBCE, #00D88A);
  }

  &:hover::before {
    opacity: 1;
  }

  ${p => !p.disabled && `
    &:hover {
      cursor:pointer;
    }
  `}

  ${p => p.disabled && `
    display: none;
    cursor: default;

    &:hover::before {
      opacity: 0;
    }
  `}
`;

const MenuItem = ({ name, href, isAnchor, target, rel, isMobile, closeDropdown }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    if (isAnchor) {
      setAnchorTarget(document.getElementById(href));
    }
  }, [href]);

  const handleClick = (event) => {
    if (isAnchor && anchorTarget) {
      event.preventDefault();
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobile) {
      closeDropdown(false);
    }
  };

  return (
    <LinkText href={href} onClick={handleClick} target={target} rel={rel}>
      <StyledLinkHeaders>{name}</StyledLinkHeaders>
    </LinkText>
  );
};

const PortalButton = ({ portalOpen }) => (
  <PortalButtonContainer portalOpen={portalOpen}>
    <Button
      width='130px'
      height='45px'
      borderRadius='100px'
      isGradient
      textColor='black'
      href='https://portal.nwplus.io'
      target='_blank'
      disabled={!portalOpen}
    >
      <StyledPortalText disabled={!portalOpen}>
        Live Portal
      </StyledPortalText>
    </Button>
  </PortalButtonContainer>
)

const MenuList = ({ isMobile, closeDropdown }) => (
  <>
    <MenuItem name='About' href='/#about' isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    {/* <MenuItem name='Statistics' href='/#statistics' isAnchor isMobile={isMobile} closeDropdown={closeDropdown} /> */}
    <MenuItem name='FAQ' href='/#faq' isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name='Sponsors' href='/#sponsors' isAnchor isMobile={isMobile} closeDropdown={closeDropdown} />
    <MenuItem name='2021' href='https://hackcamp2021.nwplus.io' target='_blank' rel='noopener' isMobile={isMobile} closeDropdown={closeDropdown} />
  </>
);

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibility, setVisibility] = useState('visible');
  const [opacity, setOpacity] = useState('1');

  const handleResize = () => {
    if (window.innerWidth >= SCREEN_BREAKPOINTS.mobile) {
      setShowDropdown(false);
    }
  };

  const handleScroll = () => {
    let lastScroll = 0;
    return () => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      if (scroll <= 0) {
        setVisibility('visible');
        setOpacity('1');
      } else if (scroll > lastScroll) {
        setVisibility('hidden');
        setOpacity('0');
      } else {
        setVisibility('visible');
        setOpacity('1');
      }
      lastScroll = scroll;
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll());
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (showDropdown) {

    // Mobile version
    return (
      <>
        <NavBarContainer mobileView>
          <HamburgerMenu
            src='/assets/icons/cross.svg'
            alt='dropdown menu icon'
            onClick={() => setShowDropdown(false)}
          />
        </NavBarContainer>

        <DropDownContentContainer>
          <a href='/'>
            <NwPlusLogo
              src='/assets/tent.svg'
              alt='HackCamp logo'
            />
          </a>
          <MenuList isMobile={showDropdown} closeDropdown={setShowDropdown} />
          <PortalButton portalOpen={false} />
        </DropDownContentContainer>

        {/* <TrustBadge /> */}
      </>
    );
  }

  // Only for desktop version
  return (
    <NavBarContainer visibility={visibility} opacity={opacity}>
      <NavGroupContainer>
        <a href='/'>
          <NwPlusLogo
            src='/assets/logo/nwPlus_Logo.svg'
            alt='nwPlus club logo in white' />
        </a>
        <NavTextContainer>
          <MenuList />
        </NavTextContainer>
        <PortalButton portalOpen={false} />
      </NavGroupContainer>

      <HamburgerMenu
        src='/assets/icons/menu.svg'
        alt='dropdown menu icon'
        onClick={() => setShowDropdown(true)} />

      {/* <TrustBadge /> */}

    </NavBarContainer>
  );
};

export default NavBar;
