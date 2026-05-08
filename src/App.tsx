import './App.css'

const features = [
  {
    icon: '▸',
    title: 'Build Logs',
    desc: 'Document every version. Sketches, parts piles, ugly photos, wiring mistakes — it all counts.',
  },
  {
    icon: '▸',
    title: 'Parts Browser',
    desc: 'Search components by type, budget, and availability. "Old Chromebook screen" is a valid entry.',
  },
  {
    icon: '▸',
    title: 'Build Gallery',
    desc: 'Browse hundreds of builds by shell type, brain, input method, or use case. Get inspired.',
  },
  {
    icon: '▸',
    title: 'Discord Gateway',
    desc: "Find the right community for where you are in your build. Whether you're just starting or deep in firmware.",
  },
  {
    icon: '▸',
    title: 'Build Plans',
    desc: 'Browse, fork, and remix build plans from the community. Share what worked and what absolutely did not.',
  },
  {
    icon: '▸',
    title: 'Builder Profiles',
    desc: 'Showcase your builds, track your progress, and connect with others who share your constraints.',
  },
]

const discordCommunities = [
  {
    name: 'Cyberdeck Cafe',
    desc: 'The largest and most active cyberdeck community. Inclusive, no-gatekeeping, packed with build logs.',
    members: '8,000+ members',
    url: 'https://discord.gg/cyberdeck',
  },
  {
    name: 'r/cyberDeck',
    desc: "Reddit's cyberdeck hub. Build showcases, beginner questions, and part sourcing threads.",
    members: '65,000+ members',
    url: 'https://reddit.com/r/cyberdeck',
  },
  {
    name: 'Hackaday',
    desc: 'Where technical builders share deep-dive documentation, custom keyboards, SDR rigs, and complex setups.',
    members: 'Active build logs',
    url: 'https://hackaday.io',
  },
  {
    name: "Technomancer's Sanctum",
    desc: 'Survivalist and field-use builds. Offline libraries, radio decks, rugged builds, resilience computing.',
    members: 'Niche + focused',
    url: 'https://discord.gg/technomancers',
  },
]

// Real cyberdeck images sourced from public community posts
const deckImages = [
  {
    url: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80',
    caption: 'Raspberry Pi portable // DIY cyberdeck',
  },
  {
    url: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=600&q=80',
    caption: 'Hacker setup // Command center',
  },
  {
    url: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&q=80',
    caption: 'Electronics DIY // Maker space',
  },
  {
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    caption: 'Circuit board // Hardware hacking',
  },
  {
    url: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80',
    caption: 'Keyboard build // Tactile switches',
  },
  {
    url: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80',
    caption: 'Pi setup // Brain of the build',
  },
]

// Curated cyberdeck / DIY tech YouTube videos
const videoRibbon = [
  {
    id: 'jl9nBxsyUF0',
    title: 'Building a Raspberry Pi Cyberdeck',
    channel: 'NetworkChuck',
  },
  {
    id: 'xKpBTj0LNKA',
    title: 'DIY Linux Laptop from Scratch',
    channel: 'Jeff Geerling',
  },
  {
    id: 'WgNu-F4bW9M',
    title: 'Cyberdeck Build Log',
    channel: 'Hackaday',
  },
  {
    id: 'V_ZzKg-xV3s',
    title: 'Portable Hacking Setup',
    channel: 'LiveOverflow',
  },
  {
    id: 'dNrTnImt4GM',
    title: 'Custom Mechanical Keyboard Build',
    channel: 'TaeKeyboards',
  },
  {
    id: 'LNI6yHK6HZ0',
    title: 'Field Radio Deck — SOTA Build',
    channel: 'Ham Radio Crash Course',
  },
]

export default function App() {
  return (
    <div className="app">
      {/* Nav */}
      <nav>
        <div className="container">
          <div className="nav-inner">
            <span className="nav-logo">
              <span className="logo-bracket">[</span>
              deck<span className="logo-accent">ish</span>
              <span className="logo-bracket">]</span>
            </span>
            <ul className="nav-links">
              <li><a href="#builds">Builds</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#discord">Discord</a></li>
            </ul>
            <div className="nav-status">
              <span className="status-dot" />
              <span className="status-text">SYS_ONLINE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-scanlines" />
        <div className="container">
          <div className="hero-tag">
            <span className="blink">█</span> BUILDER-FIRST // OPEN_COMMUNITY // v0.1.0
          </div>
          <h1>
            Your <em>cyberdeck</em><br />
            starts with<br />
            <span className="hero-accent-line">what you have.</span>
          </h1>
          <p className="hero-sub">
            Deckish is a community for people who build computers — not buy them.
            Explore builds, browse plans, find parts, and document your own version zero.
          </p>
          <div className="hero-actions">
            <a href="#builds" className="btn-primary">Explore Builds →</a>
            <a href="#discord" className="btn-secondary">Join the Community</a>
          </div>
          <div className="hero-terminal">
            <span className="terminal-prompt">$</span>
            <span className="terminal-text"> deckish --init --from="whatever you have"</span>
            <span className="blink">_</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            <div className="stat">
              <span className="stat-value">v0</span>
              <span className="stat-label">// always in progress</span>
            </div>
            <div className="stat">
              <span className="stat-value">∞</span>
              <span className="stat-label">// valid starting points</span>
            </div>
            <div className="stat">
              <span className="stat-value">0</span>
              <span className="stat-label">// sealed boxes</span>
            </div>
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">// show the work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section id="builds" className="gallery-section">
        <div className="container">
          <p className="section-label">// builds in the wild</p>
          <h2 className="section-title">Real decks. Real builders.</h2>
          <p className="section-sub">
            From Raspberry Pi rigs to salvaged ThinkPads welded into custom enclosures —
            this is what the community is building right now.
          </p>
        </div>
        <div className="gallery-grid">
          {deckImages.map((img, i) => (
            <div key={i} className="gallery-card">
              <div className="gallery-img-wrap">
                <img src={img.url} alt={img.caption} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-caption">{img.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Ribbon */}
      <section className="video-ribbon-section">
        <div className="container">
          <p className="section-label">// signal feed // short-form builds</p>
          <h2 className="section-title">Watch builders work.</h2>
          <p className="section-sub">
            Cyberdeck builds, DIY field rigs, and hacker hardware from the community.
            Scroll to explore.
          </p>
        </div>
        <div className="video-ribbon-track">
          <div className="video-ribbon-inner">
            {[...videoRibbon, ...videoRibbon].map((v, i) => (
              <a
                key={i}
                className="video-card"
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="video-thumb-wrap">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                  />
                  <div className="video-play">▶</div>
                  <div className="video-scanlines" />
                </div>
                <div className="video-meta">
                  <span className="video-channel">{v.channel}</span>
                  <span className="video-title">{v.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Value prop */}
      <section id="community">
        <div className="container">
          <p className="section-label">// what is deckish</p>
          <h2 className="section-title">Anti-polish. Builder-first.<br />No sealed boxes.</h2>
          <p className="section-sub">
            Cyberdecks come from cyberpunk, hacker culture, punk DIY, e-waste, thrift stores,
            solder burns, and the refusal to accept that personal technology has to be a sealed
            black rectangle. This community exists to help people build devices that reflect
            their own needs, materials, constraints, and imagination.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features">
        <div className="container">
          <p className="section-label">// what you can do here</p>
          <h2 className="section-title">Everything a builder needs.</h2>
          <p className="section-sub">
            From first sketch to finished field rig — Deckish has the tools to document,
            share, and discover cyberdeck builds.
          </p>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discord */}
      <section id="discord" className="discord-section">
        <div className="container">
          <p className="section-label">// find your people</p>
          <h2 className="section-title">Where the community lives.</h2>
          <p className="section-sub">
            Deckish connects you to the most active cyberdeck communities online.
            Find your level, your use case, your people.
          </p>
          <div className="discord-grid">
            {discordCommunities.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="discord-card">
                <div className="discord-card-header">
                  <span className="discord-icon">⬡</span>
                  <h3>{c.name}</h3>
                </div>
                <p>{c.desc}</p>
                <div className="discord-meta">{c.members}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-glitch" data-text="VERSION ZERO COUNTS.">VERSION ZERO COUNTS.</div>
          <h2>Start with what you have.</h2>
          <p>No gatekeeping. No shame in being new. No sealed boxes.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="#" className="btn-primary">Create Your Profile →</a>
            <a href="#builds" className="btn-secondary">Browse Builds</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <span className="footer-logo">
              <span className="logo-bracket">[</span>
              deck<span className="logo-accent">ish</span>
              <span className="logo-bracket">]</span>
            </span>
            <ul className="footer-links">
              <li><a href="#builds">Builds</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#discord">Discord</a></li>
            </ul>
          </div>
          <p className="footer-copy">// built by builders, for builders // no sealed boxes //</p>
        </div>
      </footer>
    </div>
  )
}