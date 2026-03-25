import { useState } from "react";
import MariamaProModal from "./MariamaProModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  return (
    <footer
      className="bg-[#1b2b2a] text-white pt-20 pb-10 px-4 border-t border-white/5"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand & Concept */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic">
              NoPanik <span className="text-[#e85d3f]">Shop</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
              L'escale Afro-Créole du 10ème arrondissement.
              <br />
              Cuisine authentique, épicerie fine et lifestyle au cœur du Passage
              du Prado.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-[#f19c38] uppercase font-black text-md tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-4 font-medium text-sm">
              <li>
                <a
                  href="#menu"
                  className="text-gray-300 hover:text-[#e85d3f] transition-colors"
                >
                  Le Menu
                </a>
              </li>
              <li>
                <a
                  href="#epicerie"
                  className="text-gray-300 hover:text-[#e85d3f] transition-colors"
                >
                  L'Épicerie
                </a>
              </li>
              <li>
                <a
                  href="#evenements"
                  className="text-gray-300 hover:text-[#e85d3f] transition-colors"
                >
                  Événements
                </a>
              </li>
              <li>
                <a
                  href="#lifestyle"
                  className="text-gray-300 hover:text-[#e85d3f] transition-colors"
                >
                  Lifestyle
                </a>
              </li>
              <li>
                <a
                  href="#coiffure"
                  className="text-gray-300 hover:text-[#e85d3f] transition-colors"
                >
                  BarberShop
                </a>
              </li>
            </ul>
          </div>

          {/* Infos Pratiques */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#4a9a93] uppercase font-black text-xs tracking-widest">
                Retrouvez-nous
              </h3>
              <address className="not-italic space-y-3 text-sm text-gray-400">
                <p>📍 7 Passage du Prado, 75010 Paris</p>
                <p>🕒 Mardi — Dimanche | 10h30 — 20h00</p>
              </address>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/nopanikshop/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-[#e85d3f] p-3 rounded-full transition-all text-sm font-bold"
              >
                📸 Instagram
              </a>
              <a
                href="https://wa.me/33621744523"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-[#e85d3f] p-3 rounded-full transition-all text-sm font-bold"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-gray-500 uppercase tracking-[3px]">
            © {currentYear} NoPanik Shop.
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <p className="font-permanent-marker text-xl text-[#f19c38] -rotate-2">
              Le goût authentique du Prado
            </p>

            <p className="text-[10px] text-gray-500 uppercase tracking-[3px] flex items-center gap-1 flex-wrap justify-center md:justify-end">
              Developed with
              <span
                className="text-red-500 text-xs mx-0.5"
                role="img"
                aria-label="love"
              >
                ❤️
              </span>
              & NoPanik
              <span className="text-xs mx-0.5" role="img" aria-label="coffee">
                ☕
              </span>
              by
              <button
                type="button"
                onClick={() => setIsProModalOpen(true)}
                className="group relative ml-1 text-white font-bold transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="group-hover:text-[#f19c38] transition-colors duration-300">
                  Mariama Diaw
                </span>
                {/* Ligne de soulignement animée */}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#f19c38] transition-all duration-300 group-hover:w-full" />
              </button>
            </p>
          </div>
        </div>
      </div>

      <MariamaProModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
