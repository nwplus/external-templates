import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import fireDb from '@utilities/firebase'
import { serialize } from '@utilities/format'
import FAQExpandable from '@components/faqTemplates/ExpandableWithCategories'
import About from '@components/about/TwoColumnsAbout'

export default function Index({ flags: { faqFlag }, faq, faqConfig, example, about }) {
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
      {faqFlag && <FAQExpandable faq={faq} config={faqConfig} />}
      <p>This is a paragraph and here are some flags for example: {example}</p>
      <About about={about} />
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

  const { featureFlags, BuildConfig, StaticData: { About } } = websiteData
  const faq = await fireDb.getCollection(targetedHackathon, 'FAQ')

  return {
    props: {
      example: JSON.stringify(featureFlags),
      flags: serialize(featureFlags),
      faq: serialize(faq),
      faqConfig: serialize(BuildConfig.componentStyling.faq),
      about: About,
    }, // will be passed to the page component as props
  }
}
