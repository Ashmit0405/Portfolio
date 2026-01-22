'use client';

import { ChevronRight } from 'lucide-react'
import Image from 'next/image';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Ashmit Singh
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Software Developer & CS Undergraduate @ IIIT Kota
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Building scalable systems and real-world products with strong foundations in DSA, Web Development, and AI/ML. Passionate about creating software that makes an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center gap-2 group"
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-4 pt-8">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium group">
                <span>Download Resume</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-card to-background border border-border rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="h-128 bg-muted rounded-xl flex items-center justify-center">
                    {/* <div className="text-center text-muted-foreground">
                      <p className="text-sm">CS Undergraduate</p>
                      <p className="text-3xl font-bold text-foreground mt-2">9.17</p>
                      <p className="text-sm mt-1">CGPA @ IIIT Kota</p>
                    </div> */}
                    <Image
                      src="/profile.png"
                      alt="Ashmit Singh"
                      width={512}
                      height={512}
                      className="object-cover w-full h-full rounded-xl"
                      priority
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-foreground">3</p>
                      <p className="text-xs text-muted-foreground mt-1">Major Projects</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-foreground">2</p>
                      <p className="text-xs text-muted-foreground mt-1">Hackathon Wins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
