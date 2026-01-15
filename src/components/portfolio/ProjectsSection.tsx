import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Clock, Sparkles } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dembe Beads – Online Handmade Store",
      description: "A full-stack e-commerce web application designed for selling handmade beaded products inspired by African tradition. Features beaded handbags, traditional beads for the neck, hands, and legs, key holders, and other handcrafted accessories including Venda Look Beaded Malungu. The project focuses on creating a modern online shopping experience while preserving cultural craftsmanship.",
      technologies: ["React", "Vercel", "Supabase", "REST APIs", "HTML", "CSS", "JavaScript"],
      features: ["Product Listings & Categories", "Shopping Cart", "User Authentication", "Responsive Modern UI"],
      status: "completed",
      type: "Personal Project",
      demoUrl: "#",
      demoUrl: "https://www.dembebeads.co.za/",
      githubUrl: "https://github.com/Rachel44800"
    },
    {
      title: "Smart Expense Tracker",
      description: "A personal finance web application that helps users track daily expenses, categorize spending, and view monthly summaries to support better financial management.",
      technologies: ["React", "Supabase", "Chart.js"],
      features: ["Add & Delete Expenses", "Expense Categorization", "Monthly Summaries", "Data Visualization"],
      status: "coming-soon",
      type: "Personal Project",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Event Booking & Ticket System",
      description: "A lightweight event booking system where users can view upcoming events, reserve tickets, and receive booking confirmations. The project simulates a real-world event management platform.",
      technologies: ["React", "Supabase", "REST APIs"],
      features: ["Event Listings", "Ticket Booking", "Booking Confirmation", "Basic Admin View"],
      status: "coming-soon",
      type: "Personal Project",
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
                className={`bg-card-gradient border-border/50 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-500 group relative overflow-hidden ${
                  project.status === 'coming-soon' ? 'opacity-90' : ''
                }`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Status Badge */}
                {project.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg">
                      <Clock size={12} className="mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
                {project.status === 'completed' && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-lg">
                      <Sparkles size={12} className="mr-1" />
                      Live
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {project.type}
                    </span>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300 pr-20">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                      {project.status === 'coming-soon' ? 'Planned Tech Stack:' : 'Tech Stack:'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                      {project.status === 'coming-soon' ? 'Planned Features:' : 'Key Features:'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((feature) => (
                        <Badge 
                          key={feature}
                          variant="outline"
                          className="border-accent/50 text-accent hover:border-accent hover:bg-accent/10 transition-colors duration-300 text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {project.status === 'completed' && (
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 hover:border-primary hover:bg-primary/10 flex-1"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="mr-1" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 hover:border-primary hover:bg-primary/10 flex-1"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  )}
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