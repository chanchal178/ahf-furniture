
function Contact() {
  return (
    <section className="page-section">

      <p className="eyebrow">GET IN TOUCH</p>

      <h1>Contact AHF Furniture</h1>

      <p className="description">
        We would love to hear from you.
        Visit our showroom or contact us
        for business enquiries.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>Visit Us</h3>
          <p>16 prime industrail park , satej, gujarat</p>
        </div>

        <div className="contact-card">
          <h3>Call Us</h3>
          <p>+91 9913014019</p>
          <p>+91 6367754060</p>
        </div>

        <div className="contact-card">
          <h3>Email Us</h3>
          <p>hira.ram.15@email.com</p>
        </div>

        <div className="contact-card">
          <h3>WhatsApp</h3>
          <a href="https://wa.me/91XXXXXXXXXX"
             target="_blank"
             rel="noreferrer">
            Chat With Us → 9913014019  
                           
                           6367754060
          </a>
        </div>

      </div>

      <div className="map-section">

        <h2>Find Our Location</h2>

        <p className="description">
          Visit AHF Furniture. We look forward
          to welcoming you.
        </p>

        <div className="map-container">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117486.49671475093!2d72.4365487157159!3d23.043847322999667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d003a42e483%3A0x64bf2bcf52f5f6c4!2sArjun%20enterprises!5e0!3m2!1sen!2sin!4v1793535683293!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="AHF Furniture Location"
          />

        </div>

      </div>

    </section>
  );
}

export default Contact;
