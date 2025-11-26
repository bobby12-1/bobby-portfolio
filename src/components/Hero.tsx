import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Twitter, Code, Palette, Zap, Sparkles, WavesIcon, HeartIcon } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Side - Text Content */}
          <div className="hero-text">
            <div className="hero-badge">
              <HeartIcon size={16} />
              <span>Welcome to my Arena</span>
            </div>
            
            <h1>
              Hi, I'm <span className="highlight">Bobby</span>
            </h1>
            
            <h2>Web Dev/AI Enthusiast</h2>
            
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences. 
              Specializing in modern web technologies, I turn complex problems into 
              simple, elegant solutions.
            </p>

            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('#contact')}
              >
                <Download size={18} />
                Hire Me
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('#portfolio')}
              >
                View My Work
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side - Code Graphic */}
          <div className="hero-graphic">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <div className="control close"></div>
                  <div className="control minimize"></div>
                  <div className="control maximize"></div>
                </div>
                <div className="window-title">portfolio.js</div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="keyword">const</span>
                  <span className="variable"> developer</span>
                  <span className="operator"> =</span>
                  <span className="bracket"> {`{`}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="property">  name:</span>
                  <span className="string"> "Bobby"</span>
                  <span className="comma">,</span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="property">  role:</span>
                  <span className="string"> "Fullstack Developer"</span>
                  <span className="comma">,</span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="property">  skills:</span>
                  <span className="bracket"> [</span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="string">    "React"</span>
                  <span className="comma">,</span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="string">    "TypeScript"</span>
                  <span className="comma">,</span>
                </div>
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="string">    "Next.js"</span>
                  <span className="comma">,</span>
                </div>
                <div className="code-line">
                  <span className="line-number">8</span>
                  <span className="string">    "Tailwind CSS"</span>
                </div>
                <div className="code-line">
                  <span className="line-number">9</span>
                  <span className="bracket">  ]</span>
                </div>
                <div className="code-line">
                  <span className="line-number">10</span>
                  <span className="bracket">{'}'}</span>
                  <span className="semicolon">;</span>
                </div>
                <div className="code-line">
                  <span className="line-number">11</span>
                </div>
                <div className="code-line">
                  <span className="line-number">12</span>
                  <span className="comment">// Let's build something amazing</span>
                </div>
                <div className="code-line">
                  <span className="line-number">13</span>
                  <span className="function">developer</span>
                  <span className="dot">.</span>
                  <span className="method">build</span>
                  <span className="bracket">()</span>
                  <span className="semicolon">;</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="floating-tech">
              <div className="tech-icon">
                <Code size={24} />
              </div>
              <div className="tech-icon">
                <Palette size={24} />
              </div>
              <div className="tech-icon">
                <Zap size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;