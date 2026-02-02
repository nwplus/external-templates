import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase'
import FAQBook from '@components/faq/FAQBook'

const FaqContainer = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vw * (1051 / 1512));
  display: flex;
  align-items: center;
  justify-content: center;

  ${p => p.theme.mediaQueries.mobile} {
    height: calc(100vw * (600 / 393));
  }
`

const FaqBackground = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    top: 0;
    content: url('/assets/images/faq/mobile_background.svg');
    height: calc(100vw * (555 / 393));
  }
`

const FaqForeground = styled.img`
  position: absolute;
  bottom: calc(100vw * (-150 / 1080));
  left: 0;
  width: 100%;
  object-fit: cover;
  z-index: 10;
  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    content: url('/assets/images/faq/mobile_foreground.svg');
    bottom: calc(100vw * (-10 / 393));
  }
`

const FaqTitle = styled.h2`
  position: absolute;
  top: calc(100vw * (20 / 393));
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  font-family: 'Baskervville', serif;
  font-style: italic;
  font-size: calc(100vw * (40 / 393));
  font-weight: 500;
  color: #fefbf3;
  margin: 0;
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
  }
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
    const data = await fireDb.getCollection('cmd-f2026', 'FAQ')
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])

  return (
    <FaqContainer id="faq">
      <FaqBackground src="/assets/images/faq/faq_background.svg" alt="" />
      <FaqTitle>FAQs</FaqTitle>
      <FAQBook faqData={faqData} />
      <FaqForeground src="/assets/images/faq/faq_foreground.svg" alt="" />
    </FaqContainer>
  )
}

export default Faq
