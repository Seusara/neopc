import { motion } from "motion/react";
import { MessageCircle, Monitor, Settings } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg className="w-full h-full opacity-[0.04]" width="800" height="800">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139,92,246,1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-purple-400 text-sm font-medium">
                Disponible ahora · La Laguna
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Soporte Técnico y Páginas Web Profesionales
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              En <span className="text-purple-400 font-semibold">NEO PC Laguna</span> resolvemos
              tus problemas de cómputo y creamos páginas web modernas que impulsan tu negocio.
              Rápido, confiable y a tu medida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 text-base px-8 py-6"
                onClick={() => window.open("https://wa.me/528715567420", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contáctanos por WhatsApp
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 text-base px-8 py-6"
                onClick={() =>
                  document
                    .getElementById("servicios")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver Servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 text-sm">
              <div>
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-slate-400">Equipos reparados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">2-5</div>
                <div className="text-slate-400">Días entrega web</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">5★</div>
                <div className="text-slate-400">Calificación</div>
              </div>
            </div>
          </motion.div>

          {/* Right — logo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>

              <div className="relative bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl border border-purple-500/20 shadow-2xl flex flex-col items-center gap-6">
                {/* Logo mark */}
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-700 via-purple-600 to-blue-700 flex items-center justify-center relative shadow-2xl shadow-purple-500/40">
                  <Monitor className="w-16 h-16 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 border-2 border-purple-400 rounded-full flex items-center justify-center">
                    <Settings className="w-4 h-4 text-purple-400" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    NEO PC
                  </div>
                  <div className="text-slate-400 tracking-[0.3em] text-sm uppercase mt-1">
                    Laguna
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-600 to-purple-800 px-4 py-2 rounded-xl shadow-lg border border-purple-400/30"
                >
                  <div className="text-white text-xs font-medium">✓ Reparación Rápida</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-600 to-cyan-600 px-4 py-2 rounded-xl shadow-lg border border-blue-400/30"
                >
                  <div className="text-white text-xs font-medium">✓ Páginas Web</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
}