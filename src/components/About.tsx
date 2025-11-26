import React from 'react';
import { 
  BookOpen, 
  GamepadIcon, 
  Plane, 
  Music, 
  Dumbbell, 
  Camera,
  Code,
  Layout,
  Smartphone,
  Database,
  Palette,
  Zap
} from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, icon: <Layout size={20} /> },
    { name: 'JavaScript', level: 90, icon: <Code size={20} /> },
    { name: 'TypeScript', level: 85, icon: <Code size={20} /> },
    { name: 'React', level: 88, icon: <Code size={20} /> },
    { name: 'Vue.js', level: 75, icon: <Code size={20} /> },
    { name: 'Node.js', level: 80, icon: <Database size={20} /> },
    { name: 'UI/UX Design', level: 70, icon: <Palette size={20} /> },
    { name: 'Responsive Design', level: 92, icon: <Smartphone size={20} /> }
  ];

  const experiences = [
    {
      year: '2024 - Present',
      role: 'Senior Frontend Developer',
      company: 'TechInnovate Inc.',
      description: 'Leading frontend development for enterprise web applications using React and TypeScript.'
    },
    {
      year: '2023 - 2024',
      role: 'Frontend Developer',
      company: 'Digital Solutions LLC',
      description: 'Developed and maintained multiple client websites and web applications.'
    },
    {
      year: '2022 - 2023',
      role: 'Junior Web Developer',
      company: 'WebCraft Studios',
      description: 'Started my career building responsive websites and learning modern web technologies.'
    }
  ];

  const interests = [
    { name: 'Reading Tech Blogs', icon: <BookOpen size={24} /> },
    { name: 'Gaming', icon: <GamepadIcon size={24} /> },
    { name: 'Traveling', icon: <Plane size={24} /> },
    { name: 'Music Production', icon: <Music size={24} /> },
    { name: 'Fitness', icon: <Dumbbell size={24} /> },
    { name: 'Photography', icon: <Camera size={24} /> }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
          <p>Get to know the person behind the code</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="intro-section">
              <h3>Hello! I'm Bobby</h3>
              <p>
                I'm a passionate Frontend Developer with over 3 years of experience 
                creating beautiful, functional, and user-centered digital experiences. 
                I specialize in both frontend and backend development, turning complex 
                problems into simple, elegant solutions.
              </p>
              <p>
                My journey in web development started when I built my first two websites for 
                two different hotels while graduating FUOYE. Since then, I've been constantly 
                learning and adapting to new technologies and methodologies, (leaning AI alongside), 
                I am so thrilled and can't wait to see where this ever-evolving world of web 
                development takes us.
              </p>
            </div>

            <div className="stats-section">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>

            <div className="experience-section">
              <h4>Professional Journey</h4>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-year">{exp.year}</div>
                    <div className="timeline-content">
                      <h5>{exp.role}</h5>
                      <span className="company">{exp.company}</span>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-skills">
            <div className="skills-section">
              <h4>Technical Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-title">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="interests-section">
              <h4>Beyond Coding</h4>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-item">
                    <div className="interest-icon">
                      {interest.icon}
                    </div>
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cta-section">
              <p>Interested in working together?</p>
              <a href="#contact" className="btn btn-primary">Let's Connect</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;