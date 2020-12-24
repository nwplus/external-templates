import Head from 'next/head'
import fireDb from '@utilities/firebase'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [targetWebsite, setTargetWebsite] = useState('Hello world')
  useEffect(() => {
    const getBuildTarget = async () => {
      const targetWebsite = await fireDb.getTargetedHackathon()
      setTargetWebsite(targetWebsite)
    }
    getBuildTarget()
  }, [])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{targetWebsite}</h1>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  )
}
