
const projects = [
  {
    title: "Hotel & Hospitality Projects",
    category: "Hospitality",
    location: "Add Project Location",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900"
  },

  {
    title: "Corporate Office Projects",
    category: "Commercial",
    location: "Add Project Location",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900"
  },

  {
    title: "Residential Projects",
    category: "Residential",
    location: "Add Project Location",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900"
  },

  {
    title: "Interior Furniture Projects",
    category: "Interior",
    location: "Add Project Location",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900"
  }
];

function Projects() {
  return (
    <section className="page-section">

      <p className="eyebrow">AHF FURNITURE PORTFOLIO</p>

      <h1>Our Projects</h1>

      <p className="description">
        A showcase of our work, craftsmanship
        and commitment to excellence.
      </p>

      <div className="project-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
            />

            <div className="project-info">

              <span>{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.location}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
