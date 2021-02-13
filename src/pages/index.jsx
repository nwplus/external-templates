import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import GlobalStyles from '@styles/global'
import fireDb from '@utilities/firebase'
import serialize from '@utilities/format'
import FAQExpandable from '@components/faqTemplates/ExpandableWithCategories'
import About from '@components/about/TwoColumnsAbout'
import Video from '@components/video/Video'
import Footer from '@components/footer/Footer'
import NavBar from '@components/hero/NavBar'
import Hero from '@components/hero/Hero'
import Values from '@components/value/ThreeColumnsValue'
import Loading from '@components/Loading'

export default function Index({
  flags,
  flags: { faqFlag },
  faq,
  about,
  hero,
  video,
  values,
  configs: { navbarConfig, faqConfig },
}) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setTimeout(() => setLoaded(true), 3500), [])

  return (
    loaded ? <div>
      <GlobalStyles />
      <Head>
        <title>cmd-f 2021</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Fira+Code:wght@700&family=Fira+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar config={navbarConfig} flags={flags} />
      <Hero hero={hero} />
      <About {...about} />
      <Video {...video} />
      <Values {...values} />
      {faqFlag && <FAQExpandable faq={faq} config={faqConfig} />}
      <Footer />
    </div> : <Loading />
  )
}

export async function getStaticProps() {
  const targetedHackathon = await fireDb.getTargetedHackathon()

  // Uncomment if you want to update config
  await fireDb.updateConfig(targetedHackathon)

  if (!targetedHackathon) {
    return {
      notFound: true,
    }
  }

  const websiteData = await fireDb.getWebsiteData(targetedHackathon)

  const { featureFlags, BuildConfig, StaticData } = websiteData
  const faq = await fireDb.getCollection(targetedHackathon, 'FAQ')

  return {
    props: {
      flags: serialize(featureFlags),
      faq: serialize(faq),
      about: StaticData?.About,
      hero: StaticData?.Hero,
      values: StaticData?.Values,
      video: StaticData?.Video,
      configs: {
        navbarConfig: serialize(BuildConfig.componentStyling.navbar),
        faqConfig: serialize(BuildConfig.componentStyling.faq),
      },
    }, // will be passed to the page component as props
  }
}
