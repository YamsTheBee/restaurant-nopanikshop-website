import logo from "../assets/noPanikLogo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-[30px_10px_40px_15px] shadow-xl border-2 border-np-dark/10 px-6 py-2">
        <div className="flex justify-between items-center">
          <a href="#top" className="flex items-center group">
            <img
              src={logo}
              alt="Logo du restaurant NoPanik"
              className="h-20 w-auto transform group-hover:rotate-12 transition-transform"
            />
          </a>

          <div className="hidden lg:flex space-x-8 font-bold text-xs uppercase tracking-widest items-center">
            <a
              href="#restaurant"
              className="hover:text-np-orange transition text-np-dark"
            >
              La Table
            </a>

            <a
              href="#menu"
              className="hover:text-np-orange transition text-np-dark"
            >
              Menu
            </a>

            <a
              href="#epicerie"
              className="hover:text-np-teal transition text-np-dark"
            >
              L'Épicerie
            </a>

            <a
              href="#coiffure"
              className="hover:text-np-orange transition text-np-dark"
            >
              Barber
            </a>

            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-np-dark text-white px-6 py-3 rounded-[20px_5px_20px_5px] hover:bg-np-orange transition flex items-center gap-2"
            >
              Réserver
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
