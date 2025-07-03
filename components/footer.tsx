import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rafael Ibarra
            </h3>
            <p className="text-muted-foreground">
              Desarrollador Full-Stack & Mobile especializado en crear soluciones tecnológicas innovadoras.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="font-semibold">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors">
                Inicio
              </a>
              <a href="#habilidades" className="text-muted-foreground hover:text-foreground transition-colors">
                Habilidades
              </a>
              <a href="#proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
                Proyectos
              </a>
              <a href="#experiencia" className="text-muted-foreground hover:text-foreground transition-colors">
                Experiencia
              </a>
              <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h4 className="font-semibold">Sígueme</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© {currentYear} Rafael Ibarra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
