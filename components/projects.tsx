'use client'

import { useState } from 'react'
import { ChevronRight, ExternalLink, Github } from 'lucide-react'
import { ProjectDetail } from './project-detail'

const projects = [
  {
    id: 1,
    title: "Online Coding Platform",
    shortDescription: "Scalable online judge supporting multiple programming languages",
    description: "A full-featured online coding platform that enables users to solve programming problems and participate in contests. The platform features a secure Docker-based execution engine, comprehensive authentication system, problem management, submission tracking, and an admin dashboard for content management.",
    problemStatement: "Existing online judge platforms had performance issues with code execution, scaling problems, and limited language support. Users needed a reliable, fast platform for competitive programming practice.",
    approach: "Built with Node.js and Express backend, MongoDB for data persistence, and Docker for isolated, secure code execution. Deployed on GCP with PM2 for process management and NGINX for reverse proxy and load balancing.",
    features: [
      "Support for C, C++, Java, Python, and JavaScript execution",
      "Real-time code submission and evaluation",
      "User authentication and authorization",
      "Problem management and difficulty levels",
      "Submission history and performance analytics",
      "Admin dashboard for problem and contest creation"
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Docker", "PM2", "NGINX", "GCP", "JWT"],
    outcomes: "Successfully deployed with 500+ users. Achieved sub-2s code execution time. Handled 1000+ daily submissions with 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 2,
    title: "PDF Summarizer (RAG System)",
    shortDescription: "Context-aware PDF summarization using RAG and vector search",
    description: "An advanced PDF summarization system leveraging Retrieval-Augmented Generation (RAG) to provide context-aware summaries. Uses vector embeddings for semantic search and BART for abstractive summarization, enabling users to have interactive sessions with their documents.",
    problemStatement: "Users struggled with reading and understanding long PDF documents. Existing summarization tools lacked context awareness and failed to capture nuanced information.",
    approach: "Implemented using FastAPI for the backend, Qdrant for vector search, Sentence-BERT for embeddings, and BART for abstractive summarization. React frontend for interactive UI with session-based chats.",
    features: [
      "PDF upload and processing",
      "Context-aware abstractive summarization",
      "Vector search using Qdrant",
      "Interactive chat with document context",
      "Session-based conversation history",
      "User authentication and document management"
    ],
    techStack: ["FastAPI", "Qdrant", "React", "Sentence-BERT", "BART", "Python", "Vector Search", "RAG"],
    outcomes: "Achieved 85% ROUGE score on benchmark datasets. Successfully processed PDFs up to 100 pages. Currently used by 200+ users.",
    image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a83f?w=800&h=400&fit=crop",
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 3,
    title: "Blog Platform",
    shortDescription: "Full-featured blogging platform with user authentication",
    description: "A modern blogging platform built with React and Appwrite, featuring user authentication, CRUD operations for posts, user profiles, and a beautiful, responsive UI. Deployed on Vercel for optimal performance.",
    problemStatement: "Aspiring bloggers needed a simple yet powerful platform to publish and manage their content without complex infrastructure.",
    approach: "Built with React for frontend, Appwrite for backend services (auth, database, file storage), and Tailwind CSS for styling. Deployed on Vercel for instant scaling and global CDN.",
    features: [
      "User registration and authentication",
      "Create, read, update, and delete blog posts",
      "User profiles with bio and avatar",
      "Comment system for engagement",
      "Rich text editor for content creation",
      "Social sharing capabilities"
    ],
    techStack: ["React", "Appwrite", "Tailwind CSS", "Vercel", "JavaScript", "REST API"],
    outcomes: "100% uptime with Vercel hosting. Sub-100ms page load times. Growing community of 100+ active bloggers.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop",
    links: {
      github: "#",
      live: "#"
    }
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Showcase of my best work across full-stack development, AI/ML, and DevOps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium group-hover:gap-3">
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
