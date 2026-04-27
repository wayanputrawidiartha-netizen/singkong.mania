import { motion } from "motion/react";
import { User } from "lucide-react";

const members = [
  { id: 1, name: "Nadila", role: "Ketua" },
  { id: 2, name: "Thania", role: "Member" },
  { id: 3, name: "Sathya", role: "Member" },
  { id: 4, name: "Ganen", role: "Member" },
  { id: 5, name: "Putra", role: "Member" },
  { id: 6, name: "Surya", role: "Member" },
  { id: 7, name: "Samuel", role: "Member" },
  { id: 8, name: "Meliyani", role: "Member" },
  { id: 9, name: "Puspa", role: "Member" },
];

export default function Members() {
  return (
    <section id="anggota" className="h-full bento-card p-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-display font-black uppercase tracking-widest">Anggota Kelompok</h3>
        <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/40 border border-white/10 uppercase font-bold">
          {members.length} Persons
        </span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4 flex-1">
        {members.map((m, idx) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -5, borderColor: "rgba(96, 165, 250, 0.5)" }}
            className="bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col items-center justify-center group transition-all"
          >
            <div className="relative mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-neon-blue p-0.5 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-secondary-dark rounded-full flex items-center justify-center">
                  <User className="text-neon-blue group-hover:text-white transition-colors" size={24} />
                </div>
              </div>
            </div>
            <p className="text-xs font-black text-center text-white/90 group-hover:text-neon-blue transition-colors truncate w-full">
              {m.name}
            </p>
            <p className="text-[10px] text-white/30 uppercase tracking-tighter mt-1">
              {m.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
