import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <Card className="bg-card-gradient border-border/50 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-500">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-foreground mb-2">
                    Junior Fullstack Developer
                  </CardTitle>
                  <div className="text-lg text-primary font-semibold mb-3">
                    Ketelopele Solutions
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      <span>May 2024 - Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Pretoria, South Africa</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Developed SEO-optimized Django web applications with clean, maintainable code following industry best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Integrated REST APIs and built mobile-first responsive user interfaces for enhanced user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Utilized Git/GitHub for version control in collaborative team projects and code reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Reduced page load time by 30% through performance optimization and code refactoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Participated in Agile development sprints and bug-fixing cycles to ensure timely project delivery</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Technologies & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Django", "Python", "JavaScript", "HTML5", "CSS3", "MySQL", "Git", "AWS", "Agile"].map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h5 className="text-primary font-semibold mb-2">Impact Highlight</h5>
                  <p className="text-sm text-muted-foreground">
                    Successfully improved application performance by 30% through strategic optimization, 
                    directly enhancing user experience and reducing server load for the company's web applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;