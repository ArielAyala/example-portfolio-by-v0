import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Smartphone, Database } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular", "HTML5", "CSS3", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Node.js",
        "Python",
        "Java",
        "Express.js",
        "Django",
        "Spring Boot",
        "REST APIs",
        "GraphQL",
        "Microservicios",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin", "Android Studio", "Xcode"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Base de Datos",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase", "Prisma", "Sequelize"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dominio de tecnologías modernas para desarrollo completo de aplicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`}
              ></div>
              <CardHeader className="text-center">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${category.color} text-white mb-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
