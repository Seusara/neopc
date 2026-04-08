import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, MessageCircle, Monitor, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Portafolio", href: "#portafolio" },
  { name: "Precios", href: "#precios" },
  { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.97)"]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-lg shadow-purple-500/5 backdrop-blur-lg border-b border-slate-800/50"
          : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center relative">
              <Monitor className="w-5 h-5 text-white" />
              <Settings className="w-3 h-3 text-purple-200 absolute -top-1 -right-1" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                NEO PC
              </span>
              <span className="text-xs text-slate-500 tracking-widest uppercase">
                Laguna
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-purple-400 transition-colors relative group text-sm"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30"
              onClick={() =>
                window.open("https://wa.me/528715567420", "_blank")
              }
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-800 py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-purple-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-full"
                onClick={() => {
                  window.open("https://wa.me/528715567420", "_blank");
                  setIsOpen(false);
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}