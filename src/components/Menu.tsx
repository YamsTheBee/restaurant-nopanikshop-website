import type React from "react";
import { useState } from "react";
import logoNPK from "../assets/images/logoNopanik.png";

const signatures = [
  {
    id: "etodie",
    name: "ÉTODIÉ",
    description:
      "Plat à base de feuilles de manioc, viande & poisson fumé. Servi avec du riz blanc.",
    price: 13,
    image: logoNPK,
  },
  {
    id: "soupe-kandja",
    name: "SOUPE-KANDJIA",
    description:
      "Sauce à base de gombos, viande fumée, crabe et crevettes séchées. Servi avec du riz blanc.",
    price: 13,
    image: logoNPK,
  },
  {
    id: "dibi",
    name: "DIBI",
    description:
      "Morceaux de viandes braisés (poulet ou mouton), accompagnés de crudités.",
    price: 15,
    image: logoNPK,
  },
];

const Menu: React.FC = () => {
  const [activeSheet, setActiveSheet] = useState<"food" | "drinks">("food");

  return (
    <section
      className="relative z-50 w-full min-h-screen pb-20 overflow-x-hidden"
      style={{
        backgroundColor: "var(--np-creme)",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
      }}
    >
      <header className="flex flex-col items-center px-4 py-16 text-center">
        <h1 className="text-[3.5rem] md:text-[6rem] leading-[0.9] m-0">
          NO PANIK <span style={{ color: "var(--np-orange)" }}>Restaurant</span>
        </h1>

        <div className="w-full max-w-[1200px] mx-auto mt-12 px-4">
          <h3 className="mb-8 text-3xl font-bold uppercase tracking-tight">
            Nos Incontournables
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatures.map((plat) => (
              <div key={plat.id} className="menu-card text-center group">
                <div className="overflow-hidden rounded-[30px_10px_30px_10px] mb-6 h-48 bg-gray-100 border-2 border-black/5">
                  <img
                    src={plat.image}
                    alt={plat.name}
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="mb-1 text-xl font-black">{plat.name}</h4>
                <p className="px-4 mb-4 text-sm italic leading-tight text-gray-500 font-['Space_Grotesk']">
                  {plat.description}
                </p>
                <span
                  className="text-2xl font-black"
                  style={{ color: "var(--np-orange)" }}
                >
                  {plat.price}€
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full py-16 md:py-24">
          <div
            className="w-24 h-3 rounded-full mb-4 rotate-2 shadow-sm"
            style={{ backgroundColor: "var(--np-teal)" }}
          />
          <span className="my-2 text-5xl drop-shadow-md">✨</span>
          <div
            className="w-40 h-3 rounded-full mt-4 -rotate-3 shadow-md"
            style={{ backgroundColor: "var(--np-orange)" }}
          />
        </div>

        {/* Boutons de navigation avec ton style .btn-groovy adapté */}
        <div className="flex flex-wrap justify-center gap-6 mt-5 px-4">
          <button
            type="button"
            onClick={() => setActiveSheet("food")}
            className="btn-groovy"
            style={{
              backgroundColor:
                activeSheet === "food" ? "var(--np-dark)" : "var(--np-orange)",
              boxShadow:
                activeSheet === "food" ? "none" : "6px 6px 0px var(--np-dark)",
              transform:
                activeSheet === "food" ? "translate(4px, 4px)" : "none",
            }}
          >
            La Carte
          </button>
          <button
            type="button"
            onClick={() => setActiveSheet("drinks")}
            className="btn-groovy"
            style={{
              backgroundColor:
                activeSheet === "drinks" ? "var(--np-dark)" : "var(--np-teal)",
              boxShadow:
                activeSheet === "drinks"
                  ? "none"
                  : "6px 6px 0px var(--np-dark)",
              transform:
                activeSheet === "drinks" ? "translate(4px, 4px)" : "none",
            }}
          >
            Drinks
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {activeSheet === "food" ? (
            <>
              {/* COLONNE PLATS */}
              <div className="space-y-6">
                <span
                  className="inline-block px-4 py-1 mb-6 text-xs font-black rounded text-white uppercase"
                  style={{ backgroundColor: "var(--np-dark)" }}
                >
                  NOS PLATS
                </span>
                {[
                  {
                    n: "Thieb Poisson",
                    p: "13€",
                    d: "Poisson farci, riz rouge & légumes",
                  },
                  {
                    n: "Thieb Poulet",
                    p: "10€",
                    d: "Poulet mariné, riz rouge & légumes",
                  },
                  {
                    n: "Attiéké Poisson",
                    p: "12€",
                    d: "Semoule de manioc & poisson braisé",
                  },
                  {
                    n: "Mafé Bœuf",
                    p: "12€",
                    d: "Sauce arachide onctueuse & riz",
                  },
                  {
                    n: "Vermicelles",
                    p: "12€",
                    d: "Cheveux d'anges revisités, sauce oignons",
                  },
                  { n: "Tilapia Grillé", p: "13€", d: "Riz, aloko ou atiéké" },
                  { n: "Daurade Grillée", p: "15€", d: "Riz, aloko ou atiéké" },
                ].map((item) => (
                  <div key={item.n} className="group font-['Space_Grotesk']">
                    <div className="flex items-center justify-between">
                      <h4 className="m-0 text-base md:text-lg font-extrabold uppercase">
                        {item.n}
                      </h4>
                      <div className="flex-grow border-b-2 border-dotted border-black/20 mx-3 mb-1" />
                      <div
                        className="flex items-center justify-center min-w-[45px] h-[45px] font-black text-white rounded-full shadow-[3px_3px_0px_var(--np-dark)]"
                        style={{ backgroundColor: "var(--np-orange)" }}
                      >
                        {item.p}
                      </div>
                    </div>
                    <p className="mt-1 text-[10px] md:text-xs italic opacity-60 uppercase">
                      {item.d}
                    </p>
                  </div>
                ))}

                <div
                  className="p-6 mt-10 bg-white border-2 rounded-3xl"
                  style={{ borderColor: "var(--np-teal)" }}
                >
                  <h3
                    className="mb-4 text-lg font-black uppercase text-center"
                    style={{ color: "var(--np-teal)" }}
                  >
                    DESSERTS
                  </h3>
                  <div className="flex justify-between font-bold border-b border-gray-100 pb-2 uppercase font-['Space_Grotesk']">
                    <span>THIAKRY</span> <span>4€</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 uppercase font-['Space_Grotesk']">
                    <span>BEIGNETS</span> <span>3,5€</span>
                  </div>
                </div>
              </div>

              {/* COLONNE SPÉCIAUX & SNACKS */}
              <div className="space-y-10">
                <div
                  className="relative p-8 bg-white border-4 rounded-[50px_15px] shadow-lg"
                  style={{ borderColor: "var(--np-orange)" }}
                >
                  <div
                    className="absolute -top-4 -right-2 text-white px-3 py-1 font-black text-[10px] rotate-12 border-2 border-black"
                    style={{ backgroundColor: "var(--np-orange)" }}
                  >
                    FAIT MAISON
                  </div>
                  <h3
                    className="mb-6 text-2xl font-black uppercase"
                    style={{ color: "var(--np-orange)" }}
                  >
                    PLATS SPÉCIAUX
                  </h3>
                  <div className="space-y-6 font-['Space_Grotesk']">
                    <div>
                      <h4 className="flex justify-between font-extrabold text-lg uppercase">
                        ÉTODIÉ <span>13€</span>
                      </h4>
                      <p className="text-xs opacity-60">
                        Manioc, viande & poisson fumé.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="flex justify-between font-extrabold text-lg uppercase">
                        SOUPOUKANDJA <span>13€</span>
                      </h4>
                      <p className="text-xs opacity-60">
                        Gombo, fruits de mer, bœuf & crabe.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="p-8 text-white rounded-3xl shadow-xl"
                  style={{ backgroundColor: "var(--np-dark)" }}
                >
                  <h3
                    className="mb-6 text-xl font-black uppercase"
                    style={{ color: "var(--np-orange)" }}
                  >
                    SNACKS
                  </h3>
                  <div className="space-y-4 font-['Space_Grotesk']">
                    {["FATAYAS", "ALOKO", "SANDWICH"].map((s) => (
                      <div
                        key={s}
                        className="flex justify-between font-bold border-b border-white/10 pb-2"
                      >
                        <span>{s}</span>{" "}
                        <span>5€ {s === "FATAYAS" && "| 10€"}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold">
                      <span>AILES DE POULET</span> <span>5€ | 10€</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* BOISSONS CHAUDES & SOFTS */}
              <div className="space-y-8">
                <div
                  className="p-8 bg-white border-4 rounded-3xl shadow-sm"
                  style={{ borderColor: "var(--np-teal)" }}
                >
                  <h3
                    className="pb-2 mb-6 text-xl font-black border-b-2 uppercase"
                    style={{
                      color: "var(--np-teal)",
                      borderColor: "var(--np-teal)",
                    }}
                  >
                    HOT DRINKS
                  </h3>
                  <div className="space-y-4 font-bold font-['Space_Grotesk']">
                    <div className="flex justify-between">
                      <span>EXPRESSO</span> <span>1,5€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CAFÉ LONG</span> <span>2,5€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>THÉ / CAFÉ TOUBA</span> <span>1€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CAFÉ TANGANA</span> <span>2€</span>
                    </div>
                  </div>
                </div>

                <div
                  className="p-8 bg-white border-4 rounded-3xl shadow-sm"
                  style={{ borderColor: "var(--np-orange)" }}
                >
                  <h3
                    className="pb-2 mb-6 text-xl font-black border-b-2 uppercase"
                    style={{
                      color: "var(--np-orange)",
                      borderColor: "var(--np-orange)",
                    }}
                  >
                    SOFTS
                  </h3>
                  <div className="space-y-4 font-bold font-['Space_Grotesk']">
                    <div className="flex justify-between text-sm">
                      <span>TAS MANGO PASSION</span> <span>3€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>BISSAP / GINGEMBRE / BAOBAB</span> <span>4€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>DITAKH</span> <span>5€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>SODAS / REDBULL</span> <span>2,5€+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ALCOOLS & BIÈRES */}
              <div className="space-y-8">
                <div
                  className="p-8 text-white rounded-3xl shadow-xl"
                  style={{ backgroundColor: "var(--np-dark)" }}
                >
                  <h3
                    className="pb-2 mb-6 text-xl font-black border-b uppercase"
                    style={{
                      color: "var(--np-teal)",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    ALCOOLS
                  </h3>
                  <div className="space-y-4 text-sm font-['Space_Grotesk']">
                    <div className="flex justify-between">
                      <span>PUNCH MAISON (verre/btl)</span>{" "}
                      <span
                        style={{ color: "var(--np-orange)", fontWeight: 900 }}
                      >
                        3€ | 6€
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>JACK DANIEL'S (v/p/g)</span>{" "}
                      <span
                        style={{ color: "var(--np-orange)", fontWeight: 900 }}
                      >
                        8€ | 15€ | 35€*
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>VODKA / RHUM (v/p)</span>{" "}
                      <span
                        style={{ color: "var(--np-orange)", fontWeight: 900 }}
                      >
                        3€ | 5€**
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>VIN (v/p/g)</span>{" "}
                      <span
                        style={{ color: "var(--np-orange)", fontWeight: 900 }}
                      >
                        3€ | 5€ | 10€
                      </span>
                    </div>
                    <p className="text-[10px] opacity-40 mt-4 italic">
                      *40€ après 23h
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-white border-2 border-gray-200 rounded-3xl">
                  <h3 className="mb-6 text-lg font-black uppercase">
                    BIÈRES (33 / 50 / 70cl)
                  </h3>
                  <div className="space-y-3 font-bold text-sm font-['Space_Grotesk']">
                    {[
                      "LEFFE",
                      "GUINNESS (33cl)",
                      "HEINEKEN",
                      "PELFORTH (50cl)",
                      "DESPERADOS",
                    ].map((b) => (
                      <div
                        key={b}
                        className="flex justify-between border-b border-gray-50 pb-1"
                      >
                        <span>{b}</span>{" "}
                        <span>{b.includes("GUINNESS") ? "4€" : "Dès 2€"}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-6 p-4 text-white rounded-xl text-center"
                    style={{ backgroundColor: "var(--np-orange)" }}
                  >
                    <h4 className="font-black text-sm uppercase">
                      FORMULE SPÉCIALE
                    </h4>
                    <p className="text-xl font-black font-['Space_Grotesk']">
                      3x BIÈRES (G) : 12€
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="px-4 mt-20 text-center">
        <p
          className="mb-2 text-3xl handwritten"
          style={{ color: "var(--np-yellow)" }}
        >
          Le goût authentique du Prado
        </p>
        <p className="text-[10px] font-bold tracking-[3px] opacity-40 uppercase">
          NO PANIK SHOP • 7 PASSAGE DU PRADO • PARIS
        </p>
      </footer>
    </section>
  );
};

export default Menu;
