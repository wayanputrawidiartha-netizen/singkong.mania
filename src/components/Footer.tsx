import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontak" className="h-16 border-t border-white/5 px-8 flex items-center justify-between text-[10px] tracking-widest text-white/30 uppercase font-bold">
      <div className="hidden sm:block">&copy; 2024 kokurikuler_klp3</div>
      
      <div className="flex gap-6">
        <a href="#" className="hover:text-neon-blue transition-colors">Instagram</a>
        <a href="#" className="hover:text-neon-blue transition-colors">Discord</a>
        <a href="#" className="hover:text-neon-blue transition-colors">GitHub</a>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        <span className="hidden md:inline">Online Project</span>
      </div>
    </footer>
  );
}
