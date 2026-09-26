import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Services } from "@/components/landing/Services";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { Process } from "@/components/landing/Process";
import { About } from "@/components/landing/About";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { MobileCta } from "@/components/landing/MobileCta";

export default function Home() {
  return (
    <>
      <a href="#konten" className="skip-link">
        Langsung ke konten
      </a>
      <SiteHeader />
      <main id="konten">
        <Hero />
        <Problems />
        <Services />
        <CaseStudies />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
