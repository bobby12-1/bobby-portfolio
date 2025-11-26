import React, { useState, useEffect } from 'react';
import { 
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  MessageCircle
} from 'lucide-react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Portfolio', href: '#portfolio', icon: <Briefcase size={20} /> },
    { name: 'Blog', href: '#blog', icon: <BookOpen size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <span className="logo-text">Bobby.</span>
          <span className="logo-subtitle">Your Web Dev Gee</span>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <button 
          className="lets-talk-btn desktop-only"
          onClick={() => scrollToSection('#contact')}
        >
          <MessageCircle size={16} />
          Let's Talk
        </button>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
            </div>
            
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mobile-cta">
              <button 
                className="lets-talk-btn"
                onClick={() => scrollToSection('#contact')}
              >
                <MessageCircle size={18} />
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;