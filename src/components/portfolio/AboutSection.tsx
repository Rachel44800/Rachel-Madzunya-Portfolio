const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
            <p>
              I'm <span className="text-primary font-semibold">Rachel Madzunya, Junior Fullstack Developer</span> based in Pretoria, South Africa. I specialize in building responsive, user-focused web applications that bridge business requirements and technical solutions. With a strong foundation in IT and Business Systems, I am experienced in Django, JavaScript (React/Node.js), HTML/CSS, and relational databases like MySQL and PostgreSQL.
            </p>
            
            <p>
              I thrive at the intersection of <span className="text-accent font-semibold">business and technology </span> gathering requirements, designing scalable web solutions, optimizing performance, and automating workflows to enhance efficiency. I enjoy collaborating with stakeholders and technical teams to deliver solutions that are both functional and innovative.
            </p>
            
            <p>
              My passion is <span className="text-primary font-semibold">leveraging technology to solve real-world problems and enable business growth</span> through creative and efficient web solutions.
            </p>
            
            <div className="pt-6 border-t border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Skills</h3>
              <p className="text-muted-foreground">
                Web Development (Django, React, Node.js), RESTful APIs, HTML/CSS, Databases (MySQL/PostgreSQL), Cloud Basics (AWS & Azure), Workflow Automation, Business Analysis, Agile Methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;