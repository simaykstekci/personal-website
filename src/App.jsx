import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Yetenekler from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      
      <section id="home" className="step">
        <Hero />
      </section>

      <section id="about" className="step">
        <About />
      </section>
      <section id="education" className="step">
  <Education />
</section>
<section id="skills" className="step">
  <Yetenekler />
</section>
      <section id="projects" className="step">
        <Projects />
      </section>

      <section id="contact" className="step">
        <Contact />
      </section>
    </div>
  );
}

export default App;