function Contact() {
  const links = [
    { label: "Email", value: "arogundadelouis22@gmail.com", href: "arogundadelouis22@gmail.com" },
    { label: "WhatsApp", value: "+234 815 823 8991", href: "https://wa.me/2348158238991" },
    { label: "Direct Call", value: "08158238991", href: "tel:08158238991" },
    { label: "X", value: "𝐋𝐨𝐮𝐢𝐬 ♦️", href: "https://x.com/louis_d_great" },
    { label: "LinkedIn", value: "Louis Arogundade", href: "https://www.linkedin.com/in/louis-arogundade/" },
    { label: "GitHub", value: "louis-d-great", href: "https://github.com/louis-d-great" },
    { label: "Instagram", value: "louisdgreatt", href: "https://www.instagram.com/louisdgreatt/" },
  ];

  return (
    <div className="page contact">
      <span className="eyebrow">— Hire Me</span>
      <h1>Let's build or write something together</h1>
      <p className="hero-subtext">
        Reach out through whichever works best for you.
      </p>

      <div className="contact-grid">
        {links.map((link, index) => (
          
            <a key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-label">{link.label}</span>
            <span className="contact-value">{link.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;