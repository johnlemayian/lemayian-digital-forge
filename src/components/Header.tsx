import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold neon-text">JOHN LEMAYIAN</h1>
            <p className="text-sm text-muted-foreground">Degree in Management Information Systems (MIS)</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors neon-text"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors neon-text"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors neon-text"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors neon-text"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-foreground hover:text-primary transition-colors neon-text"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors neon-text"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors neon-text"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-foreground hover:text-primary transition-colors neon-text"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-foreground hover:text-primary transition-colors neon-text"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-colors neon-text"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-left text-foreground hover:text-primary transition-colors neon-text"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors neon-text"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};