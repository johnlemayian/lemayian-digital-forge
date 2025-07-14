import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Palette, 
  Code, 
  Shield, 
  Network, 
  Search, 
  Database,
  Monitor,
  Smartphone,
  Globe,
  Zap
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Design & Creativity",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Graphic Design", level: 95 },
        { name: "UI/UX Design", level: 90 },
        { name: "Brand Identity", level: 85 },
        { name: "Digital Illustration", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Frontend Development", level: 92 },
        { name: "Backend Development", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "JavaScript/TypeScript", level: 88 }
      ]
    },
    {
      title: "Cyber Security",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Network Security", level: 90 },
        { name: "Penetration Testing", level: 82 },
        { name: "Risk Assessment", level: 88 },
        { name: "Security Auditing", level: 85 }
      ]
    },
    {
      title: "Digital Marketing",
      icon: <Search className="w-6 h-6" />,
      skills: [
        { name: "SEO Optimization", level: 93 },
        { name: "Analytics & Reporting", level: 87 },
        { name: "Content Strategy", level: 85 },
        { name: "Social Media Marketing", level: 80 }
      ]
    }
  ];

  const achievements = [
    { icon: <Monitor className="w-8 h-8" />, title: "50+", subtitle: "Websites Designed" },
    { icon: <Shield className="w-8 h-8" />, title: "30+", subtitle: "Security Audits" },
    { icon: <Network className="w-8 h-8" />, title: "25+", subtitle: "Networks Secured" },
    { icon: <Search className="w-8 h-8" />, title: "40+", subtitle: "SEO Campaigns" },
    { icon: <Smartphone className="w-8 h-8" />, title: "35+", subtitle: "Mobile Apps" },
    { icon: <Globe className="w-8 h-8" />, title: "100%", subtitle: "Client Satisfaction" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="neon-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 neon-glow" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set honed through years of experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="gradient-card p-8 neon-border hover:scale-105 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold neon-text">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="text-center mb-8 slide-up">
          <h3 className="text-3xl font-bold mb-4">
            Achievements & <span className="text-accent">Milestones</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="gradient-card p-6 text-center neon-border hover:scale-105 transition-all duration-300 slide-up pulse-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-3 flex justify-center">
                {achievement.icon}
              </div>
              <div className="text-2xl font-bold neon-text mb-1">
                {achievement.title}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.subtitle}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};