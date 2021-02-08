import React from 'react'
import ExpandableFaq from './ExpandableFaq'
import styled from 'styled-components'

const ListContainer = styled.div`
  padding: 3vh 0 3vh 0;
`

const ExpandableFaqList = ({ list }) => {
  return (
    <ListContainer>
      {list?.map(({ question, answer }) => (
        <div key={question}>
          <ExpandableFaq question={question} answer={answer} />
        </div>
      )) ?? null}
    </ListContainer>
  )
}

// Export different types of lists here
export { ExpandableFaqList }
