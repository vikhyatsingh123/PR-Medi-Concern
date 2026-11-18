import AboutIntro from "../components/home/AboutIntro";
import Bento from "../components/home/Bento";
import CallbackBand from "../components/home/CallbackBand";
import Capabilities from "../components/home/Capabilities";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Page from "../components/ui/Page";

export default function Home() {
  return (
    <Page title="Healthcare & Pharmaceuticals">
      <Hero />
      <AboutIntro />
      <Bento />
      <Stats />
      <Capabilities />
      <FeaturedProducts />
      <CallbackBand />
    </Page>
  );
}
