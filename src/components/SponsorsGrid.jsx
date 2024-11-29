import { useEffect, useState, useRef, memo } from 'react'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import styled from 'styled-components'
import Floor from './Floor'

const SPONSOR_WIDTH = { title: 70, platinum: 45, gold: 40, silver: 35, bronze: 30, startup: 25, inkind: 20 }
const MOBILE_SPONSOR_WIDTH = { title: 95, platinum: 80, gold: 45, silver: 35, bronze: 30, startup: 25, inkind: 20 }

const calculateSponsorRows = (tierList, containerWidth, isMobile) => {
  const newRows = {}
  const widthConfig = isMobile ? MOBILE_SPONSOR_WIDTH : SPONSOR_WIDTH

  Object.entries(tierList).forEach(([tier, sponsors]) => {
    if (sponsors.length === 0) {
      newRows[tier] = []
      return
    }

    const tierSize = widthConfig[tier]
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
    gap: calc(100vw * (5 / 487));
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

  ${p => p.theme.mediaQueries.mobile} {
    width: ${p => MOBILE_SPONSOR_WIDTH[p.tier]}%;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (70 / 487));
    left: calc(100vw * (150 / 487));
    top: calc(100vw * (135 / 487));
  }
`

const Sponsor = memo(({ link, url, size, tier }) => (
  <SponsorContainer size={size} tier={tier}>
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
              <Sponsor key={item.name} link={item.link} url={item.imgURL} size={tierSize} tier={tier} />
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
  const [isMobile, setIsMobile] = useState(false)

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
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const calculateRows = () => {
      const containerWidth = window.innerWidth * 0.95
      const newRows = calculateSponsorRows(tierList, containerWidth, isMobile)
      setRows(newRows)
    }

    calculateRows()
    window.addEventListener('resize', calculateRows)
    return () => window.removeEventListener('resize', calculateRows)
  }, [tierList, isMobile])

  return (
    <Container ref={containerRef}>
      <ListByTier
        listOfRows={rows.title}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.title : SPONSOR_WIDTH.title}
        tier="title"
      />
      <ListByTier
        listOfRows={rows.platinum}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.platinum : SPONSOR_WIDTH.platinum}
        tier="platinum"
      />
      <ListByTier
        listOfRows={rows.gold}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.gold : SPONSOR_WIDTH.gold}
        tier="gold"
      />
      <ListByTier
        listOfRows={rows.silver}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.silver : SPONSOR_WIDTH.silver}
        tier="silver"
      />
      <ListByTier
        listOfRows={rows.bronze}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.bronze : SPONSOR_WIDTH.bronze}
        tier="bronze"
      />
      <ListByTier
        listOfRows={rows.startup}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.startup : SPONSOR_WIDTH.startup}
        tier="startup"
      />
      <ListByTier
        listOfRows={rows.inkind}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.inkind : SPONSOR_WIDTH.inkind}
        tier="inkind"
      />
    </Container>
  )
}

export default SponsorsGrid
