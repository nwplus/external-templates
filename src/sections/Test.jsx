import styled from 'styled-components'

const Test = () => {

  const Container = styled.div`
    padding: 100px;
    background: red;
    position: relative;
    min-height: 100vh;
  `

  const SkewedHeader = styled.div`
	  transform: skew(63deg,-26.6deg);
    z-index: 50;
    position: relative;
    padding-bottom: 70px;
    font-weight: 500;
    font-size: 2rem;
    color: #5667CF;

    &:after {
      content: '${p => p.content}';
      position: absolute;
      top: 0;
      transform: skew(-63deg) scale(1,.5);
	    text-shadow: -1px -1px 1px #97A4F7, -2px -2px 1px #97A4F7, -3px -3px 1px #97A4F7, -4px -4px 1px #EAC3CA, -5px -5px 1px #EAC3CA, -6px -6px 1px #EAC3CA;
    }
  `

  const SkewedParagraph = styled.div`
    position: relative;
    transform: skew(63deg,-26.6deg) scale(1, 0.5);
    max-width: 50%;
    margin-top: 120px;
    z-index: 50;
  `

  return (
    <Container>
      <SkewedHeader content={`
        About nwHacks
      `} />
      <SkewedParagraph>
        Join hundred of hackers across the world at nwHacks on Jan 14-15th, 2023! Apply by December 27th, 2022 to participate as a hacker and apply by December 19th, 2022 to participate as a mentor or volunteer
      </SkewedParagraph>
    </Container>
  )
}

export default Test