import { Hero } from '@/components/home/hero'
import {
  BenefitsSection,
  FinalCta,
  HowItWorksSection,
  IndustriesSection,
  ProblemSection,
  ShowcaseSection,
  SolutionSection,
} from '@/components/home/sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <IndustriesSection />
      <BenefitsSection />
      <FinalCta />
    </>
  )
}
