import { motion } from "framer-motion";

{ motion}

function About() {
  return(
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        {/* Bio */}
        <motion.div
          className="about-text"
          initial={{ opacity: 1, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p>
            I'm Jeremiah, a passionate frontend developer who loves building clean, modern, and user-friendly web applications. I focus on perfomance, responsiveness, and great user experience.
          </p>
        </motion.div>

        {/* Skill */}
        <motion.div
          className="skills"
          initial={{ opcity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3>Skills</h3>
          <div className="skill">
            <p>HTML</p>
            <div className="bar"><span style={{ width: "90%" }}></span></div>
          </div>
          <div className="skill">
            <p>CSS</p>
            <div className="bar"><span style={{ width: "80%" }}></span></div>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <div className="bar"><span style={{ width: "75%" }}></span></div>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="bar"><span style={{ width: "70%" }}></span></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;