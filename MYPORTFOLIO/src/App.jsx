import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import GithubProjects from "./components/GithubProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return(
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <GithubProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;