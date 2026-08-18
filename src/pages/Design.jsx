import { useState } from 'react'
import event1Img from "../images/design/event1.png"
import event2Img from "../images/design/event2.png"
import event3Img from "../images/design/event3.png"
import event4Img from "../images/design/event4.png"
import event5Img from "../images/design/event5.png"
import event6Img from "../images/design/event6.png"
import sport1Img from "../images/design/sport1.png"
import sport2Img from "../images/design/sport2.png"
import bb1mg from "../images/design/B&B1.png"
import bb2mg from "../images/design/B&B2.png"
import bb3mg from "../images/design/B&B3.png"
import bb4mg from "../images/design/B&B4.png"
import bb5mg from "../images/design/B&B5.png"
import church1Img from "../images/design/church1.png"
import church2Img from "../images/design/church2.png"
import church3Img from "../images/design/church3.png"
import church4Img from "../images/design/church4.png"
import church5Img from "../images/design/church5.png"
import branding1Img from "../images/design/branding1.png"
import branding2Img from "../images/design/branding2.png"
import branding3Img from "../images/design/branding3.png"
import branding4Img from "../images/design/branding4.png"
import branding5Img from "../images/design/branding5.png"
import branding6Img from "../images/design/branding6.png"
import branding7Img from "../images/design/branding7.png"
import branding8Img from "../images/design/branding8.png"
import branding9Img from "../images/design/branding9.png"
import branding10Img from "../images/design/branding10.png"
import branding11Img from "../images/design/branding11.png"
import branding12Img from "../images/design/branding12.png"
import branding13Img from "../images/design/branding13.png"
import branding14Img from "../images/design/branding14.png"
import branding15Img from "../images/design/branding15.png"
import branding16Img from "../images/design/branding16.png"
import branding17Img from "../images/design/branding17.png"
import art1Img from "../images/design/art1.png"
import art2Img from "../images/design/art2.png"
import art3Img from "../images/design/art3.png"
import art4Img from "../images/design/art4.png"
import sm1Img from "../images/design/SM1.png"
import sm2Img from "../images/design/SM2.png"
import sm3Img from "../images/design/SM3.png"
import sm4Img from "../images/design/SM4.png"
import sm5Img from "../images/design/SM5.png"
import sm6Img from "../images/design/SM6.png"
import sm7Img from "../images/design/SM7.png"
import sm8Img from "../images/design/SM8.png"
import sm9Img from "../images/design/SM9.png"
import sm10Img from "../images/design/SM10.png"
import sm11Img from "../images/design/SM11.png"
import sm12Img from "../images/design/SM12.png"
import sm13Img from "../images/design/SM13.png"
import sm14Img from "../images/design/SM14.png"

import orbitImg from "../images/Orbit.png"

function DesignCard({ item }) {
  return (
    <div className="project-card">
      {item.image && (
        <img src={item.image} alt={item.title} className="project-image" />
      )}
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}

function Design() {
  const designs = [
    {  
      category: "Events",
      image: event1Img,
    },
    { 
      category: "Events",
      image: event2Img,
    },
    {
      category: "Events",
      image: event3Img,
    },
    {  
      category: "Events",
      image: event4Img,
    },
    {     
      category: "Events",
      image: event5Img,
    },
    {     
      category: "Events",
      image: event6Img,
    },
    {
      category: "Sports",
      image: sport1Img,
    },
    {
      category: "Sports",
      image: sport2Img,
    },
    {
      category: "Business",
      image: bb1mg,
    },
    {
      category: "Business",
      image: bb2mg,
    },
    {
      category: "Business",
      image: bb3mg,
    },
    {
      category: "Business",
      image: bb4mg,
    },
    {
      category: "Business",
      image: bb5mg,
    },
    {
      category: "Church",
      image: church1Img,
    },
    {
      category: "Church",
      image: church2Img,
    },
    {
      category: "Church",
      image: church3Img,
    },
    {
      category: "Church",
      image: church4Img,
    },
    {
      category: "Church",
      image: church5Img,
    },
    {
      category: "Branding",
      image: branding1Img,
    },
    {
      category: "Branding",
      image: branding2Img,
    },
    {
      category: "Branding",
      image: branding3Img,
    },
    {
      category: "Branding",
      image: branding4Img,
    },
    {
      category: "Branding",
      image: branding5Img,
    },
    {
      category: "Branding",
      image: branding6Img,
    },
    {
      category: "Branding",
      image: branding7Img,
    },
    {
      category: "Branding",
      image: branding8Img,
    },
    {
      category: "Branding",
      image: branding9Img,
    },
    {
      category: "Branding",
      image: branding10Img,
    },
    {
      category: "Branding",
      image: branding11Img,
    },
    {
      category: "Branding",
      image: branding12Img,
    },
    {
      category: "Branding",
      image: branding13Img,
    },
    {
      category: "Branding",
      image: branding14Img,
    },
    {
      category: "Branding",
      image: branding15Img,
    },
    {
      category: "Branding",
      image: branding16Img,
    },
    {
      category: "Branding",
      image: branding17Img,
    },
    {
      category: "Art & Illustration",
      image: art1Img,
    },
    {
      category: "Art & Illustration",
      image: art2Img,
    },
    {
      category: "Art & Illustration",
      image: art3Img,
    },
    {
      category: "Art & Illustration",
      image: art4Img,
    },
    {
      category: "Social Media",
      image: sm1Img,
    },
    {
      category: "Social Media",
      image: sm2Img,
    },
    {
      category: "Social Media",
      image: sm3Img,
    },
    {
      category: "Social Media",
      image: sm4Img,
    },
    {
      category: "Social Media",
      image: sm5Img,
    },
    {
      category: "Social Media",
      image: sm6Img,
    },
    {
      category: "Social Media",
      image: sm7Img,
    },
    {
      category: "Social Media",
      image: sm8Img,
    },
    {
      category: "Social Media",
      image: sm9Img,
    },
    {
      category: "Social Media",
      image: sm10Img,
    },
    {
      category: "Social Media",
      image: sm11Img,
    },
    {
      category: "Social Media",
      image: sm12Img,
    },
    {
      category: "Social Media",
      image: sm13Img,
    },
    {
      category: "Social Media",
      image: sm14Img,
    },
  ]

  const categories = ["All", ...new Set(designs.map((d) => d.category))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((d) => d.category === activeCategory)

  return (
    <div className="page design">
      <span className="eyebrow">— design</span>
      <h1>Visual Design</h1>
      <p className="hero-subtext">
        Selected visual designs across events, branding, sports, school, art etc..
      </p>

      <div className="filter-row">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredDesigns.map((item, index) => (
          <DesignCard item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Design