import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      skills: ["Python (Django)", "Java", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "SQL"]
    },
    {
      title: "Development",
      icon: "🛠️",
      skills: ["Fullstack", "RESTful APIs", "Responsive Design", "UI/UX"]
    },
    {
      title: "Tools & Platforms",
      icon: "⚙️",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools", "AWS", "Azure"]
    },
    {
      title: "Methodologies",
      icon: "📋",
      skills: ["Agile", "SDLC", "ITIL (basic)", "Automation"]
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      skills: ["Problem-solving", "Collaboration", "Adaptability", "Attention to detail"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
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