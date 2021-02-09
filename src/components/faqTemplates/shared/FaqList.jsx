import React from 'react'
import ExpandableFaq from './ExpandableFaq'
import styled from 'styled-components'

const FaqList = styled.div`
  padding: 1vh 0 1vh 0;
`

const ExpandableFaqList = ({ list, decor }) => {
  return (
    <FaqList>
      {list?.map(({ question, answer }) => (
        <div key={question}>
          <ExpandableFaq question={question} answer={answer} decor={decor} />
        </div>
      )) ?? null}
    </FaqList>
  )
}

// Export different types of lists here
export { ExpandableFaqList }
