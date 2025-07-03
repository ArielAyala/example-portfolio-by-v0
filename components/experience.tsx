import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "Madrid, España",
      period: "2022 - Presente",
      description:
        "Liderazgo técnico en el desarrollo de aplicaciones web y móviles para clientes enterprise. Implementación de arquitecturas escalables y mentoring de desarrolladores junior.",
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
      achievements: [
        "Reducción del 40% en tiempo de carga de aplicaciones",
        "Implementación de CI/CD que mejoró la productividad del equipo en 60%",
        "Liderazgo de equipo de 5 desarrolladores",
      ],
    },
    {
      title: "Mobile Developer",
      company: "StartupTech",
      location: "Barcelona, España",
      period: "2020 - 2022",
      description:
        "Desarrollo de aplicaciones móviles nativas y híbridas para iOS y Android. Colaboración estrecha con equipos de diseño UX/UI para crear experiencias de usuario excepcionales.",
      technologies: ["React Native", "Flutter", "Firebase", "Swift", "Kotlin"],
      achievements: [
        "Desarrollo de 3 apps con más de 100K descargas cada una",
        "Implementación de arquitectura MVVM que redujo bugs en 50%",
        "Integración de APIs REST y GraphQL",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebAgency Pro",
      location: "Valencia, España",
      period: "2018 - 2020",
      description:
        "Desarrollo de interfaces de usuario modernas y responsivas. Optimización de performance y SEO para sitios web de alto tráfico.",
      technologies: ["Vue.js", "Angular", "Sass", "Webpack", "JavaScript"],
      achievements: [
        "Mejora del 70% en métricas de Core Web Vitals",
        "Desarrollo de sistema de componentes reutilizables",
        "Implementación de Progressive Web Apps (PWA)",
      ],
    },
  ]

  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experiencia Profesional</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Logros principales:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
