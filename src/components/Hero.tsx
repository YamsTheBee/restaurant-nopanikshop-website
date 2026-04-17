const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Blobs */}
      <div className="blob w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-np-orange top-[-5%] left-[-10%] opacity-50 md:opacity-100" />
      <div className="blob w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-np-teal bottom-[5%] right-[-5%] opacity-50 md:opacity-100" />
      <div className="relative z-20 text-center px-6 max-w-5xl">
        {/* Badge */}
        <span className="inline-block bg-np-teal/10 text-np-teal px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 border border-np-teal/20">
          Ouvert de 10h30 à 20h • Paris 10
        </span>

        {/* H1 Branding */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-np-dark mb-6 leading-[1] md:leading-[0.85] tracking-tighter font-medium uppercase">
          PAS DE{" "}
          <span className="text-np-orange italic font-medium">PANIK</span>,
          <br className="hidden sm:block" />
          QUE DU{" "}
          <span className="text-np-teal font-black reveal-taste">GOÛT</span>.
        </h1>

        {/*  SECTION MÉTRO  */}

        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex items-center gap-2 text-np-dark text-lg md:text-2xl font-medium opacity-80 leading-relaxed">
            {/* Logo métro style Paris */}
            <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-np-teal text-white text-xs font-bold">
              M
            </div>

            <span>
              L’escale afro-créole à Paris 10, à deux pas de Strasbourg
              Saint-Denis
            </span>
          </div>

          <span className="text-sm bg-np-teal/10 text-np-teal px-3 py-1 rounded-full">
            Métro • Ligne 4 • Ligne 8 • Ligne 9
          </span>
        </div>

        {/* TEXTE SEO INVISIBLE */}
        <p className="sr-only">
          NoPanik est un restaurant africain situé à Paris 10, proche de
          Strasbourg Saint-Denis. Découvrez une cuisine sénégalaise authentique
          avec des plats traditionnels comme le thieboudienne, le mafé et le
          yassa dans une ambiance conviviale.
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-16">
          <a
            href="#menu"
            id="menu" // ✅ AJOUT ICI
            className="btn-groovy px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl inline-block w-full sm:w-auto"
            aria-label="Voir la carte du restaurant africain à Paris 10"
          >
            Voir la Carte
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#menu"
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 scroll-arrow hidden sm:flex"
        aria-label="Défiler vers le menu"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-np-orange bg-np-orange/20">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-np-orange"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <title>Flèche vers le bas</title>
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
