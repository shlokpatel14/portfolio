import "./Skills.css";
export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="grid">
        <div className="card">
          <h3>Programming</h3>
          <p>JavaScript, C++, Python</p>
        </div>

        <div className="card">
          <h3>Web Development</h3>
          <p>React, Node.js, Express, MySQL</p>
        </div>

        <div className="card">
          <h3>Cloud & Tools</h3>
          <p>AWS Basics, Git, Linux</p>
        </div>

        <div className="card">
          <h3>Cybersecurity</h3>
          <p>Networking Basics, Web Security</p>
        </div>
      </div>
    </section>
  );
}