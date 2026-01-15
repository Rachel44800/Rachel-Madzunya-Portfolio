import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/Rachel44800", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/rachel-madzunya-aa639725b", color: "hover:text-blue-400" },
    { name: "Email", icon: Mail, url: "mailto:rachelmadzunya@gmail.com", color: "hover:text-red-400" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    // You can replace this with actual resume download logic
    window.open('/Rachel Madzunya_Full Stack_CV.pdf', '_blank');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can implement actual dark mode logic here
  };

  return (
    <>
      {/* Name on top left */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-heading text-primary hover:text-accent transition-colors duration-300 cursor-pointer"
        >
          Rachel Madzunya
        </button>
      </div>

      {/* Enhanced Hamburger Menu Button - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <button
          className="group relative p-3 transition-all duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
          
          {/* Menu icon container */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            {isMenuOpen ? (
              <X 
                size={24} 
                className="text-foreground group-hover:text-primary transition-colors duration-300 animate-spin-slow" 
              />
            ) : (
              <div className="flex flex-col space-y-2 group-hover:space-y-1 transition-all duration-300">
                {/* Top line */}
                <div className="w-8 h-0.5 bg-foreground group-hover:bg-primary transition-all duration-300 group-hover:w-10 group-hover:rotate-12 group-hover:translate-y-1"></div>
                {/* Middle line */}
                <div className="w-6 h-0.5 bg-foreground group-hover:bg-accent transition-all duration-300 group-hover:w-8 group-hover:opacity-0"></div>
                {/* Bottom line */}
                <div className="w-7 h-0.5 bg-foreground group-hover:bg-primary transition-all duration-300 group-hover:w-9 group-hover:-rotate-12 group-hover:-translate-y-1"></div>
              </div>
            )}
          </div>
          
          
          {/* Pulse ring */}
          <div className="absolute inset-0 border border-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
        </button>
      </div>

      {/* Slide-out Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >

        <div className="p-4 pt-20">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-base font-medium group relative overflow-hidden",
                  activeSection === item.id
                    ? "bg-gradient-to-r from-primary/15 to-primary/5 text-primary border border-primary/30 shadow-sm"
                    : "text-muted-foreground hover:bg-gradient-to-r hover:from-accent/50 hover:to-accent/30 hover:text-accent-foreground hover:border hover:border-accent/20 hover:shadow-sm"
                )}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative flex items-center">
                  <div className={cn(
                    "w-1 h-6 rounded-full mr-3 transition-all duration-300",
                    activeSection === item.id ? "bg-primary" : "bg-muted-foreground/30 group-hover:bg-accent"
                  )}></div>
                  <span className="tracking-wide">{item.label}</span>
                </div>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-border/30">
            <div className="space-y-2">
              <Button
                onClick={downloadResume}
                className="w-full justify-start bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 text-primary"
                variant="ghost"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>


          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-border/30">
            <div className="text-xs text-muted-foreground text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                <span>Portfolio Navigation</span>
                <div className="w-1 h-1 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;