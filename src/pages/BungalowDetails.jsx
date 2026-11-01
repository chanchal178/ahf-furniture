
import { Link } from "react-router-dom";

const images = [
  "/images/bungalow-01.jpeg",
  "/images/bungalow-02.jpeg",
  "/images/bungalow-03.jpeg",
  "/images/bungalow-04.jpeg",
  "/images/bungalow-05.jpeg",
  "/images/bungalow-06.jpeg",
  "/images/bungalow-07.jpeg",
  "/images/bungalow-08.jpeg"
];

const completedWork = [
  "TV Unit",
  "Bed",
  "Wardrobe",
  "Wall Panelling",
  "Modular Kitchen",
  "Custom Doors",
  "Washbasin Unit",
  "Crockery Unit",
  "Dressing Unit",
  "Temple"
];

function BungalowDetails() {
  return (
    <section className="page-section project-detail-page">
      <Link to="/projects" className="text-link project-back-link">
        ← Back to Our Projects
      </Link>

      <p className="eyebrow">AHF FURNITURE PORTFOLIO</p>

      <h1>Bungalows – 6, Yogeshwar Society</h1>

      <p className="project-detail-category">
        Residential · Custom Furniture & Interiors
      </p>

      <p className="project-detail-location">
        6, Yogeshwar Society
      </p>

      <p className="project-detail-description">
        AHF Furniture provided customized furniture and interior
        solutions for this residential bungalow. The project includes
        thoughtfully designed TV units, beds, wardrobes, wall
        panelling, kitchen furniture, doors, washbasin and crockery
        units, dressing unit and temple.
      </p>

      <div className="project-detail-section">
        <h2>Project Gallery</h2>

        <div className="project-detail-gallery">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Yogeshwar Society bungalow project ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className="project-detail-section">
        <h2>Work Completed by AHF Furniture</h2>

        <div className="project-work-list">
          {completedWork.map((item) => (
            <div className="project-work-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <Link to="/projects" className="text-link project-back-link">
        ← Explore More Projects
      </Link>
    </section>
  );
}

export default BungalowDetails;
