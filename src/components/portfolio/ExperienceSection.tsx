import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const experienceTimeline = [
    {
      year: "2024",
      title: "Junior Fullstack Developer & Business Analyst (Intern)",
      company: "Ketelopele Solutions",
      location: "Pretoria, South Africa",
      period: "May 2024 – Present",
      icon: "💼",
      achievements: [
        "Worked with C#, ASP.NET (MVC/Web API), HTML, CSS, and JavaScript in developing and extending enterprise applications",
        "Assisted with debugging, troubleshooting, and resolving issues in web applications hosted on IIS/Windows environments",
        "Built and optimized SQL queries, stored procedures, and relational database designs (MySQL & SQL Server)",
        "Developed and maintained RESTful APIs for system integrations and feature enhancements",
        "Collaborated with business stakeholders to translate requirements into technical specifications",
        "Designed and executed manual test cases, supporting system stability and UAT processes",
        "Participated in sprint planning, backlog refinement, and change management",
        "Delivered new features and bug fixes that improved usability and performance of internal systems",
        "Improved web app performance by 30% through optimization and debugging",
        "Recognized for bridging communication between technical and non-technical teams"
      ],
      technologies: ["C#", "ASP.NET MVC", "ASP.NET Web API", "SQL Server", "MySQL", "HTML5", "CSS3", "JavaScript", "IIS", "Git", "GitHub", "Agile"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
            Professional Experience 
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            <div className="space-y-12">
              {experienceTimeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-background">
                      {item.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div 
                    className={cn(
                      "flex-1",
                      index % 2 === 0 ? "ml-0" : "ml-8"
                    )}
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl text-foreground font-semibold mb-2">
                          {item.title}
                        </h3>
                        
                        <div className="text-lg text-primary font-semibold mb-3">
                          {item.company}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <CalendarDays size={16} />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <span className="text-primary mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Technologies & Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
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
                      
                      {index === 0 && (
                        <div className="pt-4 border-t border-border/50">
                          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                            <h5 className="text-primary font-semibold mb-2">Impact Highlight</h5>
                            <p className="text-sm text-muted-foreground">
                              Successfully improved application performance by 30% through strategic optimization, 
                              directly enhancing user experience and reducing server load for the company's web applications.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;