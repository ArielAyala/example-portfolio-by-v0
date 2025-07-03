import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rafael Ibarra
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Desarrollador Full-Stack & Mobile</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Especializado en crear experiencias digitales excepcionales con tecnologías modernas. Desde aplicaciones
              web responsivas hasta apps móviles nativas, transformo ideas en soluciones tecnológicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contáctame
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Descargar CV
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Rafael Ibarra"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
