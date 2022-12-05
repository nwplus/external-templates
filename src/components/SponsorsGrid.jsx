import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40vw;

  ${p => p.theme.mediaQueries.mobile} {
    padding-top: 2rem;
    min-height: 100vh;
  }
`

const Grid = styled.div`
  min-width: 800px;
  max-width: 1200px;
  width: 65vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 3rem;
  gap: 2rem;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: calc(100% -2rem);
  }
`

const SponsorImg = styled.img`
  height: 100%;
  width: 100%;
  border: none;
  object-fit: contain;
  ${p => p.theme.mediaQueries.mobile} {
  }
`

const SponsorsGrid = ({ sponsors }) => {
  const emptyTierList = { platinum: [], gold: [], silver: [], bronze: [], Inkind: [] }
  const [tierList, setTierList] = useState(emptyTierList)

  useEffect(() => {
    if (sponsors) {
      const updatedTierList = emptyTierList
      sponsors.forEach(sponsor => {
        updatedTierList[sponsor.tier].push(sponsor)
      })
      setTierList(updatedTierList)
    }
  }, [sponsors])

  const Sponsor = ({ link, url }) => (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{
        width: '100%',
        aspectRatio: '1/1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SponsorImg src={url} />
    </a>
  )

  const ListByTier = ({ listOfSponsors }) => (
    <>
      {listOfSponsors?.map(item => (
        <Sponsor
          {...{
            key: item.name,
            link: item.link,
            url: item.imgURL,
          }}
        />
      ))}
      <br />
    </>
  )

  return (
    <Container>
      <Grid>
        <ListByTier listOfSponsors={tierList.platinum} />
        <ListByTier listOfSponsors={tierList.gold} />
        <ListByTier listOfSponsors={tierList.silver} />
        <ListByTier listOfSponsors={tierList.bronze} />
        <ListByTier listOfSponsors={tierList.Inkind} />
      </Grid>
    </Container>
  )
}

export default SponsorsGrid
