import React, { useState } from 'react'
import styled from 'styled-components'

const BookContainer = styled.div`
  position: absolute;
  bottom: calc(100vw * (50 / 1280));
  width: calc(100vw * (900 / 1280));
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;

  ${p => p.theme.mediaQueries.mobile} {
    left: -65vw;
    bottom: calc(100vw * (90 / 393));
    width: 160vw;
    justify-content: flex-end;
  }
`

const BookSvg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`

const BookOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8% 6% 6% 4%;
  box-sizing: border-box;
`

const RightPageSvg = styled.img`
  position: absolute;
  top: calc(100vw * (25 / 1920));
  left: 0;
  width: 92%;
  height: auto;
  user-select: none;
  -webkit-user-drag: none;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (12 / 393));
  }
`

const TabContainer = styled.div`
  position: absolute;
  top: calc(100vw * (-20 / 1920));
  right: calc(100vw * (80 / 1920));
  display: flex;
  gap: calc(100vw * (20 / 1920));
  margin-bottom: 4%;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (-10 / 393));
    right: calc(100vw * (30 / 393));
  }
`

const Tab = styled.button`
  flex: 1;
  width: fit-content;
  padding: calc(100vw * (20 / 1920)) calc(100vw * (30 / 1920));
  background-color: ${p => (p.$active ? '#fefbf3' : '#DBE1ED')};
  border: none;
  border-radius: calc(100vw * (10 / 1920));
  font-family: 'Quicksand', sans-serif;
  font-size: calc(100vw * (20 / 1920));
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  &:hover {
    background-color: ${p => (p.$active ? '#fefbf3' : '#E8EDF5')};
  }

  ${p => p.theme.mediaQueries.mobile} {
    padding: calc(100vw * (8 / 393)) calc(100vw * (10 / 393));
    border-radius: calc(100vw * (6 / 393)) calc(100vw * (6 / 393)) 0 0;
    font-size: calc(100vw * (12 / 393));
  }
`

const ContentArea = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  background: transparent;
`

const ScrollableContent = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4%;
  padding-bottom: 20%;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`

const FadeOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2rem;
  background: linear-gradient(to bottom, transparent, #fefbf3);
  pointer-events: none;
`

const QuestionItem = styled.div`
  margin-bottom: 3%;
  background: transparent;
`

const QuestionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 2%;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Quicksand', sans-serif;
  font-size: calc(100vw * (20 / 1920));
  font-weight: 400;
  color: #333;
  transition: opacity 0.2s ease;
  user-select: none;

  &:hover {
    opacity: 0.7;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (12 / 393));
  }
`

const QuestionText = styled.span`
  flex: 1;
  padding-right: 2%;
`

const PlusIcon = styled.span`
  font-size: calc(100vw * (24 / 1920));
  font-weight: 300;
  transition: transform 0.3s ease;
  transform: ${p => (p.$expanded ? 'rotate(45deg)' : 'rotate(0)')};

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (16 / 393));
  }
`

const AnswerContainer = styled.div`
  max-height: ${p => (p.$expanded ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${p => (p.$expanded ? '2% 2%' : '0 2%')};
`

const AnswerText = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: calc(100vw * (18 / 1920));
  font-weight: 400;
  color: #555;
  line-height: 1.5;
  margin: 0;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (12 / 393));
  }
`

const FAQBook = ({ faqData }) => {
  const categories = faqData ? Object.keys(faqData).sort() : []
  const [activeTab, setActiveTab] = useState(categories[0] || 'General')
  const [expandedQuestion, setExpandedQuestion] = useState(null)

  const currentFaqs = (faqData && activeTab && faqData[activeTab]) || []

  const handleQuestionClick = question => {
    if (expandedQuestion === question) {
      setExpandedQuestion(null)
    } else {
      setExpandedQuestion(question)
    }
  }

  return (
    <BookContainer>
      <BookSvg src="/assets/images/faq/faq_book.svg" alt="" draggable={false} />
      <BookOverlay>
        <TabContainer>
          {categories.map(category => (
            <Tab key={category} $active={activeTab === category} onClick={() => setActiveTab(category)}>
              {category}
            </Tab>
          ))}
        </TabContainer>
        <RightPageSvg src="/assets/images/faq/faq_page.svg" alt="" draggable={false} />
        <ContentArea>
          <ScrollableContent>
            {currentFaqs.map(faq => (
              <QuestionItem key={faq.question}>
                <QuestionHeader onClick={() => handleQuestionClick(faq.question)}>
                  <QuestionText>{faq.question}</QuestionText>
                  <PlusIcon $expanded={expandedQuestion === faq.question}>+</PlusIcon>
                </QuestionHeader>
                <AnswerContainer $expanded={expandedQuestion === faq.question}>
                  <AnswerText>{faq.answer}</AnswerText>
                </AnswerContainer>
              </QuestionItem>
            ))}
          </ScrollableContent>
          <FadeOverlay />
        </ContentArea>
      </BookOverlay>
    </BookContainer>
  )
}

export default FAQBook
