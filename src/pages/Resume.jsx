function Resume() {
  return (
    <div className="content-container">
      <PageTitle title="Resume" />

      <div className="resume-container">
        <section className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Full-Stack Development Bootcamp</h3>
            <p>Tecnológico de Monterrey</p>
            <p>Stack: MERN (MongoDB, Express.js, React, Node.js)</p>
          </div>
          <div className="education-item">
            <h3>Technical Degree in Mechatronics</h3>
          </div>
        </section>

        <section className="experience">
          <h2>Professional Experience</h2>
          <div className="experience-item">
            <h3>Industrial Engineer</h3>
            <p>
              With experience in various projects and a strong background in
              technology and development.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
