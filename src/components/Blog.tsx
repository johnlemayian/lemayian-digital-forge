import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Shield, Code, Search, Zap } from "lucide-react";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cybersecurity: AI-Powered Threat Detection",
      excerpt: "Exploring how artificial intelligence is revolutionizing cybersecurity with advanced threat detection capabilities and automated response systems.",
      category: "Cybersecurity",
      date: "2024-01-15",
      readTime: "8 min read",
      icon: <Shield className="w-5 h-5" />,
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      id: 2,
      title: "Modern Web Development: Building for Performance and Security",
      excerpt: "Best practices for creating fast, secure, and scalable web applications using the latest technologies and frameworks.",
      category: "Web Development",
      date: "2024-01-10",
      readTime: "12 min read",
      icon: <Code className="w-5 h-5" />,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      title: "SEO in 2024: Advanced Strategies for Maximum Visibility",
      excerpt: "Cutting-edge SEO techniques and strategies to dominate search rankings and drive organic traffic in today's competitive landscape.",
      category: "SEO",
      date: "2024-01-05",
      readTime: "10 min read",
      icon: <Search className="w-5 h-5" />,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      title: "Network Architecture: Designing for the Digital Age",
      excerpt: "Building robust and scalable network infrastructures that can handle modern digital demands while maintaining security and performance.",
      category: "Networking",
      date: "2023-12-28",
      readTime: "15 min read",
      icon: <Zap className="w-5 h-5" />,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 5,
      title: "UI/UX Trends: Creating Intuitive Digital Experiences",
      excerpt: "Latest trends in user interface and experience design that create engaging and intuitive digital products for modern users.",
      category: "Design",
      date: "2023-12-20",
      readTime: "7 min read",
      icon: <Code className="w-5 h-5" />,
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: 6,
      title: "Zero Trust Security: The New Paradigm",
      excerpt: "Understanding and implementing zero trust security architecture to protect against modern cyber threats and vulnerabilities.",
      category: "Cybersecurity",
      date: "2023-12-15",
      readTime: "11 min read",
      icon: <Shield className="w-5 h-5" />,
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  const categories = ["All", "Cybersecurity", "Web Development", "SEO", "Networking", "Design"];

  return (
    <section id="blog" className="py-20 bg-cyber">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Blog & <span className="neon-text">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 neon-glow" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology, design, and digital security
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 slide-up">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "cyber" : "outline"}
              size="sm"
              className="hover:scale-105 transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="gradient-card overflow-hidden neon-border hover:scale-105 transition-all duration-300 slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Header */}
              <div className={`relative p-6 bg-gradient-to-br ${post.gradient}`}>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="flex items-center gap-2">
                    {post.icon}
                    {post.category}
                  </Badge>
                  <div className="text-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 neon-text group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="mt-6">
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 text-center slide-up">
          <Card className="gradient-card p-8 neon-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 neon-text">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get the latest insights on technology, cybersecurity, and digital innovation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cyber">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};