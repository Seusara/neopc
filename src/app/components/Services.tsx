import { motion } from "motion/react";
import { Laptop, Shield, HardDrive, Database, Code, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const technicalServices = [
  {
    icon: Laptop,
    title: "Reparación de Computadoras y Laptops",
    description: "Diagnóstico y reparación de hardware. Solución rápida y profesional para mantener tu equipo funcionando.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Eliminación de Virus",
    description: "Protección total contra malware, virus y amenazas. Limpieza profunda y optimización del sistema.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: HardDrive,
    title: "Formateo e Instalación de SO",
    description: "Instalación limpia de Windows, Linux o macOS. Configuración completa y optimizada para tu uso.",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Database,
    title: "Recuperación de Datos",
    description: "Rescata tus archivos importantes. Recuperación profesional de datos perdidos o dañados.",
    color: "from-indigo-500 to-indigo-600"
  }
];

const webServices = [
  {
    icon: Code,
    title: "Desarrollo de Páginas Web",
    description: "Sitios web modernos, rápidos y responsive. Diseño profesional que convierte visitantes en clientes.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Globe,
    title: "Presencia Digital Completa",
    description: "Landing pages, e-commerce, portafolios. Todo lo que necesitas para destacar en internet.",
    color: "from-blue-500 to-purple-600"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-sm font-medium">⚡ Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Todo lo que Necesitas
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Soluciones integrales para mantener tu tecnología funcionando y tu negocio creciendo
          </p>
        </motion.div>

        {/* Technical Support Services */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-slate-200 mb-8 flex items-center"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 mr-4 rounded"></div>
            Soporte Técnico
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10 h-full">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-slate-100 group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Web Development Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-slate-200 mb-8 flex items-center"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 mr-4 rounded"></div>
            Desarrollo Web
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {webServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10 h-full">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-slate-100 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
