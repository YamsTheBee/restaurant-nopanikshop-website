const entrees = [
  {
    id: "accras",
    name: "Accras de Morue",
    description: "Beignets antillais traditionnels servis par 6",
    price: 7,
  },
  {
    id: "alloco",
    name: "Alloco",
    description: "Bananes plantains frites, fondantes et sucrées",
    price: 6,
  },
  {
    id: "salade-nopanik",
    name: "Salade NoPanik",
    description: "Mangue, avocat et crevettes",
    price: 9,
  },
];

const plats = [
  {
    id: "yassa",
    name: "Yassa au Poulet",
    description: "Poulet mariné au citron vert et confit d'oignons",
    price: 14,
  },
  {
    id: "dibi mixte",
    name: "Dibi Viande & Poulet",
    description: "Viand grillée, sauce tomate épicée et riz",
    price: 15,
  },
  {
    id: "capitaine",
    name: "Grillade de Capitaine",
    description: "Poisson braisé servi avec son attiéké frais",
    price: 18,
  },
];

const Menu = () => {
  return (
    <section
      id="menu"
      className="py-24 bg-white relative overflow-hidden border-y-2 border-np-dark/5"
    >
      {/* Blob background */}
      <div className="blob w-[600px] h-[600px] bg-np-yellow top-[-10%] right-[-10%] opacity-10" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* TITLE */}

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl mb-4 text-np-dark">
            La Carte <span className="text-np-orange">NoPanik</span>
          </h2>

          <p className="text-np-teal font-bold uppercase tracking-widest">
            Gourmandise & Partage
          </p>
        </div>

        {/* MENU GRID */}

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {/* ENTRÉES */}

          <div>
            <h3 className="text-3xl mb-10 text-np-teal border-b-4 border-np-teal inline-block italic">
              Les Entrées
            </h3>

            <div className="space-y-8">
              {entrees.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start border-b-2 border-np-dark/5 pb-4 group"
                >
                  <div className="pr-4">
                    <h4 className="font-bold text-lg text-np-dark group-hover:text-np-orange transition">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500 italic">
                      {item.description}
                    </p>
                  </div>

                  <span className="font-black text-xl text-np-dark">
                    {item.price}€
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PLATS */}

          <div>
            <h3 className="text-3xl mb-10 text-np-orange border-b-4 border-np-orange inline-block italic">
              Les Plats
            </h3>

            <div className="space-y-8">
              {plats.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start border-b-2 border-np-dark/5 pb-4 group"
                >
                  <div className="pr-4">
                    <h4 className="font-bold text-lg text-np-dark group-hover:text-np-orange transition">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500 italic">
                      {item.description}
                    </p>
                  </div>

                  <span className="font-black text-xl text-np-dark">
                    {item.price}€
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BUTTON */}

        <div className="mt-20 text-center">
          <a
            href="https://wa.me/33123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-groovy"
          >
            Réserver via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
