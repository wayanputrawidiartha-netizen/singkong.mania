import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="h-full bento-card p-10 flex flex-col justify-center relative overflow-hidden group">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-secondary-dark/60 mix-blend-multiply" />
      </div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-black tracking-widest text-[#60A5FA] uppercase bg-neon-blue/10 rounded-full border border-neon-blue/20">
            Official Project // 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-[0.9] mb-6 uppercase">
            Proses<br />
            <span className="text-neon-blue">Kokurikuler</span>
          </h1>
          <p className="max-w-md text-lg text-white/50 mb-10 leading-relaxed">
            Mengasah kreativitas, kepemimpinan, dan kerja sama melalui rangkaian kegiatan kolaboratif yang bermakna.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#anggota"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Lihat Anggota
            </motion.a>
            <motion.a
              href="#tentang"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Mulai
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
