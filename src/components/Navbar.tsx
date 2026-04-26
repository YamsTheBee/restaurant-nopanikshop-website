import { useState } from "react";
import logo from "../assets/images/logoNopanik.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "L'Épicerie", href: "#epicerie" },
  ];

  return (
    <nav className="fixed w-full z-[100] px-2 sm:px-4 py-4">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-[25px_10px_30px_15px] shadow-xl border-2 border-np-dark/10 px-4 md:px-6 py-2">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <a href="#top" className="flex items-center group">
            <img
              src={logo}
              alt="NoPanik Shop"
              className="h-12 md:h-20 w-auto transform group-hover:rotate-12 transition-transform duration-300"
            />
          </a>

          {/* DESKTOP */}
          <div className="hidden lg:flex space-x-8 font-bold text-xs uppercase tracking-widest items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-np-dark hover:text-[var(--np-orange)] transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* 🔥 BOUTON RÉSERVER VERSION BLANC */}
            <a
              href="https://wa.me/33621744523?text=Bonjour%20je%20souhaite%20réserver%20une%20table%20chez%20NoPanik%20Shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-[20px_5px_20px_5px] font-black uppercase tracking-widest border-2 border-np-dark text-np-dark bg-white transition-all duration-300 hover:scale-105"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--np-orange)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "var(--np-dark)";
              }}
            >
              Réserver
            </a>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-np-dark"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col space-y-4 border-t border-np-dark/5 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-np-dark font-bold uppercase tracking-widest text-sm py-3 px-3 rounded-lg transition-all duration-300 hover:bg-[var(--np-orange)] hover:text-white hover:scale-105"
              >
                {link.name}
              </a>
            ))}

            {/* 🔥 Réserver */}
            <a
              href="https://wa.me/33621744523?text=Bonjour%20je%20souhaite%20réserver%20une%20table%20chez%20NoPanik%20Shop"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-np-dark font-bold uppercase tracking-widest text-sm py-3 px-3 rounded-lg transition-all duration-300 hover:bg-[var(--np-orange)] hover:text-white hover:scale-105"
            >
              Réserver
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
