import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Simay Köstekci</div>

      <ul className="nav-links">
        <li>
          <a href="#home" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={active === "about" ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
