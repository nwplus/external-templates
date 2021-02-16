import React from 'react'
import ExpandableFaq from './ExpandableFaq'

const ExpandableFaqList = ({ list, decor }) =>
  list?.map(({ question, answer }) => (
    <div key={question}>
      <ExpandableFaq question={question} answer={answer} decor={decor} />
    </div>
  )) ?? null

// Export different types of lists here
export default ExpandableFaqList
