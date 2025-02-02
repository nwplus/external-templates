import styled from 'styled-components'

const WorkshopCardContainer = styled.div`
  width: calc(100vw * (500 / 1920));
  height: calc(100vw * (650 / 1920));
  position: relative;
  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (314 / 393));
    height: auto;
  }
`

const WorkshopTitle = styled.p`
  font-family: 'Happy Time';
  font-weight: 400;
  font-style: italic;
  font-size: calc(100vw * (34 / 1920));
  color: #a6321e;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (25 / 393));
  }
`

const WorkshopTime = styled.p`
  font-weight: 400;
  font-size: calc(100vw * (20 / 1920));
  color: #000000;
  margin: calc(100vw * (10 / 1920)) 0px calc(100vw * (40 / 1920)) 0px;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
  }
`

const WorkshopDescription = styled.p`
  font-weight: 400;
  font-size: calc(100vw * (18 / 1920));
  color: #000000;
  margin: calc(100vw * (10 / 1920)) 0px;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
  }
`

const WorkshopNumber = styled.p`
  width: 100%;
  text-align: left;
  border-bottom: 3px solid #a6321e;
  line-height: 0.1em;
  margin: 10px 0 20px;
  font-family: 'Gloock Regular';
  font-weight: bold;
  font-size: calc(100vw * (32 / 1920));
  color: #a6321e;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (23 / 393));
  }
`

const WorkshopSpan = styled.span`
  background: #f0e9d7;
  padding: 0 5px;
`

const WorkshopImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vw * (250 / 1920));
  margin-bottom: calc(100vw * (40 / 1920));
  ${p => p.theme.mediaQueries.mobile} {
    height: calc(100vw * (150 / 393));
  }
`

const WorkshopCard = ({ info }) => {
  const { number, imgSrc, name, dateAndTime, description } = info
  return (
    <WorkshopCardContainer imgSrc={imgSrc}>
      <WorkshopNumber>
        <WorkshopSpan>{number}.</WorkshopSpan>
      </WorkshopNumber>
      <WorkshopTitle>{name}</WorkshopTitle>
      <WorkshopTime>{dateAndTime}</WorkshopTime>
      <WorkshopImg>
        <img src={imgSrc} alt="workshop graphic" />
      </WorkshopImg>
      <WorkshopDescription>{description}</WorkshopDescription>
    </WorkshopCardContainer>
  )
}

export default WorkshopCard
