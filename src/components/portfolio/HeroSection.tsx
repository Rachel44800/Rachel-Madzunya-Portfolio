import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main greeting */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display mb-2 bg-text-gradient bg-clip-text text-transparent">
              Hello,
            </h1>
            <h2 className="text-4xl md:text-6xl font-display mb-6 bg-text-gradient bg-clip-text text-transparent">
              I'm Rachel
            </h2>
          </div>
          
          {/* Introduction paragraph */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1 font-body">
            I am a passionate full stack developer specializing in building responsive, user-focused web applications that bridge business requirements and technical solutions. With expertise in Django, React, Node.js, and modern databases, I create efficient solutions that drive business growth.
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-fade-in-delay-2">
            <MapPin size={20} />
            <span>Pretoria, Gauteng, South Africa</span>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-6 mb-8 animate-fade-in-delay-3">
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-300"
              asChild
            >
              <a href="https://github.com/Rachel44800" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/rachel-madzunya-aa639725b" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-300"
              asChild
            >
              <a href="mailto:rachelmadzunya@gmail.com">
                <Mail size={24} />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-300"
              asChild
            >
              <a href="tel:+27712161743">
                <Phone size={24} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;