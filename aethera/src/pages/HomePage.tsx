import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import StatsSection from '../components/StatsSection'
import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
