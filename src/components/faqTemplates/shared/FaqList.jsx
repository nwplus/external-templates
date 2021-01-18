import React from 'react'
import ExpandableFaq from './ExpandableFaq'

const ExpandableFaqList = ({ list }) => {
  return (
    list?.map(({ question, answer }) => (
      <div key={question}>
        <ExpandableFaq question={question} answer={answer} />
      </div>
    )) ?? null
  )
}

// Export different types of lists here
export { ExpandableFaqList }
