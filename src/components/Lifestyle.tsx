import LazetCutImg from "../assets/images/logoLazertCut.jpg";

const Lifestyle = () => {
  return (
    <section id="lifestyle" className="py-32 px-4 bg-np-dark">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}

        <div className="text-center mb-16">
          <h2 className="text-5xl text-black">
            Plus qu'un{" "}
            <span className="text-np-yellow underline decoration-wavy">
              Resto
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* EVENT CARD */}

          <div
            id="evenements"
            className="bg-[#E85D3F] text-white p-12 rounded-[80px_20px_100px_40px] shadow-2xl relative overflow-hidden border-2 border-white/20"
          >
            <h2 className="text-5xl mb-6 leading-tight">
              Privatisez <br /> Le Shop
            </h2>

            <p className="text-xl mb-12 opacity-95 leading-relaxed font-medium">
              Anniversaire, Afterwork ou Tournage ?
              <br />
              Le Passage du Prado vous appartient le temps d'une soirée.
            </p>

            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#E85D3F] px-10 py-4 rounded-full font-black uppercase tracking-wider hover:bg-np-dark hover:text-white transition shadow-lg"
            >
              Demander un devis
            </a>
          </div>

          {/* BARBER CARD */}

          <div
            id="coiffure"
            className="bg-[#4A9A93] text-white p-12 rounded-[20px_80px_40px_100px] shadow-2xl relative border-2 border-white/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <img
                src={LazetCutImg}
                alt="Lazer Cuts Barbershop"
                className="h-40 w-40 rounded-full border-4 border-white object-cover shadow-2xl"
              />

              <div className="text-center md:text-left">
                <h2 className="text-4xl leading-none mb-2">Lazer Cuts</h2>

                <span className="text-np-yellow text-xl font-bold uppercase tracking-widest">
                  Fresh Barbershop
                </span>
              </div>
            </div>

            <p className="text-xl opacity-95 mb-10 leading-relaxed italic">
              "Prenez soin de votre style avant de régaler vos papilles."
              <br />
              Le combo parfait du 10ème arrondissement.
            </p>

            <div className="h-2 w-24 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
