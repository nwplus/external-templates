import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import fireDb from '@utilities/firebase'
import { serialize } from '@utilities/format'
import FAQExpandable from '@components/faqTemplates/ExpandableWithCategories'
import About from '@components/about/TwoColumnsAbout'
import NavBar from '@components/hero/NavBar'
import Hero from '@components/hero/Hero'

export default function Index({
  // flags,
  // flags: { faqFlag },
  // faq,
  // about,
  // hero,
  // configs: { navbarConfig, faqConfig },
}) {
  return (
    <div>
      {/* <GlobalStyles />
      <Head>
        <title>cmd-f 2021</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar config={navbarConfig} flags={flags} />
      <Hero hero={hero} />
      {faqFlag && <FAQExpandable faq={faq} config={faqConfig} />}
      <About about={about} /> */}
      hi
    </div>
  )
}

export async function getStaticProps(context) {
  const targetedHackathon = await fireDb.getTargetedHackathon()

  // Uncomment if you want to update config
  // await fireDb.updateConfig(targetedHackathon)

  // if (!targetedHackathon) {
  //   return {
  //     notFound: true,
  //   }
  // }

  const websiteData = await fireDb.getWebsiteData(targetedHackathon)

  const {
    featureFlags,
    BuildConfig,
    StaticData: { About, Hero },
  } = websiteData
  const faq = await fireDb.getCollection(targetedHackathon, 'FAQ')

  return {
    props: {
      // flags: serialize(featureFlags),
      // faq: serialize(faq),
      // about: About,
      // hero: Hero,
      // configs: {
      //   navbarConfig: serialize(BuildConfig.componentStyling.navbar),
      //   faqConfig: serialize(BuildConfig.componentStyling.faq),
      // },
    }, // will be passed to the page component as props
  }
}
