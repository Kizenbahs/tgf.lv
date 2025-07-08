import { AboutUsSection } from "@/components/about-us-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
}
