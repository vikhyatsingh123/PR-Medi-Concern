import AboutHero from '../components/about/AboutHero'
import Compliance from '../components/about/Compliance'
import FactsBand from '../components/about/FactsBand'
import Gallery from '../components/about/Gallery'
import Leadership from '../components/about/Leadership'
import Milestones from '../components/about/Milestones'
import MissionVision from '../components/about/MissionVision'
import Story from '../components/about/Story'
import Values from '../components/about/Values'
import CallbackBand from '../components/home/CallbackBand'
import Page from '../components/ui/Page'

export default function About() {
  return (
    <Page title="About Us">
      <AboutHero />
      <Story />
      <MissionVision />
      <FactsBand />
      <Values />
      <Milestones />
      <Leadership />
      <Gallery />
      <Compliance />
      <div className="pt-20 sm:pt-24">
        <CallbackBand />
      </div>
    </Page>
  )
}
