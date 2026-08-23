import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import BookingSection from "@/components/BookingSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      <main>
        <Hero />
        <AnnouncementBanner />
        <AboutSection />
        <HowItWorks />
        <PricingSection />
        <BookingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
