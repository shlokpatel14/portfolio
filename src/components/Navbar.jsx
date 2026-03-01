import "./Navbar.css";
import FadeIn from "./FadeIn";
export default function Navbar() {
  return (
    
    <nav className="navbar">
      <FadeIn>
      <img src="/Logo.png" alt="Patel Shlok Logo" className="logo-img" />
      </FadeIn>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}