import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  FileText,
  Globe2,
  LayoutGrid,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundCheck,
  X
} from "lucide-react";
import "./styles.css";

const company = {
  phone: "+1 (604) 555-0198",
  email: "hello@yoursoftdigital.ca",
  address: "Surrey, BC, Canada"
};

const services = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: Code2,
    summary: "Conversion-focused websites, portals, and web platforms built for speed, SEO, and scale.",
    bullets: ["Custom websites", "Responsive design", "SEO-friendly architecture"],
    process: ["Discovery and content structure", "UX wireframes and visual system", "Frontend and backend development", "QA, launch, and performance tuning"]
  },
  {
    slug: "app-development",
    title: "App Development",
    icon: MonitorSmartphone,
    summary: "Mobile and web apps that turn workflows, customer journeys, and internal tools into reliable software.",
    bullets: ["Mobile and web apps", "Scalable solutions", "UI/UX-focused product flows"],
    process: ["Product scope and user stories", "Prototype and technical plan", "Agile build sprints", "Release, analytics, and iteration"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    summary: "SEO, paid ads, and social growth campaigns designed around measurable pipeline impact.",
    bullets: ["Search engine optimization", "Google and social ads", "Social media growth"],
    process: ["Market and keyword research", "Campaign strategy", "Content, ad, and landing page execution", "Reporting and optimization"]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    icon: Palette,
    summary: "Brand, interface, and marketing creative systems that make your business easier to trust.",
    bullets: ["Branding systems", "UI/UX design", "Marketing creatives"],
    process: ["Brand and audience review", "Concept exploration", "Design production", "Delivery guidelines and assets"]
  }
];

const products = [
  {
    slug: "zodo-crm",
    title: "Zodo CRM",
    icon: BarChart3,
    summary: "A practical CRM for sales teams that need lead management, pipeline tracking, and automated follow-up.",
    benefits: ["Lead management", "Pipeline tracking", "Automation"],
    preview: ["New lead captured", "Proposal sent", "Follow-up scheduled", "Deal forecast updated"]
  },
  {
    slug: "ats-system",
    title: "ATS System",
    icon: UserRoundCheck,
    summary: "A hiring workflow platform for tracking candidates, roles, interviews, and team decisions in one place.",
    benefits: ["Candidate tracking", "Hiring workflow", "Recruiter dashboards"],
    preview: ["Screening", "Interview", "Offer", "Hired"]
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    icon: Bot,
    summary: "An automated support and lead-capture assistant trained around your offers, FAQs, and customer journey.",
    benefits: ["Automated support", "Lead capture", "24/7 qualification"],
    preview: ["Visitor question", "Qualified intent", "CRM handoff", "Booked call"]
  }
];

const packages = [
  {
    name: "Launch Website",
    price: "From $1,499",
    details: "Best for new businesses that need a credible, fast website.",
    items: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Contact form"]
  },
  {
    name: "Growth Website",
    price: "From $3,499",
    details: "For teams that need stronger content, lead capture, and analytics.",
    items: ["Up to 12 pages", "Service landing pages", "Analytics setup", "Speed optimization"]
  },
  {
    name: "Product Build",
    price: "Custom",
    details: "For SaaS, portals, web apps, and internal business platforms.",
    items: ["Product strategy", "UI/UX design", "Frontend and backend", "Cloud deployment"]
  }
];

const themeColors = ["#2563EB", "#0EA5E9", "#38BDF8", "#4F46E5"];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function pathFromHash() {
  return window.location.pathname || "/";
}

function useRoute() {
  const [path, setPath] = useState(pathFromHash());
  useEffect(() => {
    const onHash = () => {
      setPath(window.location.pathname || "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", onHash);
    return () => window.removeEventListener("popstate", onHash);
  }, []);
  return path;
}

function Link({ to, children, className, onClick, ariaLabel }) {
  const handleClick = (event) => {
    if (to.startsWith("/")) {
      event.preventDefault();
      window.history.pushState({}, "", to);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
    onClick?.(event);
  };
  return (
    <a href={to} className={className} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

function ButtonLink({ to, children, variant = "primary", className }) {
  return (
    <Link
      to={to}
      className={cx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-brand px-5 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "zodo-primary-button hover:-translate-y-0.5"
          : "zodo-secondary-button border border-line text-ink hover:border-brandCyan",
        className
      )}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

function LogoMark({ className = "h-10 w-10" }) {
  return (
    <img
      src="/assets/yoursoft-digital-logo-mark.png"
      alt=""
      className={cx("rounded-brand object-contain", className)}
      aria-hidden="true"
    />
  );
}

function LogoLockup({ className = "h-12 w-48" }) {
  return (
    <img
      src="/assets/yoursoft-digital-logo-new.png"
      alt="Yoursoft Digital"
      className={cx("object-contain object-left", className)}
    />
  );
}

function ParticleField() {
  const particles = [
    [8, 22, 0, 0],
    [18, 68, 1, 1],
    [28, 38, 2, 2],
    [42, 18, 3, 3],
    [56, 74, 0, 4],
    [64, 30, 1, 5],
    [76, 56, 2, 6],
    [88, 24, 3, 7],
    [92, 78, 0, 8],
    [36, 84, 1, 9],
    [14, 46, 2, 10],
    [70, 10, 3, 11]
  ];
  const paths = [
    [10, 24, 28, 38, 0],
    [29, 39, 43, 19, 1],
    [43, 20, 65, 31, 2],
    [66, 32, 77, 57, 3],
    [77, 58, 93, 79, 0],
    [19, 68, 37, 84, 1],
    [56, 74, 77, 57, 2]
  ];

  return (
    <div className="particle-field" aria-hidden="true">
      <div className="particle-mesh">
        {paths.map(([x1, y1, x2, y2, colorIndex], index) => (
          <span
            key={`${x1}-${y1}-${x2}-${y2}`}
            className="particle-link"
            style={{
              "--x1": `${x1}%`,
              "--y1": `${y1}%`,
              "--x2": `${x2}%`,
              "--y2": `${y2}%`,
              "--link-color": themeColors[colorIndex],
              animationDelay: `${index * 380}ms`
            }}
          />
        ))}
        {particles.map(([x, y, colorIndex, delay]) => (
          <span
            key={`${x}-${y}`}
            className="particle-node"
            style={{
              "--x": `${x}%`,
              "--y": `${y}%`,
              "--node-color": themeColors[colorIndex],
              animationDelay: `${delay * 210}ms`
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/products", "Products"],
    ["/pricing", "Pricing"],
    ["/contact", "Contact"]
  ];
  const serviceLinks = [
    ["/services/web-development", "Web Development"],
    ["/services/app-development", "App Development"],
    ["/services/digital-marketing", "Digital Marketing"],
    ["/services/graphic-design", "Graphic Design"]
  ];
  const productLinks = [
    ["/products/zodo-crm", "Zodo CRM"],
    ["/products/ai-chatbot", "AI Chatbot"],
    ["/products/ats-system", "ATS System"]
  ];
  const dropdowns = {
    Services: serviceLinks,
    Products: productLinks
  };
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center" ariaLabel="Yoursoft Digital home">
          <LogoLockup className="h-12 w-44 sm:w-52" />
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {nav.map(([to, label]) => {
            const items = dropdowns[label];
            if (!items) {
              return (
                  <Link key={to} to={to} className="text-sm font-medium text-muted transition hover:text-brandCyan">
                  {label}
                </Link>
              );
            }

            return (
              <div key={to} className="group relative flex h-[72px] items-center">
                <Link to={to} className="inline-flex items-center gap-1 text-sm font-medium text-muted transition hover:text-brandCyan group-hover:text-brandCyan">
                  {label}
                  <ChevronRight size={14} className="rotate-90 transition group-hover:translate-y-0.5" />
                </Link>
                <div className="pointer-events-none absolute left-1/2 top-[64px] w-64 -translate-x-1/2 translate-y-2 rounded-brand border border-line bg-white p-2 opacity-0 shadow-quiet transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {items.map(([itemTo, itemLabel], index) => (
                    <Link key={itemTo} to={itemTo} className="flex items-center justify-between rounded-brand px-4 py-3 text-sm font-semibold text-ink transition hover:bg-soft" style={{ "--item-color": themeColors[index % themeColors.length] }}>
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: themeColors[index % themeColors.length] }} />
                        {itemLabel}
                      </span>
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-ink" href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}>
            <Phone size={16} />
            Call Now
          </a>
          <ButtonLink to="/contact">Request Quote</ButtonLink>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-brand border border-line lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </nav>
      {open && (
        <div className="fixed right-0 top-0 z-[9999] h-screen w-screen bg-slate-500/35 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
          <div className="relative z-[10000] ml-auto h-screen w-[88vw] max-w-sm overflow-y-auto bg-white p-5 shadow-quiet" onClick={(event) => event.stopPropagation()}>
            <div className="mb-8 flex items-center justify-between">
              <LogoLockup className="h-12 w-52" />
              <button className="grid h-10 w-10 place-items-center rounded-brand border border-line" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>
            <div className="grid gap-1">
              {nav.map(([to, label]) => (
                <div key={to}>
                  <Link to={to} onClick={() => setOpen(false)} className="block rounded-brand px-3 py-4 text-base font-semibold text-ink hover:bg-soft">
                    {label}
                  </Link>
                  {dropdowns[label] && (
                    <div className="mb-2 ml-3 grid gap-1 border-l border-line pl-3">
                      {dropdowns[label].map(([itemTo, itemLabel], index) => (
                        <Link key={itemTo} to={itemTo} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-brand px-3 py-2.5 text-sm font-semibold text-muted hover:bg-soft hover:text-ink">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: themeColors[index % themeColors.length] }} />
                          {itemLabel}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <ButtonLink to="/contact" className="mt-8 w-full">Request Quote</ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center reveal">
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-ink md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-muted">{text}</p>}
    </div>
  );
}

function HeroVisual() {
  const metrics = [
    ["Active leads", "1,248", "+18%", themeColors[0]],
    ["Website visits", "15.4K", "+32%", themeColors[1]],
    ["Demo requests", "186", "+24%", themeColors[2]],
    ["Automation rate", "74%", "+11%", themeColors[3]]
  ];
  const modules = [
    ["Web", Globe2, themeColors[0]],
    ["Apps", MonitorSmartphone, themeColors[1]],
    ["CRM", BarChart3, themeColors[2]],
    ["AI Chat", Bot, themeColors[3]]
  ];
  const bars = [52, 68, 45, 78, 58, 86, 64, 72, 50, 82, 70, 92];
  const floatingBoxes = [
    ["Lead captured", "top-[13%] left-[7%]", themeColors[0]],
    ["Quote ready", "top-[20%] right-[6%]", themeColors[1]],
    ["CRM synced", "bottom-[18%] left-[6%]", themeColors[2]],
    ["AI handoff", "bottom-[15%] right-[7%]", themeColors[3]]
  ];

  return (
    <div className="hero-system hero-dashboard-stage" aria-label="Animated service and product dashboard">
      <div className="hero-dashboard-glow hero-dashboard-glow-one" />
      <div className="hero-dashboard-glow hero-dashboard-glow-two" />
      {floatingBoxes.map(([label, position, color], index) => (
        <div key={label} className={`hero-float-box ${position}`} style={{ "--box-color": color, animationDelay: `${index * 220}ms` }}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
          {label}
        </div>
      ))}
      <div className="hero-dashboard-window">
        <div className="hero-browser-bar">
          <div className="flex gap-1.5">
            {themeColors.slice(0, 3).map((color) => (
              <span key={color} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
            ))}
          </div>
          <span>yoursoftdigital.ca / growth-system</span>
          <Sparkles size={15} />
        </div>
        <div className="hero-dashboard-body">
          <aside className="hero-dashboard-sidebar">
            <LogoMark className="h-11 w-11" />
            {modules.map(([label, Icon, color], index) => (
              <div key={label} className="hero-sidebar-item" style={{ animationDelay: `${180 + index * 100}ms` }}>
                <Icon size={16} style={{ color }} />
                <span>{label}</span>
              </div>
            ))}
          </aside>
          <div className="hero-dashboard-main">
            <div className="hero-dashboard-heading">
              <div>
                <p>Connected Growth System</p>
                <h2>Services and SaaS moving together</h2>
              </div>
              <span className="hero-live-pill">Live</span>
            </div>
            <div className="hero-metric-grid">
              {metrics.map(([label, value, delta, color], index) => (
                <div key={label} className="hero-metric-box" style={{ "--box-color": color, animationDelay: `${index * 120}ms` }}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <em>{delta}</em>
                </div>
              ))}
            </div>
            <div className="hero-chart-panel">
              <div className="hero-chart-header">
                <span>Lead flow</span>
                <span>Web → CRM → AI</span>
              </div>
              <div className="hero-chart-bars">
                {bars.map((height, index) => (
                  <span key={index} style={{ "--bar-height": `${height}%`, "--bar-color": themeColors[index % themeColors.length], animationDelay: `${220 + index * 60}ms` }} />
                ))}
              </div>
            </div>
            <div className="hero-workflow-row">
              {["Request", "Build", "Launch", "Scale"].map((item, index) => (
                <span key={item} style={{ "--box-color": themeColors[index], animationDelay: `${360 + index * 100}ms` }}>
                  <Check size={14} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroTrustLine() {
  return (
    <div className="hero-trust-line mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-muted">
      {["Surrey, BC", "Web + apps", "CRM + AI products"].map((item, index) => (
        <span key={item} className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: themeColors[index] }} />
          {item}
        </span>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="noratrix-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div className="noratrix-hero-content">
            <div className="noratrix-promo-section">
              <div className="noratrix-integration-link">
                <span className="noratrix-integration-icon">
                  <img src="/assets/noratrix/img-dollar.svg" width="24" height="24" alt="" />
                </span>
                <span className="noratrix-integration-text">Discover a new Solutions to Grow your Business!</span>
              </div>
            </div>
            <h1>Creative IT Solutions To Grow Your Business</h1>
            <p>
              Yoursoft Digital builds websites, apps, marketing systems, and SaaS products that help modern businesses capture leads and operate smarter.
            </p>
            <div className="noratrix-btn-group">
              <Link to="/services" className="noratrix-dream-btn">our Services</Link>
              <Link to="/contact" className="noratrix-dream-btn">contact us</Link>
            </div>
          </div>
          <div className="noratrix-banner-box">
            <img src="/assets/noratrix/banner2.png" alt="Digital solution preview" />
          </div>
        </div>
      </section>
      <NoratrixHomeSections />
      <CTA title="Ready to turn the next idea into a working system?" text="Tell us what you are building. We will map the fastest path from scope to launch." cta="Start a Project" />
    </>
  );
}

function NoratrixHomeSections() {
  return (
    <>
      <NoratrixStats />
      <NoratrixAboutBlocks />
      <NoratrixDemoFeatures />
      <NoratrixCoreServices />
      <NoratrixProductShowcase />
      <NoratrixSubscribe />
      <NoratrixFAQ />
      <NoratrixPricing />
      <NoratrixInsights />
    </>
  );
}

function Dots({ centered = false }) {
  return (
    <div className={cx("dream-dots", centered && "justify-center")} aria-hidden="true">
      {[0, 1, 2, 3, 0, 1, 2].map((colorIndex, index) => (
        <span key={`${colorIndex}-${index}`} style={{ backgroundColor: themeColors[colorIndex] }} />
      ))}
    </div>
  );
}

function NoratrixSectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={cx("noratrix-section-heading reveal", light && "noratrix-section-heading-light")}>
      <Dots centered />
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <span>{text}</span>
    </div>
  );
}

function NoratrixStats() {
  const stats = [
    ["Canada base", "Surrey, BC"],
    ["Service lines", "4+"],
    ["SaaS products", "3"],
    ["Launch focus", "100%"]
  ];

  return (
    <section className="noratrix-st-bg">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map(([label, value], index) => (
          <div key={label} className="noratrix-cool-fact reveal" style={{ "--box-color": themeColors[index] }}>
            <div className="noratrix-cool-icon">
              {[UserRoundCheck, Check, Cpu, Target].map((Icon, iconIndex) => Icon && iconIndex === index ? <Icon key={label} size={24} /> : null)}
            </div>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function NoratrixAboutBlocks() {
  const blocks = [
    {
      image: "/assets/noratrix/about.png",
      title: "We complete every project with care around real business goals.",
      text: [
        "Yoursoft Digital builds websites, apps, campaigns, creative systems, and SaaS workflows that help teams capture demand and manage it cleanly.",
        "Instead of treating design, engineering, and growth as separate tracks, we plan each project as one connected digital system."
      ],
      action: "Explore Services",
      to: "/services"
    },
    {
      image: "/assets/noratrix/about2.png",
      title: "Services build the foundation. Products add the innovation layer.",
      text: [
        "Zodo CRM, ATS System, and AI Chatbot give businesses practical tools for sales, hiring, support, and automation.",
        "That product mindset shapes every service project with cleaner UX, stronger architecture, and better long-term scalability."
      ],
      action: "View Products",
      to: "/products",
      reverse: true
    }
  ];

  return (
    <section className="noratrix-about-area">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 lg:px-8">
        {blocks.map((block, index) => (
          <div key={block.title} className={cx("noratrix-about-row", block.reverse && "noratrix-about-row-reverse")}>
            <div className="noratrix-about-image reveal">
              <img src={block.image} alt="" />
              {index === 0 && (
                <div className="noratrix-growing-company">
                  <p>* Growing digital systems for Canadian businesses</p>
                </div>
              )}
            </div>
            <div className="noratrix-about-copy reveal">
              <Dots />
              <h2>{block.title}</h2>
              {block.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ButtonLink to={block.to} className="mt-7">{block.action}</ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NoratrixDemoFeatures() {
  const featureRows = [
    ["Strategy-first builds", "Every website, app, and product workflow starts with the customer journey, offer, and conversion path.", "/assets/noratrix/d1.png"],
    ["Responsive product UX", "Interfaces are designed for fast scanning, mobile performance, and teams that use the system every day.", "/assets/noratrix/d2.png"],
    ["Connected automation", "CRM, ATS, chatbot, forms, dashboards, and reporting can connect into one practical operating layer.", "/assets/noratrix/d3.png"]
  ];

  return (
    <section className="noratrix-demo-section">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <NoratrixSectionHeading eyebrow="Demo" title="A connected digital system, not isolated deliverables." text="See how public-facing pages, campaigns, and SaaS workflows can move together from lead capture to follow-up." />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="noratrix-video-card reveal">
            <img src="/assets/noratrix/bg-4.jpg" alt="Digital strategy preview" />
            <Link to="/contact" className="noratrix-play-button" aria-label="Book a strategy call">
              <ArrowRight size={24} />
            </Link>
          </div>
          <div className="grid gap-5">
            {featureRows.map(([title, text, image]) => (
              <div key={title} className="noratrix-feature-row reveal">
                <img src={image} alt="" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NoratrixCoreServices() {
  const cards = [
    ["Business Solutions", "Strategy, scope, and digital roadmaps for websites, apps, CRM, ATS, and automation.", "/assets/noratrix/1.svg"],
    ["Digital Marketing", "SEO, paid ads, social content, and landing pages designed around qualified leads.", "/assets/noratrix/2.svg"],
    ["Web Development", "Responsive, fast, SEO-friendly websites and portals with conversion-focused structure.", "/assets/noratrix/3.svg"],
    ["Mobile Applications", "Mobile and web apps with scalable architecture and clean UI/UX flows.", "/assets/noratrix/4.svg"],
    ["Product Analytics", "Dashboards, CRM reporting, funnel measurement, and product usage visibility.", "/assets/noratrix/5.svg"],
    ["Creative Systems", "Branding, UI/UX design, graphics, and reusable marketing creative for launch.", "/assets/noratrix/6.svg"]
  ];

  return (
    <section className="noratrix-services-area">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <NoratrixSectionHeading eyebrow="Core services" title="Our Core Services" text="Everything Yoursoft Digital offers is built to support lead generation, operations, and product growth." />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(([title, text, image], index) => (
            <Link key={title} to={index < 4 ? `/services/${services[index].slug}` : "/contact"} className="noratrix-service-card reveal" style={{ "--box-color": themeColors[index % themeColors.length] }}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoratrixProductShowcase() {
  const rows = [
    ["Zodo CRM", "Manage leads, pipelines, follow-ups, and sales visibility in one practical CRM workspace.", BarChart3],
    ["ATS System", "Track candidates, hiring stages, and recruiting workflows without spreadsheet chaos.", BriefcaseBusiness],
    ["AI Chatbot", "Capture leads and support customers automatically from your website and campaigns.", Bot]
  ];

  return (
    <section className="noratrix-app-section">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <NoratrixSectionHeading eyebrow="Products" title="SaaS products for daily business operations." text="Yoursoft services create the digital front door. Our products help your team manage what comes through it." />
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-6">
            {rows.map(([title, text, Icon], index) => (
              <Link key={title} to={`/products/${products[index].slug}`} className="noratrix-product-row reveal" style={{ "--box-color": themeColors[index] }}>
                <span><Icon size={22} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="noratrix-phone-stage reveal">
            <img className="noratrix-rings" src="/assets/noratrix/rings-bg.png" alt="" />
            <img className="noratrix-phone" src="/assets/noratrix/zodo-crm-mobile-preview.png" alt="Zodo CRM mobile dashboard preview" />
          </div>
        </div>
      </div>
    </section>
  );
}

function NoratrixSubscribe() {
  return (
    <section className="noratrix-subscribe-wrap">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="noratrix-subscribe reveal">
          <NoratrixSectionHeading light eyebrow="Updates" title="Don’t miss product and growth updates." text="Get launch notes, service ideas, and practical digital growth insights from Yoursoft Digital." />
          <div className="noratrix-subscribe-form">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="button"><Mail size={18} /> Join</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function NoratrixFAQ() {
  const faqs = [
    ["Can Yoursoft build both our website and software?", "Yes. We can deliver websites, apps, CRM workflows, ATS workflows, and chatbots as connected parts of one digital system."],
    ["Do your products replace custom service work?", "No. Services help shape and launch the right solution; products add repeatable workflows for sales, hiring, and support."],
    ["Can we start with a smaller package?", "Yes. Many clients begin with a website, landing page, or prototype, then expand into automation and SaaS workflows."],
    ["Are you based in Canada?", "Yes. Yoursoft Digital is based in Surrey, BC and supports businesses across Canada."]
  ];

  return (
    <section className="noratrix-faq-section">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <NoratrixSectionHeading eyebrow="FAQ" title="Frequently Asked Questions" text="Simple answers for businesses comparing websites, apps, marketing, and product automation." />
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="noratrix-faq-list">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="noratrix-faq-item reveal" style={{ "--box-color": themeColors[index] }}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
          <img className="noratrix-faq-image reveal" src="/assets/noratrix/faq.svg" alt="Frequently asked questions illustration" />
        </div>
      </div>
    </section>
  );
}

function NoratrixPricing() {
  const tiers = [
    ["Starter Website", "From $1.5K", "For focused business websites and landing pages.", ["Responsive pages", "SEO foundation", "Contact forms", "Launch support"]],
    ["Growth System", "Custom", "For services, campaigns, CRM, chatbot, and automation.", ["Website + funnels", "Campaign-ready pages", "CRM or chatbot setup", "Analytics handoff"]],
    ["Product Build", "Custom", "For SaaS, portals, apps, and internal platforms.", ["Product strategy", "UI/UX design", "Full-stack build", "Cloud deployment"]]
  ];

  return (
    <section className="noratrix-pricing-section">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <NoratrixSectionHeading eyebrow="Pricing" title="Our Pricing Plans" text="Choose a starting point, then we tailor scope around your goals, timeline, and integrations." />
        <div className="grid gap-7 lg:grid-cols-3">
          {tiers.map(([name, price, text, items], index) => (
            <div key={name} className={cx("noratrix-price-card reveal", index === 1 && "is-active")}>
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{text}</p>
              <div>
                {items.map((item) => (
                  <span key={item}><Check size={16} /> {item}</span>
                ))}
              </div>
              <ButtonLink to="/pricing" className="mt-7">Start</ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoratrixInsights() {
  const posts = [
    ["How to turn a website into a lead system.", "Build service pages, forms, CRM handoff, and analytics around the same conversion path.", "/assets/noratrix/1.jpg"],
    ["Why SaaS thinking improves service projects.", "Product-grade UX and architecture make websites and apps easier to extend after launch.", "/assets/noratrix/2.jpg"],
    ["Where AI chatbots fit in SMB growth.", "Use chatbots for qualification, support, routing, and faster response without adding friction.", "/assets/noratrix/3.jpg"]
  ];

  return (
    <section className="noratrix-blog-section">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <NoratrixSectionHeading eyebrow="Insights" title="Latest Growth Ideas" text="Practical notes for businesses investing in web, apps, marketing, and SaaS workflows." />
        <div className="grid gap-7 md:grid-cols-3">
          {posts.map(([title, text, image]) => (
            <article key={title} className="noratrix-blog-card reveal">
              <img src={image} alt="" />
              <div>
                <p>Yoursoft Digital</p>
                <h3>{title}</h3>
                <span>{text}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    ["Surrey, BC", "Local Canadian presence"],
    ["Services + SaaS", "Strategy through software"],
    ["Lead-focused", "Built for measurable conversion"],
    ["Modern stack", "Fast, responsive, secure"]
  ];
  return (
    <section className="home-strip border-y border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-5 py-6 md:grid-cols-4 lg:px-8">
        {items.map(([title, text], index) => (
          <div key={title} className="home-stat-box" style={{ "--box-color": themeColors[index] }}>
            <span />
            <p>{title}</p>
            <small>{text}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="home-dark-section section">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="home-section-intro home-section-intro-light reveal">
          <p>Services</p>
          <h2>Digital delivery for the whole business funnel.</h2>
          <span>From first impression to operational software, every service is shaped around conversion and long-term usefulness.</span>
        </div>
        <div className="home-service-showcase">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} to={`/services/${service.slug}`} className="home-service-box reveal" style={{ "--box-color": themeColors[index] }}>
                <div className="home-box-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <span className="home-box-link">
                  View service <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductsHighlight() {
  return (
    <section className="section bg-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="home-section-intro reveal">
          <p>Products</p>
          <h2>Software products that extend the service work.</h2>
          <span>Zodo CRM, ATS System, and AI Chatbot turn lead capture, hiring, and support into connected workflows.</span>
        </div>
        <div className="home-product-lab reveal">
          <div className="home-product-tabs">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Link key={product.slug} to={`/products/${product.slug}`} className="home-product-tab" style={{ "--box-color": themeColors[(index + 1) % themeColors.length] }}>
                  <Icon size={18} />
                  <span>{product.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="home-product-preview">
            <div className="hero-browser-bar">
              <div className="flex gap-1.5">
                {themeColors.slice(0, 3).map((color) => <span key={color} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />)}
              </div>
              <span>yoursoft products / automation layer</span>
              <Sparkles size={15} />
            </div>
            <div className="home-product-grid">
              {products.map((product, index) => (
                <div key={product.slug} className="home-product-module" style={{ "--box-color": themeColors[index + 1] }}>
                  <strong>{product.title}</strong>
                  <p>{product.summary}</p>
                  <div>
                    {product.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeProcess() {
  const steps = [
    ["01", "Map the business goal", "We clarify the offer, audience, funnel, product needs, and launch priority before design or code starts."],
    ["02", "Design the system", "We create the page structure, UX flows, brand direction, and software architecture around real user actions."],
    ["03", "Build and connect", "Websites, apps, marketing assets, CRM, ATS, and chatbot workflows are built to work together."],
    ["04", "Launch and improve", "After launch, we review speed, search visibility, conversion paths, and operational handoffs."]
  ];

  return (
    <section className="section border-y border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="home-sticky-copy reveal">
          <p>How we build</p>
          <h2>A practical delivery model from strategy to launch.</h2>
          <span>Yoursoft keeps the work structured, visible, and connected to lead generation or operational performance.</span>
          <ButtonLink to="/contact" className="mt-8">Plan Your Build</ButtonLink>
        </div>
        <div className="home-process-stack">
          {steps.map(([number, title, text], index) => (
            <div key={title} className="home-process-box reveal" style={{ "--box-color": themeColors[index] }}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    ["Local services", "Lead-focused websites, quote forms, booking flows, and Google-ready landing pages."],
    ["Recruiting teams", "ATS workflows, candidate pipelines, job pages, and hiring automation."],
    ["Sales teams", "CRM setup, pipeline dashboards, follow-up automation, and lead capture systems."],
    ["Startups", "MVP websites, app prototypes, SaaS interfaces, and launch-ready product pages."],
    ["Professional firms", "Trust-building websites, service pages, brand assets, and conversion tracking."],
    ["Growing teams", "Internal tools, dashboards, web apps, and connected customer workflows."]
  ];

  return (
    <section className="home-audience-section section">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="home-section-intro home-section-intro-light reveal">
          <p>Who we help</p>
          <h2>Built for businesses that need more than a brochure site.</h2>
          <span>We work best where web, growth, design, and software need to support one business outcome.</span>
        </div>
        <div className="home-audience-grid">
          {industries.map(([title, text], index) => (
            <div key={title} className="home-audience-card reveal" style={{ "--box-color": themeColors[index % themeColors.length] }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectedSystem() {
  const layers = [
    ["Attract", "SEO pages, ads, social content, and brand creative bring the right audience in."],
    ["Convert", "Landing pages, forms, chatbots, and product demos turn visitors into qualified leads."],
    ["Operate", "CRM, ATS, apps, and dashboards help teams manage work after the lead arrives."],
    ["Optimize", "Analytics, reporting, automation, and iteration improve results after launch."]
  ];

  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="home-section-intro reveal">
          <p>Connected growth system</p>
          <h2>Services bring demand in. Products help your team handle it.</h2>
          <span>The public-facing website, campaigns, and back-office software are planned as one business system.</span>
        </div>
        <div className="home-flow-board reveal">
          {layers.map(([title, text], index) => (
            <div key={title} className="home-flow-card" style={{ "--box-color": themeColors[index] }}>
              <span>{title}</span>
              <p>{text}</p>
            </div>
          ))}
          <div className="home-flow-line" />
        </div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  const faqs = [
    ["Can you build both our website and software?", "Yes. We can deliver a public website, app, CRM workflow, ATS workflow, or chatbot as connected pieces instead of separate projects."],
    ["Do you work with Canadian businesses?", "Yes. Yoursoft Digital is based in Surrey, BC and supports businesses across Canada."],
    ["Can we start small?", "Yes. Many projects begin with a website, landing page, or product prototype, then expand into automation or SaaS workflows."],
    ["Do you provide marketing after launch?", "Yes. We can support SEO, paid ads, social content, reporting, and conversion optimization after the site or product goes live."]
  ];

  return (
    <section className="section bg-soft">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="home-section-intro reveal">
          <p>FAQ</p>
          <h2>Common questions before starting.</h2>
          <span>A few practical answers for teams comparing website, app, marketing, and software options.</span>
        </div>
        <div className="home-faq-list">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="home-faq-box reveal" style={{ "--box-color": themeColors[index] }}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const points = [
    ["Business-first planning", "We connect technical scope to lead generation, customer operations, and measurable outcomes."],
    ["Product thinking", "Our SaaS work gives service clients stronger architecture, cleaner UX, and scalable delivery habits."],
    ["Canadian trust signal", "A Surrey, BC presence gives local businesses a reachable partner with modern engineering depth."]
  ];
  return (
    <section className="home-proof-section section">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="home-section-intro home-section-intro-light reveal">
          <p>Why choose us</p>
          <h2>A services partner with product-grade standards.</h2>
          <span>Business strategy, creative delivery, and software thinking are handled in one connected team.</span>
        </div>
        <div className="home-proof-grid">
          {points.map(([title, text], index) => (
            <div key={title} className="home-proof-card reveal" style={{ "--box-color": themeColors[index] }}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item, to, action, color = themeColors[0] }) {
  const Icon = item.icon;
  return (
    <Link to={to} className="group rounded-brand border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-ink/25 hover:shadow-quiet reveal">
      <span className="mb-8 grid h-12 w-12 place-items-center rounded-brand border border-line text-ink transition" style={{ backgroundColor: `${color}24` }}>
        <Icon size={22} />
      </span>
      <span className="mb-5 block h-1 w-12 rounded-full" style={{ backgroundColor: color }} />
      <h3 className="text-xl font-bold text-ink">{item.title}</h3>
      <p className="mt-3 min-h-24 text-sm leading-6 text-muted">{item.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink">
        {action}
        <ChevronRight size={16} />
      </span>
    </Link>
  );
}

function ProductPanel({ product, color = themeColors[1] }) {
  const Icon = product.icon;
  return (
    <Link to={`/products/${product.slug}`} className="group rounded-brand border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-ink/25 hover:shadow-quiet reveal">
      <div className="mb-8 flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-brand border border-line bg-white" style={{ color }}>
          <Icon size={22} />
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">SaaS</span>
      </div>
      <h3 className="text-2xl font-bold text-ink">{product.title}</h3>
      <p className="mt-4 text-sm leading-6 text-muted">{product.summary}</p>
      <div className="mt-8 grid gap-2">
        {product.benefits.map((benefit) => (
          <span key={benefit} className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Check size={16} style={{ color }} />
            {benefit}
          </span>
        ))}
      </div>
    </Link>
  );
}

function About() {
  return (
    <>
      <AboutHero />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-3 lg:px-8">
          {[
            ["Mission", "Build reliable digital assets that create trust, generate qualified leads, and reduce operational drag."],
            ["Vision", "Become a Canadian technology partner known for blending service execution with SaaS product innovation."],
            ["Team", "Expert developers, designers, marketers, and product thinkers working around clear business outcomes."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-brand border border-line p-7 reveal">
              <h2 className="text-2xl font-bold text-ink">{title}</h2>
              <p className="mt-4 leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section bg-soft">
        <SectionHeader eyebrow="Trust" title="Why businesses trust Yoursoft Digital" text="We keep strategy, design, engineering, and growth connected, so the work feels cohesive from first meeting to launch." />
        <IconGrid items={["Clear project scopes", "Responsive communication", "Modern UX standards", "SEO-aware builds", "Secure implementation", "Long-term optimization"]} />
      </section>
      <CTA title="Build with a Canadian IT partner." text="Bring us your website, app, marketing, or SaaS idea. We will help shape the next move." cta="Talk to Our Team" />
    </>
  );
}

function AboutHero() {
  return (
    <section className="about-noratrix-hero border-b border-line">
      <ParticleField />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="about-hero-meter reveal">
          <div className="about-hero-orbit about-hero-orbit-one" />
          <div className="about-hero-orbit about-hero-orbit-two" />
          <img src="/assets/noratrix/about.png" alt="Yoursoft Digital team building connected business systems" />
          <div className="about-hero-growth">
            <span>Canada-based</span>
            <strong>Services + SaaS</strong>
            <p>Digital systems for lead capture, workflows, and product growth.</p>
          </div>
        </div>
        <div className="about-hero-content reveal">
          <div className="dream-dots" aria-hidden="true">
            {themeColors.map((color) => (
              <span key={color} style={{ backgroundColor: color }} />
            ))}
            <span style={{ backgroundColor: themeColors[1] }} />
            <span style={{ backgroundColor: themeColors[2] }} />
            <span style={{ backgroundColor: themeColors[3] }} />
          </div>
          <p className="about-hero-eyebrow">About Yoursoft Digital</p>
          <h1>A Canada-based IT company built for practical growth.</h1>
          <p>Yoursoft Digital helps businesses move from scattered ideas and manual workflows to clear digital systems, customer-ready design, and software that can scale.</p>
          <p>Our team blends web, app, marketing, design, and SaaS product thinking so every launch supports the next business move.</p>
          <div className="about-hero-actions">
            <ButtonLink to="/contact">Request Quote</ButtonLink>
            <a className="zodo-secondary-button inline-flex min-h-11 items-center justify-center gap-2 border border-line px-5 py-3 text-sm font-semibold text-ink hover:border-brandCyan" href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}>
              <Phone size={17} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="premium-hero border-b border-line bg-white">
      <ParticleField />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div className="hero-copy">
          <p className="hero-kicker mb-5 inline-flex rounded-brand border border-line bg-white/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-muted shadow-[0_10px_30px_rgba(38,51,61,0.04)]">{eyebrow}</p>
          <h1 className="hero-title text-balance text-4xl font-black tracking-tight text-ink md:text-6xl lg:text-7xl">{title}</h1>
          <p className="hero-subtitle mt-6 max-w-2xl text-lg leading-8 text-muted">{text}</p>
          <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact">Request Quote</ButtonLink>
            <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-brand border border-line bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-soft" href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}>
              <Phone size={17} />
              Call Now
            </a>
          </div>
          <div className="hero-proof mt-9 grid max-w-xl grid-cols-3 divide-x divide-line border-y border-line py-5">
            {["Canada-based", "Fast launch", "SaaS-ready"].map((item, index) => (
              <p key={item} className="px-3 first:pl-0 text-sm font-bold text-ink">
                <span className="mb-2 block h-1 w-8 rounded-full" style={{ backgroundColor: themeColors[index] }} />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="hero-visual-wrap">{children || <HeroVisual />}</div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Services that create demand and the systems to handle it." text="Explore focused delivery pages for websites, apps, marketing, and design. Each service is structured for conversion, performance, and long-term usefulness." />
      <ServicesOverview />
      <CTA title="Need help choosing the right service?" text="We will review your current stage and recommend a practical path." cta="Request Quote" />
    </>
  );
}

function ServiceDetail({ service }) {
  return (
    <>
      <PageHero eyebrow="Service" title={service.title} text={service.summary}>
        <DetailPreview title={service.title} lines={service.bullets} icon={service.icon} />
      </PageHero>
      <section className="section">
        <SectionHeader eyebrow="Features" title={`What our ${service.title.toLowerCase()} work includes`} />
        <IconGrid items={service.bullets} />
      </section>
      <section className="section bg-soft">
        <SectionHeader eyebrow="Process" title="A clear path from idea to launch" />
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-4 lg:px-8">
          {service.process.map((step, index) => (
            <div key={step} className="rounded-brand bg-white p-6 reveal">
              <span className="text-sm font-black text-muted">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-bold text-ink">{step}</h3>
            </div>
          ))}
        </div>
      </section>
      <CTA title={`Get a quote for ${service.title}.`} text="Share your goals and we will send a practical scope with next steps." cta="Request Quote" />
    </>
  );
}

function DetailPreview({ title, lines, icon: Icon }) {
  return (
    <div className="rounded-brand border border-line bg-soft p-5 shadow-quiet">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-brand border border-line bg-white text-brandCyan">
          <Icon size={21} />
        </span>
        <span className="text-lg font-bold text-ink">{title}</span>
      </div>
      <div className="grid gap-3">
        {lines.map((line) => (
          <div key={line} className="flex items-center justify-between rounded-brand bg-white px-4 py-4">
            <span className="font-semibold text-ink">{line}</span>
            <Check size={18} className="text-brandGreen" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="SaaS products for sales, hiring, and customer conversations." text="Yoursoft Digital products turn repeated business workflows into cleaner systems that teams can use every day." />
      <ProductsHighlight />
      <CTA title="Want a demo of our product suite?" text="Book a walkthrough for Zodo CRM, ATS System, or AI Chatbot." cta="Book Demo" />
    </>
  );
}

function ProductDetail({ product }) {
  return (
    <>
      <PageHero eyebrow="Product" title={product.title} text={product.summary}>
        <ProductPreview product={product} />
      </PageHero>
      <section className="section">
        <SectionHeader eyebrow="Benefits" title={`Why teams use ${product.title}`} />
        <IconGrid items={product.benefits} />
      </section>
      <section className="section bg-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="reveal">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted">SaaS workflow</p>
            <h2 className="text-4xl font-bold tracking-tight text-ink">Built for the moments teams repeat every day.</h2>
          </div>
          <ProductPreview product={product} compact />
        </div>
      </section>
      <CTA title={`Book a ${product.title} demo.`} text="See how the product can support your workflow and customer pipeline." cta="Book Demo" />
    </>
  );
}

function ProductPreview({ product, compact = false }) {
  if (product.slug === "zodo-crm") {
    return <ZodoCrmPreview compact={compact} />;
  }

  return (
    <div className={cx("rounded-brand border border-line bg-white p-5 shadow-quiet reveal", compact && "shadow-none")}>
      <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-brandCyan" />
          <span className="font-bold text-ink">{product.title} workspace</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Live preview</span>
      </div>
      <div className="grid gap-3">
        {product.preview.map((line, index) => (
          <div key={line} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-brand border border-line p-4">
            <span className="grid h-8 w-8 place-items-center rounded-brand bg-soft text-sm font-black text-ink">{index + 1}</span>
            <span className="font-semibold text-ink">{line}</span>
            <span className="h-2 w-16 rounded-full" style={{ backgroundColor: themeColors[index % themeColors.length] }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ZodoCrmPreview({ compact = false }) {
  const pipeline = [
    ["New Leads", "42", themeColors[0]],
    ["Qualified", "28", themeColors[1]],
    ["Proposal", "16", themeColors[2]],
    ["Won", "9", themeColors[3]]
  ];
  const deals = [
    ["Northline Homes", "$18.4K", "Proposal", themeColors[2]],
    ["Maple HR Group", "$9.8K", "Qualified", themeColors[1]],
    ["Surrey Dental Co.", "$6.2K", "Follow-up", themeColors[0]]
  ];

  return (
    <div className={cx("zodo-crm-preview reveal", compact && "zodo-crm-preview-compact")}>
      <div className="zodo-crm-topbar">
        <div className="zodo-crm-brand">
          <span>Z</span>
          <div>
            <strong>Zodo CRM</strong>
            <small>Sales workspace</small>
          </div>
        </div>
        <div className="zodo-crm-search">
          <Search size={15} />
          <span>Search leads, deals, tasks</span>
        </div>
        <button type="button">New Lead</button>
      </div>

      <div className="zodo-crm-layout">
        <aside className="zodo-crm-sidebar" aria-label="CRM navigation preview">
          {["Dashboard", "Leads", "Pipeline", "Automation"].map((item, index) => (
            <span key={item} className={index === 1 ? "is-active" : ""}>
              <span style={{ backgroundColor: themeColors[index] }} />
              {item}
            </span>
          ))}
        </aside>

        <main className="zodo-crm-main">
          <div className="zodo-crm-summary">
            {[
              ["Active leads", "1,248", "+18%"],
              ["Pipeline value", "$142K", "+24%"],
              ["Follow-ups", "38", "Today"]
            ].map(([label, value, meta], index) => (
              <div key={label} className="zodo-crm-metric" style={{ "--metric-color": themeColors[index] }}>
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{meta}</small>
              </div>
            ))}
          </div>

          <div className="zodo-crm-pipeline">
            {pipeline.map(([label, count, color]) => (
              <div key={label} className="zodo-crm-stage" style={{ "--stage-color": color }}>
                <div>
                  <strong>{label}</strong>
                  <span>{count}</span>
                </div>
                <i />
              </div>
            ))}
          </div>

          <div className="zodo-crm-table">
            <div className="zodo-crm-table-head">
              <span>Company</span>
              <span>Value</span>
              <span>Status</span>
            </div>
            {deals.map(([companyName, value, status, color]) => (
              <div key={companyName} className="zodo-crm-row">
                <span>{companyName}</span>
                <strong>{value}</strong>
                <em style={{ "--status-color": color }}>{status}</em>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Website packages and service tiers with clear next steps." text="Choose a starting point, then we tailor scope around your content, integrations, timeline, and growth goals." />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-3 lg:px-8">
          {packages.map((plan) => (
            <div key={plan.name} className="rounded-brand border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-quiet reveal">
              <h2 className="text-2xl font-bold text-ink">{plan.name}</h2>
              <p className="mt-3 text-4xl font-black text-ink">{plan.price}</p>
              <p className="mt-4 min-h-16 text-muted">{plan.details}</p>
              <div className="my-7 h-px bg-line" />
              <div className="grid gap-3">
                {plan.items.map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <Check size={16} style={{ color: themeColors[index % themeColors.length] }} />
                    {item}
                  </span>
                ))}
              </div>
              <ButtonLink to="/contact" className="mt-8 w-full">Request Package</ButtonLink>
            </div>
          ))}
        </div>
      </section>
      <CTA title="Need app, marketing, or product pricing?" text="We quote custom work after a short discovery call so the estimate matches the real scope." cta="Request Custom Quote" />
    </>
  );
}

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you want to build." text="Send a project note, request a quote, or book a product demo with the Yoursoft Digital team in Surrey, BC." />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <form className="rounded-brand border border-line bg-white p-6 shadow-quiet reveal">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" placeholder="you@company.com" type="email" />
              <Field label="Phone" placeholder="+1" />
              <Field label="Interest" placeholder="Website, app, product demo..." />
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-ink">Project details</span>
              <textarea className="mt-2 min-h-36 w-full rounded-brand border border-line bg-white px-4 py-3 outline-none transition focus:border-ink" placeholder="Tell us about your goals, timeline, and current website or system." />
            </label>
            <button className="zodo-primary-button mt-6 inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5" type="button">
              Send Message
              <ArrowRight size={17} />
            </button>
          </form>
          <div className="grid gap-5 reveal reveal-delay">
            <ContactLine icon={Phone} title="Phone" text={company.phone} href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} />
            <ContactLine icon={Mail} title="Email" text={company.email} href={`mailto:${company.email}`} />
            <ContactLine icon={MapPin} title="Address" text={company.address} />
            <div className="min-h-64 rounded-brand border border-line bg-soft p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-muted">Map</p>
              <div className="mt-5 grid h-44 place-items-center rounded-brand border border-line bg-white text-center">
                <div>
                  <MapPin className="mx-auto text-brandOrange" />
                  <p className="mt-3 font-bold text-ink">Surrey, BC, Canada</p>
                  <p className="text-sm text-muted">Serving businesses across Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-ink">{label}</span>
      <input className="mt-2 h-12 w-full rounded-brand border border-line bg-white px-4 outline-none transition focus:border-ink" placeholder={placeholder} type={type} />
    </label>
  );
}

function ContactLine({ icon: Icon, title, text, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-brand border border-line bg-white p-5 transition hover:border-ink/20">
      <span className="grid h-11 w-11 place-items-center rounded-brand bg-soft">
        <Icon size={20} />
      </span>
      <span>
        <span className="block text-sm font-bold text-muted">{title}</span>
        <span className="block font-semibold text-ink">{text}</span>
      </span>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function IconGrid({ items }) {
  const icons = [ShieldCheck, Target, Search, LayoutGrid, Cpu, FileText];
  return (
    <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div key={item} className="flex items-center gap-4 rounded-brand border border-line bg-white p-5 reveal">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-brand bg-soft">
              <Icon size={20} />
            </span>
            <span className="font-bold text-ink">{item}</span>
          </div>
        );
      })}
    </div>
  );
}

function CTA({ title, text, cta }) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-soft text-ink">
      <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${themeColors.join(", ")})` }} />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-muted">{text}</p>
        </div>
        <ButtonLink to="/contact" className="self-start">{cta}</ButtonLink>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#0b1220] bg-[#0b1220] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-flex rounded-brand bg-white px-3 py-2">
            <LogoLockup className="h-14 w-60" />
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-300">Canada-based IT services and SaaS products for growth-minded businesses.</p>
        </div>
        <FooterLinks title="Services" links={services.map((service) => [`/services/${service.slug}`, service.title])} />
        <FooterLinks title="Products" links={products.map((product) => [`/products/${product.slug}`, product.title])} />
        <div>
          <p className="font-bold text-white">Newsletter</p>
          <p className="mt-3 text-sm text-zinc-300">Product updates, launch notes, and growth ideas.</p>
          <div className="mt-4 flex rounded-brand border border-white/10 bg-white/8 p-1">
            <input className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-zinc-500" placeholder="Email address" />
            <button className="rounded-brand bg-brandOrange px-3 py-2 text-sm font-bold text-white" type="button">Join</button>
          </div>
          <p className="mt-5 text-sm text-zinc-300">{company.email}</p>
          <p className="mt-1 text-sm text-zinc-300">{company.address}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <p className="font-bold text-white">{title}</p>
      <div className="mt-4 grid gap-3">
        {links.map(([to, label]) => (
          <Link key={to} to={to} className="text-sm text-zinc-300 transition hover:text-brandCyan">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function NotFound() {
  return <PageHero eyebrow="404" title="Page not found" text="The page you are looking for is not available." />;
}

function useHeroScrollEffects(path) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      document.querySelectorAll(".premium-hero").forEach((hero) => {
        const rect = hero.getBoundingClientRect();
        const viewport = window.innerHeight || 1;
        const total = viewport + rect.height;
        const raw = (viewport - rect.top) / total;
        const progress = Math.min(1, Math.max(0, raw));
        const centered = progress - 0.5;
        hero.style.setProperty("--hero-scroll", progress.toFixed(4));
        hero.style.setProperty("--hero-bg-shift", `${(centered * -20).toFixed(2)}px`);
        hero.style.setProperty("--hero-wash-shift", `${(centered * 14).toFixed(2)}px`);
        hero.style.setProperty("--hero-particle-shift", `${(centered * 40).toFixed(2)}px`);
        hero.style.setProperty("--hero-console-shift", `${(centered * -9).toFixed(2)}px`);
        hero.style.setProperty("--hero-copy-shift", `${(centered * -5).toFixed(2)}px`);
        hero.style.setProperty("--hero-particle-scale", (1 + progress * 0.035).toFixed(4));
        hero.style.setProperty("--hero-mask-x", `${(18 + progress * 64).toFixed(2)}%`);
        hero.style.setProperty("--hero-mask-y", `${(18 + progress * 42).toFixed(2)}%`);
        hero.style.setProperty("--hero-mask", `${(42 + progress * 46).toFixed(2)}%`);
        hero.style.setProperty("--hero-proof-stop", `${(54 + progress * 40).toFixed(2)}%`);
        hero.style.setProperty("--hero-proof-fade", `${(72 + progress * 24).toFixed(2)}%`);
        hero.style.setProperty("--hero-fade", `${Math.max(0.34, 1 - progress * 0.42).toFixed(4)}`);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [path]);
}

function App() {
  const path = useRoute();
  useHeroScrollEffects(path);
  const page = useMemo(() => {
    const serviceMatch = path.match(/^\/services\/(.+)$/);
    if (serviceMatch) {
      const service = services.find((item) => item.slug === serviceMatch[1]);
      return service ? <ServiceDetail service={service} /> : <NotFound />;
    }
    const productMatch = path.match(/^\/products\/(.+)$/);
    if (productMatch) {
      const product = products.find((item) => item.slug === productMatch[1]);
      return product ? <ProductDetail product={product} /> : <NotFound />;
    }
    const routes = {
      "/": <Home />,
      "/about": <About />,
      "/services": <ServicesPage />,
      "/products": <ProductsPage />,
      "/pricing": <Pricing />,
      "/contact": <Contact />
    };
    return routes[path] || <NotFound />;
  }, [path]);

  useEffect(() => {
    const serviceMatch = path.match(/^\/services\/(.+)$/);
    if (serviceMatch) {
      const service = services.find((item) => item.slug === serviceMatch[1]);
      document.title = service ? `${service.title} | Yoursoft Digital Services` : "Yoursoft Digital";
      return;
    }
    const productMatch = path.match(/^\/products\/(.+)$/);
    if (productMatch) {
      const product = products.find((item) => item.slug === productMatch[1]);
      document.title = product ? `${product.title} | Yoursoft Digital Products` : "Yoursoft Digital";
      return;
    }
    const titles = {
      "/": "Yoursoft Digital | Canada IT Services & SaaS Products",
      "/about": "About Yoursoft Digital | Surrey, BC IT Company",
      "/services": "IT Services | Yoursoft Digital",
      "/products": "SaaS Products | Yoursoft Digital",
      "/pricing": "Pricing & Packages | Yoursoft Digital",
      "/contact": "Contact Yoursoft Digital | Surrey, BC"
    };
    document.title = titles[path] || "Yoursoft Digital";
  }, [path]);

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>{page}</main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
