import MarqueeTape from "./MarqueeTape"
import louisPhotoImg from "../images/louis-photo.png"

function Home() {
  return (
    <>
      <section className="hero-split">
        
        <div className="hero-copy">
          <span className="eyebrow fade-in delay-1">— developer · creator · visual designer</span>

          <h1 className="fade-in delay-2">
            I build for the web<br />and write for its future
          </h1>

          <p className="hero-subtext fade-in delay-3">
            Frontend developer building responsive, user-focused websites with HTML, CSS, JavaScript and React. I also write about Web3 and technology, giving me a perspective that sits between building digital products and understanding the ideas behind them.
          </p>

          <div className="hero-cta-row fade-in delay-4">
            <a href="/developer" className="btn-primary">View my Work</a>
            <a href="/creator" className="btn-secondary">Read my Writing →</a>
          </div>

          <div className="stat-row fade-in delay-5">
            <div className="stat">
              <strong>Frontend Development</strong>
              <span>→ JavaScript · React</span>
            </div>

            <div className="stat">
              <strong>Web3 & Technology</strong>
              <span>Writing · Research </span>
            </div>

            <div className="stat">
              <strong>Open to Work</strong>
              <span>Freelance · Full-time</span>
            </div>
          </div>
        </div>

        <div className="hero-photo-frame fade-in delay-6">
          <span className="photo-badge">Frontend Developer · Building in Public</span>

          <img src={louisPhotoImg} alt="Louis" className="hero-photo"/>
        </div>

      </section>
        
      <MarqueeTape/>
    </>
  )
}

export default Home