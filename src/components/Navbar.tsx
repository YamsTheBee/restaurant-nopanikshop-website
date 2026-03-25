import { useState } from "react";
import logo from "../assets/images/logoNopanik.png";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "La Table", href: "#restaurant" },
    { name: "Menu", href: "#menu" },
    { name: "L'Épicerie", href: "#epicerie" },
    { name: "Barber", href: "#coiffure" },
  ];

  return (
    <nav
      className="fixed w-full z-[100] px-2 sm:px-4 py-4"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-[25px_10px_30px_15px] shadow-xl border-2 border-np-dark/10 px-4 md:px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Logo - Plus petit sur mobile */}
          <a href="#top" className="flex items-center group">
            <img
              src={logo}
              alt="NoPanik Shop"
              className="h-12 md:h-20 w-auto transform group-hover:rotate-12 transition-transform duration-300"
            />
          </a>

          {/* Desktop Menu (Caché sur mobile) */}
          <div className="hidden lg:flex space-x-8 font-bold text-xs uppercase tracking-widest items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-np-dark hover:text-np-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/33123456789"
              target="_blank"
              className="bg-np-orange text-np-dark px-6 py-3 rounded-[20px_5px_20px_5px] font-black uppercase tracking-widest hover:bg-np-dark hover:text-np-orange transition-all shadow-lg"
              rel="noreferrer"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button (Visible uniquement sur mobile/tablette) */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/33123456789"
              className="bg-np-orange text-np-dark px-4 py-2 text-[10px] rounded-full font-black uppercase"
            >
              Réserver
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-np-dark"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (S'affiche au clic) */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col space-y-4 border-t border-np-dark/5 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-np-dark font-bold uppercase tracking-widest text-sm py-2 px-2 hover:bg-np-orange/10 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
