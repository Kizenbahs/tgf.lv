import { AboutUsSection } from "@/components/about-us-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { OurWorksSection } from "@/components/our-works-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <OurWorksSection />
        <AboutUsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
