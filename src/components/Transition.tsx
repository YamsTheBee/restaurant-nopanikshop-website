const Transition = () => {
  return (
    /* h-[25vh] sur mobile (environ 1/4 de l'écran) et h-[60vh] sur desktop */
    <div className="h-[25vh] md:h-[60vh] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat 
                    bg-scroll md:bg-fixed transition-all duration-700"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop')`,
          backgroundPosition: "50% 50%",
        }}
      />

      {/* Overlay pour le contraste - Un peu plus léger pour bien voir l'image même en petit */}
      <div className="absolute inset-0 bg-black/20 backdrop-brightness-90" />

      {/* Filet de lumière pour une transition douce avec la section blanche du dessus */}
      <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-white to-transparent opacity-80" />
    </div>
  );
};

export default Transition;
