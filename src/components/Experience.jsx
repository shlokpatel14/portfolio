import "./Experience.css";
import FadeIn from "./FadeIn";
export default function Experience() {
  return (
    <section id="experience">
      <FadeIn>
      <h2>Experience & Certifications</h2>

      <div className="experience-container">

        {/* Internship Card */}
        <div className="experience-card">
          <h3>Web Development Intern</h3>
          <h4>Stem Valley Solutions</h4>
          <p className="duration">Semester 5 – Diploma Internship</p>

          <p>
            Worked on developing a full-stack e-commerce platform
            <b> Fashion Flick</b>. Implemented authentication, admin dashboard,
            product management, and responsive UI using modern web technologies.
          </p>
        </div>
        <div className="experience-card">
          <h3>Web Development Intern</h3>
          <h4>Rife Software</h4>
          <p className="duration">Semester 3 – Diploma Internship</p>

          <p>
            Worked on developing a website on .Net Framework for a client. Implemented authentication, admin dashboard,And manage Users on Website.
          </p>
        </div>

        {/* Certificates */}
        <div className="certificate-section">
          <h3>Certificates</h3>

          <div className="certificate-grid">

              <a href="/certificates/rife.pdf" target="_blank">
                <div className="certificate-card">
                  <p>Rife Software Internship Certificate</p>
                </div>
              </a>

              <a href="/certificates/stem.pdf" target="_blank">
                <div className="certificate-card">
                  <p>STEM Valley Solutions Internship Certificate</p>
                </div>
              </a>

              <a href="/certificates/cisco.pdf" target="_blank">
                <div className="certificate-card">
                  <p>Introduction to Cyber Security - Cisco Academy Certificate</p>
                </div>
              </a>

            </div>
        </div>

      </div>
      </FadeIn>
    </section>
  );
}