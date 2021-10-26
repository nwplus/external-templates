import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider';
import fireDb from '../utilities/firebase';
import Button from './Button';
import { Header3 } from './Typography';

const NavBarContainer = styled.nav`
  ${p => p.mobileView && `background-color: ${p.theme.colors.navbar}`};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 3;
  max-width: 1600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  visibility: ${(p) => p.visibility};
  opacity: ${(p) => p.opacity};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  padding: 48px 40px 0;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 24px 40px 0;
  }
`;

const NavGroupContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;

  ${(p) => p.theme.mediaQueries.tablet} {
    gap: 5px;
  }
`;

const NavTextContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;

  ${(p) => p.theme.mediaQueries.tablet} {
    gap: 15px;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const NwPlusLogo = styled.img`
  margin-right: 18px;

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 21.89px;
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

const StyledLinkHeaders = styled(Header3)`
  font-size: 1.5em;
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
  top: 54px;
  z-index: 3;
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  background-color: ${p => p.theme.colors.navbar};
`;

const PortalButtonContainer = styled.div`
  visibility: ${(p) => p.portalOpen !== null ? 'visible' : 'hidden'};
  opacity: ${(p) => p.portalOpen !== null ? '1' : '0'};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

const StyledPortalText = styled.div`
  color: ${p => p.disabled && p.theme.colors.disabledText};
  font-weight: bold;
`;

const MenuItem = ({ name, href, isAnchor }) => {
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
  };

  return (
    <LinkText href={href} onClick={handleClick}>
      <StyledLinkHeaders>{name}</StyledLinkHeaders>
    </LinkText>
  );
};

const MenuList = () => (
  <>
    <MenuItem name='About' href='/#about' isAnchor />
    <MenuItem name='Events' href='/#events' isAnchor />
    <MenuItem name='FAQ' href='/#faq' isAnchor />
    <MenuItem name='Sponsors' href='/#sponsors' isAnchor />
  </>
);

const PortalButton = ({ portalOpen }) => (
  <PortalButtonContainer portalOpen={portalOpen}>
    <Button
      width='130px'
      height='45px'
      borderRadius='100px'
      isGradient
      textColor='black'
      href='https://www.portal.nwplus.io'
      target='_blank'
      disabled={!portalOpen}
    >
      <StyledPortalText disabled={!portalOpen}>
        Live Portal
      </StyledPortalText>
    </Button>
  </PortalButtonContainer>
)

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibility, setVisibility] = useState('visible');
  const [opacity, setOpacity] = useState('1');

  const [portalOpen, setPortalOpen] = useState(null);

  const setPortalFlag = async () => {
    const hackcampData = await fireDb.getWebsiteData('HackCamp2021');
    setPortalOpen(hackcampData.featureFlags.isOpen);
  }

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

    setPortalFlag();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (showDropdown) {
    // For mobile version
    return (
      <>
        <NavBarContainer mobileView>
          <a href='/'>
            <NwPlusLogo
              src='/assets/logo/nwPlus_Logo.svg'
              alt='nwPlus club logo in white'
            />
          </a>
          <HamburgerMenu
            src='/assets/icons/cross.svg'
            alt='dropdown menu icon'
            onClick={() => setShowDropdown(false)}
          />
        </NavBarContainer>
        <DropDownContentContainer>
          <MenuList />
          <PortalButton portalOpen={portalOpen} />
        </DropDownContentContainer>
      </>
    );
  }

  // For desktop version
  return (
    <NavBarContainer visibility={visibility} opacity={opacity}>
      <NavGroupContainer>
        <a href='/'>
          <NwPlusLogo
            src='/assets/logo/nwPlus_Logo.svg'
            alt='nwPlus club logo in white'
          />
        </a>
        <NavTextContainer>
          <MenuList />
        </NavTextContainer>
      </NavGroupContainer>
      <NavTextContainer>
        <PortalButton portalOpen={portalOpen} />
      </NavTextContainer>
      <HamburgerMenu
        src='/assets/icons/menu.svg'
        alt='dropdown menu icon'
        onClick={() => setShowDropdown(true)}
      />
    </NavBarContainer>
  );
};

export default NavBar;
