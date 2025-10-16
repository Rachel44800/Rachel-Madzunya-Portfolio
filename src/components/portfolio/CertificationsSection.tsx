import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

const CertificationsSection = () => {
  const certificationsTimeline = [
    {
      year: "2025",
      title: "Microsoft AI Fluency Course",
      issuer: "Microsoft",
      category: "AI & Machine Learning",
      icon: "🤖",
      description: "Comprehensive understanding of AI concepts, machine learning fundamentals, and Microsoft AI services"
    },
    {
      year: "2023",
      title: "Python Programming",
      issuer: "SoloLearn",
      category: "Programming",
      icon: "🐍",
      description: "Advanced Python programming concepts including OOP, data structures, and algorithm implementation"
    },
    {
      year: "2023",
      title: "HTML5 & CSS3 Fundamentals",
      issuer: "SoloLearn",
      category: "Web Development",
      icon: "🌐",
      description: "Modern web development techniques using semantic HTML5 and advanced CSS3 features"
    },
    {
      year: "2022",
      title: "SQL Database Introduction",
      issuer: "SoloLearn",
      category: "Database",
      icon: "🗄️",
      description: "Database design principles, query optimization, and data manipulation using SQL"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
            Certifications 
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            <div className="space-y-12">
              {certificationsTimeline.map((item, index) => (
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
                          {item.issuer}
                        </div>
                        
                        <div className="flex items-center gap-3 mb-3">
                          <Badge 
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {item.category}
                          </Badge>
                          <Award className="text-primary" size={20} />
                        </div>
                        
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
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

export default CertificationsSection;
