import logo from "../assets/images/logoNopanik.png";

const Navbar = () => {
  return (
    <nav
      className="fixed w-full z-[100] px-4 py-4"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-[30px_10px_40px_15px] shadow-xl border-2 border-np-dark/10 px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Logo / Home Link */}
          <a
            href="#top"
            className="flex items-center group"
            aria-label="Retour en haut de page"
          >
            <img
              src={logo}
              alt="NoPanik Shop - Restaurant Sénégalais et Créole"
              className="h-16 md:h-20 w-auto transform group-hover:rotate-12 transition-transform duration-300"
              loading="eager"
            />
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex space-x-8 font-bold text-xs uppercase tracking-widest items-center">
            <a
              href="#restaurant"
              className="text-np-dark hover:text-np-orange transition-colors duration-200"
            >
              La Table
            </a>

            <a
              href="#menu"
              className="text-np-dark hover:text-np-orange transition-colors duration-200"
            >
              Menu
            </a>

            <a
              href="#epicerie"
              className="text-np-dark hover:text-np-teal transition-colors duration-200"
            >
              L'Épicerie
            </a>

            <a
              href="#coiffure"
              className="text-np-dark hover:text-np-orange transition-colors duration-200"
            >
              Barber
            </a>

            {/* CTA Button - Fond Orange, Texte Dark */}
            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-np-orange text-np-dark px-6 py-3 rounded-[20px_5px_20px_5px] font-black uppercase tracking-widest hover:bg-np-dark hover:text-np-orange transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              Réserver
            </a>
          </div>

          {/* Note: Pour une V2, pense à rajouter un bouton Burger pour le mobile ici */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
