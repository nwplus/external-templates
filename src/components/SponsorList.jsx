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
`

const SponsorList = ({ sponsorList }) => {
  return (
    <OuterContainer>
      {sponsorList.map(sponsorData => (
        <SponsorContainer key={sponsorData.id} variant={sponsorData.variant} svg={sponsorData.svg} />
      ))}
    </OuterContainer>
  )
}

export default SponsorList
