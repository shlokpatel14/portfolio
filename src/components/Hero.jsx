import "./Hero.css";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1>
           <FadeIn> Hi, I'm <span>Patel Shlok</span>   👋</FadeIn>
          </h1>

          <h3>Aspiring Cybersecurity Engineer & Cloud Enthusiast</h3>

          <p>
            B.Tech IT student passionate about cybersecurity, cloud computing,
            and backend development. I build secure web applications and
            continuously improve my technical and problem-solving skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              <button className="primary">View Projects</button>
            </a>

            <a href="/resume.pdf" download>
                <button className="secondary">Download Resume</button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="socials">
            <a href ="https://github.com/shlokpatel14" target="_blank"><FaGithub /></a>
            <a href ="https://www.linkedin.com/in/shlok-patel-398635287/" target="_blank"><FaLinkedin /></a>
            <a href ="https://stackoverflow.com/users/32430653/shlok-patel" target="_blank"><FaStackOverflow /></a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="tech-card">
            <h3>💻 Tech Stack</h3>

            <div className="tech-list">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>Laravel</span>
              <span>AWS</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>C++</span>
              <span>JWT</span>
              <span>Vite</span>
            </div>
          </div>
        </div>

      </div>

    </motion.section>
  );
}