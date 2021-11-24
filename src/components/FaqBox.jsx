import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`

`;

const Top = styled.div`

`;

const AnswerBox = styled.div`

`;

const FaqBox = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>
      <Top
        expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}>
        {question}
      </Top>
      <AnswerBox>
        {answer}
      </AnswerBox>
    </Container>
  );
}

export default FaqBox;