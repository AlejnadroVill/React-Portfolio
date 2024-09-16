import ProfilePicture from "../assets/profilePicture.png";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <img src={ProfilePicture} alt="Profile" className="profile-picture" />
      <p>
        Hi, I'm Miguel Alejandro Uribe Villavicencio, a passionate front-end web
        developer with experience in React and web technologies. I love building
        user-friendly applications and continuously learning new skills in web
        development. My journey into web development started with a curiosity
        for how websites work, and now I'm excited to share my work with the
        world through this portfolio.
      </p>
      <p>
        When I'm not coding, I enjoy exploring new technologies, contributing to
        open-source projects, and staying up to date with the latest industry
        trends.
      </p>
    </div>
  );
}

export default About;
