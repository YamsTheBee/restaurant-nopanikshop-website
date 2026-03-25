import bananePlantain from "../assets/images/bananePlantin.jpg";

// Typescript: On définit une interface pour les items de l'épicerie
interface EpicerieItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const EPICERIE_ITEMS: EpicerieItem[] = [
  {
    id: "epices",
    title: "Épices Secrètes",
    description: "Mélanges maison pour pimper vos plats.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "tropicaux",
    title: "Trésors Tropicaux",
    description: "Bananes plantains mûres, ignames et gombos.",
    image: bananePlantain,
  },
  {
    id: "drinks",
    title: "Drinks Frais",
    description: "Bissap et Gnamankoudji faits maison.",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=400",
  },
];

const Epicerie = () => {
  return (
    <section
      id="epicerie"
      className="py-32 bg-[#4A9A93] text-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div
        className="blob w-[600px] h-[600px] bg-np-dark top-[10%] right-[-20%] opacity-20"
        aria-hidden="true"
      />
      <div
        className="blob w-[400px] h-[400px] bg-np-orange bottom-[-10%] left-[-10%] opacity-30"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-20">
          <span className="text-np-dark bg-white px-4 py-1 rounded-full text-xs font-black uppercase mb-4 tracking-[0.2em]">
            Corner Boutique
          </span>

          <h2 className="text-6xl md:text-8xl leading-[0.85] text-white font-medium">
            Ramenez le <span className="text-np-dark">Goût</span>
            <br /> à la maison
          </h2>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {EPICERIE_ITEMS.map((item) => (
            <article
              key={item.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-[40px_10px_40px_10px] border border-white/20 hover:bg-white hover:text-np-dark transition-all duration-500 group"
            >
              <div className="overflow-hidden rounded-[30px_8px_30px_8px] mb-6 aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <h3 className="text-2xl mb-2 font-semibold">{item.title}</h3>
              <p className="opacity-80 group-hover:opacity-100 text-sm italic">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <a
            href="https://wa.me/33123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-groovy inline-block"
            aria-label="Commander des produits d'épicerie via WhatsApp"
          >
            Commander via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Epicerie;
