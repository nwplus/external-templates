import React from 'react'
import SVG from 'react-inlinesvg'
import styled from 'styled-components'

const CompanyImg = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const SponsorContainer = ({ variant, size, svg }) => {
  const BgBox = ({ variantType }) => {
    if (size === 'small') {
      return <SVG src="/assets/sponsors/smallSponsorBox.svg" />
    } else if (variantType === 'v2') {
      return <SVG src="/assets/sponsors/sponsorBoxV2.svg" />
    } else if (variantType === 'v3') {
      return <SVG src="/assets/sponsors/sponsorBoxV3.svg" />
    } else if (variantType === 'v4') {
      return <SVG src="/assets/sponsors/sponsorBoxV4.svg" />
    }
    return <SVG src="/assets/sponsors/sponsorBoxV1.svg" />
  }
  return (
    <div style={{ position: 'relative', display: size === 'small' ? 'inline' : undefined }}>
      <BgBox variantType={variant} />
      <CompanyImg>
        <SVG src={svg} />
      </CompanyImg>
    </div>
  )
}

export default SponsorContainer
