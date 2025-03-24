import { HomeAnimations } from "@/components/HomeAnimations";
import Navbar from "@/components/Navbar";
import { PageLoadAnimation } from "@/components/PageLoadAnimation";
import AppLang from "@/Lang/AppLang";
import { AboutSection } from "@/sections/About";
import BtnDownloadCv from "@/sections/BtnDowonloadCv";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <AppLang>
        <Navbar />
        <HomeAnimations>
          <Header />
        </HomeAnimations>
        <HomeAnimations>
          <HeroSection />
        </HomeAnimations>
        <ProjectsSection />
        <TapeSection />
        <TestimonialsSection />
        <AboutSection />
        <PageLoadAnimation>
          <ContactSection />
        </PageLoadAnimation>
        <BtnDownloadCv/>
        <Footer />
      </AppLang>
    </div>
  );
}
