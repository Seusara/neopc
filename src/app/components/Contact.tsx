import { motion } from "motion/react";
import { MessageCircle, Mail, Send, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! Soy ${formData.name}.\n\nEmail: ${formData.email}\n\nMensaje: ${formData.message}`;
    window.open(`https://wa.me/528715567420?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="text-green-400 text-sm font-medium">💬 Contacto</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Escríbenos por WhatsApp o mándanos un mensaje. Te respondemos en minutos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-slate-100 mb-3">
              Hablemos de tu Proyecto
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Ya sea una reparación urgente o el desarrollo de tu página web, en
              <span className="text-purple-400 font-medium"> NEO PC Laguna</span> estamos
              listos para ayudarte. Respuesta garantizada.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mb-8">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-500/30 py-6 text-base"
                onClick={() => window.open("https://wa.me/528715567420", "_blank")}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                <div className="text-left">
                  <div className="font-semibold">Chatea con Nosotros</div>
                  <div className="text-xs text-green-100">871 556 7420</div>
                </div>
              </Button>
            </motion.div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Teléfono / WhatsApp</div>
                  <a href="tel:8715567420" className="text-slate-100 font-medium hover:text-purple-400 transition-colors">871 556 7420</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Email</div>
                  <a href="mailto:neopclaguna@gmail.com" className="text-slate-100 font-medium hover:text-blue-400 transition-colors">neopclaguna@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Ubicación</div>
                  <div className="text-slate-100 font-medium">La Laguna, México</div>
                  <div className="text-slate-400 text-xs mt-1">Servicio a domicilio disponible</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium text-sm">Disponible Ahora</span>
              </div>
              <p className="text-slate-300 text-sm">
                Tiempo de respuesta promedio: <span className="font-semibold text-green-400">5 minutos</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-semibold text-slate-100 mb-6">Envíanos un Mensaje</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">Nombre Completo</label>
                  <Input type="text" placeholder="Tu nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-purple-500" required />
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">Email</label>
                  <Input type="email" placeholder="tu@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-purple-500" required />
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">Mensaje</label>
                  <Textarea placeholder="Cuéntanos qué necesitas..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 min-h-32 resize-none" required />
                </div>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Enviar por WhatsApp
              </Button>
              <p className="text-xs text-slate-500 text-center mt-4">Al enviar, se abrirá WhatsApp con tu mensaje prellenado</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}