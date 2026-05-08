import './App.css'

const features = [
  {
    icon: '📖',
    title: 'Build Logs',
    desc: 'Document every version. Sketches, parts piles, ugly photos, wiring mistakes — it all counts. Build logs are first-class content here.',
  },
  {
    icon: '🔍',
    title: 'Parts Browser',
    desc: 'Search components by type, budget, and availability. "Old Chromebook screen" is a valid entry. We work with what you have.',
  },
  {
    icon: '📸',
    title: 'Build Gallery',
    desc: 'Browse hundreds of builds by shell type, brain, input method, or use case. Get inspired. Find your starting point.',
  },
  {
    icon: '🗺️',
    title: 'Discord Gateway',
    desc: "Find the right community for where you are in your build. Whether you're just starting or deep in firmware, there's a channel for you.",
  },
  {
    icon: '📋',
    title: 'Build Plans',
    desc: 'Browse, fork, and remix build plans from the community. Add your own. Share what worked and what absolutely did not.',
  },
  {
    icon: '👤',
    title: 'Builder Profiles',
    desc: 'Showcase your builds, track your progress, and connect with others who share your constraints, materials, or use cases.',
  },
]

const discordCommunities = [
  {
    name: 'Cyberdeck Cafe',
    desc: 'The largest and most active cyberdeck community. Inclusive, no-gatekeeping, packed with build logs and advice for every level.',
    members: '8,000+ members',
    url: 'https://discord.gg/cyberdeck',
  },
  {
    name: 'r/cyberDeck Community',
    desc: 'Reddit\'s cyberdeck hub with an active Discord. Great for build showcases, beginner questions, and part sourcing threads.',
    members: '65,000+ subreddit members',
    url: 'https://reddit.com/r/cyberdeck',
  },
  {
    name: 'Hackaday Community',
    desc: 'Where technical builders share deep-dive documentation, custom keyboards, SDR rigs, and complex I/O setups.',
    members: 'Active build logs',
    url: 'https://hackaday.io',
  },
  {
    name: 'Technomancer\'s Sanctum',
    desc: 'A community focused on survivalist and field-use builds. Offline libraries, radio decks, rugged builds, and resilience computing.',
    members: 'Niche + focused',
    url: 'https://discord.gg/technomancers',
  },
]

export default function App() {
  return (
    <div className="app">
      {/* Nav */}
      <nav>
        <div className="container">
          <div className="nav-inner">
            <span className="nav-logo">deck<span>ish</span></span>
            <ul className="nav-links">
              <li><a href="#builds">Builds</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#discord">Discord</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-tag">Builder-first // Open community</div>
          <h1>Your <em>cyberdeck</em> starts<br />with what you have.</h1>
          <p className="hero-sub">
            Deckish is a community for people who build computers — not buy them.
            Explore builds, browse plans, find parts, and document your own version zero.
          </p>
          <div className="hero-actions">
            <a href="#builds" className="btn-primary">Explore Builds →</a>
            <a href="#discord" className="btn-secondary">Join the Community</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            <div className="stat">
              <span className="stat-value">v0</span>
              <span className="stat-label">Always in progress</span>
            </div>
            <div className="stat">
              <span className="stat-value">∞</span>
              <span className="stat-label">Valid starting points</span>
            </div>
            <div className="stat">
              <span className="stat-value">0</span>
              <span className="stat-label">Sealed boxes</span>
            </div>
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Show the work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Value prop */}
      <section id="builds">
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
                  <span className="discord-icon">🔌</span>
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
          <h2>Version zero counts.<br />Start with what you have.</h2>
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
            <span className="footer-logo">deck<span>ish</span></span>
            <ul className="footer-links">
              <li><a href="#builds">Builds</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#discord">Discord</a></li>
            </ul>
          </div>
          <p className="footer-copy">Built by builders, for builders. No sealed boxes.</p>
        </div>
      </footer>
    </div>
  )
}
