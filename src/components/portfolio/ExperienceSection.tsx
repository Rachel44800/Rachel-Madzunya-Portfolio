import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

const ExperienceSection = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const experienceData = [
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

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  // Staggered animation sequence triggered by intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset states first
            setIsTitleVisible(false);
            setVisibleCards(new Set());
            
            // First show the title
            const titleTimer = setTimeout(() => {
              setIsTitleVisible(true);
            }, 300);

            // Then show cards one by one
            const cardTimer = setTimeout(() => {
              experienceData.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleCards(prev => new Set([...prev, index]));
                }, index * 200); // 200ms delay between each card
              });
            }, 800); // Start showing cards 800ms after title

            return () => {
              clearTimeout(titleTimer);
              clearTimeout(cardTimer);
            };
          } else {
            // Hide elements when not in view
            setIsTitleVisible(false);
            setVisibleCards(new Set());
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={cn(
            "text-4xl md:text-5xl font-display text-center mb-16 bg-text-gradient bg-clip-text text-transparent transition-all duration-1000 ease-out",
            isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Experience 
          </h2>
          
          <div className="space-y-6">
            {experienceData.map((item, index) => {
              const isExpanded = expandedItems.has(index);
              const isCardVisible = visibleCards.has(index);
              
              return (
                <Card 
                  key={index} 
                  className={cn(
                    "group hover:shadow-lg transition-all duration-500 ease-out border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm",
                    isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{
                    transitionDelay: isCardVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                   <CardHeader 
                     className="cursor-pointer"
                     onClick={() => toggleExpanded(index)}
                   >
                     <div className="flex items-center justify-between">
                       <div className="flex items-center gap-4">
                         <div className="text-sm text-muted-foreground font-medium min-w-[120px]">
                           {item.period}
                         </div>
                         <div className="flex-1">
                           <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                             {item.title}
                           </CardTitle>
                         </div>
                       </div>
                       <div className="flex-shrink-0 ml-4">
                         {isExpanded ? (
                           <ChevronUp className="w-5 h-5 text-primary transition-transform duration-300" />
                         ) : (
                           <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300" />
                         )}
                       </div>
                     </div>
                   </CardHeader>
                  
                   <CardContent 
                     className={cn(
                       "overflow-hidden transition-all duration-500 ease-in-out",
                       isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                     )}
                   >
                     <div className="space-y-6 pt-4 border-t border-border/50">
                       <div className="text-lg text-primary font-semibold">
                         {item.company}
                       </div>
                       
                       <div className="flex items-center gap-2 text-muted-foreground text-sm">
                         <MapPin size={16} />
                         <span>{item.location}</span>
                       </div>
                       
                       <div>
                         <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <span className="text-primary mt-1 flex-shrink-0">▸</span>
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
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;