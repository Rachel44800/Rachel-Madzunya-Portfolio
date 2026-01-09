import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "FSPro Lite Web App",
      description: "A comprehensive funeral policy management platform built using Django. Features dynamic member registration, payment tracking, role-based access control, and responsive design for optimal user experience across all devices.",
      technologies: ["Django", "Python", "MySQL", "HTML5", "CSS3", "JavaScript"],
      features: ["User Management", "Payment Tracking", "Role-based Access", "Responsive Design"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Tracker API",
      description: "A lightweight and efficient RESTful API for task management built using Django REST Framework. Deployed on AWS with comprehensive CRUD operations, user authentication, and real-time task status updates.",
      technologies: ["Django REST", "Python", "AWS", "PostgreSQL", "Redis"],
      features: ["RESTful API", "User Authentication", "Real-time Updates", "Cloud Deployment"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Dashboard",
      description: "A modern admin dashboard for e-commerce management featuring real-time analytics, inventory management, and customer insights. Built with responsive design principles and optimized for performance.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      features: ["Analytics Dashboard", "Inventory Management", "Customer Insights", "Performance Optimized"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-card-gradient border-border/50 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-500 group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 hover:border-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 hover:border-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <Badge 
                          key={feature}
                          variant="outline"
                          className="border-accent/50 text-accent hover:border-accent hover:bg-accent/10 transition-colors duration-300"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
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

export default ProjectsSection;