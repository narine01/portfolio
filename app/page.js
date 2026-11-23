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

function ProjectCard({ p }) {
  return (
    <article className="card">
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <ul className="tags">
        {p.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {(p.live || p.repo) && (
        <div className="card-links">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer">
              Live ↗
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer">
              Code ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <img src={profile.image} alt={profile.name} className="avatar" />
          <a href="#top" className="brand">
            {profile.name}
          </a>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container" id="top">
        <section className="hero">
          <div>
            <p className="eyebrow">
              {profile.role} · {profile.location}
            </p>
            <h1>{profile.tagline}</h1>
            <div className="actions">
              <a className="btn primary" href="#projects">
                View my work
              </a>
              <a className="btn" href={profile.resumeUrl} download>
                Download resume
              </a>
            </div>
          </div>
          <dl className="facts">
            {highlights.map((h) => (
              <div key={h.label}>
                <dt>{h.value}</dt>
                <dd>{h.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="about">
          <h2>About</h2>
          {about.map((p) => (
            <p key={p} className="lead">
              {p}
            </p>
          ))}
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
          <h3 className="sub">SpendSense app screens</h3>
          <p className="note">Design previews with sample data.</p>
          <div className="screens">
            {spendsenseScreens.map((s) => (
              <figure key={s.file} className="screen">
                <div className="phone">
                  <iframe
                    src={s.file}
                    title={`SpendSense: ${s.title}`}
                    loading="lazy"
                    tabIndex={-1}
                    sandbox=""
                    referrerPolicy="no-referrer"
                  />
                </div>
                <figcaption>{s.title}</figcaption>
              </figure>
            ))}
          </div>
          <h3 className="sub">Selected AI engineering work</h3>
          <div className="grid">
            {aiWork.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role + e.period}>
                <div className="when">{e.period}</div>
                <div>
                  <h3>
                    {e.role} <span className="muted">· {e.company}</span>
                  </h3>
                  <ul className="points">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3>{group}</h3>
                <ul className="tags">
                  {items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.degree}>
                <div className="when">{e.period}</div>
                <div>
                  <h3>{e.degree}</h3>
                  <p className="muted">
                    {e.school} · {e.score}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <h3 className="sub">Certifications &amp; courses</h3>
          <ul className="tags">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="contact">
          <h2>Get in touch</h2>
          <p className="lead">
            Open to new opportunities and interesting projects. The best way to
            reach me is email.
          </p>
          <a className="btn primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="socials">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </>
  );
}
