import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

const videos = [
  {
    id: "1",
    title: "Antes y Después: Limpieza Profunda de Laptop",
    thumbnail: "https://images.unsplash.com/photo-1646756089735-487709743361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzc1Njc4MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Reparación"
  },
  {
    id: "2",
    title: "Página Web para Restaurante Local",
    thumbnail: "https://images.unsplash.com/photo-1772037441147-5301691c4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3NTY3MDM5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Desarrollo Web"
  },
  {
    id: "3",
    title: "Recuperación de Datos: Caso Real",
    thumbnail: "https://images.unsplash.com/photo-1683813479742-4730f91fa3ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB0ZWNobm9sb2d5JTIwZGVzayUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzU2ODAxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Recuperación"
  },
  {
    id: "4",
    title: "E-commerce Completo en 2 Semanas",
    thumbnail: "https://images.unsplash.com/photo-1772037441147-5301691c4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3NTY3MDM5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Desarrollo Web"
  },
  {
    id: "5",
    title: "Instalación de Windows 11 Optimizado",
    thumbnail: "https://images.unsplash.com/photo-1646756089735-487709743361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzc1Njc4MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Sistema Operativo"
  },
  {
    id: "6",
    title: "Portfolio Profesional para Fotógrafo",
    thumbnail: "https://images.unsplash.com/photo-1772037441147-5301691c4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3NTY3MDM5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Desarrollo Web"
  }
];

export function VideoGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm font-medium">📹 Videos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Nuestro Trabajo en Acción
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Descubre cómo transformamos problemas en soluciones. Videos reales de nuestros proyectos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="bg-slate-900/50 border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={hoveredId === video.id ? { scale: 1.1 } : { scale: 1 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/50"
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </motion.div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full border border-blue-500/30">
                    <span className="text-blue-400 text-xs font-medium">{video.category}</span>
                  </div>
                  
                  {/* External link */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border border-slate-700">
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-medium text-slate-100 group-hover:text-blue-400 transition-colors">
                    {video.title}
                  </h3>
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
          <p className="text-slate-400 mb-4">¿Quieres ver más de nuestro trabajo?</p>
          <a
            href="https://www.youtube.com/@tucanal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-500/20"
          >
            <Play className="w-5 h-5" fill="white" />
            Visita nuestro canal de YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}
