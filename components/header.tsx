'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">AS</span>
          </div>
          <span className="text-sm font-semibold text-foreground hidden sm:inline">Ashmit Singh</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col gap-4 px-4 py-4">
            <button onClick={() => scrollToSection('about')} className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Contact
            </button>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
