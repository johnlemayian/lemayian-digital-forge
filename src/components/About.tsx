import { Card } from "@/components/ui/card";
import { Shield, Network, Code, Search, Briefcase } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack development with modern technologies"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cyber Security",
      description: "Protecting digital assets with advanced security measures"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking",
      description: "Building robust and scalable network infrastructures"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Maximizing online visibility and search rankings"
    }
  ];

  return (
    <section id="about" className="py-20 bg-cyber">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="neon-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 neon-glow" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <div className="slide-up">
            <div className="gradient-card p-8 rounded-xl neon-border">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold neon-text">My Journey</h3>
              </div>
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                I am <span className="text-primary font-semibold">JOHN LEMAYIAN</span>, a passionate graphic and web designer 
                with a degree in Management Information Systems (MIS). My journey in technology began with a 
                fascination for how digital systems can transform businesses and enhance user experiences.
              </p>
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                My skill set encompasses a deep understanding of <span className="text-accent">cyber security</span>, 
                strong <span className="text-accent">networking capabilities</span>, and expertise in 
                <span className="text-accent"> web development</span> and <span className="text-accent">SEO optimization</span>. 
                I leverage these skills to create innovative digital solutions that not only look stunning but also 
                perform exceptionally and maintain the highest security standards.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Every project I undertake is an opportunity to push the boundaries of what's possible, 
                combining aesthetic excellence with technical precision to deliver solutions that exceed client expectations.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-up" style={{ animationDelay: '0.3s' }}>
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="gradient-card p-6 neon-border hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-center mb-3 neon-text">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-center text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};