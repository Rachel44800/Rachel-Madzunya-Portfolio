import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Information Technology in Business Systems",
      institution: "IIE Rosebank College",
      year: "2023",
      type: "degree"
    },
    {
      degree: "Higher Certificate in IT: Support Services",
      institution: "IIE Rosebank College", 
      year: "2021",
      type: "certificate"
    },
    {
      degree: "Matric (National Senior Certificate)",
      institution: "Mbilwi Secondary School",
      year: "2018",
      type: "matric"
    }
  ];

  const certifications = [
    {
      name: "Python Programming",
      issuer: "SoloLearn",
      category: "Programming"
    },
    {
      name: "HTML5 & CSS3 Fundamentals", 
      issuer: "SoloLearn",
      category: "Web Development"
    },
    {
      name: "SQL Database Introduction",
      issuer: "SoloLearn",
      category: "Database"
    },
    {
      name: "NSE 1, 2, 3 Network Security Associate",
      issuer: "Fortinet",
      category: "Security"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="bg-card-gradient border-border/50 hover:border-primary/50 hover:shadow-glow-secondary transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <GraduationCap className="text-primary" size={24} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary">{edu.institution}</p>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="outline"
                        className="border-accent/50 text-accent"
                      >
                        {edu.year}
                      </Badge>
                      <Badge 
                        variant="secondary"
                        className="bg-secondary/50 text-muted-foreground"
                      >
                        {edu.type === 'degree' ? 'Bachelor\'s Degree' : 
                         edu.type === 'certificate' ? 'Higher Certificate' : 'Matric'}
                      </Badge>
                    </div>
                    {index < education.length - 1 && (
                      <div className="border-b border-border/30 pt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-card-gradient border-border/50 hover:border-primary/50 hover:shadow-glow-secondary transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Award className="text-primary" size={24} />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">Issued by {cert.issuer}</p>
                    <Badge 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {cert.category}
                    </Badge>
                    {index < certifications.length - 1 && (
                      <div className="border-b border-border/30 pt-2" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="mt-8 bg-card-gradient border-border/50">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Committed to staying current with emerging technologies and industry best practices. 
                  Actively pursuing additional certifications in cloud computing and modern web frameworks.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;