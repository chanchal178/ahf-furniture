
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
  {
    title: "Hotel & Hospitality Projects",
    category: "Hospitality",
    description:
      "Furniture solutions for hotels, cafes and hospitality spaces.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    available: false
  },
  {
    title: "Corporate Office Projects",
    category: "Commercial",
    description:
      "Functional furniture and workspace solutions for professional environments.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    available: false
  },
  {
    title: "Residential Projects",
    category: "Residential",
    description:
      "Thoughtfully designed furniture solutions for modern homes.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
    available: false
  },
  {
    title: "Interior Furniture Projects",
    category: "Interior",
    description:
      "Customized furniture and interior solutions for different spaces.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
    available: false
  }
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
