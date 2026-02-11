import { useEffect, useState, useRef, memo } from 'react'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import styled from 'styled-components'

const SPONSOR_WIDTH = { title: 70, platinum: 45, gold: 40, silver: 35, bronze: 30, startup: 25, inkind: 20 }
const MOBILE_SPONSOR_WIDTH = { title: 95, platinum: 80, gold: 45, silver: 35, bronze: 30, startup: 25, inkind: 20 }

const CARD_POSITION_OVERRIDES = {
  gold: {
    0: { rotate: -20, y: 8 },
    1: { y: -8 },
    2: { rotate: 12, y: 20 },
  },
  silver: {
    0: { rotate: -25, y: 0 },
    1: { rotate: -15, y: -20 },
    2: { rotate: -2, y: -20 },
    3: { rotate: 10, y: 5 },
  },
  bronze: {
    0: { rotate: -25, mobileRotate: -20, y: 30, mobileY: 30 },
    1: { rotate: -15, mobileRotate: -10, y: 1, mobileY: 1 },
    2: { rotate: -0, mobileRotate: 0, y: -20, mobileY: 0 },
    3: { rotate: 15, mobileRotate: 10, y: 1, mobileY: 25 },
    4: { rotate: 25, mobileRotate: 20, y: 30, mobileY: 30 },
  },
  inkind: {
    0: { rotate: -20, mobileRotate: -20, y: 25, mobileY: 30 },
    1: { rotate: -10, mobileRotate: -10, y: 10, mobileY: 0 },
    2: { rotate: 0, mobileRotate: 0, y: -5, mobileY: -20 },
    3: { rotate: 10, mobileRotate: 10, y: -5, mobileY: -20 },
    4: { rotate: 20, mobileRotate: 20, y: 20, mobileY: 10 },
    5: { rotate: 30, mobileRotate: 30, y: 50, mobileY: 30 },
  },
  startup: {
    0: { rotate: -25, y: 30 },
    1: { rotate: -15, y: 15 },
    2: { rotate: -5, y: 5 },
    3: { rotate: 5, y: 5 },
    4: { rotate: 15, y: 15 },
    5: { rotate: 25, y: 30 },
  },
}

const getCardPositionOverride = (tier, index, total, isMobile) => {
  const tierOverrides = CARD_POSITION_OVERRIDES[tier] || {}
  const override = tierOverrides[index] || {}
  const rotate = isMobile && override.mobileRotate !== undefined ? override.mobileRotate : override.rotate ?? 0
  const y = isMobile && override.mobileY !== undefined ? override.mobileY : override.y ?? 0
  return {
    x: override.x ?? 0,
    y,
    rotate,
    zIndex: override.zIndex ?? null,
    isMobile,
  }
}

// Z-index tiers: Lower tiers (rendered later) need lower z-index
// Platinum is at top visually, needs highest z-index for its cards
// Each tier's plate should be BELOW its cards but ABOVE the next tier's cards
const getTierBaseZIndex = tier => {
  // Manually set z-index for each tier's cards
  switch (tier) {
    case 'gold':
      return 300
    case 'silver':
      return 400
    case 'bronze':
      return 500
    case 'inkind':
      return 600
    case 'startup':
    default:
      return 700
  }
}

const getPlateZIndex = tier => {
  // Manually set z-index for each tier's plate
  switch (tier) {
    case 'gold':
      return 320
    case 'silver':
      return 420
    case 'bronze':
      return 520
    case 'inkind':
      return 620
    case 'startup':
    default:
      return 720
  }
}

const getRowZIndex = tier =>
  // Row containing cards should be at the tier's base z-index
  getTierBaseZIndex(tier)

const calculateSponsorRows = (tierList, isMobile) => {
  const newRows = {}

  const groupSponsors = (sponsors, groupSize, tier) => {
    const rows = []
    // Always create at least one row, even if empty
    if (sponsors.length === 0) {
      const emptyRow = []
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < groupSize; i++) {
        emptyRow.push({ name: `empty-${tier}-${i}`, isPlaceholder: true })
      }
      rows.push(emptyRow)
      return rows
    }
    for (let i = 0; i < sponsors.length; i += groupSize) {
      const row = sponsors.slice(i, i + groupSize)
      while (row.length < groupSize) {
        row.push({ name: `empty-${tier}-${row.length}`, isPlaceholder: true })
      }
      rows.push(row)
    }
    return rows
  }

  // newRows.platinum = groupSponsors(tierList.platinum, 2)
  newRows.gold = groupSponsors(tierList.gold, 3)
  newRows.silver = groupSponsors(tierList.silver, 4)
  newRows.bronze = groupSponsors(tierList.bronze, isMobile ? 4 : 5)
  newRows.inkind = groupSponsors(tierList.inkind, isMobile ? 6 : 6)

  return newRows
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (80 / 1920));
  margin-top: calc(100vw * (150 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (40 / 393));
    margin-top: calc(100vw * (80 / 393));
  }
`

const SponsorLevelContainer = styled.div`
  position: relative;
`

const Row = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${props => {
    switch (props.tier) {
      case 'gold':
        return props.isMobile ? 'translate(5%, -50%)' : 'translate(5%, -65%)'
      case 'silver':
        return props.isMobile ? 'translate(8%, -53%)' : 'translate(6%, -60%)'
      case 'bronze':
        return props.isMobile ? 'translate(12%, -90%)' : 'translate(2%, -80%)'
      case 'inkind':
        return props.isMobile ? 'translate(8%, -100%)' : 'translate(9%, -95%)'
      case 'startup':
      default:
        return props.isMobile ? 'translate(2%, -63%)' : 'translate(12%, -50%)'
    }
  }};
  z-index: ${props => getRowZIndex(props.tier)};
  display: flex;
  align-items: center;
`

const SponsorContainer = styled.div`
  width: ${p => p.size}%;
  position: relative;
  width: auto;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  margin-left: ${({ tier, index, isMobile }) => {
    if (index === 0) return '0'
    switch (tier) {
      case 'gold':
        return isMobile ? 'calc(100vw * (-40/393))' : 'calc(100vw * (-120/1920))'
      case 'silver':
        return isMobile ? 'calc(100vw * (-55/393))' : 'calc(100vw * (-130/1920))'
      case 'bronze':
        return isMobile ? 'calc(100vw * (-40/393))' : 'calc(100vw * (-160/1920))'
      case 'inkind':
        return isMobile ? 'calc(100vw * (-18/393))' : 'calc(100vw * (-90/1920))'
      case 'startup':
      default:
        return isMobile ? 'calc(100vw * (-30/393))' : 'calc(100vw * (-80/1920))'
    }
  }};
  z-index: ${({ tier, index, total, isMobile }) => {
    const override = getCardPositionOverride(tier, index, total, isMobile)
    if (override.zIndex !== null) return override.zIndex
    // Center cards should be on top within their tier
    const middle = (total - 1) / 2
    const offset = Math.abs(index - middle)
    const baseZIndex = getTierBaseZIndex(tier)
    return baseZIndex + 10 - offset
  }};
  transform: ${({ index, total, tier, isMobile }) => {
    const middle = (total - 1) / 2
    const offset = Math.abs(index - middle)
    let yOffset = (middle - offset) * 12 // Adjust this value to control the height difference
    const override = getCardPositionOverride(tier, index, total, isMobile)
    const xOffset = override.x || 0
    yOffset += override.y || 0

    return `translate(${xOffset}%, ${yOffset}%)`
  }};

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
  position: absolute;
  max-height: 30%;
  max-width: 50%;
  border: none;
  object-fit: contain;
  z-index: 2;
  transform: ${({ index, total, tier }) => {
    const middle = (total - 1) / 2
    const offset = Math.abs(index - middle)
    const xOffset = (index - middle) * 10
    const yOffset = (middle - offset) * 10 // Adjust this value to control the height difference
    let tierOffset = 0
    switch (tier) {
      case 'gold':
        tierOffset = 0
        break
      case 'silver':
        tierOffset = -12
        break
      case 'bronze':
        tierOffset = 0
        break
      case 'inkind':
        tierOffset = 50
        break
      case 'startup':
      default:
        tierOffset = 0
        break
    }

    return `translate(${xOffset - 50 + tierOffset}%, ${yOffset}%)`
  }};
`

const PastryImage = styled.img`
  width: ${props => props.length};
  height: auto;
  z-index: 1;
  transform: ${props => (props.rotate ? `rotate(${props.rotate}deg)` : 'none')};
  transform-origin: 50% 100%;
`

const PlateImage = styled.img`
  position: relative;
  width: ${props => props.length};
  height: auto;
`

const PlateContainer = styled.div`
  position: relative;
  z-index: ${props => getPlateZIndex(props.tier)};
  transform: ${props => {
    switch (props.tier) {
      case 'gold':
        return 'translateY(15%)'
      case 'silver':
        return 'translateY(0)'
      case 'bronze':
        return 'translateY(0)'
      case 'inkind':
        return 'translateY(0)'
      case 'startup':
      default:
        return 'translateY(0)'
    }
  }};

  ${p => p.theme.mediaQueries.mobile} {
    ${props => props.tier === 'inkind' && `transform: translateY(-15%);`}
  }
`

const PlayingCard = memo(({ tier, isMobile, index, total }) => {
  let svgSrc = null
  let length = 0
  const override = getCardPositionOverride(tier, index, total, isMobile)
  const rotate = override.rotate || 0
  switch (tier) {
    // case 'platinum':
    //   svgSrc = '/assets/images/sponsors/platpastry.svg'
    //   length = isMobile ? 'calc(100vw * (90 / 393))' : 'calc(100vw * (174 / 1920))'
    //   break
    case 'gold':
      svgSrc = '/assets/images/sponsors/plat_card.svg'
      length = isMobile ? 'calc(100vw * (120 / 393))' : 'calc(100vw * (320 / 1920))'
      break
    case 'silver':
      svgSrc = '/assets/images/sponsors/gold_card.svg'
      length = isMobile ? 'calc(100vw * (130 / 393))' : 'calc(100vw * (360 / 1920))'
      break
    case 'bronze':
      svgSrc = '/assets/images/sponsors/silver_card.svg'
      length = isMobile ? 'calc(100vw * (120 / 393))' : 'calc(100vw * (360 / 1920))'
      break
    case 'inkind':
      svgSrc = '/assets/images/sponsors/bronze_card.svg'
      length = isMobile ? 'calc(100vw * (72 / 393))' : 'calc(100vw * (290 / 1920))'
      break
    // case 'startup':
    default:
  }
  return <PastryImage src={svgSrc} length={length} rotate={rotate} />
})

const Plate = memo(({ tier, isMobile }) => {
  let svgSrc = null
  let length = 0
  switch (tier) {
    case 'gold':
      svgSrc = '/assets/images/sponsors/plat_tier.svg'
      length = isMobile ? 'calc(100vw * (310 / 393))' : 'calc(100vw * (760 / 1920))'
      break
    case 'silver':
      svgSrc = '/assets/images/sponsors/gold_tier.svg'
      length = isMobile ? 'calc(100vw * (370 / 393))' : 'calc(100vw * (1100 / 1920))'
      break
    case 'bronze':
      svgSrc = '/assets/images/sponsors/silver_tier.svg'
      length = isMobile ? 'calc(100vw * (370 / 393))' : 'calc(100vw * (1200 / 1920))'
      break
    case 'inkind':
      svgSrc = '/assets/images/sponsors/bronze_tier.svg'
      length = isMobile ? 'calc(100vw * (390 / 393))' : 'calc(100vw * (1500 / 1920))'
      break
    default:
    // case 'startup':
    // default:
    //   svgSrc = '/assets/images/sponsors/startupplate.svg'
    //   length = isMobile ? 'calc(100vw * (426 / 393))' : 'calc(100vw * (1529 / 1920))'
    //   break
  }
  return (
    <PlateContainer tier={tier}>
      <PlateImage src={svgSrc} length={length} />
    </PlateContainer>
  )
})

const Sponsor = memo(({ link, url, size, tier, isPlaceholder, index, total, isMobile }) => (
  <SponsorContainer size={size} tier={tier} index={index} total={total} isMobile={isMobile}>
    <SponsorLink href={link} target="_blank" rel="noreferrer">
      <PlayingCard tier={tier} isMobile={isMobile} index={index} total={total} />
      {!isPlaceholder && <SponsorImg src={url} alt="Sponsor Logo" index={index} total={total} tier={tier} />}
    </SponsorLink>
  </SponsorContainer>
))

const ListByTier = memo(({ listOfRows, tierSize, tier, isMobile }) => {
  if (!listOfRows || listOfRows.length === 0) return null

  return (
    <>
      {listOfRows.map(row => (
        <SponsorLevelContainer key={`${tier}-${row[0].name}`}>
          <Plate tier={tier} isMobile={isMobile} />
          <Row tier={tier} isMobile={isMobile}>
            {row.map((item, i) => (
              <Sponsor
                key={item.name}
                link={item.link}
                url={item.imgURL}
                size={tierSize}
                tier={tier}
                isPlaceholder={item.isPlaceholder}
                index={i}
                total={row.length}
                isMobile={isMobile}
              />
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
      const newRows = calculateSponsorRows(tierList, isMobile)
      setRows(newRows)
    }

    calculateRows()
    window.addEventListener('resize', calculateRows)
    return () => window.removeEventListener('resize', calculateRows)
  }, [tierList, isMobile])

  const startIndexGold = 5
  const startIndexSilver = startIndexGold + tierList.gold.length
  const startIndexBronze = startIndexSilver + tierList.silver.length
  const startIndexInkind = startIndexBronze + tierList.bronze.length
  // const startIndexStartup = startIndexInkind + tierList.inkind.length

  return (
    <Container ref={containerRef}>
      {/* <ListByTier
        listOfRows={rows.title}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.title : SPONSOR_WIDTH.title}
        tier="title"
      /> */}
      {/* <ListByTier
        listOfRows={rows.platinum}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.platinum : SPONSOR_WIDTH.platinum}
        tier="platinum"
        startIndex={startIndexPlatinum}
        isMobile={isMobile}
      /> */}
      <ListByTier
        listOfRows={rows.gold}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.gold : SPONSOR_WIDTH.gold}
        tier="gold"
        startIndex={startIndexGold}
        isMobile={isMobile}
      />
      <ListByTier
        listOfRows={rows.silver}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.silver : SPONSOR_WIDTH.silver}
        tier="silver"
        startIndex={startIndexSilver}
        isMobile={isMobile}
      />
      <ListByTier
        listOfRows={rows.bronze}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.bronze : SPONSOR_WIDTH.bronze}
        tier="bronze"
        startIndex={startIndexBronze}
        isMobile={isMobile}
      />
      <ListByTier
        listOfRows={rows.inkind}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.inkind : SPONSOR_WIDTH.inkind}
        tier="inkind"
        startIndex={startIndexInkind}
        isMobile={isMobile}
      />
      {/* <ListByTier
        listOfRows={rows.startup}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.startup : SPONSOR_WIDTH.startup}
        tier="startup"
        startIndex={startIndexStartup}
        isMobile={isMobile}
      /> */}
    </Container>
  )
}

export default SponsorsGrid
