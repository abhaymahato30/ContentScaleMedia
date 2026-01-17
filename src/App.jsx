import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsMarquee from "./components/ClientsMarquee";
import TestimonialsIntro from "./components/TestimonialsIntro";
import TestimonialsGrid from "./components/TestimonialsGrid";
import ResultsSection from "./components/ResultsSection";
import ServicesSection from "./components/ServicesSection";
import ComparisonSection from "./components/ComparisonSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import WhatWeDo from "./components/WhatWeDo";
import RevenueSection from "./components/ReveneuSection";
import StatsStrip from "./components/StatsStrip";
import CTASection from "./components/CTASection";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-lime-800">
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* CLIENTS */}
      {/* <section id="clients">
        <ClientsMarquee />
      </section> */}

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <TestimonialsIntro />
        <TestimonialsGrid />
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <PortfolioSection />
      </section>

      {/* RESULTS */}
      <section id="results">
        <ResultsSection />
      </section>

      {/* SERVICES */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* COMPARISON */}
      <section id="comparison">
        <ComparisonSection />
      </section>

      {/* REVENUE */}
      <section id="revenue">
        <RevenueSection />
      </section>

      {/* STATS */}
      <section id="stats">
        <StatsStrip />
      </section>

      {/* CTA */}
      <section id="cta">
        <CTASection />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FaqSection />
      </section>

      <Footer />
    </div>
  );
}
