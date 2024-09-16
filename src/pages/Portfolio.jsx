import YourProject1Image from "../assets/Project1.png"; // Reemplaza con tus imágenes
import YourProject2Image from "../assets/Project2.png"; // Reemplaza con tus imágenes

// The portfolio page
function Portfolio() {
  return (
    <div className="content-container">
      <PageTitle title="Portfolio" />

      <div className="portfolio-container scroll-container">
        <Project
          name="Your Project 1"
          link="https://github.com/Rod-Freedom/P1-Pokeholic"
          imageSrc={YourProject1Image}
          imageAlt="Your Project 1"
        />

        <Project
          name="Your Project 2"
          link="https://github.com/eduardoVela2022/odyssey"
          imageSrc={YourProject2Image}
          imageAlt="Your Project 2"
        />
      </div>
    </div>
  );
}

export default Portfolio;
