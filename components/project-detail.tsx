'use client'

import { X, Github, ExternalLink } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  problemStatement: string
  approach: string
  features: string[]
  techStack: string[]
  outcomes: string
  image: string
  links: {
    github: string
    live: string
  }
}

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card/95 backdrop-blur">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl"
          />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Problem Statement</h3>
              <p className="text-foreground leading-relaxed">{project.problemStatement}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Approach & Architecture</h3>
              <p className="text-foreground leading-relaxed">{project.approach}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted text-foreground rounded-full text-sm border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Outcomes & Impact</h3>
              <p className="text-foreground leading-relaxed">{project.outcomes}</p>
            </div>

            <div className="flex gap-4 pt-4 border-t border-border">
              <a
                href={project.links.github}
                className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={project.links.live}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">View Live</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
