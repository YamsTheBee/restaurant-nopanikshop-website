import type React from "react";
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
  restaurantPhoto: string;
  comment: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Jack D.",
    photo: imgCustomer1,
    restaurantPhoto: imgNoPanik,
    comment:
      "La cuisine est délicieuse et le cadre est très chaleureux. Je reviendrai sans hésiter !",
    rating: 5,
    date: "12 Mars 2026",
  },
  {
    id: 2,
    name: "Malick Joe.",
    photo: imgmCoolJ,
    restaurantPhoto: imgNoPanik,
    comment:
      "Service impeccable et plats savoureux. L'ambiance du restaurant est top pour un dîner entre amis.",
    rating: 5,
    date: "8 Mars 2026",
  },
  {
    id: 3,
    name: "Fatou S.",
    photo: imgCustomer2,
    restaurantPhoto: imgNoPanik,
    comment:
      "J'adore les saveurs afro-créoles proposées. Le personnel est accueillant et attentionné.",
    rating: 4,
    date: "5 Mars 2026",
  },
  {
    id: 4,
    name: "Mata Dev full-Stack.",
    photo: imgCustomer4,
    restaurantPhoto: imgNoPanik,
    comment:
      "Très bonne expérience culinaire. Les plats sont bien présentés et copieux.",
    rating: 4,
    date: "2 Mars 2026",
  },
  {
    id: 5,
    name: "Ludivine N.",
    photo: imgCustomer3,
    restaurantPhoto: imgNoPanik,
    comment:
      "Un vrai régal ! L'ambiance est cosy et le personnel aux petits soins. Très recommandé !",
    rating: 5,
    date: "28 Février 2026",
  },
];

const ClientReviews: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="reviews">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre avec style Syne global */}
        <h2 className="text-4xl text-center mb-16">
          Ce que nos <span className="handwritten">clients</span> disent
        </h2>

        {/* Slider wrapper */}
        <div className="overflow-hidden py-10">
          {/* Note technique : On utilise "hover:pause" si tu as configuré 
              l'animation pour s'arrêter au survol dans ton CSS 
          */}
          <div className="flex animate-slide gap-8">
            {/* Duplication pour l'effet infini : on ajoute l'index à la key */}
            {[...reviews, ...reviews].map((r, index) => (
              <div key={`${r.id}-${index}`} className="review-card">
                {/* Avatar Client */}
                <div className="review-avatar-container">
                  <img src={r.photo} alt={r.name} loading="lazy" />
                </div>

                {/* Photo Restaurant/Ambiance */}
                <img
                  src={r.restaurantPhoto}
                  alt="Ambiance NoPanik"
                  className="review-restaurant-img"
                  loading="lazy"
                />

                {/* Commentaire */}
                <p className="review-comment">"{r.comment}"</p>

                {/* Étoiles */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <svg
                      key={`star-${r.id}-${index}-${i}`}
                      className="w-5 h-5 text-np-yellow"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true" // On dit à Biome et aux lecteurs d'écran que c'est décoratif
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.951-.69l1.281-3.957z" />
                    </svg>
                  ))}
                </div>

                {/* Signature */}
                <div className="review-footer">
                  {r.name} —{" "}
                  <span className="opacity-70 text-np-dark">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trait de séparation décoratif */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-np-teal opacity-30" />
    </section>
  );
};

export default ClientReviews;
