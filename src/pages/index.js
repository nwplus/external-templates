import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import fireDb from '@utilities/firebase'

export default function Index(props) {
  return (
    <div>
      <GlobalStyles />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Website</h1>
      <p>This is a paragraph and here are some flags for example: {props.faqs}</p>
    </div>
  )
}

export async function getStaticProps(context) {
  const targetedHackathon = await fireDb.getTargetedHackathon()

  // Uncomment if you want to update config
  // await fireDb.updateConfig(targetedHackathon)

  if (!targetedHackathon) {
    return {
      notFound: true,
    }
  }

  const websiteData = await fireDb.getWebsiteData(targetedHackathon)

  const { FeatureFlags } = websiteData
  const faqs = await fireDb.getCollection(targetedHackathon, 'FAQ')

  return {
    props: {
      flags: JSON.stringify(FeatureFlags),
      faqs: JSON.stringify(faqs),
    }, // will be passed to the page component as props
  }
}
