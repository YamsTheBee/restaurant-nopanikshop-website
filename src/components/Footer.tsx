import logo from "../assets/noPanikLogo.jpg";
import { restaurantInfo } from "../data/restaurantData";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white pt-24 pb-12 px-4 border-t-4 border-np-dark"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 text-np-dark">
        {/* LOGO + SOCIAL */}

        <div className="text-center lg:text-left">
          <img
            src={logo}
            alt={restaurantInfo.name}
            className="h-25 mx-auto lg:mx-0 mb-6"
          />

          <p className="text-xl font-bold uppercase tracking-tighter italic mb-8">
            "Le goût du pays, <br /> le style de Paris."
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-np-dark text-white px-4 py-2 rounded-full hover:bg-np-orange transition"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-np-dark text-white px-4 py-2 rounded-full hover:bg-np-orange transition"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* HORAIRES */}

        <div className="bg-np-creme p-10 rounded-[40px_10px_40px_10px] border-2 border-np-dark shadow-sm">
          <h4 className="text-2xl mb-6 text-np-orange underline decoration-np-dark underline-offset-4">
            Horaires
          </h4>

          <div className="space-y-4 font-bold text-sm">
            {restaurantInfo.horaires.map((item) => (
              <p key={item.id} className="flex justify-between uppercase">
                <span>{item.day}</span>
                <span>{item.hours}</span>
              </p>
            ))}

            <div className="pt-6">
              <p className="uppercase text-np-teal tracking-tighter">
                {restaurantInfo.address}
              </p>

              <p className="text-2xl font-black mt-2">{restaurantInfo.phone}</p>
            </div>
          </div>
        </div>

        {/* GOOGLE MAP */}

        <div className="rounded-[20px_40px_20px_40px] overflow-hidden border-4 border-np-dark shadow-xl h-80">
          <iframe
            src="https://www.google.com/maps?q=7+Passage+du+Prado+Paris&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title={`Carte du restaurant ${restaurantInfo.name}`}
          />
        </div>
      </div>

      {/* BAS DU FOOTER */}

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-np-dark/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-np-dark opacity-60">
            © {new Date().getFullYear()} {restaurantInfo.name} —{" "}
            {restaurantInfo.address}
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-np-dark/20" />

            <p className="text-xs font-medium tracking-wide italic text-np-dark">
              Made with{" "}
              <span className="text-np-orange not-italic font-semibold">
                attitude ⚡
              </span>{" "}
              by{" "}
              <span className="font-black not-italic uppercase tracking-widest border-b-2 border-np-orange pb-0.5">
                Mariama
              </span>
            </p>

            <span className="h-px w-8 bg-np-dark/20" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
