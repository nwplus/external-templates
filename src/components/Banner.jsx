// implement a banner component that displays a message and a button

import styled from 'styled-components'

const BannerContainer = styled.div`
  background: linear-gradient(92.58deg, #0defe1 0%, #78ff96 100%);
  position: absolute;
  z-index: 1;
  height: 134px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 64px;
  gap: 10px;
  color: #2c2543;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    padding-right: 100px;
    font-size: 20px;
  }
`

const BannerHeader = styled.div`
  font-weight: 700;
`

const BannerText = styled.div`
  font-weight: 400;
`

// Used as a link on the Banner component (last used to redirect to info.jsx)
// const LearnMore = styled.a`
//   text-decoration: underline;
//   color: #2c2543;
// `

const Banner = () => (
  <BannerContainer>
    <BannerHeader>IMPORTANT UPDATE:</BannerHeader>
    <BannerText>
      nwHacks 2024 is not currently accepting applications. The application form will open on December 1st, 2023.
    </BannerText>
  </BannerContainer>
)

export default Banner
