import { useEffect, useRef, useState } from 'react'
import logo from './assets/logo.png'
import qahwaHome from './assets/work/qahwa-home.jpg'
import qahwaMenu from './assets/work/qahwa-menu.png'
import qahwaStory from './assets/work/qahwa-story.png'
import qahwaVisit from './assets/work/qahwa-visit.jpg'
import qahwaBooking from './assets/work/qahwa-booking.png'
import youpropertyHome from './assets/work/youproperty-home.jpg'
import youpropertyAreas from './assets/work/youproperty-areas.png'
import youpropertyFeatured from './assets/work/youproperty-featured.png'
import youpropertyListing from './assets/work/youproperty-listing.jpg'
import youpropertyContact from './assets/work/youproperty-contact.png'
import edukidsHome from './assets/work/edukids-home.png'
import edukidsExplore from './assets/work/edukids-explore.png'
import edukidsFriends from './assets/work/edukids-friends.png'
import edukidsLetters from './assets/work/edukids-letters.png'
import edukidsAnimals from './assets/work/edukids-animals.png'
import edukidsParents from './assets/work/edukids-parents.png'
import lineaHome from './assets/work/linea-home.jpg'
import lineaShop from './assets/work/linea-edit.jpg'
import lineaCategories from './assets/work/linea-categories.jpg'
import lineaDresses from './assets/work/linea-dresses.png'
import lineaProduct from './assets/work/linea-product.png'
import offsurgeHome from './assets/work/offsurge-home.jpg'
import offsurgeCampaign from './assets/work/offsurge-campaign.jpg'
import offsurgeProduct from './assets/work/offsurge-product.png'
import offsurgeDetail from './assets/work/offsurge-detail.png'
import offsurgeBag from './assets/work/offsurge-bag.png'
import offsurgeFooter from './assets/work/offsurge-footer.png'
import upgradeSignin from './assets/work/upgrade-signin.png'
import upgradeDashboard from './assets/work/upgrade-dashboard.png'
import upgradeAssistant from './assets/work/upgrade-assistant.png'
import upgradePlan from './assets/work/upgrade-plan.png'
import upgradeGroup from './assets/work/upgrade-group.png'
import upgradeWarnings from './assets/work/upgrade-warnings.png'

const INBOX = 'bytx.digital@gmail.com'
const FORMSUBMIT = 'https://formsubmit.co/ajax/f5cbef5ef31cf73d1edfb76788cd87f'

const NAV = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const SERVICES = [
  {
    index: '01',
    title: 'Custom Software Development',
    need: 'Custom software',
    copy: 'Tailored platforms and internal tools engineered around how your business actually operates.',
  },
  {
    index: '02',
    title: 'Website Development',
    need: 'Website',
    copy: 'High-performance marketing and product sites with clear structure, strong craft, and measurable results.',
  },
  {
    index: '03',
    title: 'Mobile Applications',
    need: 'Mobile app',
    copy: 'Native-feeling apps for iOS and Android, designed for clarity, speed, and lasting engagement.',
  },
  {
    index: '04',
    title: 'SaaS Solutions',
    need: 'SaaS solution',
    copy: 'Scalable product architecture, billing-ready flows, and interfaces built for recurring use.',
  },
  {
    index: '05',
    title: 'Automation & Business Solutions',
    need: 'Automation',
    copy: 'Workflow automation and operational systems that remove friction and free your team to move faster.',
  },
]

const PROJECTS = [
  {
    name: 'EduKids',
    type: 'Learning platform',
    category: 'Education',
    tech: ['React', 'Vite', 'Bilingual UX'],
    url: 'https://edu-kids-gamma.vercel.app/',
    host: 'edu-kids-gamma.vercel.app',
    summary:
      'A playful learning site for letters, numbers, colors, and animals. Children can look, listen, and explore in English and Arabic.',
    frames: [
      { src: edukidsHome, label: 'Home' },
      { src: edukidsExplore, label: 'Explore' },
      { src: edukidsFriends, label: 'Friends' },
      { src: edukidsLetters, label: 'Letters' },
      { src: edukidsAnimals, label: 'Animals' },
      { src: edukidsParents, label: 'Parents' },
    ],
  },
  {
    name: 'UpGrade',
    type: 'Study companion',
    category: 'EdTech',
    tech: ['React', 'Firebase', 'Dashboard'],
    url: 'https://upgrade-e87b3.web.app/',
    host: 'upgrade-e87b3.web.app',
    summary:
      'A study companion for courses, tasks, and deadlines. The dashboard, the plan, and the assistant stay in one dark system.',
    frames: [
      { src: upgradeSignin, label: 'Sign in' },
      { src: upgradeDashboard, label: 'Dashboard' },
      { src: upgradeAssistant, label: 'Assistant' },
      { src: upgradePlan, label: 'Study plan' },
      { src: upgradeGroup, label: 'Study group' },
      { src: upgradeWarnings, label: 'Warnings' },
    ],
  },
  {
    name: 'Qahwa',
    type: 'Café website',
    category: 'Hospitality',
    tech: ['React', 'Booking UX', 'Brand system'],
    url: 'https://qahwa-seven-mu.vercel.app/',
    host: 'qahwa-seven-mu.vercel.app',
    summary:
      'A café site with the pace of a slow morning. The menu, the story, and the visit share one warm system, and booking a table stays inside the page.',
    frames: [
      { src: qahwaHome, label: 'Home' },
      { src: qahwaMenu, label: 'Menu' },
      { src: qahwaStory, label: 'Story' },
      { src: qahwaVisit, label: 'Visit' },
      { src: qahwaBooking, label: 'Booking' },
    ],
  },
  {
    name: 'You Property',
    type: 'Real estate platform',
    category: 'Real estate',
    tech: ['React', 'Listings', 'Lead capture'],
    url: 'https://you-property.vercel.app/',
    host: 'you-property.vercel.app',
    summary:
      'A property site for Cairo, the New Capital, and the North Coast. Search, verified listings, and a request for a call share one dark green system.',
    frames: [
      { src: youpropertyHome, label: 'Home' },
      { src: youpropertyAreas, label: 'Areas' },
      { src: youpropertyFeatured, label: 'Featured' },
      { src: youpropertyListing, label: 'Listing' },
      { src: youpropertyContact, label: 'Contact' },
    ],
  },
  {
    name: 'LINEA',
    type: 'Fashion ecommerce',
    category: 'Retail',
    tech: ['React', 'Product UX', 'Commerce'],
    url: 'https://linea-fashion.vercel.app/',
    host: 'linea-fashion.vercel.app',
    summary:
      'A fashion shop for tops, jackets, dresses, and pants. The collection, the filters, and the product page stay in one quiet cream system.',
    frames: [
      { src: lineaHome, label: 'Home' },
      { src: lineaShop, label: 'Shop' },
      { src: lineaCategories, label: 'Categories' },
      { src: lineaDresses, label: 'Dresses' },
      { src: lineaProduct, label: 'Product' },
    ],
  },
  {
    name: 'OFFSURGE',
    type: 'Fashion house',
    category: 'Retail',
    tech: ['React', 'Campaign UX', 'Ecommerce'],
    url: 'https://www.offsurge.com/',
    host: 'www.offsurge.com',
    summary:
      'A fashion house for women, men, and pets. The campaign, the product, and the bag stay in one black-and-white system.',
    frames: [
      { src: offsurgeHome, label: 'Home' },
      { src: offsurgeCampaign, label: 'Campaign' },
      { src: offsurgeProduct, label: 'Product' },
      { src: offsurgeDetail, label: 'Detail' },
      { src: offsurgeBag, label: 'Bag' },
      { src: offsurgeFooter, label: 'Footer' },
    ],
  },
]

const BUDGETS = [
  '8,000 – 25,000 EGP',
  '25,000 – 50,000 EGP',
  '50,000 – 100,000 EGP',
  '100,000 – 150,000 EGP',
  '150,000 – 250,000 EGP',
  'Not sure yet',
]
const TIMELINES = ['As soon as possible', '1–2 months', '3–6 months', 'Flexible']
const NEEDS = [
  'Custom software',
  'Website',
  'Mobile app',
  'SaaS solution',
  'Automation',
  'Not sure yet',
]

const EMPTY = {
  name: '',
  email: '',
  company: '',
  phone: '',
  idea: '',
  budget: '',
  budgetCustom: '',
  timeline: '',
  needs: [],
  notes: '',
  honey: '',
}

function Logo({ className = 'logo' }) {
  return (
    <a className={className} href="#top">
      <img src={logo} alt="BYTX" />
    </a>
  )
}

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3.5 9h11M10 4.5 14.5 9 10 13.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!nodes.length) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function WorkShowcase({ projects }) {
  const [selected, setSelected] = useState(0)
  const [frame, setFrame] = useState(0)
  const [paused, setPaused] = useState(false)
  const [play, setPlay] = useState(0)
  const [fadeKey, setFadeKey] = useState(0)
  const tabsRef = useRef(null)
  const project = projects[selected]
  const count = project.frames.length
  const activeFrame = project.frames[frame]

  useEffect(() => {
    const strip = tabsRef.current
    const tab = strip?.querySelector('[aria-selected="true"]')
    if (!strip || !tab || strip.scrollWidth <= strip.clientWidth) return
    strip.scrollTo({
      left: tab.offsetLeft - (strip.clientWidth - tab.clientWidth) / 2,
      behavior: 'smooth',
    })
  }, [selected])

  useEffect(() => {
    if (paused) return undefined
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return undefined
    const timer = window.setTimeout(() => {
      setFrame((current) => (current + 1) % count)
    }, 4800)
    return () => window.clearTimeout(timer)
  }, [frame, paused, count, play, selected])

  function selectProject(index) {
    if (index === selected) return
    setSelected(index)
    setFrame(0)
    setFadeKey((key) => key + 1)
  }

  return (
    <div className="work-showcase">
      <div className="work-tabs" ref={tabsRef} role="tablist" aria-label="Selected projects">
        {projects.map((item, index) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            id={`work-tab-${index}`}
            aria-selected={index === selected}
            aria-controls="work-panel"
            className={index === selected ? 'is-on' : undefined}
            onClick={() => selectProject(index)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div
        className="work-panel"
        id="work-panel"
        role="tabpanel"
        aria-labelledby={`work-tab-${selected}`}
        key={fadeKey}
      >
        <div
          className={`work-stage${paused ? ' is-paused' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false)
            setPlay((current) => current + 1)
          }}
        >
          <div className="work-chrome" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>{project.host}</p>
          </div>
          <div className="work-visual">
            <img key={`${project.name}-${activeFrame.label}`} src={activeFrame.src} alt={`${project.name} — ${activeFrame.label}`} />
          </div>
          <div className="work-progress" aria-hidden="true">
            <span key={`${selected}-${frame}-${play}`} />
          </div>
          <div className="work-dots" role="group" aria-label={`${project.name} screens`}>
            {project.frames.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className={index === frame ? 'is-on' : undefined}
                aria-label={`Show ${item.label}`}
                aria-pressed={index === frame}
                onClick={() => setFrame(index)}
              />
            ))}
          </div>
        </div>

        <div className="work-detail">
          <div className="work-meta">
            <p className="work-category">{project.category}</p>
            <p className="work-type">{project.type}</p>
          </div>
          <h3>{project.name}</h3>
          <p className="work-summary">{project.summary}</p>
          <ul className="tech-list">
            {project.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.url ? (
            <a className="btn btn-primary" href={project.url} target="_blank" rel="noreferrer">
              View project
              <Arrow />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function Eyebrow({ children }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-line" aria-hidden="true" />
      {children}
    </p>
  )
}

function budgetValue(form) {
  const typed = form.budgetCustom.trim()
  return typed || form.budget
}

function buildMailto(form) {
  const lines = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Company: ${form.company || '—'}`,
    `Phone: ${form.phone || '—'}`,
    `Budget: ${budgetValue(form) || '—'}`,
    `Timeline: ${form.timeline || 'Not specified'}`,
    `Needs: ${form.needs.join(', ') || 'Not specified'}`,
    '',
    'Project idea:',
    form.idea,
    '',
    'Notes:',
    form.notes || '—',
  ]
  const subject = encodeURIComponent(`BYTX project inquiry — ${form.name || 'New brief'}`)
  const body = encodeURIComponent(lines.join('\n'))
  return `mailto:${INBOX}?subject=${subject}&body=${body}`
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  useReveal()

  useEffect(() => {
    const ids = NAV.map((item) => item.id)
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const marker = window.scrollY + 140
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) current = id
      }
      setActive((prev) => (prev === current ? prev : current))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    if (!menuOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  function update(field) {
    return (event) => {
      const value = event.target.value
      setForm((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
      setStatus((current) => (current === 'error' ? 'idle' : current))
    }
  }

  function choose(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, budget: undefined }))
  }

  function toggleNeed(value) {
    setForm((prev) => ({
      ...prev,
      needs: prev.needs.includes(value)
        ? prev.needs.filter((item) => item !== value)
        : [...prev.needs, value],
    }))
  }

  function openBrief(need) {
    setStatus((current) => (current === 'sending' ? current : 'idle'))
    if (need) {
      setForm((prev) => ({
        ...prev,
        needs: prev.needs.includes(need) ? prev.needs : [...prev.needs, need],
      }))
    }
    setMenuOpen(false)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => {
      document.getElementById('field-name')?.focus()
    }, 450)
  }

  function validate(nextForm) {
    const next = {}
    if (!nextForm.name.trim()) next.name = 'Add your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextForm.email.trim())) {
      next.email = 'Add a valid email so we can reply.'
    }
    if (nextForm.idea.trim().length < 12) next.idea = 'Tell us a little more about the idea.'
    if (!budgetValue(nextForm)) next.budget = 'Add a budget, even a rough range.'
    return next
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (form.honey) {
      setStatus('sent')
      return
    }
    const nextErrors = validate(form)
    setErrors(nextErrors)
    const firstInvalid = ['name', 'email', 'idea', 'budget'].find((key) => nextErrors[key])
    if (firstInvalid) {
      setStatus('idle')
      document.getElementById(firstInvalid === 'budget' ? 'field-budget' : `field-${firstInvalid}`)?.focus()
      return
    }

    setStatus('sending')
    const payload = {
      Name: form.name.trim(),
      Email: form.email.trim(),
      Company: form.company.trim() || '—',
      Phone: form.phone.trim() || '—',
      'Project idea': form.idea.trim(),
      Budget: budgetValue(form),
      Timeline: form.timeline || 'Not specified',
      'What they need': form.needs.join(', ') || 'Not specified',
      Notes: form.notes.trim() || '—',
      _subject: `BYTX — new project from ${form.name.trim()}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: form.email.trim(),
    }

    try {
      const response = await fetch(FORMSUBMIT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || 'Request failed')
      }
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const mailto = buildMailto(form)

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}>
        <div className="wrap header-inner">
          <Logo />
          <button
            type="button"
            className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav id="site-nav" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button type="button" className="nav-cta" onClick={() => openBrief()}>
              Start a project
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="orbits" aria-hidden="true">
            <div className="orbits-glow" />
            <svg viewBox="0 0 800 800">
              <circle cx="460" cy="390" r="150" />
              <circle cx="460" cy="390" r="240" />
              <circle cx="460" cy="390" r="330" />
              <circle cx="250" cy="640" r="170" />
              <circle cx="120" cy="720" r="110" />
            </svg>
          </div>
          <div className="hero-body">
            <p className="hero-brand">BYTX</p>
            <h1>
              The Art of
              <br />
              <span className="outline">Digital Engineering.</span>
            </h1>
            <p className="lede">
              Strategy, design, and technology for brands ready to move the world forward.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => openBrief()}>
                Start a project
                <Arrow />
              </button>
              <a className="btn btn-ghost" href="#work">
                Explore our work
                <Arrow />
              </a>
            </div>
          </div>
          <button
            type="button"
            className="scroll-hint"
            onClick={() => document.getElementById('belief')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Scroll to discover
          </button>
        </section>

        <section className="section belief" id="belief">
          <svg className="belief-orbits" viewBox="0 0 520 520" aria-hidden="true">
            <circle cx="300" cy="180" r="120" />
            <circle cx="300" cy="180" r="190" />
            <circle cx="300" cy="180" r="260" />
          </svg>
          <div className="wrap reveal">
            <Eyebrow>What we believe</Eyebrow>
            <h2>
              The best digital <span className="dim">experiences don’t just look</span> sharp. They connect{' '}
              <span className="dim">strategy, creativity, and</span> engineering into one clear idea.
            </h2>
          </div>
        </section>

        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <Eyebrow>Capabilities</Eyebrow>
                <h2>Built for momentum.</h2>
              </div>
              <a className="text-link" href="#service-list">
                All services
                <Arrow />
              </a>
            </div>
            <div className="service-list" id="service-list">
              {SERVICES.map((service, index) => (
                <button
                  key={service.index}
                  type="button"
                  className="service reveal"
                  style={{ '--delay': `${index * 60}ms` }}
                  onClick={() => openBrief(service.need)}
                >
                  <span className="index">{service.index}</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <Arrow />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <Eyebrow>Selected work</Eyebrow>
                <h2>Proof in the product.</h2>
              </div>
              <p className="section-aside">
                Select a project to preview the build, stack, and live experience.
              </p>
            </div>
            <div className="reveal">
              <WorkShowcase projects={PROJECTS} />
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="wrap about-grid reveal">
            <div>
              <Eyebrow>About BYTX</Eyebrow>
              <h2>
                Independent
                <br />
                by design.
              </h2>
            </div>
            <p className="quiet">
              BYTX is an independent digital engineering studio founded on one belief: the strongest work
              happens when strategy, craft, and technology share the same table.
            </p>
          </div>
        </section>

        <section className="engineering" aria-label="The art of digital engineering">
          <svg className="arc-top" viewBox="0 0 1100 220" aria-hidden="true">
            <circle cx="550" cy="220" r="200" />
            <circle cx="550" cy="260" r="300" />
          </svg>
          <p>The art of digital engineering.</p>
          <svg className="arc-bottom" viewBox="0 0 1100 220" aria-hidden="true">
            <circle cx="550" cy="-40" r="210" />
          </svg>
        </section>

        <section className="section why" id="why">
          <div className="wrap why-grid reveal">
            <Eyebrow>Why BYTX</Eyebrow>
            <div>
              <h2>
                Less overhead.
                <br />
                More thinking.
              </h2>
              <p className="quiet">
                We stay intentionally compact, bringing the right specialists into each engagement. You work
                directly with the people doing the work—from the first workshop to the final release.
              </p>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap">
            <div className="contact-hero reveal">
              <div>
                <Eyebrow>Start a conversation</Eyebrow>
                <h2>
                  Let’s engineer what’s
                  <br />
                  next.
                </h2>
              </div>
              <a className="circle-link" href="#brief">
                Get in
                <br />
                touch
                <Arrow />
              </a>
            </div>

            {status === 'sent' ? (
              <div className="sent" role="status">
                <Eyebrow>Brief received</Eyebrow>
                <h3>We’ll read this carefully.</h3>
                <p>
                  Your idea, budget, and details were sent to the studio. A reply goes to {form.email}.
                </p>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => {
                    setForm(EMPTY)
                    setErrors({})
                    setStatus('idle')
                  }}
                >
                  Send another brief
                  <Arrow />
                </button>
              </div>
            ) : (
              <form id="brief" className="brief" onSubmit={onSubmit} noValidate>
                <div className="brief-card">
                  <div className="brief-intro">
                    <div>
                      <h3>Tell us the idea.</h3>
                    </div>
                    <ol className="steps">
                      <li>
                        <span>01</span>
                        Write the project and the budget you have in mind.
                      </li>
                      <li>
                        <span>02</span>
                        The brief arrives in the studio inbox.
                      </li>
                      <li>
                        <span>03</span>
                        We reply with a clear point of view.
                      </li>
                    </ol>
                  </div>

                  <div className={`field${errors.name ? ' has-error' : ''}`}>
                    <label htmlFor="field-name">Name</label>
                    <input
                      id="field-name"
                      name="Name"
                      autoComplete="name"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your name"
                    />
                    <p className="field-error">{errors.name}</p>
                  </div>
                  <div className={`field${errors.email ? ' has-error' : ''}`}>
                    <label htmlFor="field-email">Email</label>
                    <input
                      id="field-email"
                      name="Email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                    />
                    <p className="field-error">{errors.email}</p>
                  </div>
                  <div className="field">
                    <label htmlFor="field-company">Company</label>
                    <input
                      id="field-company"
                      name="Company"
                      autoComplete="organization"
                      value={form.company}
                      onChange={update('company')}
                      placeholder="Optional"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="field-phone">Phone or WhatsApp</label>
                    <input
                      id="field-phone"
                      name="Phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="Optional"
                    />
                  </div>
                  <div className={`field wide${errors.idea ? ' has-error' : ''}`}>
                    <label htmlFor="field-idea">Project idea</label>
                    <textarea
                      id="field-idea"
                      name="Project idea"
                      rows={5}
                      value={form.idea}
                      onChange={update('idea')}
                      placeholder="What do you want to build, and who is it for?"
                    />
                    <p className="field-error">{errors.idea}</p>
                  </div>

                  <fieldset className={`choices${errors.budget ? ' has-error' : ''}`}>
                    <legend className="choice-label">Budget</legend>
                    <div className="chips">
                      {BUDGETS.map((option) => (
                        <label key={option} className={form.budget === option ? 'chip is-on' : 'chip'}>
                          <input
                            type="radio"
                            name="Budget range"
                            value={option}
                            checked={form.budget === option}
                            onChange={() => choose('budget', option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    <p className="hint">Pick a range, or type the number you actually have.</p>
                  </fieldset>

                  <div className={`field wide${errors.budget ? ' has-error' : ''}`}>
                    <label htmlFor="field-budget">Or type a budget</label>
                    <input
                      id="field-budget"
                      name="Budget detail"
                      value={form.budgetCustom}
                      onChange={update('budgetCustom')}
                      placeholder="20,000 EGP, or open to a range…"
                    />
                    <p className="field-error">{errors.budget}</p>
                  </div>
                  <fieldset className="choices">
                    <legend className="choice-label">Timing</legend>
                    <div className="chips">
                      {TIMELINES.map((option) => (
                        <label key={option} className={form.timeline === option ? 'chip is-on' : 'chip'}>
                          <input
                            type="radio"
                            name="Timeline"
                            value={option}
                            checked={form.timeline === option}
                            onChange={() => choose('timeline', option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset className="choices">
                    <legend className="choice-label">What you need</legend>
                    <div className="chips">
                      {NEEDS.map((option) => (
                        <label key={option} className={form.needs.includes(option) ? 'chip is-on' : 'chip'}>
                          <input
                            type="checkbox"
                            name="Needs"
                            value={option}
                            checked={form.needs.includes(option)}
                            onChange={() => toggleNeed(option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="field wide">
                    <label htmlFor="field-notes">Anything else</label>
                    <textarea
                      id="field-notes"
                      name="Notes"
                      rows={3}
                      value={form.notes}
                      onChange={update('notes')}
                      placeholder="Links, references, constraints, or a deadline."
                    />
                  </div>

                  <label className="hp" aria-hidden="true">
                    Company website
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.honey}
                      onChange={update('honey')}
                    />
                  </label>

                  {status === 'error' && (
                    <p className="form-banner" role="alert">
                      We couldn’t send it from the site just now.{' '}
                      <a href={mailto}>Email the brief directly</a> and it still reaches {INBOX}.
                    </p>
                  )}

                  <div className="form-actions">
                    <p className="fine">Sent only to the BYTX studio inbox at {INBOX}.</p>
                    <button className="submit" type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending' : 'Send the brief'}
                      <Arrow />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <Logo className="logo footer-logo" />
            <p>The Art of Digital Engineering.</p>
          </div>
          <div className="footer-nav" aria-label="Footer">
            {NAV.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/bytx.tech" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@bytx.tech" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="https://www.facebook.com/share/19jGWsjVvi/" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
          <p className="copy">© {new Date().getFullYear()} BYTX Studio</p>
        </div>
      </footer>
    </>
  )
}
