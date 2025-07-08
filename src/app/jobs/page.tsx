import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JobsSection } from "@/components/jobs-section";

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JobsSection />
      </main>
      <Footer />
    </div>
  );
}
