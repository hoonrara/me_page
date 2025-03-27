import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <section id="home" className="h-screen bg-yellow-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">👋 Welcome to My Portfolio</h1>
      </section>
      <section id="about" className="h-screen bg-green-100 flex items-center justify-center">
        <About />
      </section>
      <section id="skills" className="h-screen bg-blue-100 flex items-center justify-center">
        <Skills />
      </section>
      <section id="projects" className="h-screen bg-orange-100 flex items-center justify-center">
        <Projects />
      </section>
      <section id="contact" className="h-screen bg-pink-100 flex items-center justify-center">
        <Contact />
      </section>
    </div>
  );
}

export default App;
