const Restaurant = () => {
  return (
    <section
      id="restaurant"
      className="py-16 md:py-32 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto mb-12 md:mb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative group px-4 md:px-0 max-w-[400px] mx-auto lg:max-w-none">
            <div
              className="absolute -z-10 -top-3 -left-3 md:-top-6 md:-left-6 w-full h-full bg-np-teal rounded-[40px_15px_60px_20px] md:rounded-[100px_30px_120px_40px] rotate-3 opacity-20"
              aria-hidden="true"
            />

            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=800"
              alt="Préparation de plats africains authentiques chez NoPanik"
              className="w-full h-[250px] md:h-auto object-cover img-organic shadow-2xl relative rounded-2xl md:aspect-auto"
              loading="lazy"
            />

            <div className="absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10 z-20 animate-floating scale-[0.65] md:scale-100 origin-bottom-right">
              <div className="absolute inset-0 border-2 border-dashed border-white rounded-full animate-spin-slow scale-125 opacity-40" />
              <div className="bg-[#e85d3f] p-4 md:p-8 rounded-full h-24 w-24 md:h-32 md:w-32 flex items-center justify-center text-center leading-none shadow-xl border-4 border-white">
                <span className="text-white uppercase tracking-tighter font-black">
                  <span className="text-[8px] md:text-xs opacity-90">100%</span>
                  <br />
                  <span className="text-sm md:text-xl block my-0.5">FAIT</span>
                  <span className="text-[8px] md:text-xs opacity-90">
                    MAISON
                  </span>
                </span>
              </div>
            </div>
          </div>

          <article className="mt-12 lg:mt-0">
            <h2 className="text-4xl md:text-7xl mb-6 md:mb-8 text-np-dark font-medium leading-[1.1] md:leading-[0.9] tracking-tight">
              La Cuisine qui
              <span className="text-np-orange underline decoration-wavy underline-offset-8 block sm:inline">
                {" "}
                Danse
              </span>{" "}
              dans l'assiette.
            </h2>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Ici, on ne fait pas que manger. On partage un héritage. Du{" "}
                <strong className="text-np-dark">Mafé onctueux</strong>, un{" "}
                <strong className="text-np-dark">Dibi savoureux</strong> ou la{" "}
                <strong className="text-np-dark">Daurade grillée</strong>,
                chaque plat est une fête servie avec l'énergie unique du Passage
                du Prado.
              </p>

              <p className="text-base md:text-lg text-gray-600 italic border-l-4 border-np-teal pl-4 py-1">
                "Le goût du Sénégal et des Antilles, sans quitter le cœur de
                Paris."
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[80px] fill-[#4a9a93]"
        >
          <title>Séparateur décoratif</title>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Restaurant;
