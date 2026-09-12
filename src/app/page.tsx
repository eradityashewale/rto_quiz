import { Hero } from "@/components/home/Hero";
import { FreeTestCta } from "@/components/home/FreeTestCta";
import { ExamCategoriesSection } from "@/components/home/ExamCategoriesSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { StandardsSection } from "@/components/home/StandardsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StudentBenefits } from "@/components/home/StudentBenefits";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExamCategoriesSection />
      <FreeTestCta />
      <PackagesSection />
      <StandardsSection />
      <HowItWorks />
      <WhyChooseUs />
      <StudentBenefits />
      <Testimonials />
      <Faq />
      <CtaSection />
    </main>
  );
}
