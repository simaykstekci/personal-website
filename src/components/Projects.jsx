import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        
        <h2 className="fade-section">Projects</h2>

        <div className="project-grid">
          {/* CyberAware - YENİ PROJE */}
          <div className="project-card fade-section">
            <h3>CyberAware Platform</h3>
            <p>
              A comprehensive cyber security awareness web platform designed 
              to educate users about online threats through interactive content 
              and data-driven management.
            </p>
            <span>PHP · MySQL · HTML5 · CSS3</span>
            <a
              href="https://github.com/simaykstekci/cyber-aware"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* API Test Project */}
          <div className="project-card fade-section">
            <h3>API Test Automation Project</h3>
            <p>
              An API test automation project developed to validate RESTful
              services and ensure reliable backend functionality.
            </p>
            <span>Java · Rest Assured · Maven</span>
            <a
              href="https://github.com/simaykstekci/api-test-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* Web Scraper Dashboard */}
          <div className="project-card fade-section">
            <h3>Web Scraper Dashboard</h3>
            <p>
              A web scraping and dashboard application that collects, processes,
              and visualizes data in a user-friendly interface.
            </p>
            <span>Python · Web Scraping · Dashboard</span>
            <a
              href="https://github.com/simaykstekci/web-scraper-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* Travel Journal React */}
          <div className="project-card fade-section">
            <h3>Travel Journal Web App</h3>
            <p>
              A multi-page travel journal web application where users can record
              and manage their trips with a clean and modern UI.
            </p>
            <span>React · JavaScript · CSS</span>
            <a
              href="https://github.com/simaykstekci/travel-journal-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}