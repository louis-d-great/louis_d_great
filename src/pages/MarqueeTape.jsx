import './MarqueeTape.css'

function MarqueeTape() {
  const items = ["Frontend Development", "Web3 Writing", "React","Tailwind CSS", "UI/UX", "Visual Designer", "Creative Writer", "Building in Public"]

  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="marquee-item">
            {item} <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeTape