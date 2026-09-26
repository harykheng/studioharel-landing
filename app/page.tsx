import { Intro } from "@/components/landing/Intro";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Work } from "@/components/landing/Work";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
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
      <Intro />
      <SiteHeader />
      <main id="konten">
        <Hero />
        <About />
        <Work />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
