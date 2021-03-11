import fireDb from '@utilities/firebase'
import { serialize } from '@utilities/format'
import { SectionContainer } from '@lib/Containers'
import Faq from '@components/faq/Cmdf2021'
import About from '@components/about/TwoColumnsAbout'
import Video from '@components/video/Video'
import Footer from '@components/footer/Footer'
import NavBar from '@components/hero/NavBar'
import Hero from '@components/hero/Hero'
import Values from '@components/value/ThreeColumnsValue'
import SponsorSection from '@components/sponsors/SponsorSection'

export default function Index({ flags, about, hero, sponsorData, video, values, footer, sponsor, faq, navbar }) {
  return (
    <SectionContainer>
      <NavBar {...navbar} />
      <Hero {...hero} open={flags?.registerationFlag} />
      <About {...about} />
      <Video {...video} />
      <Values {...values} />
      <Faq id="faq" {...faq} />
      {flags?.sponsorFlag && (
        <SponsorSection id="sponsors" sponsorData={sponsorData} mentorFlag={flags?.mentorFlag} {...sponsor} />
      )}
      <Footer {...footer} />
    </SectionContainer>
  )
}

export async function getStaticProps() {
  const targetedHackathon = await fireDb.getTargetedHackathon()

  // Uncomment if you want to update config
  // await fireDb.updateConfig(targetedHackathon)

  const websiteData = await fireDb.getWebsiteData(targetedHackathon)

  const { featureFlags, BuildConfig, StaticData } = websiteData
  const sponsorData = await fireDb.getCollection(targetedHackathon, 'Sponsors')
  // , mentorFlag, sponsorFlag, rsvpOpenFlag, registerationFlag
  const { faqFlag, registerationFlag } = serialize(featureFlags)
  const {
    componentStyling: { faq, navbar },
  } = serialize(BuildConfig)

  console.log(navbar)

  return {
    props: {
      about: StaticData?.About,
      hero: StaticData?.Hero,
      sponsorData: serialize(sponsorData),
      values: StaticData?.Values,
      video: StaticData?.Video,
      footer: StaticData?.Footer,
      sponsor: StaticData?.Sponsor,
      faq: {
        shouldDisplay: faqFlag,
        config: faq,
      },
      navbar: {
        config: navbar,
        flags: serialize(featureFlags),
      },
    }, // will be passed to the page component as props
  }
}
