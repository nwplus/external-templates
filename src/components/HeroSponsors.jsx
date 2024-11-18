import styled from 'styled-components'

const SponsorsContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const Sponsor = styled.img`
  max-width: 80%;
  height: auto;
  object-fit: contain;
`

const MoreBelow = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: calc(100vw * (12 / 1280));
  color: #51483e;
`

const HeroSponsors = () => {
  const sponsors = ['telus', 'cse']

  return (
    <>
      <SponsorsContainer>
        {sponsors.map(sponsor => (
          <Sponsor src={`./assets/images/${sponsor}.png`} alt={sponsor} key={sponsor} />
        ))}
        <MoreBelow>and more!</MoreBelow>
      </SponsorsContainer>
    </>
  )
}

export default HeroSponsors
