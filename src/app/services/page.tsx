import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ServicesSection } from "@/components/services-section";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
