import { motion } from "motion/react";

const documentationItems = [
  { label: "WORKING", img: "https://www.image2url.com/r2/default/images/1777283155975-06f39c34-8b7b-4b0d-acba-cc4dd59945f7.jpeg" },
  { label: "WORKING", img: "https://www.image2url.com/r2/default/images/1777283206023-7a3b210d-9193-40b4-814d-471c5fc3b290.jpeg" },,
];

export default function Documentation() {
  return (
    <section id="dokumentasi" className="h-full bento-card p-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-display font-black uppercase tracking-widest">Dokumentasi</h3>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-blue"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neon-blue/20"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neon-blue/20"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
        {documentationItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-primary-dark/50 flex items-center justify-center aspect-square"
          >
            <img 
              src={item.img} 
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 text-center">
              <span className="text-[10px] font-black text-white/40 group-hover:text-neon-blue tracking-widest transition-colors uppercase">
                {item.label}
              </span>
            </div>
            <div className="absolute inset-0 bg-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
