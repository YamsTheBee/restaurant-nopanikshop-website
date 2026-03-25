import type React from "react";

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
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "drinks",
    title: "Drinks Frais",
    description: "Bissap et Gnamankoudji faits maison.",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=400",
  },
];

const Epicerie: React.FC = () => {
  const scrollingText =
    "• Ramenez le Goût à la Maison • Mangez sur Place, Cuisinez chez Vous • Épicerie No Panik Shop •";

  return (
    <section
      id="epicerie"
      className="relative py-24 overflow-hidden md:py-32"
      style={{ backgroundColor: "var(--np-teal)" }}
    >
      <div
        className="blob w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-[10%] right-[-10%] opacity-20"
        style={{ backgroundColor: "var(--np-dark)" }}
        aria-hidden="true"
      />
      <div
        className="blob w-[250px] h-[250px] md:w-[400px] md:h-[400px] bottom-[-5%] left-[-5%] opacity-30"
        style={{ backgroundColor: "var(--np-orange)" }}
        aria-hidden="true"
      />

      <div className="absolute top-0 left-0 w-full py-3 bg-white/5 border-b border-white/10 z-20 overflow-hidden">
        <div className="animate-slide whitespace-nowrap">
          <span className="text-sm font-bold uppercase tracking-widest text-white/90 font-['Space_Grotesk'] mx-4">
            {scrollingText}
          </span>
          <span
            className="text-sm font-bold uppercase tracking-widest text-white/90 font-['Space_Grotesk'] mx-4"
            aria-hidden="true"
          >
            {scrollingText}
          </span>
          <span
            className="text-sm font-bold uppercase tracking-widest text-white/90 font-['Space_Grotesk'] mx-4"
            aria-hidden="true"
          >
            {scrollingText}
          </span>
        </div>
      </div>

      <div className="relative z-10 px-6 mx-auto mt-16 max-w-7xl md:mt-24">
        <header className="flex flex-col items-center mb-16 text-center md:mb-24">
          <span
            className="px-4 py-1 mb-6 text-xs font-black uppercase tracking-[0.2em] rounded-full"
            style={{
              backgroundColor: "var(--np-creme)",
              color: "var(--np-dark)",
            }}
          >
            Corner Boutique
          </span>

          <h2 className="text-[3.5rem] md:text-[7rem] leading-[0.9] font-black uppercase text-white m-0">
            L'ÉPICERIE <span style={{ color: "var(--np-dark)" }}>SHOP</span>
          </h2>

          <p
            className="mt-6 text-xl md:text-2xl italic font-medium max-w-2xl handwritten"
            style={{ color: "var(--np-yellow)" }}
          >
            Ramenez le goût du pays directement dans votre cuisine
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {EPICERIE_ITEMS.map((item, index) => (
            <article
              key={item.id}
              className="reveal-taste group relative bg-white/10 backdrop-blur-md p-6 rounded-[40px_15px] border border-white/20 transition-all duration-500 hover:bg-white hover:shadow-[15px_15px_0px_var(--np-dark)] overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="overflow-hidden rounded-[30px_10px] mb-6 aspect-square border-2 border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="transition-colors duration-500 group-hover:text-black">
                <h3 className="mb-2 text-2xl font-black uppercase leading-none">
                  {item.title}
                </h3>
                <p className="text-sm italic font-medium opacity-80 group-hover:opacity-100 font-['Space_Grotesk']">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-2xl">🛍️</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://wa.me/33123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-groovy"
            style={{ backgroundColor: "var(--np-orange)", color: "white" }}
          >
            Commander via WhatsApp
          </a>
          <p className="mt-4 text-[10px] uppercase font-bold tracking-widest opacity-60 text-white">
            Disponibilité selon arrivage hebdomadaire
          </p>
        </div>
      </div>
    </section>
  );
};

export default Epicerie;
