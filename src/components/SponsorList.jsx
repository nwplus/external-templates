import React from 'react'
import styled from 'styled-components'
import SponsorContainer from './SponsorContainer'

const OuterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-evenly;
  gap: 16px;
  width: 80%;
  @media (max-width: 720px) {
    gap: 32px 8px;
    width: 85%;
  }
`

const MinorSponsorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-evenly;
  gap: 16px;
  margin-top: 1rem;
  @media (max-width: 720px) {
    gap: 16px 8px;
    margin-top: 0.5rem;
  }
`

const SponsorList = ({ sponsorList, variant }) => {
  if (variant === 'minor') {
    return (
      <MinorSponsorContainer>
        {sponsorList.map(sponsorData => (
          <SponsorContainer
            key={sponsorData.id}
            variant={sponsorData.variant}
            svg={sponsorData.svg}
            size={sponsorData.size}
          />
        ))}
      </MinorSponsorContainer>
    )
  }
  return (
    <OuterContainer>
      {sponsorList.map(sponsorData => (
        <SponsorContainer key={sponsorData.id} variant={sponsorData.variant} svg={sponsorData.svg} />
      ))}
    </OuterContainer>
  )
}

export default SponsorList
