import "./Projects.scss";
import ifish from "../../assets/images/I-fish.png";
import brainflix from "../../assets/images/Brainflix.png";

function Projects() {
  return(
    <section className="projects">
      <div className="projects__container">
        <h1 className="projects__container-title">Projects</h1>
      </div>
      <div className="projects__card">
        <img className="projects__img" alt="pic of I-fish" src={ifish} ></img>
        <div className="projects__words">
          <h1 className="projects__title">I-fish</h1>
          <p className="projects__description">I-fish was a multi page website that was my capstone project for the bootcamp. It was a way for new fishermen to see where and what to use to catch fish. I have deployed the website using heroku. The website was created using HTML, CSS, SCSS, Javascript, an API I built, and Mapbox api and mapbox-gl JS library. All of the pages were mobile, tablet, and desktop friendly with two break points at specified pixel points.</p>
        </div>
      </div>

      <div className="projects__card">
        <img className="projects__img" alt="pic of brainflix" src={brainflix} ></img>
        <div className="projects__words">
          <h1 className="projects__title">Brainflix</h1>
          <p className="projects__description">Brainflix was a single page application that displayed a mock website for a band. The main link page has a video player, with the title of the video, author, likes, views, timestamp, and a description of the video, with a comment section and a list of other videos from the rest API that I had to build. , While the upload link page displays a form to submit a new video and when hitting the publish button would take you back to the main link where you could see your video you published.  This was created using HTML, CSS, SCSS, Javascript, React,  and a custom rest API using node and express. Both of the pages were mobile, tablet, and desktop friendly with two break points at specified pixel points. </p>
        </div>
      </div>
    </section>
  );
}
export default Projects;