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
  width: ${p => p.size || '33%'}; // Adjust the default width for each tier
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
  const emptyTierList = { gold: [], silver: [], bronze: [], inkind: [] }
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

  const Sponsor = ({ link, url, size }) => (
    <SponsorContainer size={size}>
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

  const ListByTier = ({ listOfSponsors, tierSize }) => (
    <Flex>
      {listOfSponsors.map(item => (
        <Sponsor
          key={item.name}
          link={item.link}
          url={item.imgURL}
          size={tierSize}
        />
      ))}
    </Flex>
  )

  return (
    <Container>
      <ListByTier listOfSponsors={tierList.gold} tierSize="33%" />
      <ListByTier listOfSponsors={tierList.silver} tierSize="25%" />
      <ListByTier listOfSponsors={tierList.bronze} tierSize="20%" />
      <ListByTier listOfSponsors={tierList.inkind} tierSize="15%" />
    </Container>
  )
}

export default SponsorsGrid