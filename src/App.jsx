import React, { useEffect, useState } from "react";
import "./App.css";

const services = [
  ["🎓", "EdTech for Students & Universities", "Industry-aligned online and blended learning in communication, digital tools, AI productivity, sales, entrepreneurship, sustainability and technical skills."],
  ["🚀", "Market Readiness Programme", "A practical employability programme with live MSME projects, professional branding, interview preparation, business communication and capstone presentations."],
  ["📈", "Marketing-as-a-Service", "Affordable branding, digital marketing, lead generation, sales collateral, website support and buyer outreach for MSMEs and startups."],
  ["⚡", "Energy Consulting", "Energy audits, steam-system optimisation, waste-heat recovery assessment, utility benchmarking and decarbonisation roadmaps for industrial units."],
  ["🏛️", "Centre of Excellence", "University CoE design and operations: industry curriculum, faculty development, labs, certifications, industry projects, hackathons and research linkages."],
  ["💡", "Entrepreneurship Cell", "End-to-end E-Cell setup: awareness programmes, idea validation, mentoring, business-plan competitions, incubation support and investor-connect events."]
];

const universityServices = [
  ["CoE Setup", "Curriculum design, skill tracks, assessment framework, lab planning, industry partnerships and annual operating roadmap."],
  ["Faculty Development", "Train-the-trainer programmes, industry immersion, emerging-technology workshops and teaching-resource support."],
  ["Student Innovation", "Hackathons, industry capstones, internships, certifications, mentor networks and innovation challenges."],
  ["E-Cell Operations", "Entrepreneurship awareness, ideation workshops, business-model validation, mentoring and startup showcases."],
  ["Incubation Support", "Business-plan competitions, founder handholding, pitch preparation, investor connects and early-stage guidance."],
  ["Industry Projects", "Live projects sourced from MSMEs, giving students practical exposure while delivering useful business outcomes."]
];

const packages = [
  { name: "Starter", label: "Foundation", items: ["Company profile & brand basics", "Landing page / Google Business Profile", "LinkedIn page setup", "Basic content calendar", "Sales one-pager"] },
  { name: "Growth", label: "Most popular", featured: true, items: ["Social-media management", "Lead-generation campaigns", "Email & WhatsApp outreach", "Sales deck & product catalogue", "Monthly performance review"] },
  { name: "Energy & Export", label: "Specialist", items: ["Energy audit & benchmarking", "Steam and waste-heat review", "Energy-saving roadmap", "Buyer research & export readiness", "Trade-fair and pitch support"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="SAPPCO home">
            <span className="brand-mark">SAPPCO</span>
            <span className="brand-subtitle">Skills • Academia • Projects • Consulting</span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
          <nav className={`menu ${menuOpen ? "menu-open" : ""}`}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#students" onClick={closeMenu}>Students</a>
            <a href="#msme" onClick={closeMenu}>MSMEs</a>
            <a href="#universities" onClick={closeMenu}>Universities</a>
            <a href="#contact" className="btn nav-cta" onClick={closeMenu}>Partner With Us <span>↗</span></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="container hero-inner">
            <div className="hero-copy reveal">
              <p className="eyebrow light-eyebrow"><span className="eyebrow-dot" /> Industry-linked education & enterprise growth</p>
              <h1>Bridging students, universities and <em>MSMEs</em> for real-world growth.</h1>
              <p className="hero-description">SAPPCO prepares students for the market, helps universities build industry-relevant Centres of Excellence and Entrepreneurship Cells, and enables MSMEs with practical marketing and energy-consulting solutions.</p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-white">Book a Consultation <span>↗</span></a>
                <a href="#services" className="btn btn-outline-white">Explore Services <span>↓</span></a>
              </div>
              <div className="hero-proof"><div className="proof-avatars"><span>S</span><span>A</span><span>P</span></div><p><b>One connected ecosystem</b><br />Learning, employability & enterprise</p></div>
            </div>
            <div className="hero-visual reveal reveal-delay">
              <div className="visual-glow" />
              <div className="visual-panel">
                <div className="visual-top"><span className="status-dot" /> SAPPCO growth ecosystem <span className="visual-dots">•••</span></div>
                <div className="ecosystem">
                  <div className="eco-node node-students"><span>🎓</span><b>Students</b><small>Skills & readiness</small></div>
                  <div className="eco-node node-universities"><span>🏛️</span><b>Universities</b><small>Industry connection</small></div>
                  <div className="eco-node node-msme"><span>📈</span><b>MSMEs</b><small>Business growth</small></div>
                  <div className="eco-center"><div className="eco-center-mark">S</div><b>SAPPCO</b><small>Shared growth</small></div>
                  <svg className="eco-lines" viewBox="0 0 440 330" aria-hidden="true"><path d="M220 165 L105 70 M220 165 L335 70 M220 165 L220 278" /><circle cx="220" cy="165" r="4" /><circle cx="105" cy="70" r="4" /><circle cx="335" cy="70" r="4" /><circle cx="220" cy="278" r="4" /></svg>
                </div>
                <div className="visual-bottom"><span>✦</span> Practical programmes. Measurable outcomes.</div>
              </div>
              <div className="float-chip chip-top"><span>↗</span><div><b>Industry-linked</b><small>Learning experiences</small></div></div>
              <div className="float-chip chip-bottom"><span>✓</span><div><b>End-to-end support</b><small>From learning to growth</small></div></div>
            </div>
          </div>
          <div className="hero-bottom-line"><div className="container bottom-line-inner"><span>EDUCATION</span><i /><span>EMPLOYABILITY</span><i /><span>ENTREPRENEURSHIP</span><i /><span>ENTERPRISE GROWTH</span></div></div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading reveal"><p className="eyebrow">What we do</p><h2>Five integrated verticals,<br /><span>one growth ecosystem.</span></h2><p className="lead">SAPPCO connects learning, employability, entrepreneurship and enterprise development. Our programmes create measurable outcomes for students, universities and growing businesses.</p></div>
            <div className="services-grid">
              {services.map(([icon, title, desc], i) => <article className={`service-card reveal delay-${i % 3}`} key={title}><div className="service-card-top"><div className="icon-box">{icon}</div><span className="card-index">0{i + 1}</span></div><h3>{title}</h3><p>{desc}</p><a href="#contact" className="text-link">Explore service <span>↗</span></a></article>)}
            </div>
          </div>
        </section>

        <section className="section students-section" id="students">
          <div className="container students-layout">
            <div className="students-intro reveal"><p className="eyebrow">For students</p><h2>Turn classroom knowledge into <span>career confidence.</span></h2><p className="lead">A 30–60 day career accelerator designed to convert classroom knowledge into workplace capability. Students work on real business challenges and graduate with a portfolio, certification and industry exposure.</p><a href="#contact" className="btn">Explore the programme <span>↗</span></a><div className="duration-note"><span className="duration-icon">◷</span><div><b>30–60 days</b><small>A structured career accelerator</small></div></div></div>
            <div className="journey-list reveal reveal-delay">
              {[
                ["01", "Career clarity", "Industry mapping, role identification and personalised career planning."],
                ["02", "Professional brand", "Resume, LinkedIn, communication, group discussion and interview preparation."],
                ["03", "Digital readiness", "Excel, data literacy, AI productivity tools and workplace technology skills."],
                ["04", "Business exposure", "Sales fundamentals, customer understanding, marketing and entrepreneurship."],
                ["05", "Live MSME project", "Student teams solve a real market-research, branding, sales or operations challenge."],
                ["06", "Capstone & certification", "Final presentation, mentor feedback, SAPPCO certification and placement-readiness review."]
              ].map(([num, title, desc]) => <div className="journey-item" key={num}><span className="journey-number">{num}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="journey-arrow">↗</span></div>)}
            </div>
          </div>
        </section>

        <section className="section" id="msme">
          <div className="container">
            <div className="section-heading reveal"><p className="eyebrow">For MSMEs</p><h2>Practical growth support for <span>ambitious businesses.</span></h2><p className="lead">SAPPCO helps MSMEs improve visibility, generate qualified leads, strengthen sales material and reduce energy costs through focused, affordable engagements.</p></div>
            <div className="pricing-grid">
              {packages.map((pack, i) => <article className={`price-card reveal delay-${i} ${pack.featured ? "featured" : ""}`} key={pack.name}>{pack.featured && <div className="popular-label">MOST POPULAR</div>}<div className="package-icon">{["◈", "↗", "⚡"][i]}</div><h3>{pack.name}</h3><div className="price-label">{pack.label}</div><p className="package-intro">{i === 0 ? "Build a strong and credible digital foundation." : i === 1 ? "Create consistent visibility and a stronger sales pipeline." : "Unlock specialist support for efficiency and expansion."}</p><ul>{pack.items.map(item => <li key={item}>{item}</li>)}</ul><a href="#contact" className={`btn ${pack.featured ? "" : "btn-light"}`}>Request Proposal <span>↗</span></a></article>)}
            </div>
          </div>
        </section>

        <section className="section university-section" id="universities">
          <div className="container">
            <div className="university-heading reveal"><div><p className="eyebrow">For universities</p><h2>Centres of Excellence &<br /><span>Entrepreneurship Cells.</span></h2></div><p className="lead">SAPPCO provides universities with a ready-to-operate industry-engagement model that improves student outcomes, faculty capability, research relevance and startup activity.</p></div>
            <div className="university-grid">{universityServices.map(([title, desc], i) => <article className="university-card reveal" key={title}><div className="uni-number">0{i + 1}</div><div><h3>{title}</h3><p>{desc}</p></div><span className="uni-arrow">↗</span></article>)}</div>
          </div>
        </section>

        <section className="outcomes-section">
          <div className="container outcomes-inner">
            <div className="outcomes-copy reveal"><p className="eyebrow light-eyebrow">Why SAPPCO</p><h2>Built for <em>measurable</em> outcomes.</h2><p>One partner across the journey—from building skills to creating industry connections and enabling sustainable business growth.</p></div>
            <div className="stats-grid reveal reveal-delay"><div className="stat-card"><b>5</b><span>Integrated service verticals</span></div><div className="stat-card"><b>30–60</b><span>Day student readiness programmes</span></div><div className="stat-card"><b>Live</b><span>Industry and MSME projects</span></div><div className="stat-card"><b>End-to-end</b><span>CoE and E-Cell support</span></div></div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-heading contact-heading reveal"><p className="eyebrow light-eyebrow">Get started</p><h2>Let’s build something <em>meaningful.</em></h2><p className="lead">Tell us whether you are a student, college, university, MSME or industry partner. Our team will recommend the right programme or service package.</p></div>
            <div className="contact-grid">
              <form className="contact-form reveal" onSubmit={handleSubmit}>
                <div className="form-heading"><h3>Tell us about your requirement</h3><p>Fields marked * are required.</p></div>
                <div className="form-row"><label>Full name *<input type="text" placeholder="Your full name" required /></label><label>Email address *<input type="email" placeholder="you@example.com" required /></label></div>
                <div className="form-row"><label>Phone number<input type="tel" placeholder="+91 00000 00000" /></label><label>I am interested in *<select required defaultValue=""><option value="" disabled>Select a service</option><option>Market Readiness Programme</option><option>EdTech partnership</option><option>Marketing-as-a-Service</option><option>Energy consulting</option><option>Centre of Excellence</option><option>Entrepreneurship Cell</option></select></label></div>
                <label>Tell us about your requirement<textarea placeholder="Share a little about your goals..." rows="4" /></label>
                <button className="btn submit-btn" type="submit">Submit Enquiry <span>↗</span></button>
                {submitted && <p className="form-success" role="status">Thank you! Your demo enquiry has been captured in this page. Connect a backend or email service before going live.</p>}
                <p className="form-note">Demo form only — connect your email or backend before launch.</p>
              </form>
              <div className="contact-side reveal reveal-delay">
                <div className="contact-side-title"><span className="contact-spark">✳</span><h3>One ecosystem.<br />Many ways to grow.</h3></div>
                {[["Students & Parents", "Join a Market Readiness batch and build job-ready skills through live projects."],["Universities", "Launch a Centre of Excellence or Entrepreneurship Cell with SAPPCO’s structured operating model."],["MSMEs & Industry", "Access marketing support, energy consulting and a pipeline of trained student talent."]].map(([title, desc], i) => <div className="contact-audience" key={title}><span className="audience-number">0{i + 1}</span><div><h4>{title}</h4><p>{desc}</p></div></div>)}
                <div className="contact-email"><span>✉</span><div><small>Email us</small><b>hello@sappco.in</b></div><span className="email-arrow">↗</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="container footer-top"><a className="brand footer-brand" href="#home"><span className="brand-mark">SAPPCO</span><span className="brand-subtitle">Skills • Academia • Projects • Consulting</span></a><p>Building bridges between learning and real-world growth.</p><a href="#home" className="back-top">Back to top ↑</a></div><div className="container footer-bottom"><span>© 2026 SAPPCO. All rights reserved.</span><span>EdTech <i /> Market Readiness <i /> MSME Marketing <i /> Energy Consulting <i /> CoE <i /> E-Cell</span></div></footer>
    </div>
  );
}

export default App;
