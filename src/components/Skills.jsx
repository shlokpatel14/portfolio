import "./Skills.css";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills">
      <FadeIn>
      <h2>Skills</h2>

      <motion.div
  className="grid"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
        <motion.div
  className="card"
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }}
>
          <h3>Programming</h3>
          <p>JavaScript, C++, Python</p>
        </motion.div>

        <motion.div
  className="card"
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }}
>
          <h3>Web Development</h3>
          <p>React, Node.js, Express, MySQL</p>
        </motion.div>

        <motion.div
  className="card"
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }}
>
          <h3>Cloud & Tools</h3>
          <p>AWS Basics, Git, Linux</p>
        </motion.div>

        <motion.div
  className="card"
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }}
>
          <h3>Cybersecurity</h3>
          <p>Networking Basics, Web Security</p>
        </motion.div>
      </motion.div>
      </FadeIn>
    </section>
  );
}