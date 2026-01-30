import Link from "next/link";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Dart / Flutter", level: 85 },
  { name: "PostgreSQL", level: 82 },
  { name: "AWS / Cloud", level: 80 },
];

const projects = [
  {
    title: "Verlux",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
    tags: ["TypeScript", "JavaScript", "Tailwind", "Resend"],
    link: "https://verlux.ca",
    github: "https://github.com/Mehriddin-bytes/Verlux",
  },
  {
    title: "Mufo",
    description: "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    tags: ["TypeScript", "JavaScript", "Tailwind", "Resend"],
    link: "https://mufo.ca",
    github: "https://github.com/Mehriddin-bytes/Mufo",
  },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Freelance",
    period: "2022 - Present",
    description: "Leading development of scalable web applications serving 100k+ users.",
  },
  {
    role: "Full-Stack Developer",
    company: "Self-Employed",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects using modern web technologies.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2017 - 2020",
    description: "Developed responsive user interfaces and improved application performance.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-foreground">
              <span className="shimmer-text">MN.</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-muted hover:text-foreground transition-colors link-hover">
                About
              </Link>
              <Link href="#skills" className="text-muted hover:text-foreground transition-colors link-hover">
                Skills
              </Link>
              <Link href="#projects" className="text-muted hover:text-foreground transition-colors link-hover">
                Projects
              </Link>
              <Link href="#experience" className="text-muted hover:text-foreground transition-colors link-hover">
                Experience
              </Link>
              <Link
                href="#contact"
                className="px-4 py-2 bg-accent/20 text-accent border border-accent/30 rounded-lg hover:bg-accent/30 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-accent font-mono text-sm mb-4 animate-fade-in tracking-wider">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in animate-delay-100">
              <span className="shimmer-text">Mehriddin Nasimjonov.</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted mb-6 animate-fade-in animate-delay-200">
              I build things for the web.
            </h2>
            <p className="text-base text-muted max-w-xl mb-8 animate-fade-in animate-delay-300 leading-relaxed">
              I&apos;m a software engineer and full-stack developer specializing in building exceptional digital experiences.
              Currently focused on creating accessible, human-centered products that make a difference.
            </p>
            <div className="flex gap-4 animate-fade-in animate-delay-400">
              <Link
                href="#projects"
                className="px-6 py-3 bg-accent/20 text-accent border border-accent/30 rounded-lg hover:bg-accent/30 transition-all duration-300 font-mono text-sm"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border border-muted/30 text-muted rounded-lg hover:border-accent hover:text-accent transition-all duration-300 font-mono text-sm"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            <span className="text-accent font-mono text-lg mr-2">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-muted leading-relaxed">
                Hello! I&apos;m Mehriddin, a passionate developer based in Toronto. I enjoy creating
                things that live on the internet, whether that be websites, applications, or anything
                in between.
              </p>
              <p className="text-muted leading-relaxed">
                My interest in web development started back in 2017 when I decided to try building
                custom themes for a blog — turns out hacking together HTML & CSS taught me a lot
                about how the web works!
              </p>
              <p className="text-muted leading-relaxed">
                Fast-forward to today, and I&apos;ve had the privilege of working on diverse projects
                as a freelancer and self-employed developer. My main focus these days is
                building accessible, inclusive products and digital experiences.
              </p>
            </div>
            <div className="relative">
              <div className="w-64 h-64 mx-auto glass-card rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/10 flex items-center justify-center">
                  <span className="text-6xl font-bold shimmer-text">MN</span>
                </div>
                <div className="absolute inset-0 border border-accent/20 rounded-lg group-hover:border-accent/40 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            <span className="text-accent font-mono text-lg mr-2">02.</span> Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="glass-card p-6 rounded-lg group hover:border-accent/30 transition-colors duration-300">
                <div className="flex justify-between mb-3">
                  <span className="font-mono text-sm text-foreground">{skill.name}</span>
                  <span className="text-accent font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-border/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            <span className="text-accent font-mono text-lg mr-2">03.</span> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card p-6 rounded-lg group hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </Link>
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-muted hover:text-accent transition-colors"
                      title="View on GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-muted hover:text-accent transition-colors"
                      title="View Live Site"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="block"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent/80 rounded border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            <span className="text-accent font-mono text-lg mr-2">04.</span> Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l border-border hover:border-accent transition-colors duration-300"
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-accent rounded-full" />
                <div className="glass-card p-6 rounded-lg">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-mono text-accent">{exp.period}</span>
                  </div>
                  <p className="text-accent/70 font-mono text-sm mb-2">{exp.company}</p>
                  <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-accent font-mono text-lg mr-2">05.</span> Get In Touch
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-8 leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question or just
            want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:m05.nasimjonov@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent/20 text-accent border border-accent/30 rounded-lg hover:bg-accent/30 transition-all duration-300 font-mono text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </Link>
            <Link
              href="https://t.me/itssupersus2"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent/20 text-accent border border-accent/30 rounded-lg hover:bg-accent/30 transition-all duration-300 font-mono text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted text-sm font-mono">
              © 2026 Mehriddin Nasimjonov. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="https://github.com/Mehriddin-bytes" target="_blank" className="text-muted hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/mexriddin-nasimjonov-2431082a1/" target="_blank" className="text-muted hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="https://t.me/itssupersus2" target="_blank" className="text-muted hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
