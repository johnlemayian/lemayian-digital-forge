import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cyber cyber-grid overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-primary/30 rotate-45 float-animation" />
      <div className="absolute top-40 right-32 w-16 h-16 border border-accent/40 rotate-12 float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-40 w-12 h-12 border border-neon-cyan/50 rotate-45 float-animation" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="neon-text">JOHN</span>{" "}
              <span className="text-accent">LEMAYIAN</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Graphic & Web Designer
            </p>
            <p className="text-lg text-accent mb-8">
              Degree in Management Information Systems (MIS)
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl">
              Passionate about creating innovative digital solutions that blend cutting-edge design 
              with robust security and optimized performance. Specializing in cyber security, 
              networking, web development, and SEO optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
              </Button>
              <Button 
                variant="neon" 
                size="xl"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full neon-border overflow-hidden pulse-glow">
                 <img 
                   src="/lovable-uploads/4745afe3-63c1-470b-b77a-c09f910806cd.png"
                   alt="John Lemayian" 
                   className="w-full h-full object-cover"
                 />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute -inset-8 border border-accent/15 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};