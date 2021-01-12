import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import fireDb from '@utilities/firebase'
import { serialize } from '@utilities/format'
import FAQExpandable from '@components/faqTemplates/ExpandableWithCategories'

export default function Index(props) {
  return (
    <div>
      <GlobalStyles />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Website</h1>
      {/* Example template faq */}
      {props.flags.faqFlag && <FAQExpandable faq={props.faq} config={props.faqConfig} />}
      <p>This is a paragraph and here are some flags for example: {props.example}</p>
    </div>
  )
}

export async function getStaticProps(context) {
  const targetedHackathon = await fireDb.getTargetedHackathon()

  // Uncomment if you want to update config
  await fireDb.updateConfig(targetedHackathon)

  if (!targetedHackathon) {
    return {
      notFound: true,
    }
  }

  const websiteData = await fireDb.getWebsiteData(targetedHackathon)

  const { featureFlags, BuildConfig } = websiteData
  const faq = await fireDb.getCollection(targetedHackathon, 'FAQ')

  return {
    props: {
      example: JSON.stringify(featureFlags),
      flags: serialize(featureFlags),
      faq: serialize(faq),
      faqConfig: serialize(BuildConfig.componentStyling.faq),
    }, // will be passed to the page component as props
  }
}
