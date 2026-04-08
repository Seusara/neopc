import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    id: "1",
    name: "María González",
    role: "Dueña de Cafetería Local",
    image: "https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NzU1NTczNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Mi laptop estaba lentísima y llena de virus. En menos de 24 horas me la devolvieron como nueva. Además me crearon una página web hermosa para mi cafetería. ¡Muy profesionales!",
    rating: 5,
    service: "Reparación + Desarrollo Web"
  },
  {
    id: "2",
    name: "Carlos Méndez",
    role: "Emprendedor Digital",
    image: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTYyOTQ0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Recuperaron todos mis archivos de un disco duro que parecía muerto. Increíble servicio, muy honestos con los precios y súper rápidos. Los recomiendo al 100%.",
    rating: 5,
    service: "Recuperación de Datos"
  },
  {
    id: "3",
    name: "Ana Rodríguez",
    role: "Diseñadora Freelance",
    image: "https://images.unsplash.com/photo-1666867936058-de34bfd5b320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJ1c2luZXNzJTIwY2xpZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1NjgwMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Me diseñaron un portfolio web moderno y elegante. El proceso fue muy fácil, siempre me mantuvieron informada y el resultado superó mis expectativas. ¡Excelente trabajo!",
    rating: 5,
    service: "Desarrollo Web"
  },
  {
    id: "4",
    name: "Roberto Silva",
    role: "Gerente de Ventas",
    image: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTYyOTQ0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Formateo e instalación impecable. Me instalaron Windows 11 con todos los programas que necesito. Atención personalizada y precios justos.",
    rating: 5,
    service: "Formateo y SO"
  },
  {
    id: "5",
    name: "Laura Martínez",
    role: "Estilista Profesional",
    image: "https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NzU1NTczNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Crearon la página web de mi salón de belleza con sistema de reservas online. Ahora mis clientes pueden agendar citas 24/7. ¡Mis ventas aumentaron un 40%!",
    rating: 5,
    service: "Desarrollo Web"
  },
  {
    id: "6",
    name: "Pedro Hernández",
    role: "Contador Público",
    image: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTYyOTQ0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Servicio profesional y confiable. Me han ayudado con varias reparaciones y siempre cumplen con los tiempos. Muy recomendados para cualquier problema técnico.",
    rating: 5,
    service: "Soporte Técnico"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
            <span className="text-yellow-400 text-sm font-medium">⭐ Testimonios</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Más de 500 clientes satisfechos confían en nosotros para sus necesidades tecnológicas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all duration-300 p-6 h-full flex flex-col group">
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-purple-500/30 group-hover:text-purple-500/50 transition-colors" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-slate-300 mb-6 flex-1 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-100">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">
                    {testimonial.service}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-full">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <div key={i} className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-slate-900">
                  <img src={t.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-slate-300">
              <span className="font-semibold text-purple-400">500+</span> clientes satisfechos
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
