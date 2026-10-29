import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Braces, Check, ChevronRight, Code2,
  Command, Cpu, ExternalLink, Github, Globe2, Mail, Menu, Terminal,
  X, Zap
} from 'lucide-react'

const copy = {
  pt: {
    nav: ['Início', 'Sobre', 'Projetos', 'Stack'],
    availability: 'Disponível para estágio',
    heroEyebrow: 'PORTFÓLIO / 2026',
    greeting: 'Olá, mundo! Eu sou',
    role: 'Desenvolvedor em formação.',
    intro: 'Transformo problemas reais em soluções com código, automação e curiosidade constante.',
    viewProjects: 'Explorar projetos',
    contact: 'Vamos conversar',
    scroll: 'ROLE PARA EXPLORAR',
    aboutLabel: '01 / SOBRE MIM',
    aboutTitle: 'Código com propósito.',
    aboutText: 'Sou estudante de Ciência da Computação na CESAR School e gosto de construir ferramentas que resolvem problemas de verdade. Tenho experiência prática com automação em Python e venho aprofundando meus conhecimentos em estruturas de dados, C, Java e desenvolvimento de software.',
    aboutText2: 'Meu foco agora é evoluir como desenvolvedor, colaborar com boas equipes e transformar aprendizado em entregas úteis.',
    terminalTitle: 'perfil.py',
    terminalLines: [
      ['const foco', ' = "aprender construindo"'],
      ['const interesses', ' = ["backend", "automação", "IA"]'],
      ['const objetivo', ' = "meu próximo estágio"'],
    ],
    projectsLabel: '02 / TRABALHOS SELECIONADOS',
    projectsTitle: 'Projetos em destaque',
    projectsSub: 'Projetos reais, aprendizados práticos e problemas que saíram do papel.',
    featured: 'DESTAQUE',
    codeLabel: 'CÓDIGO',
    projectItems: [
      { id: 'processflow', title: 'ProcessFlow', type: 'Sistemas · C', desc: 'Orquestrador de processos com execução de tarefas, gerenciamento de processos filhos e suporte planejado a pipelines. Projeto focado em conceitos de sistemas operacionais.', tags: ['C', 'Linux / WSL', 'fork / exec'], status: 'Em desenvolvimento', icon: 'terminal' },
      { id: 'automation', title: 'Automação contábil', type: 'Automação · Python', desc: 'Scripts para reduzir tarefas repetitivas em sistema contábil web, além de processamento de PDFs e geração de planilhas para agilizar rotinas operacionais.', tags: ['Python', 'PyAutoGUI', 'OpenPyXL'], status: 'Experiência prática', icon: 'zap' },
      { id: 'bombermancli', title: 'BombermanCLI', type: 'Jogo · C', desc: 'Jogo inspirado em Bomberman, com interface gráfica, movimentação do jogador, mecânica de bombas e detecção de colisões.', tags: ['C', 'Lógica de Jogos', 'Algoritmos'], status: 'Projeto acadêmico', icon: 'code' },
      { id: 'java', title: 'Estudos de Java & POO', type: 'Desenvolvimento · Java', desc: 'Projetos acadêmicos para praticar orientação a objetos, separação de responsabilidades, arquitetura em camadas e testes automatizados.', tags: ['Java', 'POO', 'JUnit'], status: 'Em evolução', icon: 'braces' },
    ],
    stackLabel: '03 / FERRAMENTAS',
    stackTitle: 'Ferramentas do meu dia a dia',
    stackText: 'Tecnologias que utilizo ou estou desenvolvendo na prática. A lista acompanha minha evolução — não é uma promessa de domínio avançado em tudo.',
    softLabel: 'TAMBÉM POR AQUI',
    softSkills: ['Resolução de problemas', 'Aprendizado contínuo', 'Automação de tarefas', 'Trabalho em equipe'],
    contactLabel: '04 / PRÓXIMO PASSO',
    contactTitle: 'Vamos construir algo bom?',
    contactText: 'Estou buscando uma oportunidade de estágio para aprender com o time, contribuir com código e crescer na prática.',
    emailButton: 'Entrar em contato',
    githubButton: 'Ver GitHub',
    footer: 'Feito com curiosidade, música e código.',
    backTop: 'VOLTAR AO TOPO',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    copied: 'E-mail copiado',
  },
  en: {
    nav: ['Home', 'About', 'Projects', 'Stack'],
    availability: 'Open to internships',
    heroEyebrow: 'PORTFOLIO / 2026',
    greeting: 'Hello, world! I’m',
    role: 'Software developer in progress.',
    intro: 'I turn real problems into solutions through code, automation, and constant curiosity.',
    viewProjects: 'Explore projects',
    contact: 'Let’s talk',
    scroll: 'SCROLL TO EXPLORE',
    aboutLabel: '01 / ABOUT ME',
    aboutTitle: 'Code with purpose.',
    aboutText: 'I’m a Computer Science student at CESAR School who enjoys building tools that solve real problems. I have hands-on experience with Python automation and am deepening my knowledge of data structures, C, Java, and software development.',
    aboutText2: 'My current goal is to grow as a developer, collaborate with great teams, and turn learning into useful deliverables.',
    terminalTitle: 'profile.py',
    terminalLines: [
      ['const focus', ' = "learn by building"'],
      ['const interests', ' = ["backend", "automation", "AI"]'],
      ['const goal', ' = "my next internship"'],
    ],
    projectsLabel: '02 / SELECTED WORK',
    projectsTitle: 'Featured projects',
    projectsSub: 'Real projects, hands-on learning, and problems brought to life.',
    featured: 'FEATURED',
    codeLabel: 'SOURCE',
    projectItems: [
      { id: 'processflow', title: 'ProcessFlow', type: 'Systems · C', desc: 'A process orchestrator for task execution, child-process management, and planned pipeline support. Focused on operating systems concepts.', tags: ['C', 'Linux / WSL', 'fork / exec'], status: 'In development', icon: 'terminal' },
      { id: 'automation', title: 'Accounting automation', type: 'Automation · Python', desc: 'Scripts that reduce repetitive tasks in a web-based accounting system, plus PDF processing and spreadsheet generation for operational workflows.', tags: ['Python', 'PyAutoGUI', 'OpenPyXL'], status: 'Hands-on experience', icon: 'zap' },
      { id: 'bombermancli', title: 'BombermanCLI', type: 'Game · C', desc: 'A Bomberman-inspired game featuring a graphical interface, player movement, bomb mechanics, and collision detection.', tags: ['C', 'Game Logic', 'Algorithms'], status: 'Academic project', icon: 'code' },
      { id: 'java', title: 'Java & OOP studies', type: 'Development · Java', desc: 'Academic projects to practice object-oriented programming, separation of concerns, layered architecture, and automated tests.', tags: ['Java', 'OOP', 'JUnit'], status: 'In progress', icon: 'braces' },
    ],
    stackLabel: '03 / TOOLKIT',
    stackTitle: 'Tools in my workflow',
    stackText: 'Technologies I use or am actively learning by building. This list evolves with me — it is not a claim of advanced mastery in everything.',
    softLabel: 'ALSO IN MY TOOLKIT',
    softSkills: ['Problem solving', 'Continuous learning', 'Task automation', 'Teamwork'],
    contactLabel: '04 / NEXT STEP',
    contactTitle: 'Let’s build something good.',
    contactText: 'I’m looking for an internship where I can learn from a team, contribute code, and grow through real-world work.',
    emailButton: 'Get in touch',
    githubButton: 'View GitHub',
    footer: 'Made with curiosity, music, and code.',
    backTop: 'BACK TO TOP',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    copied: 'Email copied',
  },
}

const projects = [
  { id: 'processflow', number: '01', link: 'https://github.com/LuisFilipe192/OrquestradorDeProcessos.git', accent: 'green' },
  { id: 'automation', number: '02', link: 'https://github.com/LuisFilipe192/automacao_de_Livro_Diario.projeto_pessoal.git', accent: 'purple' },
  { id: 'bombermancli', number: '03', link: 'https://github.com/kaik-e/BombermanCLI.git', accent: 'blue' },
  { id: 'java', number: '04', link: 'https://github.com/LuisFilipe192/AutoHub.git', accent: 'orange' },
]

const technologies = [
  { name: 'Python', category: 'Automation & scripting', level: 'Practical use' },
  { name: 'C', category: 'Systems & data structures', level: 'Learning by building' },
  { name: 'Java', category: 'OOP & backend foundations', level: 'Growing' },
  { name: 'JavaScript', category: 'Web development', level: 'Foundations' },
  { name: 'HTML / CSS', category: 'Responsive interfaces', level: 'Foundations' },
  { name: 'Git / GitHub', category: 'Version control', level: 'Daily workflow' },
]

function IconFor({ name, size = 20 }) {
  const props = { size, strokeWidth: 1.7 }
  if (name === 'terminal') return <Terminal {...props} />
  if (name === 'zap') return <Zap {...props} />
  if (name === 'braces') return <Braces {...props} />
  return <Code2 {...props} />
}

export default function App() {
  const [lang, setLang] = useState('pt')
  const [menuOpen, setMenuOpen] = useState(false)
  const [typed, setTyped] = useState('')
  const [emailCopied, setEmailCopied] = useState(false)
  
  const t = copy[lang]
  const email = 'luisfelipe192@gmail.com'
  const github = 'https://github.com/LuisFilipe192'
  const linkedin = 'https://www.linkedin.com/in/luis-filipe192'

  useEffect(() => {
    const phrase = 'software.create(impact);'
    let i = 0
    const timer = window.setInterval(() => {
      i += 1
      setTyped(phrase.slice(0, i))
      if (i >= phrase.length) window.clearInterval(timer)
    }, 85)
    return () => window.clearInterval(timer)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)

      window.setTimeout(() => {
        setEmailCopied(false)
      }, 2500)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }


  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Home">
          <span className="brand-mark"><Terminal size={19} /></span>
          <span>lf<span className="brand-dot">.</span>dev</span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <button key={item} onClick={() => scrollTo(['home', 'about', 'projects', 'stack'][index])}>
              <span className="nav-index">0{index + 1}</span>{item}
            </button>
          ))}
          <a className="nav-contact" href={`mailto:${email}`}><Mail size={15} /> {t.contact}</a>
        </nav>
        <div className="top-actions">
          <button className="language-toggle" onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} aria-label="Change language">
            <Globe2 size={15} /><span>{lang === 'pt' ? 'PT' : 'EN'}</span><span className="lang-divider">/</span><span className="lang-muted">{lang === 'pt' ? 'EN' : 'PT'}</span>
          </button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.menuClose : t.menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="status-pill"><span className="status-pulse" />{t.availability}</div>
            <p className="eyebrow"><span className="eyebrow-line" />{t.heroEyebrow}</p>
            <h1>{t.greeting}<br /><span className="hero-name">Luis Filipe<span className="green">.</span></span></h1>
            <h2>{t.role}</h2>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-ctas">
              <button className="button button-primary" onClick={() => scrollTo('projects')}>{t.viewProjects}<ArrowDownRight size={17} /></button>
              <a className="button button-ghost" href={`mailto:${email}`}>{t.contact}<ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={12} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16} /> LinkedIn <ArrowUpRight size={12} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative code terminal">
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="terminal-window">
              <div className="terminal-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span><Terminal size={13} /> luis@dev:~</span>
                <span className="terminal-lock"><Command size={13} /></span>
              </div>
              <div className="terminal-body">
                <p className="terminal-comment"># {lang === 'pt' ? 'transformando ideias em código' : 'turning ideas into code'}</p>
                <p><span className="term-green">➜</span> <span className="term-blue">~</span> whoami</p>
                <h3>luis_filipe</h3>
                <p><span className="term-green">➜</span> <span className="term-blue">~</span> cat focus.txt</p>
                <ul className="terminal-list">
                  <li><span>+</span> Software Development</li>
                  <li><span>+</span> Python Automation</li>
                  <li><span>+</span> Backend & Systems</li>
                </ul>
                <p><span className="term-green">➜</span> <span className="term-blue">~</span> <span className="typed-text">{typed}</span><span className="cursor">▋</span></p>
                <div className="terminal-output"><Check size={14} /> process completed with curiosity</div>
              </div>
              <div className="terminal-bottom"><span><i /> SYSTEM ONLINE</span><span>UTF-8</span><span>Ln 24, Col 08</span></div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={15} /><span>clean_code()</span></div>
            <div className="floating-chip chip-bottom"><Cpu size={15} /><span>always_learning = true</span></div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo('about')}><span className="scroll-line" />{t.scroll}</button>
          <div className="hero-counter"><span>01</span><i />04</div>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" />{t.aboutLabel}</p>
            <h2>{t.aboutTitle}</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>{t.aboutText}</p>
              <p>{t.aboutText2}</p>
              <div className="about-facts">
                <div><span className="fact-symbol">01</span><span>{lang === 'pt' ? 'Ciência da Computação' : 'Computer Science'}</span></div>
                <div><span className="fact-symbol">02</span><span>{lang === 'pt' ? 'Aprendizado na prática' : 'Hands-on learning'}</span></div>
                <div><span className="fact-symbol">03</span><span>{lang === 'pt' ? 'Foco em resolver problemas' : 'Problem-solving mindset'}</span></div>
              </div>
            </div>
            <div className="code-card">
              <div className="code-card-header"><div><span className="file-icon"><Braces size={14} /></span> {t.terminalTitle}</div><span className="code-lang"><PYTHON></PYTHON></span></div>
              <div className="code-content">
                <div className="line-numbers">1<br />2<br />3<br />4<br />5<br />6</div>        
                <div className="code-lines">
                  <p><span className="code-purple">class</span> <span className="code-blue">Developer</span>:</p>
                  {lang === 'pt' ? (
                    <>
                      <p className="indent"><span className="code-cyan">nome</span> = <span className="code-yellow">"Luis Felipe"</span></p>
                      <p className="indent"><span className="code-cyan">formacao</span> = <span className="code-yellow">"Ciência da Computação"</span></p>
                      <p className="indent"><span className="code-cyan">instituicao</span> = <span className="code-yellow">"CESAR School"</span></p>
                      <p className="indent"><span className="code-cyan">foco</span> = [<span className="code-yellow">"Backend"</span>, <span className="code-yellow">"Automação"</span>, <span className="code-yellow">"IA"</span>]</p>
                      <p className="indent"><span className="code-cyan">objetivo</span> = <span className="code-yellow">"Meu próximo estágio"</span></p>
                      <p className="code-comment"># Sempre aprendendo, sempre construindo...</p>
                    </>
                  ) : (
                    <>
                      <p className="indent"><span className="code-cyan">name</span> = <span className="code-yellow">"Luis Felipe"</span></p>
                      <p className="indent"><span className="code-cyan">degree</span> = <span className="code-yellow">"Computer Science"</span></p>
                      <p className="indent"><span className="code-cyan">institution</span> = <span className="code-yellow">"CESAR School"</span></p>
                      <p className="indent"><span className="code-cyan">focus</span> = [<span className="code-yellow">"Backend"</span>, <span className="code-yellow">"Automation"</span>, <span className="code-yellow">"AI"</span>]</p>
                      <p className="indent"><span className="code-cyan">goal</span> = <span className="code-yellow">"My next internship"</span></p>
                      <p className="code-comment"># Always learning, always building...</p>
                    </>
                  )}
                </div>
              </div>
              <div className="code-card-footer"><span><i /> saved</span><span>UTF-8</span><span>Python</span></div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-heading projects-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" />{t.projectsLabel}</p><h2>{t.projectsTitle}</h2></div>
            <p className="section-sub">{t.projectsSub}</p>
          </div>
          <div className="project-grid">
            {t.projectItems.map((project, index) => (
              <article className={`project-card accent-${projects[index].accent}`} key={project.id}>
                <div className="project-card-top"><span className="project-number">{projects[index].number} / 04</span><span className="project-icon"><IconFor name={project.icon} size={21} /></span></div>
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-card-bottom"><span className="project-status"><i />{project.status}</span><a href={projects[index].link} target="_blank" rel="noreferrer" aria-label={`${t.codeLabel}: ${project.title}`}><Github size={16} /> {t.codeLabel} <ArrowUpRight size={13} /></a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="stack section-wrap section-block" id="stack">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" />{t.stackLabel}</p>
            <h2>{t.stackTitle}</h2>
            <p className="section-sub stack-sub">{t.stackText}</p>
          </div>
          <div className="stack-layout">
            <div className="tech-grid">
              {technologies.map((tech, i) => <div className="tech-item" key={tech.name}><span className="tech-number">0{i + 1}</span><div><h3>{tech.name}</h3><p>{tech.category}</p></div><span className="tech-level">{tech.level}</span></div>)}
            </div>
            <div className="soft-panel">
              <div className="soft-panel-head"><Zap size={17} /><span>{t.softLabel}</span></div>
              {t.softSkills.map((skill, i) => <div className="soft-skill" key={skill}><span>0{i + 1}</span>{skill}<ChevronRight size={15} /></div>)}
              <div className="soft-terminal">~/growth <span>●</span> in_progress</div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-decoration"><div className="contact-cross">+</div><div className="contact-ring" /></div>
            <div className="contact-content">
              <p className="eyebrow"><span className="eyebrow-line" />{t.contactLabel}</p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(
                    lang === 'pt'
                      ? 'Oportunidade de estágio — Desenvolvimento de Software'
                      : 'Internship Opportunity — Software Development'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail size={16} />
                  {t.emailButton}
                  <ArrowUpRight size={15} />
                </a>
              <a className="button button-ghost" href={github} target="_blank" rel="noreferrer"><Github size={16} />{t.githubButton}<ArrowUpRight size={15} /></a></div>
              {emailCopied && (
                <div className="copy-toast" role="status" aria-live="polite">
                  <Check size={16} />
                  <span>
                    {lang === 'pt'
                      ? '> e-mail copiado com sucesso'
                      : '> email copied successfully'}
                  </span>
                </div>
              )}            
            </div>
            <div className="contact-index">LET’S<br />CONNECT<span>.</span></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Terminal size={17} /></span><span>lf<span className="brand-dot">.</span>dev</span></a>
        <p>© {new Date().getFullYear()} Luis Filipe. {t.footer}</p>
        <button onClick={() => scrollTo('home')}>{t.backTop}<ArrowUpRight size={13} /></button>
      </footer>
    </div>
  )
}