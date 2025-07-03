"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rafael.ibarra@email.com",
      href: "mailto:rafael.ibarra@email.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 123 456 789",
      href: "tel:+34123456789",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Madrid, España",
      href: "#",
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <p className="text-muted-foreground mb-8">
                Estoy disponible para nuevos proyectos y oportunidades de colaboración. No dudes en contactarme para
                discutir cómo puedo ayudarte.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <a href={info.href} className="text-muted-foreground hover:text-blue-600 transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <Card>
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tu mensaje"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
