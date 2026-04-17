import type React from "react";
import LazetCutImg from "../assets/images/logoLazertCut.jpg";
import footImg from "../assets/Img_foot.jpg";

const Lifestyle: React.FC = () => {
  return (
    <section
      id="lifestyle"
      className="relative py-24 px-6 overflow-hidden md:py-32"
      style={{ backgroundColor: "var(--np-dark)" }}
    >
      {/* Background Decor */}
      <div
        className="blob w-[500px] h-[500px] top-[-10%] left-[-10%] opacity-10"
        style={{ backgroundColor: "var(--np-teal)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 mb-6 text-xs font-black uppercase tracking-[0.2em] rounded-full bg-white/10 text-white/60">
            L'Esprit du Prado
          </span>
          <h2 className="text-[3.5rem] md:text-[6rem] leading-[0.9] font-black uppercase text-white m-0">
            PLUS QU'UN <span style={{ color: "var(--np-orange)" }}>RESTO</span>
          </h2>

          <p
            className="mt-6 text-xl md:text-2xl italic handwritten"
            style={{ color: "var(--np-yellow)" }}
          >
            Un lieu de vie unique à Paris 10, à deux pas de Strasbourg
            Saint-Denis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* EVENT CARD */}
          <article
            id="evenements"
            className="group relative p-10 md:p-12 rounded-[60px_20px_80px_30px] shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col justify-between border-2 border-white/10"
            style={{ backgroundColor: "var(--np-orange)" }}
          >
            <div>
              <h3 className="text-3xl font-black mb-6 leading-none uppercase text-white">
                PRIVATISEZ <br />
                LE SHOP
              </h3>

              <p className="text-lg mb-8 text-white/90 leading-relaxed font-medium font-['Space_Grotesk']">
                Anniversaire, afterwork ou tournage ? Privatisez notre
                restaurant africain pour une expérience unique au cœur de Paris 10.
              </p>
            </div>

            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-groovy w-full text-center justify-center !bg-white !text-black shadow-none hover:!scale-105"
            >
              DEMANDER UN DEVIS
            </a>
          </article>

          {/* FOOT CARD - Look "Magazine" */}
          <article
            className="group relative p-8 rounded-[30px] shadow-2xl border-2 border-white/5 flex flex-col transition-all duration-500 hover:-translate-y-4 overflow-hidden"
            style={{ backgroundColor: "#151515" }}
          >
            <div className="absolute top-6 right-6 z-20">
              <span className="bg-red-600 text-[10px] font-black px-3 py-1 rounded-full text-white animate-pulse">
                LIVE MATCH
              </span>
            </div>

            <div className="relative mb-8 overflow-hidden rounded-2xl h-56">
              <img
                src={footImg}
                alt="match de football dans un restaurant africain à Paris 10"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-60" />
            </div>

            <h3 className="text-3xl font-black mb-4 uppercase text-white">
              VIBREZ <span style={{ color: "var(--np-teal)" }}>FOOT</span>
            </h3>
            <p className="text-sm mb-8 text-white/70 font-['Space_Grotesk'] italic">
              Écran géant, ambiance de stade et cuisine africaine authentique à
              Paris 10. Les grandes affiches se vivent ici, ensemble.
            </p>
            <div className="flex gap-3 mt-auto">
              {["⚽", "🏆", "🔥"].map((emoji) => (
                <span
                  key={emoji}
                  className="text-2xl grayscale group-hover:grayscale-0 transition-all"
                >
                  {emoji}
                </span>
              ))}
            </div>
          </article>

          {/* BARBER CARD */}
          <article
            id="coiffure"
            className="group relative p-10 md:p-12 rounded-[20px_60px_30px_80px] shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-white/10"
            style={{ backgroundColor: "var(--np-teal)" }}
          >
            <div className="flex flex-col items-center text-center gap-6 mb-8">
              <div className="relative">
                <img
                  src={LazetCutImg}
                  alt="barbershop Lazer Cuts à Paris 10 près de Strasbourg Saint-Denis"
                  className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-2xl transition-transform group-hover:rotate-12"
                />
                <div className="absolute -bottom-2 -right-2 bg-white text-black p-2 rounded-full shadow-lg">
                  ✂️
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black uppercase text-white mb-1">
                  LAZER CUTS
                </h3>
                <span
                  className="text-sm font-black uppercase tracking-[0.2em]"
                  style={{ color: "var(--np-yellow)" }}
                >
                  Fresh Barbershop
                </span>
              </div>
            </div>

            <p className="text-lg text-white/90 leading-relaxed italic text-center font-['Space_Grotesk']">
              "Prenez soin de votre style à Paris 10 avant de savourer une
              cuisine africaine authentique chez NoPanik."
            </p>

            <div className="mt-10 pt-6 border-t border-white/10 text-center">
              <p className="text-[10px] uppercase font-black tracking-widest text-white/40">
                Situé à coté du shop
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
