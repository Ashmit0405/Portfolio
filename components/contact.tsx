'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Linkedin, Github, ExternalLink, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting conversations. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
                {submitted && (
                  <p className="text-center text-green-600 dark:text-green-400 text-sm font-medium">
                    ✓ Message sent successfully!
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Get in touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:ashmit@example.com"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm">ashmit.singh@example.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/ashmitsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground text-sm">linkedin.com/in/ashmitsingh</p>
                  </div>
                </a>

                <a
                  href="https://github.com/ashmitsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Github className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">GitHub</p>
                    <p className="text-muted-foreground text-sm">github.com/ashmitsingh</p>
                  </div>
                </a>
              </div>

              {/* <div className="pt-6 border-t border-border space-y-4">
                <p className="text-foreground font-semibold">Also available on:</p>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/ashmitsingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
