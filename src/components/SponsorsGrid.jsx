import { useEffect, useState, useRef, memo } from 'react'
import styled from 'styled-components'
import LongSponsorList from './LongSponsor'
import Floor from './Floor'

const SPONSOR_WIDTH = { title: 70, platinum: 40, gold: 35, silver: 30, bronze: 25 }

const calculateSponsorRows = (tierList, containerWidth) => {
  const newRows = {}

  Object.entries(tierList).forEach(([tier, sponsors]) => {
    // skip startup and inkind tiers since they're displayed with a long sponsor card
    if (['startup', 'inkind'].includes(tier)) return

    if (sponsors.length === 0) {
      newRows[tier] = []
      return
    }

    const tierSize = SPONSOR_WIDTH[tier]
    const sponsorWidth = (tierSize / 100) * containerWidth

    let sponsorsPerRow = Math.floor(containerWidth / sponsorWidth) || 1
    if (sponsors.length >= 2) {
      if (sponsors.length < sponsorsPerRow) {
        sponsorsPerRow = sponsors.length
      } else {
        const numRows = Math.ceil(sponsors.length / sponsorsPerRow)
        sponsorsPerRow = Math.ceil(sponsors.length / numRows)
      }
    }

    newRows[tier] = Array.from({ length: Math.ceil(sponsors.length / sponsorsPerRow) }, (_, i) =>
      sponsors.slice(i * sponsorsPerRow, (i + 1) * sponsorsPerRow)
    )
  })

  return newRows
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (120 / 1280));
`

const SponsorLevelContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 95vw;
  margin-bottom: calc(100vw * (25 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    // flex-direction: column;
    // width: 100%;
  }
`

const SponsorContainer = styled.div`
  width: ${p => p.size}%;
  aspect-ratio: 769 / 384;
  background-image: url(./assets/images/sponsor_card.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;

  display: flex;
  justify-content: center;
`

const SponsorLink = styled.a`
  height: 60%;
  width: auto;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`

const SponsorImg = styled.img`
  height: 100%;
  max-width: 70%;
  border: none;
  object-fit: contain;
`

const Nugget = styled.img`
  position: absolute;
  width: calc(100vw * (135 / 1280));
  height: auto;
  z-index: 3;
  left: calc(100vw * (475 / 1280));
  top: calc(100vw * (275 / 1280));
`

const Sponsor = memo(({ link, url, size }) => (
  <SponsorContainer size={size}>
    <SponsorLink href={link} target="_blank" rel="noreferrer">
      <SponsorImg src={url} alt="Sponsor Logo" />
    </SponsorLink>
  </SponsorContainer>
))

const ListByTier = memo(({ listOfRows, tierSize, tier }) => {
  if (!listOfRows || listOfRows.length === 0) return null

  return (
    <>
      {listOfRows.map(row => (
        <SponsorLevelContainer key={`${tier}-${row[0].name}`}>
          <Floor />
          {tier === 'title' && <Nugget src="./assets/images/nugget_sponsor.png" />}
          <Row>
            {row.map(item => (
              <Sponsor key={item.name} link={item.link} url={item.imgURL} size={tierSize} />
            ))}
          </Row>
        </SponsorLevelContainer>
      ))}
    </>
  )
})

const SponsorsGrid = ({ sponsors }) => {
  const emptyTierList = { title: [], platinum: [], gold: [], silver: [], bronze: [], startup: [], inkind: [] }
  const [tierList, setTierList] = useState(emptyTierList)
  const [rows, setRows] = useState({})
  const containerRef = useRef(null)

  useEffect(() => {
    if (sponsors) {
      const updatedTierList = { ...emptyTierList }
      sponsors.forEach(sponsor => {
        const tier = sponsor.tier.toLowerCase()
        if (updatedTierList[tier]) {
          updatedTierList[tier].push(sponsor)
        }
      })
      setTierList(updatedTierList)
    }
  }, [sponsors])

  useEffect(() => {
    const calculateRows = () => {
      const containerWidth = 0.95 * (containerRef.current ? containerRef.current.offsetWidth : window.innerWidth)
      const newRows = calculateSponsorRows(tierList, containerWidth)
      setRows(newRows)
    }

    calculateRows()
    window.addEventListener('resize', calculateRows)
    return () => window.removeEventListener('resize', calculateRows)
  }, [tierList])

  return (
    <Container ref={containerRef}>
      <ListByTier listOfRows={rows.title} tierSize={SPONSOR_WIDTH.title} tier="title" />
      <ListByTier listOfRows={rows.platinum} tierSize={SPONSOR_WIDTH.platinum} tier="platinum" />
      <ListByTier listOfRows={rows.gold} tierSize={SPONSOR_WIDTH.gold} tier="gold" />
      <ListByTier listOfRows={rows.silver} tierSize={SPONSOR_WIDTH.silver} tier="silver" />
      <ListByTier listOfRows={rows.bronze} tierSize={SPONSOR_WIDTH.bronze} tier="bronze" />

      {tierList.startup.length > 0 && <LongSponsorList sponsors={tierList.startup} />}
      {tierList.inkind.length > 0 && <LongSponsorList sponsors={tierList.inkind} />}
    </Container>
  )
}

export default SponsorsGrid
