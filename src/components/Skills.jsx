import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JAVA', color: '#FFFFFF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JAVASCRIPT', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'REACT', color: '#FFFFFF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'REDUX', color: '#FFFFFF', icon: 'redux.png' },
  { name: 'PHP', color: '#FFFFFF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg' },
  { name: 'VS CODE', color: '#007ACC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'FIGMA', color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'TAILWIND', color: '#000000', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'POSTMAN', color: '#FFFFFF', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'SQL', color: '#00758F', icon: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
  { name: 'C#', color: '#68217A', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'PYTHON', color: '#FFFFFF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon-box" style={{ backgroundColor: skill.color }}>
              <img src={skill.icon} alt={skill.name} />
            </div>
            <span className="skill-label">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;