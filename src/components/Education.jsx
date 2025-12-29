import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-wrapper">
      <h2 className="education-title">Education</h2>
      <div className="education-content">
        <div className="education-item">
          <div className="edu-header">
            <h3>Bachelor of Software Engineering (English)</h3>
            <span className="edu-date">October 2023 – June 2027</span>
          </div>
          <p className="edu-university">
            Istanbul Sabahattin Zaim University
          </p>
          <p className="edu-faculty">
            Faculty of Engineering & Natural Sciences
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Education;