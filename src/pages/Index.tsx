
import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesPreview from "@/components/ServicesPreview";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LoadingSpinner from "@/components/LoadingSpinner";

const Index = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Header />
        <Hero />
        <TrustIndicators />
        <ServicesPreview />
        <AboutSection />
        <Testimonials />
        <FAQSection />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Suspense>
  );
};

export default Index;
