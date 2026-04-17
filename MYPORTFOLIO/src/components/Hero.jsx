import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

function Hero() {
  return (
    <motion.section
      id="home" 
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2}}
    >
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      > 
        <h1>Hello, <span>I'm Jeremiah</span></h1>
      </motion.div>
      <p>A Creative Developer</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.button>
    </motion.section>
  );
}
export default Hero;