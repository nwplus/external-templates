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
  @media (max-width: 900px) {
    gap: 32px 8px;
    width: 85%;
  }
  @media (max-width: 480px) {
    gap: 16px;
  }
`

const MinorSponsorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-evenly;
  gap: 16px;
  margin-top: 1rem;
  @media (max-width: 900px) {
    gap: 16px 8px;
    margin-top: 12%;
  }
  @media (max-width: 500px) {
    margin-top: 1rem;
    gap: 8px;
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
