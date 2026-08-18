function ProjectCard({ project }) {
  return (
    <div className="project-card">
        {project.image && (
        <img src={project.image} alt={project.name} className="project-image" />
      )}
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View project →
        </a>
      )}
    </div>
  )
}
import orbitImg from "../images/Orbit.png"
import movieImg from "../images/Movie.png"
import weatherImg from "../images/Weather.png"
import nexcentImg from "../images/Nexcent.png"
import switchImg from "../images/switch2.png"


function Developer() {
  const projects = [
    {
      name: "Louis Movie-Box",
      description: "A movie discovery platform built with the TMDB API. Users can search for films, browse titles and explore movie details using live data.",
      link: "https://louis-movie-box.vercel.app/",
      image: movieImg,
    },
    {
      name: "Nexcent",
      description: "A responsive landing page recreated from a design concept using only HTML and CSS. Built as a frontend exercise to strengthen my understanding of layouts, spacing, typography and responsive design.",
      link: "https://nexcent-website-tau.vercel.app/",
      image: nexcentImg,
    },
    {
      name: "Electricity Switch",
      description: "A simple interactive light switch built with HTML, CSS and JavaScript. This project helped me practice DOM manipulation and using JavaScript to respond to user interactions and update the interface.",
      link: "https://electricity-switch-1u76.vercel.app/",
      image: switchImg,
    },
    {
      name: "Orbit",
      description: "A marketplace platform designed to connect African market women with customers and opportunities. I worked on the interface and user experience to make the platform clear, accessible and easy to navigate.",
      link: "https://orbit-landing-page-beta.vercel.app/",
      image: orbitImg,
    },
    {
      name: "Weather App",
      description: "A responsive weather application built with vanilla JavaScript, HTML and CSS. I built it to learn how APIs work and how to fetch, process and display live weather data in the browser",
      link: "https://weather-app-nine-kappa-46.vercel.app/",
      image: weatherImg,
    },
  ]

  return (
    <div className="page developer">
      <span className="eyebrow">— developer</span>
      <h1>Projects Shipped</h1>
      <p>Websites and interfaces I've built while growing as a frontend developer. I'm currently open to freelance and frontend opportunities.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Developer