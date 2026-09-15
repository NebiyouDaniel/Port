import React, { useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Github,
  Globe2,
  Menu,
  Send,
  X,
} from 'lucide-react';

const imageSrc = '/images/eb965eb8-5bed-4683-beaf-d04144d16b3c.jpg';

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technology: string[];
  features: string[];
  kind: 'portal' | 'menu';
  liveUrl: string;
  note?: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Student Portal & Examination System',
    category: 'EDUCATION TECHNOLOGY · FULL-STACK WEB APPLICATION',
    description:
      'A role-based web application designed to support students, parents, and administrators in managing academic information and examination workflows.',
    technology: ['React', 'Vite', 'Supabase'],
    features: ['Student accounts', 'Parent access', 'Administrator access', 'Academic records', 'Examination workflows', 'Responsive dashboard'],
    kind: 'portal',
    liveUrl: 'https://remix-school-examination-system-692498383087.europe-west2.run.app',
    note: "Public preview deployment. The primary school deployment is hosted on the school's Ubuntu server.",
  },
  {
    number: '02',
    title: 'Dynamic QR Code Generator & Digital Menu',
    category: 'DIGITAL PRODUCT · QR TECHNOLOGY',
    description:
      'A web-based system for generating dynamic QR codes and connecting them to digital menu experiences, designed around simple access and mobile-first usage.',
    technology: ['Web Development', 'Supabase', 'Database Integration'],
    features: ['Dynamic QR generation', 'Digital menu', 'Mobile-first interface', 'Database-backed content', 'Dynamic links', 'Simple customer access'],
    kind: 'menu',
    liveUrl: 'https://qret1.onrender.com/',
  },
];

const skills = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Responsive Design'] },
  { title: 'Backend & Data', items: ['Supabase', 'Authentication', 'Database Integration', 'Role-Based Access', 'API Integration'] },
  { title: 'Development', items: ['Git', 'GitHub', 'Problem Solving', 'UI/UX Thinking', 'Web Application Architecture'] },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.kind === 'portal') {
    return (
      <div className="live-preview preview-shell">
        <div className="live-preview-toolbar">
          <span>LIVE PREVIEW</span>
          <a href={project.liveUrl} target="_blank" rel="noreferrer">Open site <ArrowUpRight size={13} /></a>
        </div>
        <iframe src={project.liveUrl} title={`${project.title} live preview`} />
      </div>
    );
  }
  return (
    <div className="menu-preview preview-shell">
      <div className="menu-browser"><span /><span /><span /><small>menu.edenhouse.et</small></div>
      <div className="menu-visual"><div className="restaurant-mark">EDEN<br /><em>house</em></div><p>GOOD FOOD,<br /><strong>GOOD MOOD.</strong></p></div>
      <div className="menu-content"><div className="menu-header"><div><small>WELCOME TO</small><h4>Eden House</h4></div><div className="qr-mini"><span /><span /><span /><span /></div></div><div className="menu-tabs"><b>All menu</b><span>Breakfast</span><span>Lunch</span><span>Drinks</span></div><div className="food-list"><div><span className="food-dot one" /><p><b>Garden Bowl</b><small>Avocado · greens · citrus</small></p><strong>ETB 420</strong></div><div><span className="food-dot two" /><p><b>House Pasta</b><small>Tomato · basil · parmesan</small></p><strong>ETB 480</strong></div></div></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-nav">
        <a className="wordmark" href="#top" onClick={closeMenu}>NEBIYOU <span>DANIEL</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Work</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#journey" onClick={closeMenu}>Journey</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-github" href="https://github.com/NebiyouDaniel" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy"><p className="eyebrow">NEBIYOU DANIEL <span>·</span> STUDENT DEVELOPER</p><h1>I build digital<br /><i>experiences</i><br />with purpose.</h1><p className="hero-intro">I’m an 18-year-old student and aspiring full-stack web developer from Ethiopia, building practical web applications while continuously learning, experimenting, and turning ideas into working products.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={16} /></a><a className="text-link" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a></div><p className="availability"><span /> Available for scholarships · internships · collaborations · opportunities</p></div>
          <div className="hero-portrait"><div className="portrait-frame"><img src={imageSrc} alt="Nebiyou Daniel" /><div className="portrait-caption"><span>NEBIYOU DANIEL</span><span>ETHIOPIA · 2026</span></div></div><span className="portrait-index">01 / 05</span></div>
        </section>

        <section className="about section-pad" id="about"><div className="section-heading"><SectionLabel>01 — About</SectionLabel><h2>A student who<br /><i>learns by building.</i></h2></div><div className="about-content"><div className="about-text"><p className="lead">I’m an 18-year-old student from Ethiopia with a growing interest in software development, web technologies, and practical digital solutions.</p><p>Rather than only learning technology through theory, I enjoy applying what I learn by building working systems. My projects have introduced me to frontend development, databases, authentication, role-based access, responsive interfaces, and deployment.</p><p>I’m currently focused on strengthening my technical foundation while preparing for the next stage of my education and professional journey.</p></div><div className="info-grid"><div><span>Age</span><strong>18</strong></div><div><span>Location</span><strong>Ethiopia</strong></div><div><span>Focus</span><strong>Web Development</strong></div><div><span>Interests</span><strong>Software · Technology<br />· Problem Solving</strong></div></div></div></section>

        <section className="work section-pad" id="work"><div className="work-heading"><div><SectionLabel>02 — Selected work</SectionLabel><h2>Things I&apos;ve built.</h2></div><p>A few practical projects that represent how I learn, experiment, and solve problems through software.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-meta"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.technology.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-actions"><button className="project-link" onClick={() => setSelectedProject(project)}>View project <ArrowUpRight size={15} /></button><a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={15} /></a></div></div><div className="project-art"><ProjectPreview project={project} /></div>{project.note && <p className="project-note">{project.note}</p>}</article>)}</div></section>

        <section className="github-section section-pad"><div className="github-copy"><SectionLabel>Open source & exploration</SectionLabel><h2>Beyond the<br /><i>portfolio.</i></h2><p>The projects shown here are only part of my development journey. I also experiment with different technologies, ideas, and applications through my GitHub projects.</p></div><div className="github-card"><div className="github-card-top"><Github size={28} strokeWidth={1.5} /><span>github.com</span></div><div className="github-card-main"><h3>NebiyouDaniel</h3><p>GitHub Developer · Open Source · Projects</p><a className="button button-light" href="https://github.com/NebiyouDaniel" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16} /></a></div><div className="github-card-foot"><span>Follow the journey</span><ArrowUpRight size={16} /></div></div></section>

        <section className="skills section-pad" id="skills"><div className="skills-heading"><SectionLabel>03 — Skills</SectionLabel><h2>My current<br /><i>toolkit.</i></h2><p>My skills are continuously developing through coursework, independent learning, and hands-on projects.</p></div><div className="skill-groups">{skills.map((skill, index) => <div className="skill-group" key={skill.title}><span className="skill-index">0{index + 1}</span><h3>{skill.title}</h3><ul>{skill.items.map((item) => <li key={item}>{item}<Check size={14} /></li>)}</ul></div>)}</div></section>

        <section className="principles"><div className="principles-inner section-pad"><SectionLabel>How I approach the work</SectionLabel><h2>Build with purpose.<br />Keep it clear.<br /><i>Never stop learning.</i></h2><div className="principle-grid"><div><span>01</span><h3>Build with purpose</h3><p>I like creating software around practical problems rather than building technology simply for the sake of technology.</p></div><div><span>02</span><h3>Keep it clear</h3><p>Good software should be understandable and easy for people to use.</p></div><div><span>03</span><h3>Keep learning</h3><p>Every project is an opportunity to learn something new and improve the way I build.</p></div></div></div></section>

        <section className="journey section-pad" id="journey"><div className="journey-title"><SectionLabel>04 — Journey</SectionLabel><h2>Still early.<br /><i>Already building.</i></h2></div><div className="timeline">{[['01', 'Student', 'Developing an interest in computers, technology, and problem solving.'], ['02', 'Web Development', 'Learning modern web development and exploring how frontend and backend systems work together.'], ['03', 'Real Projects', 'Building systems such as an academic portal, examination system, QR generator, and digital menu.'], ['04', "What's Next", 'Continuing education, expanding technical skills, and pursuing scholarships, university opportunities, internships, and professional experience.']].map(([number, title, copy]) => <div className="timeline-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></section>

        <section className="next-section section-pad"><div><SectionLabel>Looking forward</SectionLabel><h2>Where I&apos;m<br /><i>going next.</i></h2></div><div className="next-copy"><p>I’m looking for opportunities that allow me to continue learning, challenge myself, and develop as both a student and a developer.</p><p>I’m particularly interested in higher education, scholarships, internships, software development opportunities, and environments where I can work with people who are building meaningful things.</p><div className="opportunity-list"><span>Scholarships</span><span>University</span><span>Internships</span><span>Software development</span><span>Collaboration</span></div></div></section>

        <section className="contact section-pad" id="contact"><div className="contact-heading"><SectionLabel>Start a conversation</SectionLabel><h2>Have an<br /><i>opportunity?</i></h2><a className="contact-email" href="mailto:nebiyou1daniel@gmail.com">nebiyou1daniel@gmail.com <ArrowUpRight size={18} /></a></div><div className="contact-form-wrap"><h3>Let&apos;s talk.</h3>{sent ? <div className="success-message"><Check size={20} /><p>Thanks for reaching out. Your message is ready to be sent to Nebiyou.</p><a href="mailto:nebiyou1daniel@gmail.com">Open email app <ArrowUpRight size={15} /></a></div> : <form onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Subject<input name="subject" required placeholder="What would you like to talk about?" /></label><label>Message<textarea name="message" required rows={4} placeholder="Tell me a little about the opportunity..." /></label><button className="button button-dark" type="submit">Send message <Send size={15} /></button></form>}</div></section>
      </main>

      <footer className="footer section-pad"><div><a className="wordmark" href="#top">NEBIYOU <span>DANIEL</span></a><p>Student · Developer · Builder</p></div><div className="footer-links"><a href="https://github.com/NebiyouDaniel" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="mailto:nebiyou1daniel@gmail.com">Email <ArrowUpRight size={14} /></a><a href="tel:0956797970">Phone <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>© 2026 Nebiyou Daniel</span><span>Built with curiosity, purpose, and continuous learning.</span></div></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-label={selectedProject.title} onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close project details" onClick={() => setSelectedProject(null)}><X size={19} /></button><div className="modal-art"><ProjectPreview project={selectedProject} /></div><SectionLabel>Project {selectedProject.number} · {selectedProject.category}</SectionLabel><h2>{selectedProject.title}</h2><p>{selectedProject.description}</p><div className="modal-details"><div><small>Technology</small><strong>{selectedProject.technology.join(' · ')}</strong></div><div><small>Features</small><strong>{selectedProject.features.join(' · ')}</strong></div></div><div className="modal-actions"><a className="button button-dark" href={selectedProject.liveUrl} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={15} /></a><a className="text-link" href="#contact" onClick={() => setSelectedProject(null)}>Discuss this project <ArrowUpRight size={15} /></a></div></div></div>}
    </div>
  );
}

export default App;
