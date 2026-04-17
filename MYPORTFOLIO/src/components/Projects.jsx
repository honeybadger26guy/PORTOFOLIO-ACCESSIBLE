import projects from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
  return(
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            className="card"
            key={projects.id}
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;