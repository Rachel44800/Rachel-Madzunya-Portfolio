import { Github, Linkedin, Mail, MapPin, Phone, Code, Zap, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayText, setDisplayText] = useState("");
  
  const fullText = "Full Stack Developer";

  const scrollToNext = () => {
    const nextSection = document.getElementById('experience');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    setIsLoaded(true);
    
    let index = 0;
    const typeWriter = () => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    
    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`particle particle-${i + 1}`}
              style={{
                '--delay': `${i * 0.5}s`,
                '--duration': `${3 + (i % 3)}s`
              } as React.CSSProperties}
            />
          ))}
      </div>

        {/* Morphing shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-3xl animate-morph-shape" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/20 to-secondary/30 rounded-full blur-3xl animate-morph-shape-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        
          </div>
          
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side - Social icons */}
            <div className="lg:col-span-2 lg:order-1 order-2 lg:-ml-16">
              {/* Enhanced Social links - Left side vertical */}
              <div className={`flex flex-col items-center lg:items-start gap-4 mb-8 pt-48 transition-all duration-1000 delay-700 ${isLoaded ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <Button
              variant="ghost"
              size="lg"
              className="group relative overflow-hidden hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-500 hover:scale-110 hover:-translate-y-1"
              asChild
            >
              <a href="https://github.com/Rachel44800" target="_blank" rel="noopener noreferrer">
                <Github size={24} className="relative z-10 group-hover:animate-spin-slow" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="group relative overflow-hidden hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-500 hover:scale-110 hover:-translate-y-1"
              asChild
            >
              <a href="https://www.linkedin.com/in/rachel-madzunya-aa639725b" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} className="relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="group relative overflow-hidden hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-500 hover:scale-110 hover:-translate-y-1"
              asChild
            >
              <a href="mailto:rachelmadzunya@gmail.com">
                <Mail size={24} className="relative z-10 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="group relative overflow-hidden hover:bg-primary/10 hover:text-primary hover:shadow-glow-secondary transition-all duration-500 hover:scale-110 hover:-translate-y-1"
              asChild
            >
              <a href="tel:+27712161743">
                <Phone size={24} className="relative z-10 group-hover:animate-wiggle" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
          </div>
            </div>

            {/* Center - Main content */}
            <div className="lg:col-span-8 text-center lg:order-2 order-1">
              {/* Main greeting with enhanced animations */}
              <div className={`pt-32 mb-8 transition-all duration-1000 ${isLoaded ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-5xl md:text-7xl font-display mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift">
                  Hello,
                </h1>
                <h2 className="text-4xl md:text-6xl font-display mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient-shift-delayed">
                  I'm Rachel
                </h2>
                <div className="text-2xl md:text-3xl font-mono text-primary/80 mb-6 animate-typewriter">
                  {displayText}
                  <span className="animate-blink">|</span>
                </div>
              </div>
              
              {/* Introduction paragraph with enhanced styling */}
              <div className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-body transition-all duration-1000 delay-300 ${isLoaded ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
                <p className="relative">
                  <span className="absolute -left-4 top-0 text-primary/40 text-2xl animate-bounce-slow">"</span>
                  I am a passionate full stack developer specializing in building responsive, user-focused web applications that bridge business requirements and technical solutions. With expertise in Django, React, Node.js, and modern databases, I create efficient solutions that drive business growth.
                  <span className="absolute -right-4 bottom-0 text-primary/40 text-2xl animate-bounce-slow-delayed">"</span>
                </p>
              </div>
              
              {/* Mouse Scroll Animation - Center */}
              <div className={`mt-16 flex flex-col items-center transition-all duration-1000 delay-500 ${isLoaded ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
                <button
                  onClick={scrollToNext}
                  className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300 relative"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
                  
                  {/* Mouse body with enhanced effects */}
                  <div className="relative w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center group-hover:border-primary/70 transition-all duration-300 group-hover:shadow-glow-secondary">
                    {/* Mouse wheel with enhanced animation */}
                    <div className="w-1 h-1.5 bg-muted-foreground/50 rounded-full mt-2 group-hover:bg-primary/70 transition-colors duration-300 animate-scroll-wheel"></div>
                    
                    {/* Animated dots inside mouse */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-primary/30 rounded-full animate-ping"></div>
                    <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-secondary/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  
                  {/* Enhanced scroll indicator with trail effect */}
                  <div className="relative">
                    <ChevronDown className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary/70 animate-bounce-slow transition-colors duration-300" />
                    {/* Trail effect */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                  
                </button>
              </div>
            </div>

            {/* Right side - Empty space for balance */}
            <div className="lg:col-span-2 lg:order-3 order-3">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;