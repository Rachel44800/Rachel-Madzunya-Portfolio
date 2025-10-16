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
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-card-gradient border-border/50 hover:border-primary/50 hover:shadow-glow-secondary transition-all duration-500 group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <CardTitle className="text-lg text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary border-0 transition-all duration-300"
                      >
                        {skill}
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