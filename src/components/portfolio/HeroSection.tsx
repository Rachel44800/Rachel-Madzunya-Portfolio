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
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent animate-fade-in">
            Rachel Madzunya
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4 animate-fade-in-delay-1">
            Junior Fullstack Developer
          </h2>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-fade-in-delay-2">
            <MapPin size={20} />
            <span>Pretoria, Gauteng, South Africa</span>
          </div>
          
          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-3">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10 hover:shadow-glow-secondary transition-all duration-300"
              asChild
            >
              <a href="mailto:rachelmadzunya@gmail.com">
                <Mail className="mr-2" size={20} />
                Email Me
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10 hover:shadow-glow-secondary transition-all duration-300"
              asChild
            >
              <a href="tel:+27712161743">
                <Phone className="mr-2" size={20} />
                Call Me
              </a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-6 animate-fade-in-delay-4">
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-300"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;