import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <Card className="bg-card-gradient border-border/50 hover:shadow-glow-primary transition-all duration-500">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Work Together?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  I'm always excited to discuss new opportunities and projects. 
                  Whether you're looking for a fullstack developer or want to collaborate on something amazing, 
                  let's start a conversation!
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a 
                          href="mailto:rachelmadzunya@gmail.com"
                          className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                          rachelmadzunya@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a 
                          href="tel:+27712161743"
                          className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                          071-216-1743
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground">Pretoria, Gauteng, South Africa</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h4>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 shadow-glow-secondary hover:shadow-glow-primary transition-all duration-300"
                      asChild
                    >
                      <a href="mailto:rachelmadzunya@gmail.com">
                        <Mail className="mr-2" size={20} />
                        Send Email
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a href="tel:+27712161743">
                        <Phone className="mr-2" size={20} />
                        Call Now
                      </a>
                    </Button>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        asChild
                      >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github size={20} />
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        asChild
                      >
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                          <Linkedin size={20} />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground text-center">
                      <MessageCircle className="inline mr-1" size={16} />
                      Usually responds within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;