import {
  profile,
  about,
  highlights,
  projects,
  aiWork,
  spendsenseScreens,
  experience,
  skills,
  education,
  certifications,
} from "../data/content";
import ThemeToggle from "./theme-toggle";

const navigation = [
  ["overview", "Overview", "⌂"],
  ["projects", "Projects", "▦"],
  ["ai-work", "AI systems", "✳"],
  ["experience", "Experience", "↗"],
  ["skills", "Toolkit", "⌘"],
  ["contact", "Contact", "✉"],
];

function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="section-heading" id={id}>
      <div>
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, label = "PROJECT" }) {
  return (
    <article className={`project-card ${index === 0 ? "project-card-featured" : ""}`}>
      {project.image && (
        <div className="project-visual">
          <img src={project.image} alt={`${project.title} interface concept`} loading="lazy" />
        </div>
      )}
      <div className="project-copy">
        <span className="project-index">{project.badge || label} {String(index + 1).padStart(2, "0")}</span>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span className="arrow-mark" aria-hidden="true">↗</span>
        </div>
        <p>{project.description}</p>
        <ul className="tags">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {(project.live || project.repo || project.download) && (
          <div className="card-links">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <span>↗</span></a>}
            {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Source code <span>↗</span></a>}
            {project.download && <a href={project.download}>Download Android APK <span>↓</span></a>}
          </div>
        )}
        {project.roadmapNote && (
          <aside className="roadmap-note">
            <strong>Planned next</strong>
            <p>{project.roadmapNote}</p>
          </aside>
        )}
        {project.permissionNote && (
          <aside className="permission-note">
            <strong>Permissions &amp; data access</strong>
            <p>{project.permissionNote}</p>
          </aside>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="portfolio-shell">
      <aside className="side-rail">
        <a href="#overview" className="rail-brand" aria-label={`${profile.name} home`}>LN<span>.</span></a>
        <nav className="rail-nav" aria-label="Portfolio sections">
          {navigation.map(([id, label, icon]) => (
            <a href={`#${id}`} key={id} aria-label={label} title={label} className={id === "overview" ? "active" : ""}>
              <span className="rail-icon" aria-hidden="true">{icon}</span><span className="rail-label">{label}</span>
            </a>
          ))}
        </nav>
        <a className="rail-resume" href={profile.resumeUrl} download aria-label="Download résumé">↓</a>
      </aside>

      <main className="dashboard-main">
        <header className="topbar">
          <a href="#overview" className="mobile-brand">LN<span>.</span></a>
          <div className="breadcrumbs"><span>Portfolio</span><b>/</b><strong>Engineering overview</strong></div>
          <div className="topbar-actions"><ThemeToggle /><a className="topbar-contact" href={`mailto:${profile.email}`}>Let&apos;s talk <span>↗</span></a></div>
        </header>

        <div className="dashboard-content">
          <section className="overview-section" id="overview">
            <div className="overview-topline">
              <span className="availability"><i /> Open to opportunities</span>
              <span className="location-label">{profile.location}</span>
            </div>
            <div className="overview-hero">
              <div className="overview-intro">
                <p className="kicker">FULL-STACK DEVELOPER <span>·</span> AI ENGINEER</p>
                <h1>Engineering<br /><em>from idea to impact.</em></h1>
                <p className="hero-description">{profile.tagline}</p>
                <div className="hero-actions">
                  <a className="button button-dark" href="#projects">Explore selected work <span>↘</span></a>
                  <a className="text-link" href={profile.resumeUrl} download>Download résumé <span>↓</span></a>
                </div>
              </div>
              <div className="profile-panel">
                <div className="profile-panel-top"><span>ENGINEER PROFILE</span><span className="panel-dots">•••</span></div>
                <img className="profile-photo" src={profile.image} alt={profile.name} />
                <div className="profile-name">{profile.name}</div>
                <div className="profile-role">Full Stack Developer &amp; AI Engineer</div>
                <div className="profile-divider" />
                <div className="profile-bottom"><span>Building in Bengaluru</span><span className="status-pulse" /></div>
              </div>
            </div>
            <div className="stat-grid">
              {highlights.map((item, index) => (
                <div className="stat-card" key={item.label}>
                  <span className="stat-number">{item.value}</span>
                  <span className="stat-label">{item.label}</span>
                  <span className="stat-sequence">0{index + 1}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section" id="projects">
            <SectionHeading eyebrow="SELECTED WORK / 2024—26" title="Projects built end to end" />
            <p className="section-description">A mix of full-stack products and applied AI systems. Each project is grounded in a real workflow.</p>
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            </div>
            <div className="subsection-title"><div><span className="section-eyebrow">PRODUCT WALKTHROUGH</span><h3>SpendSense screens</h3></div><span className="sample-note">Real Android captures · Demo data</span></div>
            <div className="screen-gallery">
              {spendsenseScreens.map((screen) => (
                <figure className="screen-card" key={screen.image}>
                  <div className="phone-frame"><img src={screen.image} alt={`SpendSense ${screen.title} screen`} loading="lazy" /></div>
                  <figcaption>{screen.title}<span>↗</span></figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="content-section ai-section" id="ai-work">
            <SectionHeading eyebrow="APPLIED AI / RETRIEVAL / AUTOMATION" title="AI systems with quality in the loop" />
            <p className="section-description">LLM features need more than a good prompt. I focus on retrieval quality, grounded answers, confidence and repeatable evaluation.</p>
            <div className="ai-flow" aria-label="RAG processing and evaluation flow">
              {["Ingest & chunk", "Retrieve", "Generate", "Score confidence", "Evaluate"].map((step, index) => <div className="flow-step" key={step}><span>0{index + 1}</span>{step}{index < 4 && <b>→</b>}</div>)}
            </div>
            <div className="project-grid ai-grid">
              {aiWork.map((project, index) => <ProjectCard key={project.title} project={project} index={index} label="AI SYSTEM" />)}
            </div>
          </section>

          <section className="content-section" id="experience">
            <SectionHeading eyebrow="CAREER / OWNERSHIP" title="Experience" />
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={`${item.role}-${item.period}`}>
                  <div className="experience-date">{item.period}</div>
                  <div className="experience-main"><span className="experience-marker" /><h3>{item.role}</h3><p className="experience-company">{item.company}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="skills">
            <SectionHeading eyebrow="TOOLS I WORK WITH" title="Engineering toolkit" />
            <div className="toolkit-grid">
              {Object.entries(skills).map(([group, items]) => <div className="toolkit-card" key={group}><h3>{group}</h3><ul className="tags">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
            </div>
          </section>

          <section className="content-section about-section" id="about">
            <SectionHeading eyebrow="A LITTLE ABOUT HOW I WORK" title="Curious, practical, end to end." />
            <div className="about-copy">{about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="education-row"><div><span className="section-eyebrow">EDUCATION</span>{education.map((item) => <p key={item.degree}><strong>{item.degree}</strong> · {item.school} <span>{item.period}</span></p>)}</div><div><span className="section-eyebrow">CONTINUOUS LEARNING</span><p>{certifications.join(" · ")}</p></div></div>
          </section>

          <section className="contact-section" id="contact">
            <div><p className="section-eyebrow">HAVE A GOOD PROBLEM TO SOLVE?</p><h2>Let&apos;s build something useful.</h2><p>Open to full-stack and AI engineering opportunities.</p></div>
            <a className="button button-light" href={`mailto:${profile.email}`}>Get in touch <span>↗</span></a>
          </section>
          <footer className="dashboard-footer"><span>© {new Date().getFullYear()} {profile.name}</span><div>{profile.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div><span>Designed &amp; built with care</span></footer>
        </div>
      </main>

      <nav className="mobile-dock" aria-label="Mobile navigation">
        {navigation.slice(0, 5).map(([id, label, icon]) => <a href={`#${id}`} key={id} aria-label={label}><span>{icon}</span><small>{label}</small></a>)}
      </nav>
    </div>
  );
}
