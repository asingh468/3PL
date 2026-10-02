import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
