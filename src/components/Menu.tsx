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

  const colors = {
    orange: "#E85D3F",
    teal: "#3D7A74",
    yellow: "#D98324",
    dark: "#1A1A1A",
    beige: "#F5F2ED",
  };

  const baseReset: React.CSSProperties = {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    textTransform: "none",
    letterSpacing: "normal",
  };

  return (
    <section
      style={{
        ...baseReset,
        backgroundColor: colors.beige,
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
        minHeight: "100vh",
        color: colors.dark,
        fontFamily: "'Space Grotesk', sans-serif",
        paddingBottom: "80px",
        width: "100%",
        position: "relative",
        zIndex: 50,
      }}
    >
      <header
        style={{
          padding: "60px 20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3.5rem, 8vw, 6rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 0.9,
            margin: 0,
          }}
        >
          NO PANIK <span style={{ color: colors.orange }}>Restaurant</span>
        </h1>

        <div className="max-w-[1200px] mx-auto mt-12 px-4 w-full">
          <h3 className="text-center text-3xl mb-8 text-np-dark font-bold uppercase tracking-tight">
            Nos Incontournables
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {signatures.map((plat) => (
              <div key={plat.id} className="menu-card text-center group">
                <div className="overflow-hidden rounded-[30px_10px_30px_10px] mb-6 h-48 bg-gray-100 border-2 border-np-dark/5">
                  <img
                    src={plat.image}
                    alt={plat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h4 className="text-xl mb-1 text-np-dark font-black">
                  {plat.name}
                </h4>
                <p className="text-sm text-gray-500 mb-4 italic leading-tight px-4">
                  {plat.description}
                </p>
                <span className="text-np-orange font-black text-2xl">
                  {plat.price}€
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-24 w-full">
          <div className="w-24 h-3 bg-[#4a9a93] rounded-full mb-4 rotate-2 shadow-sm" />
          <span className="text-5xl my-2 drop-shadow-md">✨</span>
          <div className="w-40 h-3 bg-[#e85d3f] rounded-full mt-4 -rotate-3 shadow-md" />
        </div>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <button
            type="button"
            onClick={() => setActiveSheet("food")}
            style={{
              padding: "15px 30px",
              fontWeight: 900,
              textTransform: "uppercase",
              cursor: "pointer",
              border: `3px solid ${colors.dark}`,
              backgroundColor:
                activeSheet === "food" ? colors.dark : colors.orange,
              color: "white",
              borderRadius: "40px 10px 30px 5px",
              boxShadow:
                activeSheet === "food" ? "none" : `6px 6px 0px ${colors.dark}`,
              transform:
                activeSheet === "food" ? "translate(4px, 4px)" : "none",
              transition: "all 0.2s",
            }}
          >
            La Carte
          </button>
          <button
            type="button"
            onClick={() => setActiveSheet("drinks")}
            style={{
              padding: "15px 30px",
              fontWeight: 900,
              textTransform: "uppercase",
              cursor: "pointer",
              border: `3px solid ${colors.dark}`,
              backgroundColor:
                activeSheet === "drinks" ? colors.dark : colors.teal,
              color: "white",
              borderRadius: "10px 40px 5px 30px",
              boxShadow:
                activeSheet === "drinks"
                  ? "none"
                  : `6px 6px 0px ${colors.dark}`,
              transform:
                activeSheet === "drinks" ? "translate(4px, 4px)" : "none",
              transition: "all 0.2s",
            }}
          >
            Drinks
          </button>
        </div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          {activeSheet === "food" ? (
            <>
              {/* COLONNE PLATS & DESSERTS */}
              <div>
                <span
                  style={{
                    background: colors.dark,
                    color: colors.beige,
                    padding: "5px 15px",
                    fontSize: "0.8rem",
                    fontWeight: 900,
                    borderRadius: "5px",
                    display: "inline-block",
                    marginBottom: "25px",
                  }}
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
                  {
                    n: "Tilapia Grillé",
                    p: "13€",
                    d: "Accompagnement au choix (riz, aloko ou atiéké)",
                  },
                  {
                    n: "Daurade Grillée",
                    p: "15€",
                    d: "Accompagnement au choix (riz, aloko ou atiéké)",
                  },
                ].map((item) => (
                  <div key={item.n} style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "1.1rem",
                          fontWeight: 800,
                        }}
                      >
                        {item.n}
                      </h4>
                      <div
                        style={{
                          flexGrow: 1,
                          borderBottom: "2px dotted rgba(0,0,0,0.2)",
                          margin: "0 10px",
                        }}
                      />
                      <div
                        style={{
                          background: colors.orange,
                          color: "white",
                          minWidth: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 900,
                          boxShadow: `3px 3px 0px ${colors.dark}`,
                        }}
                      >
                        {item.p}
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        opacity: 0.7,
                        fontStyle: "italic",
                        marginTop: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.d}
                    </p>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: "40px",
                    textAlign: "center",
                    padding: "20px",
                    border: `2px solid ${colors.teal}`,
                    borderRadius: "20px",
                    background: "white",
                  }}
                >
                  <h3
                    style={{
                      color: colors.teal,
                      fontSize: "1.2rem",
                      fontWeight: 900,
                      marginBottom: "15px",
                    }}
                  >
                    DESSERTS
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                      fontWeight: 700,
                    }}
                  >
                    <span>THIAKRY</span> <span>4€</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: 700,
                    }}
                  >
                    <span>BEIGNETS</span> <span>3,5€</span>
                  </div>
                </div>
              </div>

              {/* COLONNE SIGNATURES & SNACKS */}
              <div>
                <div
                  style={{
                    border: `4px solid ${colors.orange}`,
                    padding: "30px",
                    borderRadius: "50px 15px",
                    backgroundColor: "white",
                    position: "relative",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      right: "-10px",
                      background: colors.orange,
                      color: "white",
                      padding: "5px 15px",
                      fontWeight: 900,
                      transform: "rotate(10deg)",
                      border: `2px solid ${colors.dark}`,
                      fontSize: "0.7rem",
                    }}
                  >
                    FAIT MAISON
                  </div>
                  <h3
                    style={{
                      color: colors.orange,
                      marginBottom: "25px",
                      fontSize: "1.6rem",
                      fontWeight: 900,
                    }}
                  >
                    PLATS SPÉCIAUX
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "25px",
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 800 }}>
                        ÉTODIÉ <span style={{ float: "right" }}>13€</span>
                      </h4>
                      <p style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                        Manioc, viande & poisson fumé.
                      </p>
                    </div>
                    <div
                      style={{
                        borderTop: "1px solid #eee",
                        paddingTop: "15px",
                      }}
                    >
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 800 }}>
                        SOUPOUKANDJA <span style={{ float: "right" }}>13€</span>
                      </h4>
                      <p style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                        Gombo, fruits de mer, bœuf & crabe.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: colors.dark,
                    color: "white",
                    padding: "30px",
                    borderRadius: "20px",
                  }}
                >
                  <h3
                    style={{
                      color: colors.orange,
                      marginBottom: "20px",
                      fontWeight: 900,
                    }}
                  >
                    SNACKS
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: 800,
                        }}
                      >
                        <span>FATAYAS</span> <span>5€ | 10€</span>
                      </div>
                      <p style={{ fontSize: "0.7rem", color: "#aaa" }}>
                        Petit (5€) | Grand (10€)
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontWeight: 800,
                      }}
                    >
                      <span>ALOKO</span> <span>5€</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontWeight: 800,
                      }}
                    >
                      <span>SANDWICH</span> <span>5€</span>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: 800,
                        }}
                      >
                        <span>AILES DE POULET</span> <span>5€ | 10€</span>
                      </div>
                      <p style={{ fontSize: "0.7rem", color: "#aaa" }}>
                        Petit (5€) | Grand (10€)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* BOISSONS CHAUDES & SOFTS */}
              <div>
                <div
                  style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "20px",
                    border: `3px solid ${colors.teal}`,
                    marginBottom: "30px",
                  }}
                >
                  <h3
                    style={{
                      color: colors.teal,
                      borderBottom: `2px solid ${colors.teal}`,
                      paddingBottom: "10px",
                      marginBottom: "20px",
                      fontSize: "1.3rem",
                      fontWeight: 900,
                    }}
                  >
                    HOT DRINKS
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      fontWeight: 700,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>EXPRESSO</span> <span>1,5€</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>CAFÉ LONG</span> <span>2,5€</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>THÉ / CAFÉ TOUBA</span> <span>1€</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>CAFÉ TANGANA</span> <span>2€</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "20px",
                    border: `3px solid ${colors.orange}`,
                  }}
                >
                  <h3
                    style={{
                      color: colors.orange,
                      borderBottom: `2px solid ${colors.orange}`,
                      paddingBottom: "10px",
                      marginBottom: "20px",
                      fontSize: "1.3rem",
                      fontWeight: 900,
                    }}
                  >
                    SOFTS
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      fontWeight: 700,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>TAS MANGO PASSION</span> <span>3€</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>BISSAP / GINGEMBRE / BAOBAB</span> <span>4€</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>DITAKH</span> <span>5€</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>SODAS</span> <span>2,5€</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>REDBULL</span> <span>3€</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ALCOOLS & BIÈRES */}
              <div>
                <div
                  style={{
                    background: colors.dark,
                    color: colors.beige,
                    padding: "30px",
                    borderRadius: "20px",
                    marginBottom: "30px",
                  }}
                >
                  <h3
                    style={{
                      color: colors.teal,
                      borderBottom: "1px solid #444",
                      paddingBottom: "10px",
                      marginBottom: "20px",
                      fontSize: "1.3rem",
                      fontWeight: 900,
                    }}
                  >
                    ALCOOLS
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      fontSize: "0.9rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>PUNCH MAISON (verre/btl)</span> <span>3€ | 6€</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>JACK DANIEL'S (v/p/g)</span>{" "}
                      <span>8€ | 15€ | 35€*</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>VODKA / RHUM (v/p)</span> <span>3€ | 5€**</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>VIN (v/p/g)</span> <span>3€ | 5€ | 10€</span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.6rem",
                        opacity: 0.5,
                        marginTop: "10px",
                      }}
                    >
                      *40€ après 23h | **7€ après 23h
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "20px",
                    border: "1px solid #ddd",
                  }}
                >
                  <h3
                    style={{
                      color: colors.dark,
                      marginBottom: "15px",
                      fontWeight: 900,
                    }}
                  >
                    BIÈRES (33cl | 50cl | 70cl)
                  </h3>
                  {[
                    { n: "LEFFE", p: "2€ | 3€ | 5€" },
                    { n: "GUINNESS", p: "4€ (33cl)" },
                    { n: "HEINEKEN", p: "2€ | 3€ | 5€" },
                    { n: "PELFORTH", p: "- | 3€ | -" },
                    { n: "DESPERADOS", p: "2€ | 3€ | 5€" },
                  ].map((b) => (
                    <div
                      key={b.n}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                        borderBottom: "1px solid #eee",
                        fontWeight: 700,
                      }}
                    >
                      <span>{b.n}</span> <span>{b.p}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    background: colors.orange,
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  <h4 style={{ fontWeight: 900 }}>FORMULES SPÉCIALES</h4>
                  <p style={{ fontSize: "0.8rem" }}>
                    3x GUINNESS (33cl) ou 3x HEINEKEN (70cl) :{" "}
                    <span style={{ fontSize: "1.2rem", fontWeight: 900 }}>
                      12€
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <footer
        style={{
          marginTop: "80px",
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        <p
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "1.8rem",
            color: colors.yellow,
            transform: "rotate(-2deg)",
            marginBottom: "10px",
          }}
        >
          Le goût authentique du Prado
        </p>
        <p style={{ fontSize: "0.7rem", letterSpacing: "3px", opacity: 0.6 }}>
          NO PANIK SHOP • 7 PASSAGE DU PRADO • PARIS
        </p>
      </footer>
    </section>
  );
};

export default Menu;
