import imgNoPanik from "../assets/images/logoNopanik.png";
import imgmCoolJ from "../assets/images/pp5.png";
import imgCustomer1 from "../assets/images/ImgClient1.png";
import imgCustomer2 from "../assets/images/ImgClient2.png";
import imgCustomer3 from "../assets/images/ImgClient3.png";
import imgCustomer4 from "../assets/images/ImgClient4.png";

interface Review {
  id: number;
  name: string;
  photo: string;
  comment: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Jack D.",
    photo: imgCustomer1,
    comment: "La cuisine est délicieuse et le cadre chaleureux.",
    rating: 5,
    date: "12 Mar",
  },
  {
    id: 2,
    name: "Malick Joe.",
    photo: imgmCoolJ,
    comment: "Service impeccable et plats savoureux. Top !",
    rating: 5,
    date: "8 Mar",
  },
  {
    id: 3,
    name: "Fatou S.",
    photo: imgCustomer2,
    comment: "J'adore les saveurs afro-créoles. Personnel accueillant.",
    rating: 4,
    date: "5 Mar",
  },
  {
    id: 4,
    name: "Mata Dev.",
    photo: imgCustomer4,
    comment: "Très bonne expérience. Plats copieux et bien présentés.",
    rating: 4,
    date: "2 Mar",
  },
  {
    id: 5,
    name: "Ludivine N.",
    photo: imgCustomer3,
    comment: "Un vrai régal ! L'ambiance est cosy. Recommandé !",
    rating: 5,
    date: "28 Fév",
  },
];

const ClientReviews: React.FC = () => {
  return (
    <section
      className="relative py-12 md:py-16 overflow-hidden bg-white/5"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
            Nos clients{" "}
            <span className="handwritten text-np-orange">disent</span>
          </h2>
        </header>

        <div className="relative">
          <div className="flex animate-slide gap-4 w-max px-4">
            {[...reviews, ...reviews].map((r, index) => (
              <div
                key={`${r.id}-${index}`}
                className="review-card !w-[180px] md:!w-[240px] !min-w-[180px] md:!min-w-[240px] !p-4 flex-shrink-0 border border-black/5 shadow-sm bg-white"
              >
                {/* Header Compact horizontal */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="!w-10 !h-10 flex-shrink-0">
                    <img
                      src={r.photo}
                      alt={r.name}
                      className="w-full h-full object-cover rounded-full border border-black/10"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-black leading-none uppercase truncate">
                      {r.name}
                    </p>
                    <div className="flex text-[10px] text-np-yellow mt-1">
                      {"★".repeat(r.rating)}
                    </div>
                  </div>
                </div>

                {/* Commentaire Miniature */}
                <p className="text-[11px] md:text-[12px] leading-tight italic opacity-90 font-medium line-clamp-3">
                  "{r.comment}"
                </p>

                {/* Footer discret avec Logo miniature */}
                <div className="mt-3 pt-2 border-t border-black/5 flex justify-between items-center">
                  <span className="text-[8px] uppercase font-bold opacity-30">
                    {r.date}
                  </span>
                  <img
                    src={imgNoPanik}
                    alt="NP"
                    className="h-2.5 grayscale opacity-20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trait de séparation discret */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-np-orange opacity-10" />
    </section>
  );
};

export default ClientReviews;
