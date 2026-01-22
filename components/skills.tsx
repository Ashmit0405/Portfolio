const skillCategories = [
  {
    category: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "Python", "SQL"]
  },
  {
    category: "Web & Frameworks",
    skills: ["HTML", "CSS", "React", "Node.js", "Express", "Tailwind CSS"]
  },
  {
    category: "Backend & Database",
    skills: ["MongoDB", "REST APIs", "JWT", "PostgreSQL", "Database Design"]
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "Docker", "Postman", "VS Code", "PM2", "NGINX", "GCP"]
  },
  {
    category: "AI/ML",
    skills: ["FastAPI", "Sentence-BERT", "BART", "Vector Search", "RAG Systems"]
  },
  {
    category: "Specializations",
    skills: ["Competitive Programming", "System Design", "DevOps", "Cloud Services"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground">
              A diverse tech stack built through projects, competitions, and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all group"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full group-hover:h-8 transition-all"></span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted hover:bg-accent hover:text-accent-foreground text-foreground text-sm rounded-full transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">10+</div>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">20+</div>
              <p className="text-muted-foreground">Skills & Tools</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">3</div>
              <p className="text-muted-foreground">Major Specializations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
