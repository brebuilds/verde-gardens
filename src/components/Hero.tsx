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
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
          Your Home Away From Home
        </h2>
        <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
          Fully furnished 3-bedroom, 2-bathroom apartments designed specifically
          for SEU Arizona college students. Located directly across from the
          church campus for ultimate convenience.
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