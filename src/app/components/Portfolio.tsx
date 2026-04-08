import { motion } from "motion/react";
import { ExternalLink, Smartphone, Monitor } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    id: "1",
    title: "E-Commerce Boutique Fashion",
    description: "Tienda online completa con carrito de compras, pagos y gestión de inventario.",
    image: "https://images.unsplash.com/photo-1772037441147-5301691c4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3NTY3MDM5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["E-commerce", "Responsive", "SEO"],
    link: "#"
  },
  {
    id: "2",
    title: "Landing Page Restaurante",
    description: "Página moderna con menú digital, reservaciones online y galería de platillos.",
    image: "https://images.unsplash.com/photo-1772037441147-5301691c4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3NTY3MDM5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Landing Page", "Mobile First"],
    link: "#"
  },
  {
    id: "3",
    title: "Portfolio Fotógrafo Profesional",
    description: "Galería elegante con categorías, lightbox y formulario de contacto integrado.",
    image: "https://images.unsplash.com/photo-1772037441147-5301691c4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3NTY3MDM5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Portfolio", "Galería", "Minimalista"],
    link: "#"
  }
];

export function Portfolio() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-sm font-medium">💼 Portafolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Páginas web que generan resultados. Mira algunos de nuestros trabajos recientes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-900/50 border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                          <Monitor className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                          <Smartphone className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10 group-hover:border-purple-500 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Proyecto
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">¿Listo para tener tu propia página web?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30"
            onClick={() => window.open('https://wa.me/5218715567420', '_blank')}
          >
            Solicita una Cotización
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
