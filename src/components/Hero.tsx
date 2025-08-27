const heroBackground = "/lovable-uploads/3a6b8b51-cab0-417a-a3d7-a1783cc9198b.png";

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
        background: `linear-gradient(rgba(139, 125, 107, 0.85), rgba(139, 125, 107, 0.85)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0" style={{ opacity: 0.43 }}>
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F1bf7e880fbdc473e9f1fe68045a1e2c7%2F8b5f4aa4b82e4e86a3b36a879cdb6dcb)',
            color: 'rgba(241, 240, 232, 1)'
          }}
        >
          <polygon
            fill="rgba(255,255,255,0.03)"
            points="0,600 400,200 800,400 1200,100 1200,600"
          />
          <polygon
            fill="rgba(0,0,0,0.02)"
            points="0,600 300,300 600,500 900,200 1200,300 1200,600"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          className="w-full h-full"
          style={{
            opacity: '0.09',
            boxShadow: '1px 1px 3px 0px rgba(0, 0, 0, 1)',
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F1bf7e880fbdc473e9f1fe68045a1e2c7%2F8b5f4aa4b82e4e86a3b36a879cdb6dcb)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
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
        <h2 className="font-serif text-4xl lg:text-6xl mb-6 animate-fade-in-up tracking-tight" style={{ color: 'rgba(241, 240, 232, 1)', fontWeight: '200' }}>
          Your Sanctuary Away From Home
        </h2>
        <p className="font-sans text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-95" style={{ fontWeight: '200', color: 'rgba(247, 245, 241, 1)' }}>
          Thoughtfully curated 3-bedroom sanctuaries designed with intention for SEU Arizona students.
          Nestled directly across from campus, where community meets comfort in perfect harmony.
        </p>
        <button
          onClick={scrollToPricing}
          className="verde-button animate-fade-in-up"
          style={{ fontWeight: '300' }}
        >
          View Pricing & Apply
        </button>
      </div>
    </section>
  );
};
