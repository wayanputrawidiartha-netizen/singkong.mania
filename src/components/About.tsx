import { motion } from "motion/react";
import { Info } from "lucide-react";

export default function About() {
  return (
    <section id="tentang" className="h-full bento-card p-8 flex flex-col justify-between bg-[#111122]">
      <div>
        <div className="w-12 h-12 bg-neon-blue/20 rounded-2xl flex items-center justify-center border border-neon-blue/30 mb-6">
          <Info className="text-neon-blue" size={24} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-black mb-4 uppercase tracking-wider">Tentang Kami</h3>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
             menjadikan kripik singkong Nusantara sebagai camilan yang dikenal lingkungan kita, yang tidak hanya enak dan bergizi, tetapi juga menggambarkan keindahan budaya Indonesia dalam setiap gigitan.
          </p>
        </motion.div>
      </div>

      <div className="pt-6 border-t border-white/5 mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-neon-blue uppercase tracking-tighter">Klp3 // Batch 2024</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
