import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="title-wrapper">
            <h1>Hi, I’m </h1>
            <div className="name-container">
              <span className="simay-text">Simay</span>
              <svg className="draw-oval" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,269.9,12.3,281.2-35.3c7.2-30.1-120.3-85.4-332.2-74.8C103.4,13.1,4.2,60,11.3,105.5c3.3,21,39.1,51.5,125.7,31.7" />
              </svg>
            </div>
            <span className="wave-emoji">👋</span>
          </div>

          <div className="hero-subtitle">
            <h2>
              Software Engineering student and <br />
              <strong>Software Developer.</strong>
            </h2>
          </div>

          <p className="hero-description">
            I build reliable and user-friendly applications with a strong
            interest in software development, databases, and automation systems.
          </p>

          <div className="hero-links">
            <a href="https://www.linkedin.com/in/simay-köstekci-148b5534b/" target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
            <a href="https://github.com/simaykstekci" target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub</a>
          </div>
        </div>

        <div className="hero-image-section">
          <div className="divider-line"></div>
          <div className="image-circle">
            <img src="/IMG_6562.jpg" alt="Simay" />
          </div>
        </div>
      </div>
    </section>
  );
}