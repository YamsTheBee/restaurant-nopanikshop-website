
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="blob w-[500px] h-[500px] bg-np-orange top-[-10%] left-[-10%]" />
      <div className="blob w-[400px] h-[400px] bg-np-teal bottom-[0%] right-[-5%]" />

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <span className="inline-block bg-np-teal/10 text-np-teal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Ouvert de 10h30 à 20h
        </span>

        <h1 className="text-6xl md:text-9xl text-np-dark mb-4 leading-[0.85] tracking-tighter font-medium">
          PAS DE{" "}
          <span className="text-np-orange italic font-medium">PANIK</span>,
          <br />
          QUE DU{" "}
          <span className="text-np-teal font-black reveal-taste">GOÛT</span>.
        </h1>

        <p className="text-np-dark text-xl md:text-2xl mb-12 font-medium max-w-2xl mx-auto opacity-80">
          L'escale Afro-Créole du Passage du Prado.
        </p>

        <div className="mt-20">
          <a
            href="#menu"
            className="btn-groovy px-10 py-5 text-xl inline-block"
            aria-label="Voir la carte du restaurant"
          >
            Voir la Carte
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#menu"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-arrow"
        aria-label="Défiler vers le menu"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-np-orange bg-np-orange/20 transition-colors hover:bg-np-orange/40">
          <svg
            className="w-6 h-6 text-np-orange"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </a>
    </section>
  );
};

export default Hero;
