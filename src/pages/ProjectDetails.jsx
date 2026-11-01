
import { Link } from "react-router-dom";

const images = [
  "/images/golf-01.jpeg",
  "/images/golf-02.jpeg",
  "/images/golf-03.jpeg",
  "/images/golf-04.jpeg",
  "/images/golf-05.jpeg",
  "/images/golf-06.jpeg",
  "/images/golf-07.jpeg",
  "/images/golf-08.jpeg",
  "/images/golf-09.jpeg",
  "/images/golf-10.jpeg"
];

const completedWork = [
  "Custom Chairs",
  "Seating Arrangements",
  "Cafe Counter",
  "Ceiling Work",
  "Reception",
  "Golf Stand",
  "Entry Space Partition",
  "Storage Wardrobes",
  "Dining Tables",
  "Low, Medium & High Partitions",
  "Custom Doors",
  "Washbasin Area",
  "Reception Backside Partition"
];

function ProjectDetails() {
  return (
    <section className="page-section project-detail-page">

      <Link to="/projects" className="text-link project-back-link">
        ← Back to Our Projects
      </Link>

      <p className="eyebrow">AHF FURNITURE PORTFOLIO</p>

      <h1>Mini Golf Arena &amp; Cafe</h1>

      <p className="project-detail-category">
        Entertainment &amp; Recreation · Commercial Furniture
      </p>

      <p className="project-detail-location">
        STC SP Ring Road, Ahmedabad
      </p>

      <p className="project-detail-description">
        AHF Furniture contributed customized furniture and interior
        elements to Mini Golf Arena &amp; Cafe. The work includes
        seating, counters, partitions, reception and other functional
        furniture solutions created for the space.
      </p>

      <div className="project-detail-section">
        <h2>Project Gallery</h2>

        <div className="project-detail-gallery">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Mini Golf Arena & Cafe photo ${index + 1}`}
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

export default ProjectDetails;
