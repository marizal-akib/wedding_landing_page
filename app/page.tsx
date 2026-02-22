import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ThePromise from "@/components/sections/ThePromise";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import CoverageTimeline from "@/components/sections/CoverageTimeline";
import OurStyle from "@/components/sections/OurStyle";
import WhyTrustUs from "@/components/sections/WhyTrustUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Packages from "@/components/sections/Packages";
import PreWeddingShoot from "@/components/sections/PreWeddingShoot";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ThePromise />
        <WhatWeOffer />
        <CoverageTimeline />
        <OurStyle />
        <WhyTrustUs />
        <HowItWorks />
        <Packages />
        <PreWeddingShoot />
        <PortfolioPreview />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
