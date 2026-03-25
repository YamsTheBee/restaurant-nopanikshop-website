import LazetCutImg from "../assets/images/logoLazertCut.jpg";
import footImg from "../assets/Img_foot.jpg";

const Lifestyle = () => {
  return (
    <section id="lifestyle" className="py-32 px-4 bg-np-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl  font-medium">
            Plus qu'un{" "}
            <span className="text-np-yellow underline decoration-wavy underline-offset-8">
              Resto
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* EVENT CARD - Couleur Orange d'origine #E85D3F */}
          <article
            id="evenements"
            className="bg-[#E85D3F] text-white p-12 rounded-[80px_20px_100px_40px] shadow-2xl relative overflow-hidden border-2 border-white/20 transition-transform duration-500 hover:-translate-y-2"
          >
            <h3 className="text-2xl mb-6 leading-tight font-bold">
              Privatisez Le Shop
            </h3>

            <p className="text-xl mb-12 opacity-95 leading-relaxed font-medium">
              Anniversaire, Afterwork ou Tournage ?
              <br />
              Le Passage du Prado vous appartient le temps d'une soirée.
            </p>

            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#E85D3F] px-10 py-4 rounded-full font-black uppercase tracking-wider hover:bg-np-dark hover:text-white transition-all shadow-lg"
            >
              Demander un devis
            </a>
          </article>

          {/* FOOT CARD - Couleur Sombre d'origine #1F1F1F */}
          <article
            className="p-10 rounded-[40px_40px_10px_10px] shadow-xl relative overflow-hidden border-2 border-black/5 flex flex-col items-center transition-transform duration-500 hover:-translate-y-2"
            style={{ backgroundColor: "#1F1F1F", color: "white" }}
          >
            <div className="absolute top-4 right-4 animate-pulse">
              <span className="bg-red-600 text-[10px] font-black px-2 py-1 rounded">
                LIVE
              </span>
            </div>

            <div className="w-full mb-6 overflow-hidden rounded-xl">
              <img
                src={footImg}
                alt="Ambiance Match de Foot"
                className="w-full h-48 object-cover shadow-lg"
                loading="lazy"
              />
            </div>

            <h3 className="text-3xl font-black mb-4 leading-none uppercase text-center">
              Matchs de Foot
            </h3>

            <p className="text-lg mb-8 opacity-90 font-medium leading-tight text-center">
              Vivez les plus grandes affiches sur écran géant. Ambiance stade
              garantie !
            </p>

            <div className="flex gap-4 justify-center">
              <span className="text-2xl" role="img" aria-label="ballon">
                ⚽
              </span>
              <span className="text-2xl" role="img" aria-label="trophée">
                🏆
              </span>
              <span className="text-2xl" role="img" aria-label="feu">
                🔥
              </span>
            </div>
          </article>

          {/* BARBER CARD - Couleur Teal d'origine #4A9A93 */}
          <article
            id="coiffure"
            className="bg-[#4A9A93] text-white p-12 rounded-[20px_80px_40px_100px] shadow-2xl relative border-2 border-white/20 transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <img
                src={LazetCutImg}
                alt="Lazer Cuts Barbershop"
                className="h-40 w-40 rounded-full border-4 border-white object-cover shadow-2xl"
                loading="lazy"
              />

              <div className="text-center md:text-left">
                <h3 className="text-3xl leading-none mb-2 font-bold">
                  Lazer Cuts
                </h3>
                <span className="text-np-yellow text-l font-bold uppercase tracking-widest">
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
          </article>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
