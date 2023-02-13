import React from 'react'
import SVG from 'react-inlinesvg'
import styled from 'styled-components'

const CompanyImg = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const SponsorBG = styled.div`
  width: ${p => (p.size === 'small' ? '200px' : '500px')};
  max-width: none;

  @media (max-width: 1280px) {
    max-width: ${p => (p.size === 'small' ? '10vw' : '30vw')};
  }

  @media (max-width: 600px) {
    max-width: ${p => (p.size === 'small' ? '13vw' : '30vw')};
  }
`

const SponsorContainer = ({ variant, size, svg }) => {
  const BgBox = ({ variantType }) => {
    if (size === 'small') {
      return <SVG src="/assets/sponsors/smallSponsorBox.svg" />
    }
    if (variantType === 'v2') {
      return <SVG src="/assets/sponsors/sponsorBoxV2.svg" />
    }
    if (variantType === 'v3') {
      return <SVG src="/assets/sponsors/sponsorBoxV3.svg" />
    }
    if (variantType === 'v4') {
      return <SVG src="/assets/sponsors/sponsorBoxV4.svg" />
    }
    return <SVG src="/assets/sponsors/sponsorBoxV1.svg" />
  }
  return (
    <div style={{ position: 'relative', display: size === 'small' ? 'inline' : undefined }}>
      <SponsorBG size={size}>
        <BgBox variantType={variant} />
      </SponsorBG>

      <CompanyImg>
        <SVG src={svg} width="auto" height="auto" />
      </CompanyImg>
    </div>
  )
}

export default SponsorContainer
