import { motion } from "motion/react";
import { ExternalLink, Play } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

const projects = [
  {
    id: "1",
    title: "E-Commerce Boutique Fashion",
    description: "Tienda online completa con carrito de compras, pagos y gestión de inventario.",
    videoId: "gISdisOusZQ",
    tags: ["E-commerce", "Responsive", "SEO"],
  },
  {
    id: "2",
    title: "Portfolio Fotógrafo Profesional",
    description: "Galería elegante con categorías, lightbox y formulario de contacto integrado.",
    videoId: "7cSyeVz_jr4",
    tags: ["Portfolio", "Galería", "Minimalista"],
  },
  {
    id: "3",
    title: "Landing Page Restaurante",
    description: "Página moderna con menú digital, reservaciones online y galería de platillos.",
    videoId: "yjeAGoTTXI8",
    tags: ["Landing Page", "Mobile First"],
  },
  {
    id: "4",
    title: "Sistema de Gestión de Clientes",
    description: "Sistema completo para gestión de honorarios, clientes y seguimiento de pagos.",
    videoId: "QQJMZw7CRU4",
    tags: ["Sistema Web", "Gestión", "Dashboard"],
  },
];

export function Portfolio() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

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
            Páginas web que generan resultados. Mira algunos de nuestros trabajos en video.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-900/50 border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group h-full flex flex-col">
                {/* Video area */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  {playingId === project.id ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      {/* YouTube thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-75 transition-opacity"></div>
                      {/* Play button */}
                      <button
                        onClick={() => setPlayingId(project.id)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/40"
                        >
                          <Play className="w-7 h-7 text-white ml-1" fill="white" />
                        </motion.div>
                      </button>
                      {/* YouTube badge */}
                      <div className="absolute top-3 right-3 px-2 py-1 bg-red-600/90 backdrop-blur-sm rounded text-white text-xs font-medium flex items-center gap-1">
                        ▶ YouTube
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-1 text-sm leading-relaxed">
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

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 group-hover:border-purple-500 transition-all text-sm"
                      onClick={() => setPlayingId(project.id)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Ver Video
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-purple-400"
                      onClick={() =>
                        window.open(`https://youtu.be/${project.videoId}`, "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
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
            onClick={() =>
              window.open(
                "https://wa.me/528715567420?text=Hola%21%20Quiero%20una%20p%C3%A1gina%20web",
                "_blank"
              )
            }
          >
            Solicita una Cotización
          </Button>
        </motion.div>
      </div>
    </section>
  );
}