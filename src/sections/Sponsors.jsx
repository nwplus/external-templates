import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header2 } from '@components/Typography'
import SponsorsGrid from '@components/SponsorsGrid'
import Button from '@components/Button'
import fireDb from '@utilities/firebase'
import Carousel from '../components/Carousel'

const SponsorsContainer = styled.div`
  position: relative;
  min-height: calc(calc(2050 / 1440) * 100vw);
  margin-top: 0rem;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(488 / 428) * 100vw);
    margin-top: 8rem;

  }
`

const StaticContainer = styled.div`
  top: 0;
  width: 100%;
  padding-top: calc(calc(750 / 1440) * 100vw);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${p => p.theme.mediaQueries.mobile} {
    position: relative;
    padding-top: calc(calc(488 / 428) * 100vw);
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #fff;
  font-size: 3rem;
  padding-top: 18rem;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3em;
    padding-top: 0;
  }
`

const PushinP = styled.p`
  color: #fff;
  text-align: center;
  font-weight: 550;
  font-size: 1.1rem;
  width: 50vw;
  min-width: 500px;
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 800px;
  padding-bottom: 2rem;

  ${p => p.theme.mediaQueries.mobile} {
    min-width: 0;
    width: 100%;
    padding: 20px 6rem;
  }
`
const CarouselImg = styled.img`
  height: 100px;
  width: auto;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
`
const CarouseBlurb = styled.p`
  color: #D9D9D9;
`

const Sponsors = () => {
  const [sponsors, setSponsors] = useState(null)

  useEffect(async () => {
    // use cmd-f2022 collection to test
    const data = await fireDb.getCollection('nwHacks2024', 'Sponsors')
    if (data) {
      setSponsors(data)
    }
  }, [])

  return (
    <SponsorsContainer>
      <StaticContainer>
        <StyledTitle id="sponsors">Sponsors</StyledTitle>
        <PushinP>
          Sponsors make this event happen.<br /><br />If you are interested in working with us, joining us or speaking at one of
          our events, please reach out to us below!
        </PushinP>
        <Button variant="solidRed" href="mailto:sponsorship@nwplus.io">
          Sponsor nwHacks!
        </Button>

        {/* each child in carousel is a sponsor */}

        {sponsors &&
          <Carousel>
            {sponsors.map(item => (

              item.blurb &&
              <>
                <CarouselImg src={item.imgURL} />
                <CarouseBlurb>{item.blurb}</CarouseBlurb>
              </>

            ))}
          </Carousel>
        }

        <SponsorsGrid sponsors={sponsors} />
      </StaticContainer>
    </SponsorsContainer>
  )
}

export default Sponsors
