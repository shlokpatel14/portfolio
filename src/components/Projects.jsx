export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>Faculty Review System</h3>
          <p>Full stack system using React, Laravel and MySQL.</p>
          <a href="https://github.com/shlokpatel14/faculty-review-system/tree/master" target="_blank">
            <button>GitHub</button>
          </a>
        </div>

        <div className="card">
          <h3>Fashion Flick</h3>
          <p>A fashion e-commerce website built with React and Node.js.</p>
          <a href="https://github.com/shlokpatel14/Fashion-Flick" target="_blank">
            <button>GitHub</button>
          </a>
      </div>
      </div>
    </section>
  );
}