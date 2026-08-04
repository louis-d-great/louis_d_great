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

function Developer() {
  const projects = [
    {
      name: "Louis Movie-Box",
      description: "A Netflix-style movie browsing app built with TMDB's API — search, browse, and explore films with live data.",
      link: "",
      image: "/images/movie-box.png"
    },
    {
      name: "Orbit",
      description: "Add a short description of what Orbit does here.",
      link: "",
      image: "/images/movie-box.png"
    },
    {
      name: "Orbit",
      description: "Add a short description of what Orbit does here.",
      link: "",
      image: "/images/movie-box.png"
    },
    {
      name: "First Pj",
      description: "Add a short description of what Orbit does here.",
      link: "",
      image: "/images/movie-box.png"
    },
  ]

  return (
    <div className="page developer">
      <h1>Developer</h1>
      <p>Building interfaces, one component at a time.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Developer