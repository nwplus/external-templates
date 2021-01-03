import React, { useEffect, useState } from 'react'

const ExpandableFaq = faqs => {
  const [generalBin, setGeneralBin] = useState([])
  const [logisticsBin, setLogisticsBin] = useState([])
  const [teamsBin, setTeamsBin] = useState([])

  useEffect(() => {
    props.forEach((item, idx) => {})
  }, [props])
}

export default ExpandableFaq
