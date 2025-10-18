import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone, Heart, Code, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  useScrollAnimation();
  
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
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          {/* Social Media Section */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/Rachel44800" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300 group"
              >
                <Github className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rachel-madzunya-aa639725b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300 group"
              >
                <Linkedin className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
              </a>
              <a 
                href="mailto:rachelmadzunya@gmail.com"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300 group"
              >
                <Mail className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
              </a>
            </div>
          </div>

          {/* Copyright Information */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Rachel Madzunya. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
