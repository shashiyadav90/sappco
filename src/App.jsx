import React, { useEffect, useState } from "react";
import "./App.css";

const IMAGE_ASSETS = {
  home: "/images/sappco-group-hero.png",
  education: "/images/sappco-education-learning.png",
  consulting: "/images/sappco-consulting-strategy.png",
  ecommerce: "/images/sappco-ecommerce-store.png",
  export: "/images/sappco-export-global-trade.png",
  energy: "/images/sappco-energy-solar.png",
  retail: "/images/sappco-retail-experience.png",
  collaboration: "/images/sappco-collaboration.png",
};

const BUSINESS_DATA = {
  Home: {
    eyebrow: "One group · Diverse business verticals",
    title: "One Group. Multiple Ways to Grow.",
    highlight: "Grow.",
    description:
      "SappCo brings together a diverse portfolio of business verticals designed to address opportunities across education, consulting, digital commerce, international trade, energy and retail.",
    secondary:
      "We connect expertise, opportunities and execution to help individuals, businesses and institutions move forward with confidence.",
    image: IMAGE_ASSETS.home,
    imageAlt: "SappCo business ecosystem",
    primaryCta: "Explore Our Businesses",
    secondaryCta: "Connect With SappCo",
    introTitle: "Diverse verticals. One commitment to progress.",
    intro:
      "A connected group with distinct business units, each focused on understanding customer needs and helping turn opportunities into practical action.",
    offerings: [
      { icon: "✳", title: "Education", description: "Learning that prepares people for what's next.", tab: "Education" },
      { icon: "↗", title: "Consulting", description: "Turn business challenges into growth opportunities.", tab: "Consulting" },
      { icon: "▣", title: "ECommerce", description: "Take your business where your customers are.", tab: "ECommerce" },
      { icon: "◎", title: "Export", description: "Connect your business with global opportunities.", tab: "Export" },
      { icon: "⌁", title: "Energy", description: "Make smarter decisions about energy.", tab: "Energy" },
      { icon: "◇", title: "Retail", description: "Create better experiences and stronger retail businesses.", tab: "Retail" },
    ],
    audienceTitle: "A diverse perspective on business",
    audience: [
      "A portfolio designed around different market needs",
      "Solutions shaped around customer requirements",
      "Collaboration with relevant experts and partners",
      "A focus on practical, actionable outcomes",
    ],
    process: ["Understand the need", "Identify the opportunity", "Build the approach", "Move forward together"],
    closingTitle: "Let's build what's next.",
    closingText:
      "Whether you are an institution, entrepreneur, business owner or potential partner, SappCo invites you to explore opportunities to work together.",
    closingCta: "Connect With SappCo",
  },
  Education: {
    eyebrow: "Learning · Skills · Development",
    title: "Empowering Minds. Building Future-Ready Careers.",
    highlight: "Future-Ready Careers.",
    description:
      "Education should do more than impart knowledge. It should equip learners with the skills, confidence and capabilities to succeed in a rapidly evolving world.",
    secondary:
      "SappCo Education aims to bridge the gap between learning and real-world application through practical, outcome-oriented educational solutions.",
    image: IMAGE_ASSETS.education,
    imageAlt: "Learners collaborating in a modern learning environment",
    primaryCta: "Explore Our Programs",
    secondaryCta: "Partner With Us",
    introTitle: "Education that goes beyond the classroom.",
    intro:
      "Meaningful education connects academic knowledge with practical skills, industry expectations and lifelong learning. Our approach focuses on making learning relevant, accessible and aligned with future opportunities.",
    offerings: [
      { icon: "▤", title: "Academic & Professional Learning", description: "Structured learning programs that strengthen subject knowledge, professional capabilities and practical application." },
      { icon: "✳", title: "Skill Development Programs", description: "Training initiatives focused on developing relevant technical, functional and professional skills." },
      { icon: "⌘", title: "Industry-Oriented Training", description: "Practical learning experiences, expert-led sessions and exposure to real-world business challenges." },
      { icon: "⌂", title: "Institutional Partnerships", description: "Collaborations with educational institutions to design and deliver learning initiatives aligned with their objectives." },
      { icon: "↗", title: "Career & Capability Development", description: "Programs that support learners in preparing for career opportunities and continuous professional growth." },
    ],
    audienceTitle: "Who we serve",
    audience: [
      "Business Schools, colleges and universities",
      "Students and fresh graduates",
      "Working professionals",
      "Corporate learning and development teams",
      "Education and training partners",
    ],
    process: ["Understand learning needs", "Identify capability gaps", "Deliver relevant learning", "Measure progress"],
    closingTitle: "Let's make learning more meaningful.",
    closingText:
      "Partner with SappCo Education to create learning experiences that connect knowledge with opportunity.",
    closingCta: "Discuss an Education Partnership",
  },
  Consulting: {
    eyebrow: "Strategy · Expertise · Execution",
    title: "Clearer Strategy. Smarter Decisions. Sustainable Growth.",
    highlight: "Sustainable Growth.",
    description:
      "Every business reaches a point where its next stage of growth demands new thinking, better processes and stronger execution.",
    secondary:
      "SappCo Consulting aims to help organisations identify opportunities, solve business challenges and translate strategy into measurable action.",
    image: IMAGE_ASSETS.consulting,
    imageAlt: "Business team discussing a strategy",
    primaryCta: "Discuss Your Business Challenge",
    secondaryCta: "Explore Our Expertise",
    introTitle: "Turning business challenges into opportunities.",
    intro:
      "Successful businesses need more than ideas. They need clarity, structured decision-making and the ability to execute consistently. We work towards helping organisations improve how they plan, operate and grow.",
    offerings: [
      { icon: "↗", title: "Business Strategy & Advisory", description: "Support in defining business priorities, growth opportunities, market positioning and strategic direction." },
      { icon: "⌘", title: "Business Process Improvement", description: "Review existing workflows, identify operational gaps and recommend improvements to efficiency and productivity." },
      { icon: "◉", title: "Market Research & Business Intelligence", description: "Market assessments, competitive analysis and business insights to support informed decisions." },
      { icon: "◎", title: "Growth & Expansion Strategy", description: "Evaluate new markets, customer segments, revenue opportunities and potential partnerships." },
      { icon: "◇", title: "Organisational Effectiveness", description: "Support in role clarity, performance management, capability development and operational alignment." },
      { icon: "▤", title: "Project & Implementation Support", description: "Help translate business plans into structured initiatives, milestones and execution roadmaps." },
    ],
    audienceTitle: "Who we serve",
    audience: [
      "Startups and emerging businesses",
      "Small and medium-sized enterprises",
      "Established companies",
      "Business owners and leadership teams",
      "Organisations exploring new markets",
    ],
    process: ["Understand the challenge", "Build the strategy", "Enable execution", "Evaluate outcomes"],
    closingTitle: "Your next stage of growth starts with the right conversation.",
    closingText:
      "Let's explore the opportunities, challenges and priorities shaping your business.",
    closingCta: "Speak to Our Consulting Team",
  },
  ECommerce: {
    eyebrow: "Digital commerce · Online growth",
    title: "Take Your Business Online. Turn Digital Reach Into Revenue.",
    highlight: "Revenue.",
    description:
      "ECommerce creates opportunities to reach new customers, expand beyond geographical boundaries and build scalable business models.",
    secondary:
      "SappCo ECommerce aims to help businesses establish, manage and grow their online presence through integrated digital commerce solutions.",
    image: IMAGE_ASSETS.ecommerce,
    imageAlt: "Online store and digital commerce experience",
    primaryCta: "Build Your Online Business",
    secondaryCta: "Explore Our Solutions",
    introTitle: "Your digital storefront. Your growth opportunity.",
    intro:
      "A successful online business requires more than a website. It needs the right products, customer experience, digital visibility, order management and a strategy to convert visitors into repeat customers.",
    offerings: [
      { icon: "▣", title: "ECommerce Website Development", description: "Online storefronts designed to present products effectively and support a smooth buying journey." },
      { icon: "◇", title: "Marketplace Onboarding & Management", description: "Support for setting up and managing product listings across relevant online marketplaces." },
      { icon: "↗", title: "Digital Marketing & Customer Acquisition", description: "Campaign planning, audience targeting and initiatives designed to generate qualified traffic and leads." },
      { icon: "▤", title: "Product Catalogue & Merchandising", description: "Product presentation, descriptions, categorisation and catalogue optimisation." },
      { icon: "⌁", title: "Order & Fulfilment Integration", description: "Support for coordinating orders, inventory visibility, payment workflows and delivery integrations." },
      { icon: "◉", title: "Customer Retention & Analytics", description: "Track sales, conversions and customer behaviour while supporting repeat-purchase initiatives." },
    ],
    audienceTitle: "Who we serve",
    audience: [
      "Manufacturers and distributors",
      "Consumer brands and D2C businesses",
      "Startups and entrepreneurs",
      "Small and medium-sized businesses",
      "Businesses moving from offline to online sales",
    ],
    process: ["Plan your digital business", "Build your storefront", "Attract the right customers", "Optimise for growth"],
    closingTitle: "Ready to build your digital sales channel?",
    closingText:
      "Let's turn your business idea or existing product portfolio into an online growth opportunity.",
    closingCta: "Start Your ECommerce Journey",
  },
  Export: {
    eyebrow: "International trade · Market access",
    title: "From Local Enterprise to Global Opportunity.",
    highlight: "Global Opportunity.",
    description:
      "International markets offer businesses opportunities to diversify revenue, expand their customer base and build global relationships.",
    secondary:
      "SappCo Export aims to support businesses in exploring export opportunities and navigating the journey from domestic operations to international trade.",
    image: IMAGE_ASSETS.export,
    imageAlt: "Global trade and international shipping",
    primaryCta: "Explore Export Opportunities",
    secondaryCta: "Connect With Our Trade Team",
    introTitle: "Helping businesses think beyond borders.",
    intro:
      "Exporting requires more than identifying an overseas buyer. Businesses must understand market demand, product requirements, documentation, logistics and the commercial realities of international trade.",
    offerings: [
      { icon: "◎", title: "Export Market Research", description: "Identify potential countries, customer segments, market demand and competitive opportunities for suitable products." },
      { icon: "↗", title: "Buyer & Distributor Identification", description: "Support in identifying prospective international buyers, distributors and channel partners." },
      { icon: "▤", title: "Export Readiness Assessment", description: "Review product suitability, business readiness, documentation needs and potential market-entry challenges." },
      { icon: "⌘", title: "Documentation & Compliance Support", description: "Guidance on applicable registrations, documentation and regulatory requirements, subject to product and destination market." },
      { icon: "⌁", title: "Trade & Logistics Coordination", description: "Explore freight, shipping, packaging and logistics arrangements through relevant service partners." },
      { icon: "◇", title: "Market Entry Strategy", description: "Develop a structured approach to market selection, pricing, distribution and international business development." },
    ],
    audienceTitle: "Who we serve",
    audience: [
      "Manufacturers and producers",
      "MSMEs and growing enterprises",
      "Consumer product businesses",
      "Agricultural and industrial product businesses",
      "Brands exploring international expansion",
    ],
    process: ["Assess readiness", "Identify markets", "Develop connections", "Support market entry"],
    closingTitle: "Your next customer could be in another country.",
    closingText:
      "Let's explore the markets, partnerships and opportunities that could take your business global.",
    closingCta: "Discuss Your Export Plans",
    note: "Export advisory and facilitation are distinct from actual export trading. Services should be confirmed against SappCo's authorised capabilities.",
  },
  Energy: {
    eyebrow: "Energy solutions · Efficiency · Sustainability",
    title: "Powering Progress Through Smarter Energy Solutions.",
    highlight: "Smarter Energy Solutions.",
    description:
      "Energy decisions influence operating costs, business resilience and long-term sustainability.",
    secondary:
      "SappCo Energy aims to help businesses and other customers explore appropriate energy solutions aligned with operational requirements, efficiency goals and future plans.",
    image: IMAGE_ASSETS.energy,
    imageAlt: "Solar panels on a commercial building",
    primaryCta: "Explore Energy Solutions",
    secondaryCta: "Request a Consultation",
    introTitle: "Better energy decisions start with the right approach.",
    intro:
      "Every organisation has different energy needs. The right solution depends on consumption patterns, infrastructure, operating requirements, investment capacity and long-term objectives.",
    offerings: [
      { icon: "⌁", title: "Renewable Energy Solutions", description: "Explore suitable renewable energy options, including solar solutions, based on site conditions and customer requirements." },
      { icon: "◉", title: "Energy Assessment & Efficiency", description: "Review energy consumption and identify potential opportunities to improve efficiency and reduce avoidable energy costs." },
      { icon: "⌂", title: "Commercial & Industrial Solutions", description: "Support businesses in evaluating energy requirements and suitable solutions for facilities and operations." },
      { icon: "▤", title: "Energy Project Advisory", description: "Help assess project feasibility, implementation options, investment considerations and potential partners." },
      { icon: "◇", title: "Procurement & Vendor Coordination", description: "Facilitate engagement with suitable equipment suppliers, solution providers and implementation partners." },
      { icon: "↗", title: "Sustainability & Energy Planning", description: "Support practical energy roadmaps aligned with operational priorities and sustainability objectives." },
    ],
    audienceTitle: "Who we serve",
    audience: [
      "Commercial establishments",
      "Manufacturing and industrial businesses",
      "Institutional campuses",
      "Commercial property owners",
      "SMEs and large enterprises",
    ],
    process: ["Understand consumption", "Evaluate solutions", "Assess feasibility", "Enable implementation"],
    closingTitle: "Make your next energy decision with confidence.",
    closingText:
      "Let's understand your requirements and explore the right solution for your organisation.",
    closingCta: "Discuss Your Energy Requirements",
    note: "The final offering list should reflect SappCo's actual energy portfolio. Do not imply installation, engineering, financing or energy supply capabilities unless available directly or through established partners.",
  },
  Retail: {
    eyebrow: "Retail operations · Customer experience",
    title: "Better Retail Experiences. Stronger Business Performance.",
    highlight: "Stronger Business Performance.",
    description:
      "Retail success depends on understanding customers, maintaining product availability, managing operations and delivering consistent experiences across every touchpoint.",
    secondary:
      "SappCo Retail aims to help retailers build efficient, customer-focused businesses equipped to grow.",
    image: IMAGE_ASSETS.retail,
    imageAlt: "Modern retail store and customer experience",
    primaryCta: "Explore Retail Solutions",
    secondaryCta: "Discuss Your Retail Business",
    introTitle: "Bringing customers, operations and growth together.",
    intro:
      "Retailers must balance customer expectations, operating costs, inventory, merchandising and competition. A structured approach to retail operations can help improve consistency, customer satisfaction and business performance.",
    offerings: [
      { icon: "⌂", title: "Retail Business Setup", description: "Planning support for new retail ventures, including business requirements, store concepts and operational readiness." },
      { icon: "▤", title: "Store Operations & Management", description: "Support in improving daily operating processes, staff workflows, service standards and store performance." },
      { icon: "↗", title: "Retail Strategy & Expansion", description: "Evaluate opportunities for new locations, business growth, store formats and market expansion." },
      { icon: "◇", title: "Merchandising & Product Presentation", description: "Improve product assortment, visibility, in-store presentation and customer navigation." },
      { icon: "⌁", title: "Inventory & Supply Chain Coordination", description: "Support in reviewing stock management, replenishment processes and coordination between stores and suppliers." },
      { icon: "◉", title: "Retail Technology & Omnichannel", description: "Explore POS systems, inventory tools, customer management and integrations between physical and online channels." },
      { icon: "✳", title: "Customer Experience & Loyalty", description: "Develop initiatives to improve service quality, customer engagement and repeat business." },
    ],
    audienceTitle: "Who we serve",
    audience: [
      "Independent retailers",
      "Retail chains and multi-store operators",
      "Consumer brands",
      "Distributors and wholesalers",
      "New retail entrepreneurs",
    ],
    process: ["Understand the customer", "Strengthen operations", "Improve the experience", "Enable growth"],
    closingTitle: "Build a retail business that customers return to.",
    closingText:
      "Let's explore how your retail operations can become more efficient, customer-focused and ready for growth.",
    closingCta: "Talk to Our Retail Team",
  },
};

const BUSINESS_TABS = ["Home", "Education", "Consulting", "ECommerce", "Export", "Energy", "Retail"];

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [openPerspective, setOpenPerspective] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const business = BUSINESS_DATA[activeTab];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpenFaq(0);
  }, [activeTab]);

  const selectTab = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setSubmitted(false);
  };

  const jumpToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const faqs = [
    {
      question: "What is SappCo?",
      answer: "SappCo is a parent brand bringing together diverse business verticals: Education, Consulting, ECommerce, Export, Energy and Retail.",
    },
    {
      question: "Do the business verticals have separate services?",
      answer: "Yes. Each vertical has its own focus, offerings and enquiry pathway while remaining part of the wider SappCo group.",
    },
    {
      question: "Can I discuss a requirement before choosing a service?",
      answer: "Of course. Use the enquiry form and describe your needs. The SappCo team can direct your enquiry to the relevant business area.",
    },
    {
      question: "Are all services delivered directly by SappCo?",
      answer: "The final service scope should be confirmed with SappCo. Certain specialist activities may depend on qualified service or implementation partners.",
    },
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-main">

          <button
            className="brand"
            onClick={() => selectTab("Home")}
            aria-label="SappCo home"
          >
            <span className="brand-copy">
              <strong>
                <span className="brand-name">SappCo</span>{" "}
                <span className="brand-group">Group</span>
              </strong>
              <small>One group. Diverse verticals.</small>
            </span>
          </button>


          <button
            className={`mobile-toggle ${mobileMenuOpen ? "is-open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle business navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span /><span /><span />
          </button>

          <nav className={`business-nav ${mobileMenuOpen ? "nav-open" : ""}`} aria-label="Business verticals">
            {BUSINESS_TABS.map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => selectTab(tab)}
                aria-current={activeTab === tab ? "page" : undefined}
              >
                {tab === "Home" ? "Overview" : tab}
              </button>
            ))}
            <button className="button button-small nav-contact" onClick={jumpToContact}>
              Let's talk <span>↗</span>
            </button>
          </nav>
        </div>
        {/*
        <div className="header-bottom">
          <div className="container header-bottom-inner">
            <span className="live-dot" />
            <span>{activeTab === "Home" ? "A connected business ecosystem" : `SappCo ${activeTab}`}</span>
            <span className="header-bottom-spacer" />
            <span className="header-meta">Ideas into action <b>·</b> Opportunities into growth</span>
          </div>
        </div>
        */}
      </header>

      <main key={activeTab} className="page-content">
        <section className={`hero ${activeTab === "Home" ? "hero-home" : ""}`}>
          <div className="hero-backdrop-shape shape-one" />
          <div className="hero-backdrop-shape shape-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="eyebrow-line" />{business.eyebrow}</div>
              <h1>{business.title.split(business.highlight)[0]}<em>{business.highlight}</em>{business.title.split(business.highlight)[1]}</h1>
              <p className="hero-description">{business.description}</p>
              <p className="hero-secondary">{business.secondary}</p>
              <div className="hero-actions">
                <button className="button" onClick={activeTab === "Home" ? () => document.getElementById("businesses")?.scrollIntoView({ behavior: "smooth" }) : jumpToContact}>
                  {business.primaryCta}<span>↗</span>
                </button>
                <button className="button button-quiet" onClick={jumpToContact}>
                  {business.secondaryCta}<span>→</span>
                </button>
              </div>
              <div className="hero-footnote">
                <div className="footnote-mark"><span>✳</span></div>
                <p><strong>One parent brand. Distinct business units.</strong><br />Built around real needs and practical next steps.</p>
              </div>
            </div>


            <div className="hero-art reveal reveal-delay">
              <div className="image-halo" />

              <div className="hero-image-frame">
                <img
                  src={business.image}
                  alt={business.imageAlt}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement.classList.add("image-fallback");
                  }}
                />

                <div className="image-fallback-content">
                  <span className="fallback-orbit orbit-a" />
                  <span className="fallback-orbit orbit-b" />

                  <div className="fallback-logo">S</div>

                  <strong>
                    {activeTab === "Home" ? "SappCo ecosystem" : `SappCo ${activeTab}`}
                  </strong>

                  <small>
                    {activeTab === "Home"
                      ? "One group · multiple growth opportunities"
                      : business.eyebrow}
                  </small>
                </div>

                <div className="image-caption">
                  <span className="caption-dot" />
                  {activeTab === "Home"
                    ? "One connected ecosystem"
                    : `${activeTab} · SappCo`}
                </div>
              </div>

              <div className="floating-note floating-note-top">
                <span className="note-icon">✳</span>
                <div>
                  <b>Purpose-led</b>
                  <small>Customer-focused thinking</small>
                </div>
              </div>

              <div className="floating-note floating-note-bottom">
                <span className="note-icon note-icon-dark">↗</span>
                <div>
                  <b>Practical by design</b>
                  <small>From opportunity to action</small>
                </div>
              </div>
            </div>

          </div>
          <div className="container hero-bottom">
            <span>EDUCATION</span><i /><span>CONSULTING</span><i /><span>ECOMMERCE</span><i /><span>EXPORT</span><i /><span>ENERGY</span><i /><span>RETAIL</span>
          </div>
        </section>


        {activeTab !== "Home" && (
          <>
            <section className="section intro-section">
              <div className="container intro-grid">
                <div className="intro-heading reveal">
                  <div className="eyebrow">
                    <span className="eyebrow-line" />
                    What we believe
                  </div>
                  <h2>{business.introTitle}</h2>
                </div>

                <div className="intro-body reveal reveal-delay">
                  <p>{business.intro}</p>
                  <div className="intro-signature">
                    <span className="signature-mark">S</span>
                    <span>
                      <b>SappCo {activeTab}</b>
                      <small>Part of the SappCo group</small>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="section offerings-section" id="offerings">
              <div className="container">
                <div className="section-heading section-heading-row reveal">
                  <div>
                    <div className="eyebrow">
                      <span className="eyebrow-line" />
                      What we offer
                    </div>
                    <h2>Solutions shaped around your needs.</h2>
                  </div>
                  <p>
                    Explore the areas where SappCo {activeTab} aims to help.
                    Final scope can be tailored to your requirements and
                    confirmed during an initial conversation.
                  </p>
                </div>

                <div className="offerings-grid">
                  {business.offerings.map((item, index) => (
                    <article
                      className={`offering-card reveal delay-${index % 3}`}
                      key={item.title}
                    >
                      <div className="offering-icon">{item.icon}</div>
                      <span className="offering-number">
                        0{index + 1}
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <button className="inline-link" onClick={jumpToContact}>
                        Discuss this service <span>↗</span>
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}


        <section className="audience-section section">
          <div className="container audience-layout">
            <div className="audience-copy reveal">
              <div className="eyebrow"><span className="eyebrow-line" />Who we work with</div>
              <h2>{business.audienceTitle || "A partner for your next step."}</h2>
              <p>We start by understanding the context, priorities and goals of the people and organisations we work with.</p>
              <button className="button" onClick={jumpToContact}>Find the right fit <span>↗</span></button>
            </div>
            <div className="audience-list reveal reveal-delay">
              {business.audience.map((item, index) => (
                <div className="audience-item" key={item}>
                  <span className="audience-index">0{index + 1}</span>
                  <span>{item}</span>
                  <span className="audience-check">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach-section">
          <div className="container">
            <div className="section-heading centered reveal">
              <div className="eyebrow"><span className="eyebrow-line" />Our approach</div>
              <h2>Clear steps. Shared direction.</h2>
              <p>A straightforward process that keeps your needs at the centre, from the first conversation through to the next practical step.</p>
            </div>
            <div className="process-grid">
              {business.process.map((step, index) => (
                <article className={`process-card reveal delay-${index % 3}`} key={step}>
                  <div className="process-top"><span>0{index + 1}</span>{index < business.process.length - 1 && <i />}</div>
                  <h3>{step}</h3>
                  <p>{[
                    "Start with the context, goals and requirements that matter to you.",
                    "Clarify priorities and identify suitable options.",
                    "Shape an approach around the needs and available resources.",
                    "Agree on next steps and ways to review progress.",
                  ][index]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="section perspective-faq-section">
          <div className="container">
            <div className="perspective-faq-box">

              {/* LEFT COLUMN: THE SappCo PERSPECTIVE */}
              <div className="perspective-column">
                <div className="eyebrow scroll-reveal">
                  <span className="eyebrow-line" />
                  The SappCo perspective
                </div>

                <h2 className="perspective-title scroll-reveal reveal-delay-1">
                  Connected thinking.
                  <br />
                  <em>Distinct expertise.</em>
                </h2>

                <p className="perspective-description scroll-reveal reveal-delay-2">
                  SappCo brings a broader business perspective while keeping
                  each vertical focused on its audience, goals and requirements.
                </p>


                <div className="perspective-points">
                  {[
                    [
                      "01",
                      "A diverse business perspective",
                      "A portfolio designed to address different market needs.",
                    ],
                    [
                      "02",
                      "Solutions built around requirements",
                      "An approach that begins by understanding the customer and the challenge.",
                    ],
                    [
                      "03",
                      "Collaboration & partnerships",
                      "Engagement with relevant experts, businesses and ecosystem partners.",
                    ],
                    [
                      "04",
                      "Focus on practical outcomes",
                      "An emphasis on translating ideas and opportunities into actionable solutions.",
                    ],
                  ].map(([num, title, desc], index) => (
                    <div
                      className={`perspective-point ${openPerspective === index ? "perspective-open" : ""
                        }`}
                      key={num}
                    >
                      <span className="perspective-number">{num}</span>

                      <button
                        type="button"
                        className="perspective-toggle"
                        onClick={() =>
                          setOpenPerspective(openPerspective === index ? -1 : index)
                        }
                        aria-expanded={openPerspective === index}
                      >
                        <span className="perspective-point-content">
                          <span className="perspective-point-title">{title}</span>

                          {openPerspective === index && (
                            <span className="perspective-point-description">
                              {desc}
                            </span>
                          )}
                        </span>

                        <span className="perspective-arrow">
                          {openPerspective === index ? "−" : "+"}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>

              </div>

              {/* RIGHT COLUMN: FREQUENTLY ASKED QUESTIONS */}
              <div className="combined-faq-column">
                <div className="eyebrow scroll-reveal">
                  <span className="eyebrow-line" />
                  Good to know
                </div>

                <h2 className="faq-title scroll-reveal reveal-delay-1">
                  Your questions,
                  <br />
                  <em>answered.</em>
                </h2>

                <p className="faq-description scroll-reveal reveal-delay-2">
                  Have a specific requirement? Our team can help direct you
                  to the right business vertical.
                </p>

                {/*
        <button
          className="inline-link faq-contact-link scroll-reveal reveal-delay-3"
          onClick={jumpToContact}
        >
          Ask us a question <span>↗</span>
        </button>
        */}

                <div className="combined-faq-list">
                  {faqs.map((faq, index) => (
                    <div
                      className={`combined-faq-item scroll-reveal reveal-delay-${Math.min(
                        index + 1,
                        4
                      )} ${openFaq === index ? "faq-open" : ""}`}
                      key={faq.question}
                    >
                      <button
                        className="combined-faq-question"
                        onClick={() =>
                          setOpenFaq(openFaq === index ? -1 : index)
                        }
                        aria-expanded={openFaq === index}
                      >
                        <span>{faq.question}</span>
                        <b>{openFaq === index ? "−" : "+"}</b>
                      </button>

                      {openFaq === index && (
                        <p className="combined-faq-answer">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <div className="container contact-layout">
            <div className="contact-copy reveal">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" />Start a conversation</div>
              <h2>{business.closingTitle}</h2>
              <p>{business.closingText}</p>
              <div className="contact-detail"><span className="contact-detail-icon">✉</span><div><small>Contact SappCo</small><a href="mailto:contact@sappco.in">contact@sappco.in</a></div></div>
              <div className="contact-detail"><span className="contact-detail-icon">↗</span><div><small>Selected business</small><b>{activeTab === "Home" ? "SappCo Group" : `SappCo ${activeTab}`}</b></div></div>
              {business.note && <p className="service-note">{business.note}</p>}
            </div>
            <form className="contact-form reveal reveal-delay" onSubmit={handleSubmit}>
              <div className="form-title"><span>LET'S CONNECT</span><h3>Tell us what you're looking for.</h3><p>Share a few details and we'll know where to direct your enquiry.</p></div>
              <div className="form-row">
                <label>Full name *<input name="name" type="text" placeholder="Your name" required /></label>
                <label>Work email *<input name="email" type="email" placeholder="you@company.com" required /></label>
              </div>
              <div className="form-row">
                <label>Phone number<input name="phone" type="tel" placeholder="+91 00000 00000" /></label>
                <label>Business vertical
                  <select name="business" value={activeTab === "Home" ? "" : activeTab} onChange={(event) => event.target.value && setActiveTab(event.target.value)} required>
                    <option value="" disabled>Select a vertical</option>
                    {BUSINESS_TABS.filter((tab) => tab !== "Home").map((tab) => <option key={tab} value={tab}>SappCo {tab}</option>)}
                  </select>
                </label>
              </div>
              <label>Your requirement<textarea name="message" rows="4" placeholder="Tell us a little about your goals..." /></label>
              <button className="button form-submit" type="submit">Send enquiry <span>↗</span></button>
              {submitted && <p className="form-success" role="status">Thank you. This demo form is ready for backend or email-service integration.</p>}
              <small className="form-disclaimer">Demo form only. Connect an email service or backend before publishing.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <button className="brand footer-brand" onClick={() => selectTab("Home")} aria-label="SappCo home">
            <span className="brand-copy">
              <strong>
                <span className="brand-name">SappCo</span>{" "}
                <span className="brand-group">Group</span>
              </strong>
              <small>One group. Diverse verticals.</small>
            </span>
          </button>
          <p>Connecting expertise, opportunities and execution.</p>
          <button className="footer-top-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 SappCo. All rights reserved.</span>
          <div>{BUSINESS_TABS.filter((tab) => tab !== "Home").map((tab) => <button key={tab} onClick={() => selectTab(tab)}>{tab}</button>)}</div>
        </div>
      </footer>

    </div>
  );
}

export default App;

