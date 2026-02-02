import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase'
import FAQBook from '@components/faq/FAQBook'

const FaqContainer = styled.div`
  position: relative;
  width: 100vw;
  aspect-ratio: 1280 / 886;
  display: flex;
  align-items: center;
  justify-content: center;

  ${p => p.theme.mediaQueries.tablet} {
    aspect-ratio: 834 / 1049;
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1112;
  }
`

const FaqBackground = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  pointer-events: none;
`

const FaqForeground = styled.img`
  position: absolute;
  bottom: -calc(100vw * (10 / 393));
  left: 0;
  width: 100%;
  object-fit: cover;
  z-index: 10;
  pointer-events: none;
`

const Faq = () => {
  const [faqData, setFaqData] = useState(null)

  function processData(data) {
    const categories = {}
    data.forEach(faq => {
      if (!categories[faq.category]) {
        categories[faq.category] = []
      }
      categories[faq.category].push(faq)
    })
    return categories
  }

  useEffect(async () => {
    const data = await fireDb.getCollection('cmd-f2025', 'FAQ')
    console.log(data)
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])

  return (
    <FaqContainer id="faq">
      <FaqBackground src="/assets/images/faq/faq_background.svg" alt="" />
      <FAQBook faqData={faqData} />
      <FaqForeground src="/assets/images/faq/faq_foreground.svg" alt="" />
    </FaqContainer>
  )
}

export default Faq
