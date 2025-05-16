import Hero from "@/components/home/Hero"
import ServicesOverview from "@/components/home/ServicesOverview"
import ClientsShowcase from "@/components/home/ClientsShowcase"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel"
import CaseStudyHighlights from "@/components/home/CaseStudyHighlights"
import PartnersShowcase from "@/components/home/PartnersShowcase"
import NewsletterSignup from "@/components/shared/NewsletterSignup"
import StylishCTA from "@/components/shared/StylishCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <CaseStudyHighlights />
      <PartnersShowcase />
      <NewsletterSignup />
      
    </>
  )
}
