import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PartnersCarousel } from "@/components/partners-carousel";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection showMoreLink />
        <PartnersCarousel />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
