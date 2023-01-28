import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SponsorsGrid from '@components/SponsorsGrid'
import fireDb from '@utilities/firebase'

const SponsorsContainer = styled.div`
  position: relative;
  min-height: calc(calc(2050 / 1440) * 100vw);
  margin-top: -0.5rem;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc( calc(488 / 428) * 100vw);
    background: linear-gradient(to bottom, #8486B8, #383E82);
  }
`

const Sponsors = () => {
  const [sponsors, setSponsors] = useState(null)

  useEffect(async () => {
    // use cmd-f2022 collection to test
    const data = await fireDb.getCollection('cmd-f2023', 'Sponsors')
    if (data) {
      setSponsors(data)
    }
  }, [])

  return (
    <SponsorsContainer>
      hi
      <SponsorsGrid sponsors={sponsors} />
    </SponsorsContainer>
  )
}

export default Sponsors