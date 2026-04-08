import { motion } from "motion/react";
import { Facebook, Instagram, MapPin, Phone, Mail, Monitor, Settings } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61587767337654",
    label: "Facebook",
    color: "hover:text-blue-400",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/fix_y_build_pcs/",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
];

const services = [
  "Reparación de Computadoras",
  "Reparación de Laptops",
  "Eliminación de Virus",
  "Formateo e Instalación",
  "Recuperación de Datos",
  "Limpieza y Mantenimiento",
  "Desarrollo Web",
  "Páginas Empresariales",
];

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center relative">
                <Monitor className="w-5 h-5 text-white" />
                <Settings className="w-3 h-3 text-purple-200 absolute -top-1 -right-1" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  NEO PC
                </div>
                <div className="text-xs text-slate-500 tracking-widest uppercase">Laguna</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Soporte técnico profesional y desarrollo web en La Laguna. Soluciones rápidas,
              confiables y a tu medida.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:border-current`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-slate-100 mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-slate-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-slate-100 mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#" },
                { label: "Servicios", href: "#servicios" },
                { label: "Portafolio", href: "#portafolio" },
                { label: "Precios", href: "#precios" },
                { label: "Contacto", href: "#contacto" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-slate-100 mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400">La Laguna, México</div>
                  <div className="text-slate-500 text-xs mt-1">Servicio a domicilio</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:8715567420"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    871 556 7420
                  </a>
                  <div className="text-slate-500 text-xs mt-1">WhatsApp disponible</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:neopclaguna@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors break-all"
                >
                  neopclaguna@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-medium">Disponibles Ahora</span>
              </div>
              <p className="text-slate-400 text-xs">
                Lun – Vie: 9:00 AM – 8:00 PM<br />
                Sáb: 10:00 AM – 6:00 PM
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-slate-900"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © 2026 NEO PC Laguna. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}