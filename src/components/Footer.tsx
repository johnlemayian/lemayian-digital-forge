import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Code,
  Shield,
  Search,
  Palette
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" }
  ];

  const services = [
    { name: "Web Development", icon: <Code className="w-4 h-4" /> },
    { name: "Cyber Security", icon: <Shield className="w-4 h-4" /> },
    { name: "SEO Optimization", icon: <Search className="w-4 h-4" /> },
    { name: "Graphic Design", icon: <Palette className="w-4 h-4" /> }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="relative bg-background border-t border-primary/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold neon-text mb-4">JOHN LEMAYIAN</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Passionate graphic and web designer with expertise in cybersecurity, 
                networking, and digital innovation. Creating secure, beautiful, and 
                high-performing digital solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">princelemar3@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+254 7966778078</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-accent mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-accent mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                    <span className="text-muted-foreground">{service.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="text-lg font-semibold text-accent mb-6">Stay Connected</h4>
              <p className="text-muted-foreground mb-4">
                Subscribe for updates on latest projects and tech insights.
              </p>
              
              <div className="flex gap-2 mb-6">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <Button variant="cyber" size="sm">
                  Subscribe
                </Button>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-card border border-primary/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 John Lemayian. All rights reserved. | Designed with ❤️ and crafted with cutting-edge technology.
            </div>
            
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="neon-glow hover:scale-110 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border border-primary/10 rotate-45 -translate-x-16 translate-y-16" />
      <div className="absolute top-0 right-0 w-24 h-24 border border-accent/10 rotate-12 translate-x-12 -translate-y-12" />
    </footer>
  );
};