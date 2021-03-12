import fireDb from '@utilities/firebase'
import { serialize } from '@utilities/format'
import { SectionContainer } from '@lib/Containers'
import Faq from '@components/faq/FaqLoader'
import About from '@components/about/TwoColumnsAbout'
import Video from '@components/video/Video'
import Footer from '@components/footer/Footer'
import NavBar from '@components/hero/NavBar'
import Hero from '@components/hero/Hero'
import Values from '@components/value/ThreeColumnsValue'
import Sponsor from '@components/sponsors/SponsorSection'

export default function Index({ about, hero, video, values, footer, sponsor, faq, navbar }) {
  return (
    <SectionContainer>
      <NavBar {...navbar} />
      <Hero {...hero} />
      <About {...about} />
      <Video {...video} />
      <Values {...values} />
      <Faq id="faq" {...faq} />
      <Sponsor id="sponsors" {...sponsor} />
      <Footer {...footer} />
    </SectionContainer>
  )
}

export async function getStaticProps() {
  const targetedHackathon = await fireDb.getTargetedHackathon()

  // Uncomment if you want to update config
  // await fireDb.updateConfig(targetedHackathon)

  const websiteData = await fireDb.getWebsiteData(targetedHackathon)

  const sponsorData = await fireDb.getCollection(targetedHackathon, 'Sponsors')

  const { featureFlags, BuildConfig, StaticData } = websiteData
  const { faqFlag, registerationFlag, sponsorFlag, mentorFlag } = serialize(featureFlags)
  const {
    componentStyling: { faq, navbar },
    globalStyling: { faqTemplate },
  } = serialize(BuildConfig)

  return {
    props: {
      navbar: {
        config: navbar,
        flags: serialize(featureFlags),
      },
      hero: {
        ...StaticData?.Hero,
        registerationFlag,
      },
      about: StaticData?.About,
      values: StaticData?.Values,
      video: StaticData?.Video,
      faq: {
        chosenTemplate: faqTemplate,
        shouldDisplay: faqFlag,
        config: faq,
      },
      sponsor: {
        ...StaticData?.Sponsor,
        sponsorData: serialize(sponsorData),
        sponsorFlag,
        mentorFlag,
      },
      footer: StaticData?.Footer,
    }, // will be passed to the page component as props
  }
}
