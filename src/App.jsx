import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsMarquee from "./components/ClientsMarquee";
import TestimonialsIntro from "./components/TestimonialsIntro";
import TestimonialsGrid from "./components/TestimonialsGrid";
import ResultsSection from "./components/ResultsSection";
import ServicesSection from "./components/ServicesSection";
import ComparisonSection from "./components/ComparisonSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer"



export default function Home() {
  return (
    <>
    
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero/>
      <ClientsMarquee/>
      <TestimonialsIntro/>
      <TestimonialsGrid/>
      <ResultsSection/>
      <ServicesSection/>
      <ComparisonSection/>
      <FaqSection/>
      <Footer/>
      

    </div>
    </>
  );
}
