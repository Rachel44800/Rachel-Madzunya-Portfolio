import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      skills: ["C#", "ASP.NET MVC/Web API", "Python", "Java", "JavaScript (ES6+)", "React", "HTML5", "CSS3"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["SQL Server", "MySQL", "PostgreSQL"]
    },
    {
      title: "Development",
      icon: "🛠️",
      skills: ["Fullstack", "RESTful APIs", "Responsive Design", "UI/UX"]
    },
    {
      title: "Tools & Platforms",
      icon: "⚙️",
      skills: ["Git", "GitHub", "Azure DevOps", "IIS", "Windows Server", "Power BI", "SSRS"]
    },
    {
      title: "Methodologies",
      icon: "📋",
      skills: ["Agile", "Scrum", "SDLC", "Debugging", "System Documentation"]
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      skills: ["Analytical Thinking", "Problem-Solving", "Attention to Detail", "Team Collaboration", "Adaptability"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift animate-on-scroll">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className={`bg-card-gradient border-border/50 hover:border-primary/50 hover:shadow-glow-secondary transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-scale-in`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {category.icon}
                    </span>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary border-0 transition-all duration-300 hover:scale-105 hover:shadow-glow-secondary group/badge"
                        style={{
                          animationDelay: `${skillIndex * 50}ms`
                        }}
                      >
                        <span className="group-hover/badge:animate-pulse">{skill}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;