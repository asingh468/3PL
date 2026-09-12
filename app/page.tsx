import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { IdealClient } from "@/components/IdealClient";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Pricing />
        <IdealClient />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
