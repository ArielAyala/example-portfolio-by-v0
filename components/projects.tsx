import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plataforma completa de comercio electrónico con panel de administración, pasarela de pagos y sistema de inventario.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación móvil para gestión de tareas con sincronización en tiempo real y colaboración en equipo.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Dashboard interactivo para análisis de datos con gráficos en tiempo real y reportes personalizables.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web",
    },
    {
      title: "Fitness Tracker",
      description:
        "App móvil para seguimiento de ejercicios con integración de wearables y planes de entrenamiento personalizados.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile",
    },
    {
      title: "API Gateway",
      description: "Microservicio para gestión de APIs con autenticación, rate limiting y monitoreo de performance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Node.js", "Express", "Redis", "Docker", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend",
    },
    {
      title: "Social Media App",
      description: "Red social con funciones de chat en tiempo real, stories y sistema de notificaciones push.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Node.js", "Socket.io", "MongoDB", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile",
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="default" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
