const Restaurant = () => {
  return (
    <section
      id="restaurant"
      className="py-32 px-4 bg-white relative overflow-hidden"
    >
      {/* Contenu de la section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bloc Image avec Décoration */}
          <div className="relative group">
            <div
              className="absolute -z-10 -top-6 -left-6 w-full h-full bg-np-teal rounded-[100px_30px_120px_40px] rotate-3 opacity-20 group-hover:rotate-0 transition-transform duration-700"
              aria-hidden="true"
            />

            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=800"
              alt="Préparation de plats africains authentiques chez NoPanik"
              className="w-full h-auto img-organic shadow-2xl relative object-cover aspect-[4/5] md:aspect-auto"
              loading="lazy"
            />

            {/* Badge Flottant Animé */}
            <div className="absolute -bottom-10 -right-6 md:-right-10 z-20 animate-floating">
              <div className="absolute inset-0 border-2 border-dashed border-white rounded-full animate-spin-slow scale-125 opacity-40" />
              <div className="bg-[#e85d3f] p-4 md:p-8 rounded-full h-28 w-28 md:h-32 md:w-32 flex items-center justify-center text-center leading-none shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-4 border-white transition-transform duration-300 hover:scale-110 relative">
                <span className="text-white uppercase tracking-tighter font-black">
                  <span className="text-[10px] md:text-xs opacity-90">
                    100%
                  </span>{" "}
                  <br />
                  <span className="text-lg md:text-xl block my-0.5">FAIT</span>
                  <span className="text-[10px] md:text-xs opacity-90">
                    MAISON
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Bloc Texte */}
          <article>
            <h2 className="text-5xl md:text-7xl mb-8 text-np-dark font-medium leading-[0.9] tracking-tight">
              La Cuisine qui
              <span className="text-np-orange underline decoration-wavy underline-offset-8">
                {" "}
                Danse
              </span>{" "}
              dans l'assiette.
            </h2>

            <div className="space-y-6">
              <p className="text-xl text-gray-800 leading-relaxed">
                Ici, on ne fait pas que manger. On partage un héritage. Du{" "}
                <strong>Mafé onctueux</strong> , un{" "}
                <strong> Dibi savoureux</strong> ou la{" "}
                <strong>Daurade grillée</strong>, chaque plat est une fête
                servie avec l'énergie unique du Passage du Prado.
              </p>

              <p className="text-lg text-gray-600 italic border-l-4 border-np-teal pl-4">
                "Le goût du Sénégal et des Antilles, sans quitter le cœur de
                Paris."
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* --- SHAPE DIVIDER TEAL EN BAS --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-height-0">
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] fill-[#4a9a93]"
        >
          <title>Decorative teal wave divider</title>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Restaurant;
