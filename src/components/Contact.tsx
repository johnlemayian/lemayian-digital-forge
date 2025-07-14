import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your message. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "princelemar3@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+254 7966778078",
      description: "Call me for urgent matters"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Nairobi, Kenya",
      description: "Available for remote work globally"
    }
  ];

  const services = [
    "Web Development & Design",
    "Cybersecurity Consulting",
    "Network Infrastructure",
    "SEO Optimization",
    "Brand Identity Design",
    "Digital Marketing Strategy"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="neon-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 neon-glow" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="slide-up">
            <Card className="gradient-card p-8 neon-border h-fit">
              <h3 className="text-2xl font-bold mb-6 neon-text">Let's Connect</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-primary font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-accent mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Services Available
                </h4>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Response Time</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent matters, please call directly.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="gradient-card p-8 neon-border">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold neon-text">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project discussion, consultation, etc."
                    className="bg-input border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, requirements, timeline, and budget..."
                    rows={6}
                    className="bg-input border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cyber" 
                  size="lg" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-accent">Note:</strong> All information shared will be kept confidential. 
                  I'm committed to protecting your privacy and will only use your details to respond to your inquiry.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};