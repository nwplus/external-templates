import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMedium,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Team from "@components/Team"

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 89vw;
  display: flex;
  justify-content: center;
  margin-top: -42vw;
  padding-top: 21vw;
  padding-bottom: 20px;
  a {
    transition: ${p => p.theme.transition.small};
    color: ${p => p.theme.colors.text};
    :hover {
      cursor: pointer;
      color: ${p => p.theme.colors.primary};
    }
  }
  background: url('assets/background/footer.svg');
  background-size: cover;
`

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  a {
    width: 32px;
  }
  gap: 20px;
`;

const Links = styled.div`
  display: flex;
  gap: 52px;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`

const TeamContainer = styled.div`
  width: 27vw;
  
  ${(p) => p.theme.mediaQueries.tabletLarge} {
    width: 40vw;
  }
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
  position: absolute;
  right: 2vw;
  bottom: 3vw;
  text-align: center;
  border: 4px solid #57EAEF;
  border-radius: 8px;
  background: #39537B;
`

export default function Footer() {
  return (
    <Container>
      <TextContainer>
        <SocialMediaIcons>
          <a
            href='https://www.facebook.com/nwplusubc'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href='https://www.instagram.com/nwplusubc'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href='https://twitter.com/nwplusubc'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href='https://www.linkedin.com/company/nwplus'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href='https://www.youtube.com/c/nwPlusUBC'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href='https://medium.com/nwplusubc' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </SocialMediaIcons>
        <Links>
          <a href="mailto:info@nwplus.io" target="_blank" rel='noreferrer'>Email Us</a>
          <a href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel='noreferrer'>Become a Sponsor</a>
        </Links>
        <div>
          <div>Organized and held by nwPlus</div>
          <div>Copyright &copy; nwHacks 2022</div>
        </div>
      </TextContainer>
      <TeamContainer>
        <Team />
      </TeamContainer>
    </Container>
  )
}