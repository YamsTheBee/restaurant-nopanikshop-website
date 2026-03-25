import { useState } from "react";
import MariamaProModal from "./MariamaProModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  return (
    <footer className="bg-[#1b2b2a] text-white pt-20 pb-10 px-4 border-t border-white/5">
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
            <h3 className="text-[#f19c38] uppercase font-black text-xs tracking-widest">
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
                  href=" Événements"
                  className="text-gray-300 hover:text-[#e85d3f] transition-colors"
                >
                  Événements
                </a>
              </li>
              <li>
                <a
                  href="Réservations"
                  className="text-gray-300 hover:text-[#e85d3f] transition-colors"
                >
                  Réservations
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

            <div className="flex gap-4">
              {/* Lien NoPanik Shop */}
              <a
                href="https://www.instagram.com/nopanikshop/" 
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-[#e85d3f] p-3 rounded-full transition-all text-l"
              >
                📸 NoPanik
              </a>
              {/* Lien Barber / LazerCut */}
              <a
                href="https://www.instagram.com/lazercuts/" 
                target="_blank"
                rel="noreferrer"
                aria-label="Suivre LazerCut sur Instagram"
                className="bg-white/5 hover:bg-[#e85d3f] p-3 rounded-full transition-all text-l"
              >
                👥 LazerCut
              </a>
              {/* Lien WhatsApp */}
              <a
                href="https://wa.me/33621744523" 
                target="_blank"
                rel="noreferrer"
                aria-label="Nous contacter sur WhatsApp"
                className="bg-white/5 hover:bg-[#e85d3f] p-3 rounded-full transition-all text-l"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-gray-500 uppercase tracking-[3px]">
            © {currentYear} NoPanik Shop.
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-permanent-marker text-xl text-[#f19c38] -rotate-2">
              Le goût authentique du Prado
            </p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[3px]">
              Developed by {/* Le bouton déclencheur */}
              <button
                type="button"
                onClick={() => setIsProModalOpen(true)}
                className="text-white hover:text-[#f19c38] font-bold transition-colors cursor-pointer"
              >
                Mariama Diaw
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Rendu de la modale */}
      <MariamaProModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
