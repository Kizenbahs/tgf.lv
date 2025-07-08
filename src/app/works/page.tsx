import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { OurWorksSection } from "@/components/our-works-section";

export default function WorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <OurWorksSection />
      </main>
      <Footer />
    </div>
  );
}
