// Images plats
import maféImg from "../assets/mafé.jpg";
import pastelsImg from "../assets/pastels.jpg";
import rizAuPoisson from "../assets/rizAuPoisson.jpg";

const signatures = [
  {
    id: "thieb",
    name: "Le Thieboudienne",
    description: "Riz rouge sénégalais, poisson frais et légumes braisés.",
    price: 16,
    image: rizAuPoisson,
  },
  {
    id: "mafe",
    name: "Le Mafé Poulet",
    description: "Sauce arachide onctueuse, poulet tendre et riz blanc.",
    price: 15,
    image: maféImg,
  },
  {
    id: "pastels",
    name: "Duo de Pastels",
    description: "Beignets croustillants au thon et viande.",
    price: 8,
    image: pastelsImg,
  },
];

const Restaurant = () => {
  return (
    <section id="restaurant" className="py-32 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* SECTION IMAGE + TEXTE */}

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative">
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full bg-np-teal rounded-[100px_30px_120px_40px] rotate-3 opacity-20" />

            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=800"
              alt="Cuisine NoPanik"
              className="w-full img-organic shadow-2xl relative"
            />

            <div className="absolute -bottom-8 -right-8 bg-np-orange text-white p-8 rounded-full h-32 w-32 flex items-center justify-center text-center leading-none font-bold rotate-12 shadow-xl border-4 border-white">
              100% FAIT MAISON
            </div>
          </div>

          <div>
            <h2 className="text-5xl md:text-7xl mb-8 text-np-dark leading-[0.9]">
              La Cuisine qui
              <span className="text-np-orange underline decoration-wavy">
                {" "}
                Danse
              </span>{" "}
              dans l'assiette.
            </h2>

            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Ici, on ne fait pas que manger. On partage un héritage. Du mafé
              onctueux au rougail pimenté, chaque plat est une fête servie avec
              l'énergie du Passage du Prado.
            </p>
          </div>
        </div>

        {/* SIGNATURES PLATS */}

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <h3 className="col-span-full text-center text-3xl mb-8 text-np-dark">
            Nos Incontournables
          </h3>

          {signatures.map((plat) => (
            <div key={plat.id} className="menu-card text-center group">
              <div className="overflow-hidden rounded-[30px_10px_30px_10px] mb-6 h-48 bg-gray-100">
                <img
                  src={plat.image}
                  alt={plat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h4 className="text-xl mb-1 text-np-dark">{plat.name}</h4>

              <p className="text-sm text-gray-500 mb-4 italic leading-tight">
                {plat.description}
              </p>

              <span className="text-np-orange font-black text-2xl">
                {plat.price}€
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
