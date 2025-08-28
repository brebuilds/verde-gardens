const heroBackground = "/lovable-uploads/3a6b8b51-cab0-417a-a3d7-a1783cc9198b.png";
export const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center text-white" style={{
    background: `linear-gradient(rgba(139, 125, 107, 0.6), rgba(139, 125, 107, 0.6)), url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}>
      <div className="absolute inset-0" style={{
      opacity: 0.43
    }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
          <polygon fill="rgba(255,255,255,0.03)" points="0,600 400,200 800,400 1200,100 1200,600" />
          <polygon fill="rgba(0,0,0,0.02)" points="0,600 300,300 600,500 900,200 1200,300 1200,600" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className="w-full h-full" style={{
        opacity: '0.09'
      }}>
          <polygon fill="rgba(255,255,255,0.03)" points="0,600 400,200 800,400 1200,100 1200,600" />
          <polygon fill="rgba(255,255,255,0.02)" points="0,600 300,300 600,500 900,200 1200,300 1200,600" />
        </svg>
      </div>

      <div className="verde-container text-center relative z-10 px-4">
        <h2 className="font-sans text-4xl lg:text-6xl mb-6 animate-fade-in-up tracking-tight text-white font-bold">
          Your Success Starts Here
        </h2>
        <p className="font-sans text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up text-white/95 font-medium">
          Premium student housing designed specifically for SEU Arizona students.
          Located directly across from campus for your convenience and academic success.
        </p>
        <button onClick={scrollToPricing} className="verde-button animate-fade-in-up">
          Apply Now
        </button>
      </div>
    </section>;
};