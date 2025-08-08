'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  Menu, 
  X, 
  Code, 
  Database, 
  Server, 
  Palette, 
  Users, 
  Calendar, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Download, 
  ChevronRight, 
  Star
} from 'lucide-react';

// Type definitions
interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  [key: string]: Skill[];
}

interface ProjectStats {
  users?: string;
  sales?: string;
  rating?: number;
  teams?: string;
  tasks?: string;
  sites?: string;
  templates?: string;
  messages?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  image: string;
  featured: boolean;
  stats: ProjectStats;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface Stat {
  label: string;
  value: string;
  icon: any;
}

interface AnimatedCounterProps {
  end: string;
  duration?: number;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [logoError, setLogoError] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'Mehul.pdf'; // Path to your CV file
    link.download = 'Mehul.pdf'; // Default filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const skills: SkillCategory = {
    "Frontend": [
      { name: "HTML5", level: 95, color: "bg-orange-500" },
      { name: "CSS3", level: 90, color: "bg-blue-500" },
      { name: "JavaScript", level: 88, color: "bg-yellow-500" },
      { name: "React", level: 92, color: "bg-cyan-500" },
      { name: "Next.js", level: 90, color: "bg-gray-800" },
      { name: "TypeScript", level: 85, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 90, color: "bg-teal-500" }
    ],
    "Backend": [
      { name: "Python", level: 90, color: "bg-blue-600" },
      { name: "Django", level: 88, color: "bg-green-600" },
      { name: "Django REST", level: 85, color: "bg-green-500" },
      { name: "FastAPI", level: 82, color: "bg-emerald-500" },
      { name: "PHP", level: 75, color: "bg-indigo-500" },
      { name: ".NET", level: 80, color: "bg-purple-600" },
      { name: "C#", level: 78, color: "bg-purple-700" }
    ],
    "Database": [
      { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
      { name: "MySQL", level: 88, color: "bg-orange-600" },
      { name: "MongoDB", level: 80, color: "bg-green-500" }
    ],
    "Tools": [
      { name: "Git", level: 90, color: "bg-red-500" },
      { name: "Docker", level: 75, color: "bg-blue-400" },
      { name: "AWS", level: 70, color: "bg-orange-400" }
    ]
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with Next.js and Django REST API. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, admin dashboard, and real-time inventory management.",
      technologies: ["Next.js", "TypeScript", "Django", "PostgreSQL", "Tailwind CSS", "Stripe", "Redis"],
      liveDemo: "https://your-ecommerce-demo.com",
      github: "https://github.com/mehulbokade/ecommerce-platform",
      image: "bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500",
      featured: true,
      stats: { users: "10K+", sales: "$500K+", rating: 4.8 }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Modern task management application using Next.js and FastAPI. Features real-time updates, team collaboration, project tracking, time logging, file attachments, and comprehensive analytics dashboard.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "Tailwind CSS", "Socket.io"],
      liveDemo: "https://your-taskapp-demo.com",
      github: "https://github.com/mehulbokade/task-management",
      image: "bg-gradient-to-br from-green-500 via-teal-600 to-blue-500",
      featured: true,
      stats: { teams: "500+", tasks: "50K+", rating: 4.9 }
    },
    {
      id: 3,
      title: "Portfolio CMS",
      description: "Content Management System for portfolios built with Next.js and .NET Core. Includes admin dashboard, drag-drop content editor, SEO optimization, responsive design templates, and analytics integration.",
      technologies: ["Next.js", "TypeScript", "C#", ".NET", "MySQL", "Tailwind CSS"],
      liveDemo: "https://your-cms-demo.com",
      github: "https://github.com/mehulbokade/portfolio-cms",
      image: "bg-gradient-to-br from-orange-500 via-red-600 to-pink-500",
      featured: false,
      stats: { sites: "200+", templates: "50+", rating: 4.7 }
    },
    {
      id: 4,
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration using OpenAI API. Features include smart responses, sentiment analysis, file sharing, group chats, and custom AI personas built with Next.js.",
      technologies: ["Next.js", "TypeScript", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
      liveDemo: "https://your-chat-demo.com",
      github: "https://github.com/mehulbokade/ai-chat",
      image: "bg-gradient-to-br from-purple-500 via-pink-600 to-red-500",
      featured: false,
      stats: { messages: "1M+", users: "25K+", rating: 4.6 }
    }
  ];

  const experience: Experience[] = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      duration: "2023 - Present",
      description: "Led development of enterprise web applications using Next.js and TypeScript, mentored junior developers, and implemented CI/CD pipelines for scalable deployment.",
      technologies: ["Next.js", "TypeScript", "Django", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      duration: "2021 - 2023",
      description: "Built scalable web applications from scratch using modern frameworks, collaborated with cross-functional teams, and optimized database performance and API endpoints.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"]
    },
    {
      title: "Frontend Developer",
      company: "WebAgency",
      duration: "2020 - 2021",
      description: "Developed responsive websites and web applications using React and Next.js, focusing on performance optimization and exceptional user experience design.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      content: "Mehul consistently delivers high-quality code and innovative solutions. His expertise in Next.js and TypeScript, combined with his collaborative approach, makes him an invaluable team member.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CTO at StartupXYZ",
      content: "Working with Mehul was fantastic. He transformed our ideas into a robust, scalable Next.js platform that exceeded our expectations. His TypeScript skills are exceptional!",
      rating: 5
    }
  ];

  const stats: Stat[] = [
    { label: "Projects Completed", value: "30+", icon: Code },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Experience", value: "3 Month", icon: Calendar },
    { label: "Countries Served", value: "1+", icon: MapPin }
  ];

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState<number>(0);
    
    useEffect(() => {
      let startTime: number;
      const animate = (currentTime: number): void => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * parseInt(end)));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration]);
    
    return <>{count}</>;
  };

  const getCategoryIcon = (category: string): LucideIcon => {
    switch (category) {
      case 'Frontend': return Palette;
      case 'Backend': return Server;
      case 'Database': return Database;
      case 'Tools': return Code;
      default: return Code;
    }
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'Frontend': return 'text-blue-400';
      case 'Backend': return 'text-green-400';
      case 'Database': return 'text-orange-400';
      case 'Tools': return 'text-purple-400';
      default: return 'text-blue-400';
    }
  };

  // Enhanced Logo Component
  const LogoCircle = () => {
    return (
      <div className="relative mb-8">
        {/* Animated Ring */}
        <div className="absolute inset-0 w-48 h-48 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin" style={{ animationDuration: '10s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Outer glow ring */}
        <div className="absolute inset-0 w-44 h-44 mx-auto top-2">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl animate-pulse"></div>
        </div>
        
        {/* Main logo container */}
        <div className="relative w-40 h-40 mx-auto group cursor-pointer">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25"></div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Inner glow */}
          <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
          
          {/* Logo content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center rounded-full overflow-hidden">
            {!logoError ? (
              <img 
                src="/logo.png" // Replace with your logo path
                alt="Mehul Bokade Logo"
                className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-110"
                onError={() => setLogoError(true)}
              />
            ) : (
              // Fallback to stylized initials if logo fails to load
              <div className="text-4xl font-bold text-white transition-transform duration-500 group-hover:scale-110">
                <span className="bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">
                  MB
                </span>
              </div>
            )}
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '500ms' }}></div>
          <div className="absolute top-1/2 -right-3 w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1000ms' }}></div>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Mehul Bokade - Full Stack Developer | Next.js & TypeScript Expert</title>
        <meta name="description" content="Full Stack Developer specializing in Next.js, TypeScript, React, and modern web technologies. Building innovative web solutions with exceptional user experiences." />
        <meta name="keywords" content="Next.js, TypeScript, React, Full Stack Developer, Web Development, JavaScript, Python, Django" />
        <meta name="author" content="Mehul Bokade" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mehulbokade.dev/" />
        <meta property="og:title" content="Mehul Bokade - Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies." />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mehulbokade.dev/" />
        <meta property="twitter:title" content="Mehul Bokade - Full Stack Developer" />
        <meta property="twitter:description" content="Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies." />
        <meta property="twitter:image" content="/og-image.jpg" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mehul Bokade
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="hover:text-blue-400 transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative z-50"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
                <div className="flex flex-col space-y-4 p-4">
                  {['Home', 'About', 'Skills', 'Projects',  'Contact'].map((item) => (
                    <button 
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())} 
                      className="text-left hover:text-blue-400 transition-colors py-2"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-20 min-h-screen flex items-center relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Enhanced Logo Circle */}
              <LogoCircle />
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Mehul Bokade
                </span>
              </h1>
              <div className="text-2xl md:text-3xl text-gray-300 mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                  Full Stack Developer
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Crafting innovative web solutions with Next.js, TypeScript, and modern technologies. 
                Passionate about creating exceptional user experiences and scalable applications.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-10">
                <a 
                  href="https://github.com/mehulbokade" 
                  className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/mehulbokade" 
                  className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com/mehulbokade" 
                  className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={24} />
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
                >
                  View My Work
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleDownloadCV}
                  className="px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
                >
                  <Download size={20} className="mr-2" />
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="about" className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      <AnimatedCounter end={stat.value.replace(/[^0-9]/g, '')} />
                      {stat.value.replace(/[0-9]/g, '')}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-800/30 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, categorySkills]) => {
                const IconComponent = getCategoryIcon(category);
                const iconColor = getCategoryColor(category);
                
                return (
                  <div key={category} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50">
                    <div className="flex items-center mb-6">
                      <IconComponent className={`${iconColor} mr-3`} size={24} />
                      <h3 className="text-xl font-semibold">{category}</h3>
                    </div>
                    <div className="space-y-4">
                      {categorySkills.map((skill, index) => (
                        <div key={index} className="group">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 text-sm">{skill.name}</span>
                            <span className="text-gray-400 text-xs">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {projects.filter(p => p.featured).map((project) => (
                <div key={project.id} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl border border-gray-700/50">
                  <div className={`h-64 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <Code size={64} className="text-white opacity-80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Project Stats */}
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="flex items-center">
                          <Star size={14} className="text-yellow-500 mr-1" />
                          <span className="capitalize mr-1">{key}:</span>
                          <span className="text-white font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-blue-300 hover:bg-gray-600/50 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.liveDemo}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold flex-1 justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                      <a 
                        href={project.github}
                        className="flex items-center px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition-all duration-300 font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project) => (
                <div key={project.id} className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-700/30">
                  <div className={`h-40 ${project.image} flex items-center justify-center`}>
                    <Code size={40} className="text-white opacity-80" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-3 text-sm line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700 rounded text-xs text-blue-300">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.liveDemo}
                        className="flex items-center px-3 py-2 bg-blue-600 rounded text-sm hover:bg-blue-700 transition-colors flex-1 justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </a>
                      <a 
                        href={project.github}
                        className="flex items-center px-3 py-2 border border-gray-600 rounded text-sm hover:bg-gray-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {/* <section id="experience" className="py-20 bg-gray-800/30 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />
              
              {experience.map((exp, index) => (
                <div key={index} className="relative mb-12 md:mb-16">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:w-1/2">
                      <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                          <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                          <div className="text-blue-400 font-semibold mb-2">{exp.company}</div>
                          <div className="text-gray-400 text-sm mb-4">{exp.duration}</div>
                          <p className="text-gray-300 mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-gray-700 rounded text-xs text-blue-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        {/* <section className="py-20 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                What People Say
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800/30 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a 
                href="tel:8000696914"
                className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Phone size={20} className="mr-3 group-hover:animate-pulse" />
                8000696914
              </a>
              <a 
                href="mailto:bokdemehul870@gmail.com?subject=Let's%20Work%20Together"
                className="flex items-center px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300"
              >
                <Mail size={20} className="mr-3" />
                Send Email
              </a>
            </div>

            {/* Contact Form */}
            <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-6">Quick Message</h3>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                
                const subject = `Message from ${name}`;
                const body = `${message}%0D%0A%0D%0AFrom: ${name} <${email}>`;
                
                window.location.href = `mailto:bokdemehul870@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
              className="space-y-4"
            >
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-400"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-400"
                required
              />
              <textarea 
                rows={4}
                name="message"
                placeholder="Your Message" 
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none text-white placeholder-gray-400"
                required
              />
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800/50 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Mehul Bokade. Built with Next.js, TypeScript & Tailwind CSS
              </p>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/mehulbokade" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/mehulbokade" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/mehulbokade" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;