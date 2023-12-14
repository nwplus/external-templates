import { useEffect, useState } from 'react'
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

const Flex = styled.div`
  min-width: 800px;
  max-width: 1200px;
  width: 65vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  gap: 2rem;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    min-width: 0;
    width: calc(100% -2rem);
  }
`

const SponsorContainer = styled.div`
  width: 33%;
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
  const emptyTierList = { platinum: [], gold: [], silver: [], bronze: [], startup: [], inkind: [] }
  const [tierList, setTierList] = useState(emptyTierList)

  useEffect(() => {
    if (sponsors) {
      const updatedTierList = emptyTierList
      sponsors.forEach(sponsor => {
        updatedTierList[sponsor.tier.toLowerCase()].push(sponsor)
      })
      setTierList(updatedTierList)
    }
  }, [sponsors])

  const Sponsor = ({ link, url }) => (
    <SponsorContainer>
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
    </SponsorContainer>
  )

  const ListByTier = ({ listOfSponsors }) => (
    <Flex>
      {listOfSponsors.map(item => (
        <Sponsor
          {...{
            key: item.name,
            link: item.link,
            url: item.imgURL,
          }}
        />
      ))}
    </Flex>
  )

  return (
    <Container>
      <ListByTier listOfSponsors={tierList.platinum} />
      <ListByTier listOfSponsors={tierList.gold} />
      <ListByTier listOfSponsors={tierList.silver} />
      <ListByTier listOfSponsors={tierList.bronze} />
      <ListByTier listOfSponsors={tierList.startup} />
      <ListByTier listOfSponsors={tierList.inkind} />
    </Container>
  )
}

export default SponsorsGrid
