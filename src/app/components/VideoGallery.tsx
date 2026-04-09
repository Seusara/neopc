import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

const videos = [
  {
    id: "1",
    title: "E-Commerce Boutique Fashion",
    videoId: "gISdisOusZQ",
    category: "Desarrollo Web",
  },
  {
    id: "2",
    title: "Portfolio Fotógrafo Profesional",
    videoId: "7cSyeVz_jr4",
    category: "Desarrollo Web",
  },
  {
    id: "3",
    title: "Landing Page Restaurante",
    videoId: "yjeAGoTTXI8",
    category: "Desarrollo Web",
  },
  {
    id: "4",
    title: "Sistema de Gestión de Clientes",
    videoId: "QQJMZw7CRU4",
    category: "Desarrollo Web",
  },
];

export function VideoGallery() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

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
            Descubre cómo transformamos ideas en páginas web reales. Videos de proyectos entregados.
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
            >
              <Card className="bg-slate-900/50 border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  {playingId === video.id ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                      <button
                        onClick={() => setPlayingId(video.id)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/50"
                        >
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </motion.div>
                      </button>

                      <div className="absolute top-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full border border-blue-500/30">
                        <span className="text-blue-400 text-xs font-medium">{video.category}</span>
                      </div>

                      <div
                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://youtu.be/${video.videoId}`, "_blank");
                        }}
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border border-slate-700 hover:border-blue-500/50 transition-colors">
                          <ExternalLink className="w-4 h-4 text-slate-400" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4">
                  <h3
                    className="text-base font-medium text-slate-100 group-hover:text-blue-400 transition-colors cursor-pointer"
                    onClick={() => setPlayingId(video.id)}
                  >
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
            href="https://www.facebook.com/profile.php?id=61587767337654"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            <Play className="w-5 h-5" fill="white" />
            Síguenos en Facebook
          </a>
        </motion.div>
      </div>
    </section>
  );
}