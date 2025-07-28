import { FloatingPetals } from "@/components/floating-petals";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { EventsSection } from "@/components/events-section";
{/*import { DonationSection } from "@/components/donation-section";
import { ContactSection } from "@/components/contact-section";*/}
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 font-inter overflow-x-hidden">
      <title>One World One Family</title>
      <meta name="description" content="Welcome to ArulMigu Aadhi Angala Parameswari Amman Maha Sakthi Beedam, a sacred spiritual haven where divine blessings flow eternally. Experience profound peace through ancient Hindu traditions, temple services, and spiritual guidance." />
      
      <FloatingPetals />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <EventsSection />
     {/* <DonationSection />
      <ContactSection />*/}
      <Footer />
    </div>
  );
}
