
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Mini Golf Arena & Cafe",
    category: "Entertainment & Recreation",
    description:
      "Customized furniture, seating and interior elements for a modern entertainment and cafe space.",
    image: "/images/golf-01.jpeg",
    link: "/projects/mini-golf-arena-cafe",
    available: true
  },
  {
  title: "Bungalows – 6, Yogeshwar Society",
  category: "Residential",
  description:
    "Customized furniture and interior solutions including TV units, beds, wardrobes, kitchen and more.",
  image: "/images/bungalow-01.jpeg",
  link: "/projects/yogeshwar-bungalows",
  available: true
},
 
];

function Projects() {
  return (
    <section className="page-section">
      <p className="eyebrow">AHF FURNITURE PORTFOLIO</p>
      <h1>Our Projects</h1>

      <p className="description">
        A showcase of our work, craftsmanship and commitment to excellence.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
            />

            <div className="project-info">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.available ? (
                <Link
                  className="text-link project-card-link"
                  to={project.link}
                >
                  Explore Project →
                </Link>
              ) : (
                <span className="project-coming-soon">
                  Project details coming soon
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
