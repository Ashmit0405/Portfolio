import { Trophy, Users, Zap } from 'lucide-react'

const experiences = [
  {
    icon: Users,
    title: "Core Team Member & Cloud Lead",
    organization: "CodeBase Club – IIIT Kota",
    description: "Led cloud infrastructure initiatives and mentored 50+ students on DevOps practices, Docker, and cloud deployment strategies. Organized technical workshops and code reviews.",
  },
  {
    icon: Trophy,
    title: "Winner: DevQuest Hackathon",
    organization: "IIT Jodhpur",
    description: "Developed an innovative solution for automated code optimization. Competed against 100+ teams and secured first place with a working prototype and comprehensive documentation.",
  },
  {
    icon: Trophy,
    title: "Winner: Kurukshetra Hackathon",
    organization: "ITM Gwalior",
    description: "Built a real-time collaboration platform using WebSockets and React. Demonstrated scalability, user experience, and innovation judged by industry experts.",
  },
  {
    icon: Zap,
    title: "Organizer: HackTheChain 3.0",
    organization: "IIIT Kota TechFest",
    description: "Led the organization of a 48-hour hackathon with 200+ participants. Managed logistics, judging, and mentorship. Successfully executed event with 95% participant satisfaction.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience & Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Leadership, competition wins, and community contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-accent font-semibold">{exp.organization}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">2</div>
              <p className="text-muted-foreground">Hackathon Wins</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">50+</div>
              <p className="text-muted-foreground">Students Mentored</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">200+</div>
              <p className="text-muted-foreground">Hackathon Participants</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">10+</div>
              <p className="text-muted-foreground">Tech Events Organized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
