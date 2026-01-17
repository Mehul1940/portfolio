'use client';

import { useEffect, useRef } from 'react';
import './globals.css';

export default function Portfolio() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute('href');

        if (href && href !== '#') {
          e.preventDefault();
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


    // Mouse tracking for doll parallax
    const handleMouseMove = (e: MouseEvent) => {
      const doll = document.querySelector('.space-doll') as HTMLElement;
      if (doll) {
        const x = (e.clientX / window.innerWidth - 0.5) * 50;
        const y = (e.clientY / window.innerHeight - 0.5) * 50;
        doll.style.transform = `translate(${x}px, ${y}px) perspective(1200px) rotateY(${
          x * 0.1
        }deg)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

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
          </ul>
        </div>
      </nav>

      {/* Hero Section - Doll Left, Content Right */}
      <section className="hero">
        {/* 3D Space Character on Left */}
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

        {/* Content on Right */}
        <div className="hero-content">
          <div className="hero-subtitle">Welcome to my world</div>

          <h1>
            <span>Full Stack</span>
            <span>Developer</span>
          </h1>
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
          </div>
        </div>
      </section>

      <div className="container">
        {/* Story Section */}
        <section id="story" className="story-section">
          <h2 className="section-title">My Developer Journey</h2>

          <div className="story-grid">
            <div className="story-card">
              <div className="story-number">01</div>
              <div className="story-date">2022 – 2025</div>
              <h3 className="story-title">Foundation</h3>
              <p className="story-description">
                Started with BCA from Gujarat University. Built foundations in computer
                science, programming paradigms, data structures, and system design
                principles.
              </p>
            </div>

            <div className="story-card">
              <div className="story-number">02</div>
              <div className="story-date">May 2025 – Present</div>
              <h3 className="story-title">Real-World Impact</h3>
              <p className="story-description">
                Joined SaltRiver Infosystem as Full Stack Developer. Working on
                mission-critical systems impacting railways, smart cities, and
                infrastructure.
              </p>
            </div>

            <div className="story-card">
              <div className="story-number">03</div>
              <div className="story-date">2025 – 2027</div>
              <h3 className="story-title">Continuous Growth</h3>
              <p className="story-description">
                Pursuing Master&apos;s in Computer Applications. Focused on mastering
                system architecture, cloud technologies, and emerging development
                paradigms.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-container">
            {/* Railway Project */}
            <div className="project">
              <div className="project-visual">
                <div className="project-icon">🚂</div>
              </div>
              <div className="project-content">
                <h3>Railway Management System</h3>
                <p>
                  Comprehensive backend system for managing railway operations and
                  drawing documentation with enterprise-grade security and multi-level
                  approval workflows.
                </p>

                <div className="challenge-box">
                  <strong>Challenge</strong>
                  <p>
                    Design system handling complex approval hierarchies (L1–L3) with
                    audit trails and compliance requirements.
                  </p>
                </div>

                <div className="challenge-box">
                  <strong>Solution</strong>
                  <p>
                    Built Flask + SQLAlchemy architecture with normalized data models,
                    PDF generation, versioning, and secure authentication.
                  </p>
                </div>

                <div className="tech-list">
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">SQLAlchemy</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Python</span>
                </div>
              </div>
            </div>

            {/* City Monitoring Project */}
            <div className="project">
              <div className="project-visual">
                <div className="project-icon">🏙️</div>
              </div>
              <div className="project-content">
                <h3>Smart City Monitoring</h3>
                <p>
                  Real-time infrastructure monitoring system that automatically detects
                  urban hazards, road damage, and maintenance issues using AI-powered
                  computer vision.
                </p>

                <div className="challenge-box">
                  <strong>Challenge</strong>
                  <p>
                    Create real-time detection system identifying multiple hazard types
                    simultaneously with sub-100ms latency.
                  </p>
                </div>

                <div className="challenge-box">
                  <strong>Solution</strong>
                  <p>
                    Integrated YOLO object detection with Next.js frontend and Django
                    REST API backend for seamless real-time monitoring.
                  </p>
                </div>

                <div className="tech-list">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Django REST</span>
                  <span className="tech-tag">YOLO</span>
                  <span className="tech-tag">Python</span>
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
                  Intelligent automation system streamlining repetitive business
                  processes, reducing manual effort and human error through intelligent
                  scripting.
                </p>

                <div className="challenge-box">
                  <strong>Challenge</strong>
                  <p>
                    Eliminate time-consuming manual processes affecting team productivity
                    and data accuracy.
                  </p>
                </div>

                <div className="challenge-box">
                  <strong>Solution</strong>
                  <p>
                    Developed Python-based automation handling email distribution, data
                    imports, and bulk file downloads with comprehensive logging.
                  </p>
                </div>

                <div className="tech-list">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Automation</span>
                  <span className="tech-tag">Data Processing</span>
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
                </ul>
              </div>

              <div className="skill-box">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div className="skill-box">
                <h3>Backend</h3>
                <ul>
                  <li>Django</li>
                  <li>Django REST</li>
                  <li>Flask</li>
                </ul>
              </div>

              <div className="skill-box">
                <h3>Databases</h3>
                <ul>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Data Modeling</li>
                </ul>
              </div>

              <div className="skill-box">
                <h3>Specializations</h3>
                <ul>
                  <li>System Design</li>
                  <li>Real-time Systems</li>
                  <li>API Architecture</li>
                </ul>
              </div>

              <div className="skill-box">
                <h3>Core Competencies</h3>
                <ul>
                  <li>Full Stack Dev</li>
                  <li>Problem Solving</li>
                  <li>Code Architecture</li>
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
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <p>
          &copy; 2026 Bokade Mehul. Crafted with precision, passion, and a love for
          elegant code.
        </p>
      </footer>
    </>
  );
}