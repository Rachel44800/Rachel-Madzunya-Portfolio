import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Building2, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const CertificationsSection = () => {
  const certificationsTimeline = [
    {
      year: "2025",
      title: "Microsoft AI Fluency Course",
      issuer: "Microsoft",
      category: "AI & Machine Learning",
      icon: Award,
      description: "Comprehensive understanding of AI concepts, machine learning fundamentals, and Microsoft AI services",
      highlights: ["AI Concepts", "Machine Learning", "Microsoft AI Services", "Practical Applications"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      year: "2023",
      title: "Python Programming",
      issuer: "SoloLearn",
      category: "Programming",
      icon: BookOpen,
      description: "Advanced Python programming concepts including OOP, data structures, and algorithm implementation",
      highlights: ["OOP", "Data Structures", "Algorithms", "Python Fundamentals"],
      color: "from-yellow-500 to-green-600"
    },
    {
      year: "2023",
      title: "HTML5 & CSS3 Fundamentals",
      issuer: "SoloLearn",
      category: "Web Development",
      icon: BookOpen,
      description: "Modern web development techniques using semantic HTML5 and advanced CSS3 features",
      highlights: ["HTML5", "CSS3", "Responsive Design", "Web Standards"],
      color: "from-orange-500 to-pink-600"
    },
    {
      year: "2022",
      title: "SQL Database Introduction",
      issuer: "SoloLearn",
      category: "Database",
      icon: BookOpen,
      description: "Database design principles, query optimization, and data manipulation using SQL",
      highlights: ["SQL Queries", "Database Design", "Data Manipulation", "Query Optimization"],
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display mb-4 bg-text-gradient bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my expertise and commitment to continuous learning
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-30 rounded-full" />
            
            <div className="space-y-16">
              {certificationsTimeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={cn(
                      "relative flex items-center gap-8 animate-on-scroll",
                      isEven ? "flex-row" : "flex-row-reverse"
                    )}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={cn(
                        "w-20 h-20 rounded-full bg-gradient-to-r flex items-center justify-center text-white shadow-xl border-4 border-background group hover:scale-110 transition-all duration-500",
                        item.color
                      )}>
                        <IconComponent size={32} className="group-hover:rotate-12 transition-transform duration-500" />
                      </div>
                      {/* Year Badge */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold shadow-lg">
                          {item.year}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className={cn("flex-1", isEven ? "text-left" : "text-right")}>
                      <Card className={cn(
                        "bg-card-gradient border-border/50 hover:shadow-glow-primary transition-all duration-500 group hover:scale-105",
                        "backdrop-blur-sm"
                      )}>
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className={cn("flex-1", !isEven && "text-right")}>
                              <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                {item.title}
                              </CardTitle>
                              <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                                <Building2 size={18} />
                                <span>{item.issuer}</span>
                              </div>
                            </div>
                            <Badge 
                              variant="secondary"
                              className={cn(
                                "bg-gradient-to-r text-white font-semibold shadow-lg",
                                item.color
                              )}
                            >
                              {item.category}
                            </Badge>
                          </div>
                          
                          {/* Meta Information */}
                          <div className={cn(
                            "flex flex-wrap gap-4 text-sm text-muted-foreground mb-4",
                            !isEven && "justify-end"
                          )}>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>Issued {item.year}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Award size={14} />
                              <span>Certified</span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          
                          {/* Key Highlights */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-foreground">Skills Gained:</h4>
                            <div className={cn(
                              "flex flex-wrap gap-2",
                              !isEven && "justify-end"
                            )}>
                              {item.highlights.map((highlight, idx) => (
                                <Badge 
                                  key={idx}
                                  variant="outline"
                                  className="text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-300"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
              <Award className="text-primary" size={20} />
              <span className="text-sm text-muted-foreground">
                Always expanding my knowledge and skills
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
