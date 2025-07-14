import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Palette, Search, Code } from "lucide-react";
import projectWeb from "@/assets/project-web.jpg";
import projectSecurity from "@/assets/project-security.jpg";
import projectGraphics from "@/assets/project-graphics.jpg";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A complete e-commerce solution with advanced security features, responsive design, and SEO optimization. Built with modern technologies and optimized for performance.",
      image: projectWeb,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      features: ["Responsive Design", "Payment Integration", "Admin Dashboard", "SEO Optimized"],
      icon: <Code className="w-5 h-5" />,
      color: "primary"
    },
    {
      id: 2,
      title: "Network Security Assessment",
      category: "Cyber Security",
      description: "Comprehensive security audit and penetration testing for a financial institution. Identified vulnerabilities and implemented robust security measures.",
      image: projectSecurity,
      technologies: ["Nmap", "Metasploit", "Wireshark", "Custom Tools"],
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Reporting", "Risk Mitigation"],
      icon: <Shield className="w-5 h-5" />,
      color: "accent"
    },
    {
      id: 3,
      title: "Brand Identity Suite",
      category: "Graphic Design",
      description: "Complete brand identity design for a tech startup, including logo design, color palette, typography, and marketing materials.",
      image: projectGraphics,
      technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Canva"],
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets"],
      icon: <Palette className="w-5 h-5" />,
      color: "neon-purple"
    },
    {
      id: 4,
      title: "SEO Campaign Success",
      category: "SEO Optimization",
      description: "Increased organic traffic by 300% for a client through comprehensive SEO strategy, keyword optimization, and content marketing.",
      image: projectWeb,
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console"],
      features: ["Keyword Research", "On-page SEO", "Link Building", "Analytics Tracking"],
      icon: <Search className="w-5 h-5" />,
      color: "neon-green"
    }
  ];

  const categories = ["All", "Web Development", "Cyber Security", "Graphic Design", "SEO Optimization"];

  return (
    <section id="portfolio" className="py-20 bg-cyber">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="neon-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 neon-glow" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions across web design, cyber security, and digital marketing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 slide-up">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "cyber" : "outline"}
              className="hover:scale-105 transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="gradient-card overflow-hidden neon-border hover:scale-105 transition-all duration-500 slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="flex items-center gap-2">
                    {project.icon}
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 neon-text">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="cyber" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-up">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button variant="hero" size="xl">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};