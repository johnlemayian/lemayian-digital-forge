import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      position: "CEO, TechFlow Solutions",
      content: "Working with John was a game-changer for my business. His insights into SEO helped elevate my website's visibility significantly! The attention to detail and technical expertise exceeded all our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CTO, SecureNet Corp",
      content: "John's cybersecurity expertise saved our company from potential threats. His comprehensive security audit identified vulnerabilities we never knew existed. Professional, thorough, and highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Thompson",
      position: "Marketing Director, Creative Agency",
      content: "The web design and branding work John delivered was absolutely stunning. He understood our vision perfectly and brought it to life with incredible creativity and technical skill. Our conversion rates improved by 200%!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Chen",
      position: "Founder, StartupLab",
      content: "John's full-stack development skills are exceptional. He delivered our e-commerce platform ahead of schedule with features we didn't even know we needed. The ongoing support has been fantastic too.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Operations Manager, Digital Dynamics",
      content: "The network infrastructure John designed for us has been running flawlessly for over a year. His expertise in both networking and security gave us the peace of mind we needed to scale our operations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Robert Johnson",
      position: "Business Owner, Local Enterprise",
      content: "John transformed our outdated website into a modern, fast, and SEO-optimized platform. Our online presence has never been stronger, and we're seeing results every day. Truly a digital transformation expert!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="neon-text">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 neon-glow" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what my clients say about their experience working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="gradient-card p-6 neon-border hover:scale-105 transition-all duration-300 slide-up group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 neon-border"
                />
                <div>
                  <h4 className="font-semibold neon-text">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center slide-up">
            <div className="text-4xl font-bold neon-text mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold neon-text mb-2">100+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold neon-text mb-2">5.0</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold neon-text mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};