import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>

        <p>
          I’m currently looking for internship opportunities where I can learn,
          grow, and contribute to real-world software projects.
        </p>

        <div className="contact-links">
          <a href="mailto:simaykostekcii@gmail.com">
            simaykostekcii@gmail.com
          </a>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/simay-köstekci-148b5534b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/simaykstekci"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <footer>
          © {new Date().getFullYear()} Simay Köstekci
        </footer>
      </div>
    </section>
  );
}
