import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import fireDb from '@utilities/firebase'
import { serialize } from '@utilities/format'
import FAQExpandable from '@components/faqTemplates/faq_category_expandable'

export default function Index(props) {
  return (
    <div>
      <GlobalStyles />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Example template faq */}
      {props.flags.faqFlag && <FAQExpandable faq={props.faq} />}
      <h1>Website</h1>
      <p>This is a paragraph and here are some flags for example: {props.example}</p>
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

  const { featureFlags } = websiteData
  const faq = await fireDb.getCollection(targetedHackathon, 'FAQ')

  return {
    props: {
      example: JSON.stringify(featureFlags),
      flags: serialize(featureFlags),
      faq: serialize(faq),
    }, // will be passed to the page component as props
  }
}
