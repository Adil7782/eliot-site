
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { EfficiencySection } from "@/components/efficiency-section"
import { RfidSection } from "@/components/rfid-section"
import { ReportsSection } from "@/components/reports-section"

import { Navigation } from "@/components/navigation"
import DashboardsSection from "@/components/portfolio-section"
import ReportsStackSection from "@/components/reports-sections"
import HeroSection from "@/components/hero-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"




export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DashboardsSection/>
      <EfficiencySection />
      <RfidSection />
      <ReportsSection />
      <ReportsStackSection/>
      <ContactSection />
      <Footer />
    </main>
  )
}
