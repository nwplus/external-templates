import React from 'react'
import styled from 'styled-components'

const PC_STATS = 'assets/stats.svg'

const Image = styled.img`
  width: 100%;
`

export default function Stats() {
  return (
    <Image src={PC_STATS} alt="nwHacks Stats" />
  )
}