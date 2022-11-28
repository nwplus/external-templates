import React from 'react'
import styled from 'styled-components'

const FAQContainer = styled.div`
  background: linear-gradient(to bottom, #ADE8EB, #99E4EA);
`

const FAQ = () => {
  const hello = 'hello'

  return (
    <FAQContainer>
      {hello}
    </FAQContainer>
  )
}

export default FAQ