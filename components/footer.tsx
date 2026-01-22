import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">AS</span>
              </div>
              <span className="font-semibold text-foreground">Ashmit Singh</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building scalable systems and real-world products with strong foundations in DSA, Web, and AI/ML.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/ashmitsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ashmitsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ashmit.singh@example.com"
                className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ashmit Singh. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React, Next.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
