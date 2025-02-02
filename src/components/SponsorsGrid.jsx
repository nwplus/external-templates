import { useEffect, useState, useRef, memo } from 'react'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import styled from 'styled-components'
import startingstand from '@assets/images/sponsors/startingstand.svg'
import normalstand from '@assets/images/sponsors/normalstand.svg'
import platplate from '@assets/images/sponsors/platplate.svg'
import goldplate from '@assets/images/sponsors/goldplate.svg'
import silverplate from '@assets/images/sponsors/silverplate.svg'
import bronzeplate from '@assets/images/sponsors/bronzeplate.svg'
import startupplate from '@assets/images/sponsors/startupplate.svg'
import platpastry from '@assets/images/sponsors/platpastry.svg'
import goldpastry from '@assets/images/sponsors/goldpastry.svg'
import silverpastry from '@assets/images/sponsors/silverpastry.svg'
import bronzepastry from '@assets/images/sponsors/bronzepastry.svg'
import startuppastry from '@assets/images/sponsors/startuppastry.svg'

const SPONSOR_WIDTH = { title: 70, platinum: 45, gold: 40, silver: 35, bronze: 30, startup: 25, inkind: 20 }
const MOBILE_SPONSOR_WIDTH = { title: 95, platinum: 80, gold: 45, silver: 35, bronze: 30, startup: 25, inkind: 20 }

const calculateSponsorRows = tierList => {
  const newRows = {}

  const groupSponsors = (sponsors, groupSize, tier) => {
    const rows = []
    for (let i = 0; i < sponsors.length; i += groupSize) {
      const row = sponsors.slice(i, i + groupSize)
      while (row.length < groupSize) {
        row.push({ name: `empty-${tier}-${row.length}`, isPlaceholder: true })
      }
      rows.push(row)
    }
    return rows
  }

  newRows.platinum = groupSponsors(tierList.platinum, 2)
  newRows.gold = groupSponsors(tierList.gold, 3)
  newRows.silver = groupSponsors(tierList.silver, 4)
  newRows.bronze = groupSponsors(tierList.bronze, 5)

  // Combine startup and inkind sponsors
  const combinedStartupInkind = [...tierList.startup, ...tierList.inkind]
  newRows.startup = groupSponsors(combinedStartupInkind, 6)

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
    gap: calc(100vw * (25 / 393));
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
      case 'platinum':
        return props.isMobile ? 'translate(16%, -75%)' : 'translate(20%, -75%)'
      case 'gold':
        return props.isMobile ? 'translate(9%, -60%)' : 'translate(12%, -60%)'
      case 'silver':
        return props.isMobile ? 'translate(9%, -60%)' : 'translate(13%, -55%)'
      case 'bronze':
        return props.isMobile ? 'translate(6%, -50%)' : 'translate(8%, -45%)'
      case 'startup':
      default:
        return props.isMobile ? 'translate(12%, -45%)' : 'translate(22%, -40%)'
    }
  }};
  z-index: 150;
  display: flex;
  align-items: center;
  gap: ${props => {
    switch (props.tier) {
      case 'platinum':
        return props.isMobile ? 'calc(100vw * (15/393))' : 'calc(100vw * (20/1920))'
      case 'gold':
        return 'calc(100vw * (10/1920))'
      case 'silver':
        return 'calc(100vw * (10/1920))'
      case 'bronze':
        return props.isMobile ? 0 : 'calc(100vw * (5/1920))'
      case 'startup':
      default:
        return 'calc(100vw * (10/1920))'
    }
  }};
`

const SponsorContainer = styled.div`
  width: ${p => p.size}%;
  position: relative;
  width: auto;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  z-index: 100;
  transform: ${({ index, total }) => {
    const middle = (total - 1) / 2
    const offset = Math.abs(index - middle)
    const yOffset = (middle - offset) * 10 // Adjust this value to control the height difference
    return `translateY(${yOffset}%)`
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
  max-width: 70%;
  border: none;
  object-fit: contain;
  z-index: 2;
  top: 50%;
  transform: ${({ index, total, tier }) => {
    const middle = (total - 1) / 2
    const offset = Math.abs(index - middle)
    const yOffset = (middle - offset) * 10 // Adjust this value to control the height difference
    let tierOffset = 0
    switch (tier) {
      case 'platinum':
        tierOffset = 0
        break
      case 'gold':
        tierOffset = -8
        break
      case 'silver':
        tierOffset = 0
        break
      case 'bronze':
        tierOffset = -80
        break
      case 'startup':
      default:
        tierOffset = -20
        break
    }

    return `translateY(${yOffset + tierOffset}%)`
  }};
`

const PastryImage = styled.img`
  width: ${props => props.length};
  height: auto;
  z-index: 1;
`

const PlateImage = styled.img`
  position: relative;
  width: ${props => props.length};
  height: auto;
`

const StandImage = styled.img`
  position: absolute;
  width: ${props => {
    if (props.isMobile) {
      return props.isFirstRow ? 'calc(100vw * (19/ 393))' : 'calc(100vw * (9/ 393))'
    }
    return props.isFirstRow ? 'calc(100vw * (67/ 1920))' : 'calc(100vw * (28 / 1920))'
  }};
  height: auto;
  bottom: ${props => {
    if (props.isMobile) {
      return props.isFirstRow ? '-30%' : props.adjustment
    }
    return props.isFirstRow ? '-60%' : props.adjustment
  }};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`

const PlateStandContainer = styled.div`
  position: relative;
  z-index: ${props => props.zIndex};
`

const Cupcake = memo(({ tier, isMobile }) => {
  let svgSrc = null
  let length = 0
  switch (tier) {
    case 'platinum':
      svgSrc = platpastry
      length = isMobile ? 'calc(100vw * (60 / 393))' : 'calc(100vw * (174 / 1920))'
      break
    case 'gold':
      svgSrc = goldpastry
      length = isMobile ? 'calc(100vw * (67 / 393))' : 'calc(100vw * (200 / 1920))'
      break
    case 'silver':
      svgSrc = silverpastry
      length = isMobile ? 'calc(100vw * (62 / 393))' : 'calc(100vw * (178 / 1920))'
      break
    case 'bronze':
      svgSrc = bronzepastry
      length = isMobile ? 'calc(100vw * (63 / 393))' : 'calc(100vw * (204 / 1920))'
      break
    case 'startup':
    default:
      svgSrc = startuppastry
      length = isMobile ? 'calc(100vw * (57 / 393))' : 'calc(100vw * (170 / 1920))'
      break
  }
  return <PastryImage src={svgSrc} length={length} />
})

const PlateStand = memo(({ tier, zIndex, isFirstRow, isMobile }) => {
  let svgSrc = null
  let length = 0
  let adjustment = '0%'
  switch (tier) {
    case 'platinum':
      svgSrc = platplate
      length = isMobile ? 'calc(100vw * (176 / 393))' : 'calc(100vw * (510 / 1920))'
      adjustment = '-40%'
      break
    case 'gold':
      svgSrc = goldplate
      length = isMobile ? 'calc(100vw * (236 / 393))' : 'calc(100vw * (769 / 1920))'
      adjustment = '10%'
      break
    case 'silver':
      svgSrc = silverplate
      length = isMobile ? 'calc(100vw * (295 / 393))' : 'calc(100vw * (926 / 1920))'
      adjustment = '25%'
      break
    case 'bronze':
      svgSrc = bronzeplate
      length = isMobile ? 'calc(100vw * (351 / 393))' : 'calc(100vw * (1220 / 1920))'
      adjustment = '40%'
      break
    case 'startup':
    default:
      svgSrc = startupplate
      length = isMobile ? 'calc(100vw * (426 / 393))' : 'calc(100vw * (1529 / 1920))'
      adjustment = '45%'
      break
  }
  const standSrc = isFirstRow ? startingstand : normalstand
  return (
    <PlateStandContainer zIndex={zIndex}>
      <StandImage src={standSrc} adjustment={adjustment} isFirstRow={isFirstRow} isMobile={isMobile} />
      <PlateImage src={svgSrc} length={length} />
    </PlateStandContainer>
  )
})

const Sponsor = memo(({ link, url, size, tier, isPlaceholder, index, total, isMobile }) => (
  <SponsorContainer size={size} tier={tier} index={index} total={total}>
    <SponsorLink href={link} target="_blank" rel="noreferrer">
      <Cupcake tier={tier} isMobile={isMobile} />
      {!isPlaceholder && <SponsorImg src={url} alt="Sponsor Logo" index={index} total={total} tier={tier} />}
    </SponsorLink>
  </SponsorContainer>
))

const ListByTier = memo(({ listOfRows, tierSize, tier, startIndex, isMobile }) => {
  if (!listOfRows || listOfRows.length === 0) return null

  return (
    <>
      {listOfRows.map((row, index) => (
        <SponsorLevelContainer key={`${tier}-${row[0].name}`}>
          <PlateStand
            tier={tier}
            zIndex={100 - startIndex - index}
            isFirstRow={startIndex + index === 5}
            isMobile={isMobile}
          />
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
      const newRows = calculateSponsorRows(tierList)
      setRows(newRows)
    }

    calculateRows()
    window.addEventListener('resize', calculateRows)
    return () => window.removeEventListener('resize', calculateRows)
  }, [tierList, isMobile])

  const startIndexPlatinum = 5
  const startIndexGold = startIndexPlatinum + tierList.platinum.length
  const startIndexSilver = startIndexGold + tierList.gold.length
  const startIndexBronze = startIndexSilver + tierList.silver.length
  const startIndexStartup = startIndexBronze + tierList.bronze.length
  const startIndexInkind = startIndexStartup + tierList.startup.length

  return (
    <Container ref={containerRef}>
      {/* <ListByTier
        listOfRows={rows.title}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.title : SPONSOR_WIDTH.title}
        tier="title"
      /> */}
      <ListByTier
        listOfRows={rows.platinum}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.platinum : SPONSOR_WIDTH.platinum}
        tier="platinum"
        startIndex={startIndexPlatinum}
        isMobile={isMobile}
      />
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
        listOfRows={rows.startup}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.startup : SPONSOR_WIDTH.startup}
        tier="startup"
        startIndex={startIndexStartup}
        isMobile={isMobile}
      />
      <ListByTier
        listOfRows={rows.inkind}
        tierSize={isMobile ? MOBILE_SPONSOR_WIDTH.inkind : SPONSOR_WIDTH.inkind}
        tier="inkind"
        startIndex={startIndexInkind}
        isMobile={isMobile}
      />
    </Container>
  )
}

export default SponsorsGrid
