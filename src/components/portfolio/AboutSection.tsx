import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          
          <Card className="bg-card-gradient border-border/50 shadow-glow-secondary hover:shadow-glow-primary transition-all duration-500">
            <CardContent className="p-8 md:p-12">
              <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
                <p>
                  I'm a <span className="text-primary font-semibold">passionate and detail-oriented Junior Fullstack Developer</span> with a strong foundation in building robust, user-centric web applications. My journey in technology has equipped me with comprehensive skills across the full development stack.
                </p>
                
                <p>
                  With expertise in <span className="text-accent font-semibold">Django, JavaScript, HTML/CSS, and MySQL</span>, I bring both front-end creativity and back-end logic to every project. My experience spans financial systems integration and cloud environments including AWS & Azure.
                </p>
                
                <p>
                  What drives me is the opportunity to solve complex problems through elegant code solutions, always with the end-user experience in mind. I thrive in collaborative environments and am constantly learning new technologies to stay at the forefront of web development.
                </p>
                
                <div className="pt-6 border-t border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-primary font-medium">📧 Email:</span> rachelmadzunya@gmail.com
                    </div>
                    <div>
                      <span className="text-primary font-medium">📱 Phone:</span> 071-216-1743
                    </div>
                    <div>
                      <span className="text-primary font-medium">📍 Location:</span> Pretoria, Gauteng, SA
                    </div>
                    <div>
                      <span className="text-primary font-medium">💼 Focus:</span> Fullstack Development
                    </div>
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

export default AboutSection;