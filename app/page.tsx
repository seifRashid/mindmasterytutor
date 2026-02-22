import { Hero } from "@/components/Hero";
import { GradeSelection } from "@/components/GradeSelection";
import { SubjectOverview } from "@/components/SubjectOverview";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Schools } from "@/components/Schools";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <GradeSelection />
      <SubjectOverview />
      <HowItWorks />
      <Features />
      <Schools />
    </main>
  );
}
