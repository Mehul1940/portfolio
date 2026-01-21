// page.tsx (updated)
'use client';

import { useEffect, useRef, useState } from 'react';
import './globals.css';

export default function Portfolio() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close menu on resize to desktop
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Create particles
    if (particlesRef.current) {
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = 12 + Math.random() * 12 + 's';
        particlesRef.current.appendChild(particle);
      }
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document
      .querySelectorAll(
        '.section-title, .story-card, .project, .skill-box, .contact-section h2, .contact-tagline, .contact-grid, .contact-cta'
      )
      .forEach((el) => {
        observer.observe(el);
      });

    // Smooth scroll and close menu on navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute('href');

        if (href && href !== '#') {
          e.preventDefault();
          
          // Close mobile menu
          setIsMenuOpen(false);
          
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      });
    });

    // Mouse tracking for doll parallax (only on larger screens)
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return; // Disable on mobile

      const doll = document.querySelector('.space-doll') as HTMLElement;
      if (doll) {
        const x = (e.clientX / window.innerWidth - 0.5) * 50;
        const y = (e.clientY / window.innerHeight - 0.5) * 50;
        doll.style.transform = `translate(${x}px, ${y}px) perspective(1200px) rotateY(${
          x * 0.1
        }deg)`;
      }
    };

    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, [isMobile]);

  // Toggle menu handler
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on link click
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Download CV handler
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Make sure CV.pdf is in your public folder
    link.download = 'Bokade_Mehul_Full_Stack_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Enhanced Anime Background */}
      <div className="anime-bg">
        <div className="grid-bg"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
        <div className="particles" ref={particlesRef}></div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="logo">Bokade</div>
          
          {/* Desktop Navigation */}
          <ul>
            <li>
              <a href="#story">Story</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button 
                onClick={handleDownloadCV}
                className="nav-cv-button"
                aria-label="Download CV"
              >
                Download CV
              </button>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`mobile-menu ${isMenuOpen ? 'show' : 'hidden'}`}>
            <li>
              <a href="#story" onClick={handleNavClick}>Story</a>
            </li>
            <li>
              <a href="#projects" onClick={handleNavClick}>Projects</a>
            </li>
            <li>
              <a href="#skills" onClick={handleNavClick}>Skills</a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavClick}>Contact</a>
            </li>
            <li>
              <button 
                onClick={() => {
                  handleDownloadCV();
                  handleNavClick();
                }}
                className="mobile-cv-button"
                aria-label="Download CV"
              >
                📄 Download CV
              </button>
            </li>
          </div>
        )}
      </nav>

      {/* Hero Section - Doll Left, Content Right */}
      <section className="hero">
        {/* 3D Space Character on Left - Hidden on Mobile */}
        {!isMobile && (
          <div className="hero-visual">
            <div className="doll-aura"></div>
            <div className="space-doll">
              {/* Head */}
              <div className="doll-head">
                <div className="doll-eye doll-eye-left"></div>
                <div className="doll-eye doll-eye-right"></div>
                <div className="doll-mouth"></div>
              </div>

              {/* Body */}
              <div className="doll-body">
                <div className="doll-chest-light"></div>
              </div>

              {/* Left Arm */}
              <div className="doll-arm doll-arm-left">
                <div className="doll-hand"></div>
              </div>

              {/* Right Arm */}
              <div className="doll-arm doll-arm-right">
                <div className="doll-hand"></div>
              </div>

              {/* Left Leg */}
              <div className="doll-leg doll-leg-left">
                <div className="doll-foot"></div>
              </div>

              {/* Right Leg */}
              <div className="doll-leg doll-leg-right">
                <div className="doll-foot"></div>
              </div>
            </div>
          </div>
        )}

        {/* Content on Right */}
        <div className="hero-content">
          <div className="hero-subtitle">Welcome to my world</div>

          <h1>
            <span>Bokade</span>
            <span>Mehul</span>
          </h1>
          <h2>
            <span>Full Stack</span>
            <span>Developer</span>
          </h2>
          <p>
            Crafting elegant solutions to complex problems. Specializing in backend
            architecture, real-time systems, and intelligent automation that creates
            meaningful impact across industries.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
            <button 
              onClick={handleDownloadCV}
              className="btn btn-tertiary"
              aria-label="Download CV"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </button>
          </div>
          <div className="hero-social">
            <a href="mailto:bokdemehul870@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://github.com/Mehul1940" target="_blank" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 
                0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.646
                0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844
                c.85.004 1.705.115 2.504.337
                1.909-1.296 2.747-1.026 2.747-1.026
                .546 1.376.202 2.393.1 2.646
                .64.7 1.028 1.595 1.028 2.688
                0 3.848-2.339 4.695-4.566 4.943
                .359.309.678.92.678 1.855
                0 1.338-.012 2.419-.012 2.747
                0 .268.18.58.688.482
                A10.019 10.019 0 0 0 22 12.017
                C22 6.484 17.523 2 12 2z"/>
              </svg>
            </a>

            <a href="https://linkedin.com/in/Mehul1940" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Story Section (Experience) */}
        <section id="story" className="story-section">
          <h2 className="section-title">My Journey</h2>

          <div className="story-grid">
            <div className="story-card">
              <div className="story-number">01</div>
              <div className="story-date">May 2025 – Present</div>
              <h3 className="story-title">Full Stack Developer</h3>
              <div className="story-subtitle">SaltRiver Infosystems Pvt Ltd</div>
              <p className="story-description">
                Currently working as a Full Stack Developer, building mission-critical systems
                for railways and smart cities. Developing enterprise-grade solutions with
                secure authentication, multi-level approval workflows, and real-time
                monitoring capabilities.
              </p>
              <div className="story-tech">
                <span>Flask</span>
                <span>SQLAlchemy</span>
                <span>Next.js</span>
                <span>Django REST</span>
                <span>Python</span>
              </div>
            </div>

            <div className="story-card">
              <div className="story-number">02</div>
              <div className="story-date">2022 – 2025</div>
              <h3 className="story-title">Academic Foundation</h3>
              <div className="story-subtitle">BCA Graduate</div>
              <p className="story-description">
                Completed Bachelor of Computer Applications with a focus on computer science
                fundamentals, programming paradigms, data structures, and system design
                principles. Built strong foundations in software development and problem-solving.
              </p>
              <div className="story-tech">
                <span>Core CS</span>
                <span>Data Structures</span>
                <span>System Design</span>
                <span>Programming</span>
              </div>
            </div>

            <div className="story-card">
              <div className="story-number">03</div>
              <div className="story-date">2025 – 2027</div>
              <h3 className="story-title">Continuous Growth</h3>
              <div className="story-subtitle">MCA Student</div>
              <p className="story-description">
                Pursuing Master's in Computer Applications to deepen expertise in system
                architecture, cloud technologies, and emerging development paradigms.
                Focusing on advanced concepts to build scalable and efficient systems.
              </p>
              <div className="story-tech">
                <span>System Architecture</span>
                <span>Cloud Technologies</span>
                <span>Advanced Development</span>
                <span>Scalable Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">My Projects</h2>

          <div className="projects-container">
            {/* Society Management System */}
            <div className="project">
              <div className="project-visual">
                <div className="project-icon">🏘️</div>
              </div>
              <div className="project-content">
                <h3>Society Management System</h3>
                <p>
                  A comprehensive full-stack platform for managing residential societies with features for
                  resident management, maintenance tracking, fee collection, and visitor management.
                  Includes role-based authentication for admins, residents, and staff.
                </p>

                <div className="challenge-box">
                  <strong>Challenge</strong>
                  <p>
                    Create a centralized system for society operations with secure access control,
                    financial tracking, and automated notifications for transparent operations.
                  </p>
                </div>

                <div className="challenge-box">
                  <strong>Solution</strong>
                  <p>
                    Developed a Django-based application with JavaScript frontend and MySQL database.
                    Implemented automated notifications, financial reports, and secure role-based
                    authentication for different user types.
                  </p>
                </div>

                <div className="tech-list">
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">Role-based Auth</span>
                  <span className="tech-tag">Automation</span>
                </div>
              </div>
            </div>

            {/* Restaurant Management System */}
            <div className="project">
              <div className="project-visual">
                <div className="project-icon">🍽️</div>
              </div>
              <div className="project-content">
                <h3>FlavorFiesta - Restaurant Management</h3>
                <p>
                  Full-stack restaurant platform with dynamic menu management, order processing,
                  and comprehensive admin controls. Streamlines restaurant operations from
                  order taking to inventory management.
                </p>

                <div className="challenge-box">
                  <strong>Challenge</strong>
                  <p>
                    Design an intuitive system for restaurant management that handles dynamic
                    menu updates, real-time order processing, and efficient inventory tracking.
                  </p>
                </div>

                <div className="challenge-box">
                  <strong>Solution</strong>
                  <p>
                    Built using Django backend with JavaScript frontend for seamless user experience.
                    Implemented real-time order updates, menu customization, and comprehensive
                    admin dashboard for restaurant management.
                  </p>
                </div>

                <div className="tech-list">
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Real-time</span>
                  <span className="tech-tag">Admin Controls</span>
                </div>
              </div>
            </div>

            {/* Ecommerce Site */}
            <div className="project">
              <div className="project-visual">
                <div className="project-icon">🛒</div>
              </div>
              <div className="project-content">
                <h3>Relevance - Ecommerce Platform</h3>
                <p>
                  Laravel-based ecommerce web application with user registration, authentication,
                  and core ecommerce functionality. Features include product catalog, shopping cart,
                  and user management system.
                </p>

                <div className="challenge-box">
                  <strong>Challenge</strong>
                  <p>
                    Develop a robust ecommerce platform with secure user authentication,
                    product management, and smooth shopping experience.
                  </p>
                </div>

                <div className="challenge-box">
                  <strong>Solution</strong>
                  <p>
                    Created a Laravel application with PHP, JavaScript, and MySQL database.
                    Implemented secure authentication, product catalog management, and
                    essential ecommerce pages including Home, About, Services, and Contact.
                  </p>
                </div>

                <div className="tech-list">
                  <span className="tech-tag">Laravel</span>
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">Ecommerce</span>
                </div>
              </div>
            </div>

            {/* Automation Project */}
            <div className="project">
              <div className="project-visual">
                <div className="project-icon">⚙️</div>
              </div>
              <div className="project-content">
                <h3>Business Automation Suite</h3>
                <p>
                  Python-based automation system for streamlining repetitive business processes.
                  Reduces manual effort and human error through intelligent scripting for
                  email automation, data imports, and file management.
                </p>

                <div className="challenge-box">
                  <strong>Challenge</strong>
                  <p>
                    Eliminate time-consuming manual processes affecting team productivity
                    and data accuracy in business operations.
                  </p>
                </div>

                <div className="challenge-box">
                  <strong>Solution</strong>
                  <p>
                    Developed Python automation scripts handling email distribution, data
                    imports, bulk file downloads, and comprehensive logging to improve
                    operational efficiency and reduce manual errors.
                  </p>
                </div>

                <div className="tech-list">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Automation</span>
                  <span className="tech-tag">Data Processing</span>
                  <span className="tech-tag">Scripting</span>
                  <span className="tech-tag">Efficiency Tools</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <h2 className="section-title">Technical Expertise</h2>

            <div className="skills-grid">
              <div className="skill-box">
                <h3>Languages</h3>
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>PHP</li>
                </ul>
              </div>

              <div className="skill-box">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>JavaScript</li>
                </ul>
              </div>

              <div className="skill-box">
                <h3>Backend</h3>
                <ul>
                  <li>Django</li>
                  <li>Flask</li>
                  <li>FastAPI</li>
                  <li>Laravel</li>
                </ul>
              </div>

              <div className="skill-box">
                <h3>Databases</h3>
                <ul>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>SQLAlchemy</li>
                </ul>
              </div>

              <div className="skill-box">
                <h3>Tools & APIs</h3>
                <ul>
                  <li>Git</li>
                  <li>REST API</li>
                  <li>YOLO</li>
                  <li>Automation</li>
                </ul>
              </div>

              <div className="skill-box">
                <h3>Specializations</h3>
                <ul>
                  <li>System Architecture</li>
                  <li>Real-time Systems</li>
                  <li>Full Stack Development</li>
                  <li>Process Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-header">
            <h2>Let&apos;s Connect</h2>
            <p className="contact-tagline">
              Ready to collaborate or discuss your next big idea? I&apos;m always excited
              to work on meaningful projects that make a difference.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Phone</h3>
              <a href="tel:+918000696914">+91 8000696914</a>
              <p className="contact-card-desc">Mon-Fri 9am-6pm IST</p>
            </div>

            <div className="contact-card contact-card-highlight">
              <div className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email</h3>
              <a href="mailto:bokdemehul870@gmail.com">bokdemehul870@gmail.com</a>
              <p className="contact-card-desc">Best way to reach me</p>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Location</h3>
              <span className="contact-location">Ahmedabad, India</span>
              <p className="contact-card-desc">Open to remote work</p>
            </div>
          </div>

          <div className="contact-cta">
            <a href="mailto:bokdemehul870@gmail.com" className="cta-button-new">
              <span>Start a Conversation</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <button 
              onClick={handleDownloadCV}
              className="cta-button-secondary"
              aria-label="Download CV"
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>
            &copy; 2026 Bokade Mehul. Crafted with precision, passion, and a love for
            elegant code.
          </p>
          <div className="footer-links">
            <a href="https://linkedin.com/in/Mehul1940" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>•</span>
            <a href="mailto:bokdemehul870@gmail.com">Email</a>
            <span>•</span>
            <button onClick={handleDownloadCV}>Download CV</button>
          </div>
        </div>
      </footer>
    </>
  );
}