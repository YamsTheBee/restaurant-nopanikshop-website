const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-np-orange top-[-10%] left-[-10%]" />
      <div className="blob w-[400px] h-[400px] bg-np-teal bottom-[0%] right-[-5%]" />

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <span className="inline-block bg-np-teal/10 text-np-teal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Ouvert de 12h à 23h
        </span>

        <h1 className="text-6xl md:text-9xl text-np-dark mb-4 leading-[0.85] tracking-tighter">
          PAS DE <span className="text-np-orange italic">PANIK</span>,<br />
          QUE DU <span className="text-np-teal font-black">GOÛT</span>.
        </h1>

        <p className="text-np-dark text-xl md:text-2xl mb-12 font-medium max-w-2xl mx-auto opacity-80">
          L'escale Afro-Créole du Passage du Prado.
        </p>

        <div className="mt-20 text-center">
          <a
            href="#menu"
            aria-label="Voir la carte du restaurant"
            className="btn-groovy px-10 py-5 text-xl"
          >
            Voir la Carte
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
