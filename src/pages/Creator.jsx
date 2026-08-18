function WritingCard({ piece }) {
  return (
    <div className="writing-card">
      {piece.image && (
        <img src={piece.image} alt={piece.name} className="project-image" />
      )}
      <span className="writing-tag">{piece.tag}</span>
      <h3>{piece.title}</h3>
      <p>{piece.summary}</p>
      {piece.link && (
        <a href={piece.link} target="_blank" rel="noopener noreferrer">
          Read more →
        </a>
      )}
    </div>
  );
}

import meweImg from "../images/creator/Mewe.png"
import seasonsImg from "../images/creator/Seasons.png"
import hyperearnImg from "../images/creator/HyperEarn.png"
import kodeusImg from "../images/creator/Kodeus.png"
import scribbleAiImg from "../images/creator/ScribbleAi.png"
import lumeImg from "../images/creator/Lume.png"
import mewe1Img from "../images/creator/Mewe1.png"
import tachiImg from "../images/creator/Tachi.png"
import superformImg from "../images/creator/Superform.png"
import oxpplImg from "../images/creator/Oxppl.png"
import tachi1Img from "../images/creator/Tachi1.png"
import cornerImg from "../images/creator/Corners.png"
import sensayImg from "../images/creator/Sensay.png"
import alphanavyImg from "../images/creator/AlphaNavy.png"
import runwagoImg from "../images/creator/Runwago.png"
import rezerveImg from "../images/creator/Rezerve.png"
import invicinbleImg from "../images/creator/invicinble.png"
import reservoirImg from "../images/creator/Reservoir.png"
import taikaiImg from "../images/creator/TAIKAI.png"
import rumpelImg from "../images/creator/Rumpel.png"

function Creator() {
  const writing = [
    {
      tag: "Mewe",
      title: "Can Social Media Be Built Around Trust?",
      summary:
        "A thread exploring what stability and trust could look like in decentralized finance.",
      link: "https://x.com/louis_d_great/status/2029437695156490730?s=20",
      image: meweImg,
    },
    {
      tag: "Seasons Protocol",
      title: "Behavioral Fatigue vs. APY",
      summary:
        "Why yield alone doesn't keep users around — anchored by a personal Eclipse farming story.",
      link: "https://x.com/louis_d_great/status/2057840325062738001?s=20",
      image: seasonsImg,
    },
    {
      tag: "HyperEarn",
      title: "The Case for Smarter Web3 Rewards",
      summary:
        "A thread exploring what stability and trust could look like in decentralized finance.",
      link: "https://x.com/louis_d_great/status/2029437695156490730?s=20",
      image: hyperearnImg,
    },
    {
      tag: "KodeusAI",
      title: "When AI Becomes the New Search Engine",
      summary:
        "How creator-generated, indexed content builds brand authority that AI models actually surface.",
      link: "https://x.com/louis_d_great/status/2052798871487537290?s=20",
      image: kodeusImg,
    },
    {
      tag: "ScribbleAI",
      title: "Creator Content & AI-Searchable Authority",
      summary:
        "How creator-generated, indexed content builds brand authority that AI models actually surface.",
      link: "https://x.com/louis_d_great/status/2045064443051085910?s=20",
      image: scribbleAiImg,
    },
    {
      tag: "Lume",
      title: "Making Global Investing Feel Simple",
      summary:
        "Lume is a high-performance distribution engine that brings U.S. stock exposure to a global audience. They provide a retail-grade interface, the “Robinhood for Web3” that abstracts away the complexity of on-chain asset, making investing effortless for anyone, anywhere.",
      link: "https://x.com/louis_d_great/status/2042977859719901366?s=20",
      image: lumeImg,
    },
    {
      tag: "Mewe Genesis",
      title: "What If Social Media Respected Your Privacy?",
      summary:
        "Mewe is a privacy-focused, ad-free social network that serves as an alternative to platforms like Facebook, offering features like feeds, groups, chats, and stories without data mining or algorithmic manipulation.",
      link: "https://x.com/louis_d_great/status/2038605257853358514?s=20",
      image: mewe1Img,
    },
    {
      tag: "SuperForm",
      title: "What Banking Looks Like When You Own It",
      summary:
        "The first user-owned neobank.",
      link: "https://x.com/louis_d_great/status/2026651930110345445?s=20",
      image: superformImg,
    },
    {
      tag: "Tachi",
      title: "Putting AI Agents on Bitcoin",
      summary:
        "A self-custodial, programmable rails that let Ai agents operate natively on Bitcoin.",
      link: "https://x.com/louis_d_great/status/2029437695156490730?s=20",
      image: tachiImg,
    },
    {
      tag: "Oxppl",
      title: "One App for the Onchain Economy",
      summary:
        "An onchain super app with multiple Onchain tools",
      link: "https://x.com/louis_d_great/status/2021560514774524054?s=20",
      image: oxpplImg,
    },
    {
      tag: "Corners",
      title: "Turning Curation Into a Market",
      summary:
        "Discover curations around topics you love, add links to curate them, trade and be rewarded.",
      link: "https://x.com/louis_d_great/status/2015095600123986336?s=20",
      image: cornerImg,
    },
     {
      tag: "Sensay",
      title: "What Happens to Knowledge When People Leave?",
      summary:
        "A platform that preserves knowledge for companies and institutons.",
      link: "https://x.com/louis_d_great/status/1993885012865831414?s=20",
      image: sensayImg,
    },
     {
      tag: "Tachi introduction",
      title: "Teaching Bitcoin to Work With AI",
      summary:
        "How creator-generated, indexed content builds brand authority that AI models actually surface.",
      link: "https://x.com/louis_d_great/status/2018305504867410347?s=20",
      image: tachi1Img,
    },
    {
      tag: "Taikai Garden",
      title: "Where Web3 Ideas Get Room to Grow",
      summary:
        "A builder-focused ecosystem where early-stage Web3 ideas are planted, nurtured and harvested.",
      link: "https://x.com/louis_d_great/status/1936253587211841643?s=20",
      image: taikaiImg,
    },
    {
      tag: "AlphaNavy",
      title: "What If You Could Own the Prediction Market?",
      summary:
        "A prediction market where you own the markets, set the rules, and earn from the activity around your ideas.",
      link: "https://x.com/louis_d_great/status/1987592905448636737?s=20",
      image: alphanavyImg,
    },
    {
      tag: "Invicinble Read",
      title: "Reimagining Publishing for the Web3 Era",
      summary:
        "The Web3 evoluton of Invincible Publishers, one of India’s fastest growing publishing houses with 500+ titles and nationwide distribution.",
      link: "https://x.com/louis_d_great/status/1965602405229228060?s=20",
      image: invicinbleImg,
    },
    {
      tag: "Rezerve",
      title: "Building an Ethereum Treasury, Together",
      summary:
        "A decentralized treasury accumulation protocol with one clear mission: to build a 1M ETH community owned treasury.",
      link: "https://x.com/louis_d_great/status/1969225615552164351?s=20",
      image: rezerveImg,
    },
    {
      tag: "Rumpel",
      title: "Turning Real-World Assets Into Onchain Value",
      summary:
        "A point tokenization protocol that transforms your off-chain liquid assets.",
      link: "https://x.com/louis_d_great/status/1931069226934005820?s=20",
      image: rumpelImg,
    },
    {
      tag: "Reservoir",
      title: "Building a Stablecoin Around Real Yield",
      summary:
        "A multicollateral yield bearing stablecoin backed by RWAs and on-chain strategies (T-bills, overcollateralized on-chain lending, funding rate strategies).",
      link: "https://x.com/louis_d_great/status/1941713870726267161?s=20",
      image: reservoirImg,
    },
    {
      tag: "Runwago",
      title: "When Running Becomes an Economy",
      summary:
        "The first 100% sustainable SportFi app designed for 300M+ runners worldwide. Runwago lets runners monetize their fitness goals through a transparent and sustainable token economy.",
      link: "https://x.com/louis_d_great/status/1983406078684443135?s=20",
      image: runwagoImg,
    },
  ];

  return (
    <div className="page creator">
      <span className="eyebrow">— creator</span>
      <h1>Content Arc</h1>
      <p>I write, design and create content that helps brands communicate clearly. My work sits across software development, Web3 and Nigeria's digital economy, where I turn complex ideas into stories people connect with.</p>

      <div className="writing-grid">
        {writing.map((piece, index) => (
          <WritingCard piece={piece} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Creator;
