import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <div className="about-section">
      <h2>Summary</h2>
      <p>I'm Sanwal Khan, a computer science professional with a bachelor's degree. I specialize in React development and database systems, including React.js, Redux, SQL, and various database technologies. I have experience in creating responsive interfaces, optimizing web performance, and collaborating with cross-functional teams. I'm passionate about staying up-to-date with the latest technologies and seeking growth opportunities.</p>

      <h2>Experience</h2>
      <ul>
        <li>
          <strong>ABC Company</strong>, Software Engineer<br />
          From 2018 to 2021<br />
          Roles and responsibilities:
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt</li>
          </ul>
        </li>
        <li>
          <strong>XYZ Company</strong>, Frontend Developer<br />
          From 2016 to 2018<br />
          Roles and responsibilities:
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt</li>
          </ul>
        </li>
        <li>
          <strong>PQR Company</strong>, Junior Developer<br />
          From 2015 to 2016<br />
          Roles and responsibilities:
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt</li>
          </ul>
        </li>
        <li>
          <strong>LMN Company</strong>, Intern<br />
          From 2014 to 2015<br />
          Roles and responsibilities:
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt</li>
          </ul>
        </li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li>Bachelor's degree in Computer Science, University of XYZ, 2014-2018</li>
      </ul>
    </div>
  );
}
