import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/528715567420"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-60"></div>
      <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:shadow-green-500/80 transition-all duration-300">
        <MessageCircle className="w-8 h-8 text-white" fill="white" />
      </div>
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl border border-slate-800 whitespace-nowrap">
          <div className="text-sm font-medium">¡Escríbenos!</div>
          <div className="text-xs text-slate-400">871 556 7420</div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-slate-900 border-r border-b border-slate-800 transform rotate-45"></div>
      </div>
    </motion.a>
  );
}