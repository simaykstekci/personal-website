import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p className="about-text">
      I am a Software Engineering student focused on building robust software solutions through a combination of backend development, automation, and modern web technologies.
        </p>

        <p className="about-text">
      I have experience with object-oriented programming (C, C#, Java) and have worked on API test automation projects to ensure the reliability and correctness of backend services. My interests include database systems, SQL, and automation-driven development, where I aim to create efficient, scalable, and maintainable solutions.
        </p>

        <p className="about-text">
       In addition to backend-focused work, I develop React-based web applications with an emphasis on clean design and usability. I am eager to gain hands-on industry experience through internships, where I can grow as a software engineer while contributing to real-world projects and learning from experienced professionals.
        </p>

        <div className="skills">
          <span>C</span>
          <span>C#</span>
          <span>Java</span>
          <span>SQL</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}
