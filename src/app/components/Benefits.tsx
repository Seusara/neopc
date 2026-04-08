import { motion } from "motion/react";
import { Zap, Shield, Headphones, Clock, Award, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Servicio Rápido",
    description: "Diagnóstico y solución en tiempo récord. Tu tiempo es valioso.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "100% Confiable",
    description: "Trabajo garantizado. Si no quedas satisfecho, lo arreglamos sin costo.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Headphones,
    title: "Soporte Personalizado",
    description: "Atención directa por WhatsApp. Siempre disponibles para ti.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description: "Nos adaptamos a tu agenda. Servicio a domicilio disponible.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Profesionales Certificados",
    description: "Equipo con años de experiencia y certificaciones oficiales.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Rocket,
    title: "Tecnología Actual",
    description: "Usamos las últimas herramientas y metodologías del mercado.",
    color: "from-pink-500 to-rose-500"
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">⭐ Beneficios</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            No solo resolvemos problemas, creamos experiencias excepcionales para nuestros clientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">
              Garantía de Satisfacción 100%
            </h3>
            <p className="text-slate-300 mb-6">
              Estamos tan seguros de nuestro trabajo que ofrecemos garantía completa. Si no quedas satisfecho, trabajamos hasta que lo estés o te devolvemos tu dinero.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Garantía escrita</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Sin letra pequeña</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Transparencia total</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
