import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { RegionalAdvantage } from "@/components/RegionalAdvantage";
import { HumanService } from "@/components/HumanService";
import { IdealClient } from "@/components/IdealClient";
import { FinalCta } from "@/components/FinalCta";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Process />
        <Services />
        <WhyUs />
        <Pricing />
        <RegionalAdvantage />
        <HumanService />
        <IdealClient />
        <FinalCta />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
