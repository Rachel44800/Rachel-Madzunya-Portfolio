import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('experience');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      

      <section id="home">
        <HeroSection />
      </section>
      <section id="experience" className="animate-on-scroll">
        <ExperienceSection />
      </section>
      <section id="education" className="animate-on-scroll">
        <EducationSection />
      </section>
      <section id="skills" className="animate-on-scroll">
        <SkillsSection />
      </section>
      <section id="certifications" className="animate-on-scroll">
        <CertificationsSection />
      </section>
      <section id="projects" className="animate-on-scroll">
        <ProjectsSection />
      </section>
      <section id="contact" className="animate-on-scroll">
        <ContactSection />
      </section>
      
      {/* Enhanced Footer */}
      <footer className="py-8 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-muted-foreground animate-on-scroll">
            © 2024 Rachel Madzunya. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="mt-4 flex justify-center gap-4 animate-on-scroll">
            <span className="text-sm text-primary/60 hover:text-primary transition-colors duration-300 cursor-pointer">
              🚀 Powered by creativity
            </span>
            <span className="text-sm text-accent/60 hover:text-accent transition-colors duration-300 cursor-pointer">
              ✨ Crafted with passion
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
