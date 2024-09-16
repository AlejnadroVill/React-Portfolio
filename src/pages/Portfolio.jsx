import YourProject1Image from "../assets/Project1.png";
import YourProject2Image from "../assets/Project2.png";
import "../styles.css";

function Portfolio() {
  return (
    <div className="content-container">
      <h2>Portfolio</h2>
      <div className="portfolio-container scroll-container">
        <div className="project">
          <a
            href="https://github.com/Rod-Freedom/P1-Pokeholic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={YourProject1Image}
              alt="Project about Pokemon and drinks API"
              className="project-image"
            />
            <h3>Pokeholic</h3>
          </a>
          <p className="project-description">
            PokEhólic is a web application that creatively combines the world of
            Pokémon with cocktail crafting, providing a fun, interactive way to
            explore both. This project was born out of a desire to integrate two
            distinct interests in a unique digital experience, solving the
            problem of engaging users in learning about cocktails through
            Pokémon-themed interactions.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/eduardoVela2022/odyssey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={YourProject2Image}
              alt="Travel Organization app image"
              className="project-image"
            />
            <h3>Odyssey</h3>
          </a>
          <p className="project-description">
            The primary goal of this application is to help users organize and
            manage their personal travel adventures. Users can document their
            upcoming trips, including the destinations they plan to visit and
            the activities they might do in each city.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
