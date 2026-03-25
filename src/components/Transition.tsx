const Transition = () => {
  return (
    <div className="h-[50vh] relative">
      <div
        className="absolute inset-0 bg-center bg-cover md:bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default Transition;
