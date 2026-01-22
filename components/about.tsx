export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground">
              Get to know me and what drives my passion for software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a Computer Science undergraduate at IIIT Kota with a strong passion for building scalable, production-grade systems. With a CGPA of 9.17, I've consistently focused on combining theoretical knowledge with practical implementation.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My expertise spans across Data Structures & Algorithms, Full-Stack Web Development, and AI/ML applications. I believe in writing clean, maintainable code and designing systems that are not just functional but also efficient and user-centric.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Beyond academics, I've led initiatives as Core Team Member and Cloud Lead at CodeBase Club, organized hackathons, and consistently won competitions. I'm driven by the challenge of solving real-world problems through technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">B.Tech CSE (2023–2027)</p>
                    <p className="text-muted-foreground">IIIT Kota</p>
                    <p className="text-sm text-accent mt-1">CGPA: 9.17</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-4">Core Competencies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Software Engineering Principles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    AI/ML Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Cloud & DevOps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
