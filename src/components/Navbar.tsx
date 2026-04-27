import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Tentang", href: "#tentang" },
  { name: "Anggota", href: "#anggota" },
  { name: "Dokumentasi", href: "#dokumentasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-navbar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a href="/" className="text-xl font-display font-bold tracking-tighter text-neon-blue hover:text-white transition-colors">
              kokurikuler_klp3
            </a>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-accent-blue hover:bg-neon-blue text-white text-xs font-black rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] uppercase"
            >
              Join Us
            </motion.button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-primary-dark border-b border-white/5"
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-white/70 hover:text-white py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
