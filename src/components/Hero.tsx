import heroBackground from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        background: `linear-gradient(rgba(44, 85, 48, 0.85), rgba(44, 85, 48, 0.85)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
        >
          <polygon
            fill="rgba(255,255,255,0.03)"
            points="0,600 400,200 800,400 1200,100 1200,600"
          />
          <polygon
            fill="rgba(255,255,255,0.02)"
            points="0,600 300,300 600,500 900,200 1200,300 1200,600"
          />
        </svg>
      </div>

      <div className="verde-container text-center relative z-10 px-4">
        <h2 className="font-serif text-4xl lg:text-6xl font-medium mb-6 animate-fade-in-up tracking-tight">
          Your Sanctuary Away From Home
        </h2>
        <p className="font-sans text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-95 font-light">
          Thoughtfully curated 3-bedroom sanctuaries designed with intention for SEU Arizona students. 
          Nestled directly across from campus, where community meets comfort in perfect harmony.
        </p>
        <button
          onClick={scrollToPricing}
          className="verde-button animate-fade-in-up"
        >
          View Pricing & Apply
        </button>
      </div>
    </section>
  );
};