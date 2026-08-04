function WritingCard({ piece }) {
  return (
    <div className="writing-card">
      <span className="writing-tag">{piece.tag}</span>
      <h3>{piece.title}</h3>
      <p>{piece.summary}</p>
      {piece.link && (
        <a href={piece.link} target="_blank" rel="noopener noreferrer">
          Read more →
        </a>
      )}
    </div>
  )
}

function Creator() {
  const writing = [
    {
      tag: "BuilderFi",
      title: "Peace in DeFi",
      summary: "A thread exploring what stability and trust could look like in decentralized finance.",
      link: ""
    },
    {
      tag: "Seasons Protocol",
      title: "Behavioral Fatigue vs. APY",
      summary: "Why yield alone doesn't keep users around — anchored by a personal Eclipse farming story.",
      link: ""
    },
    {
      tag: "ScribbleAI",
      title: "Creator Content & AI-Searchable Authority",
      summary: "How creator-generated, indexed content builds brand authority that AI models actually surface.",
      link: ""
    }
  ]

  return (
    <div className="page creator">
      <h1>Creator</h1>
      <p>Writing at the edge of Web3, tech, and Nigeria's digital economy.</p>

      <div className="writing-grid">
        {writing.map((piece, index) => (
          <WritingCard piece={piece} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Creator