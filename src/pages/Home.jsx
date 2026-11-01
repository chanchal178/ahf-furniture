
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">

          <p className="eyebrow">
            AHF FURNITURE
          </p>

          <h1>
            Furniture That
            <br />
            Defines Your Space.
          </h1>

          <p>
            Discover quality craftsmanship, timeless designs
            and furniture solutions made for modern living.
          </p>

          <Link to="/projects" className="btn">
            Explore Our Projects
          </Link>

        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WELCOME TO AHF FURNITURE</p>

        <h2>Creating Spaces That Inspire</h2>

        <p className="description">
          At AHF Furniture, we believe furniture is more than
          just an object. It brings comfort, elegance and
          personality to every space.

          Our commitment is to quality, design and
          customer satisfaction.
        </p>

        <Link to="/about" className="text-link">
          Discover Our Story →
        </Link>
      </section>

      <section className="section featured">
        <p className="eyebrow">OUR WORK</p>

        <h2>Projects That Speak for Us</h2>

        <p className="description">
          From residential spaces to large commercial projects,
          explore the work of AHF Furniture.
        </p>

        <Link to="/projects" className="btn">
          View All Projects
        </Link>
      </section>

      <section className="cta">
        <h2>Let's Create Something Beautiful</h2>

        <p>
          Have a project in mind?
          We'd love to hear from you.
        </p>

        <Link to="/contact" className="btn light-btn">
          Contact AHF Furniture
        </Link>
      </section>
    </>
  );
}

export default Home;
