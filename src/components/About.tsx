export const About = () => {
  return (
    <section id="about" className="verde-section bg-muted">
      <div className="verde-container">
        <h2 className="font-serif text-4xl lg:text-5xl font-medium text-center text-primary mb-12 tracking-tight">
          About Verde Gardens Community
        </h2>
        
        <div className="verde-card p-8 lg:p-12">
          <div className="verde-grid-2">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-primary-light mb-6">
                Perfectly Placed for SEU Students
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6 font-light">
                Verde Gardens Community finds its home directly across from SEU Arizona, 
                where convenience meets intention. Our 18 thoughtfully curated residences 
                are designed with the modern student's journey in mind—offering spaces that 
                nurture both study and soul in a warm, supportive environment.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed font-light">
                Each residence features three spacious bedrooms and two full bathrooms, 
                with flexible arrangements for both private and shared living. Every detail 
                has been considered—from high-speed connectivity to premium amenities—all 
                seamlessly woven into your monthly investment.
              </p>
            </div>
            
            <div className="verde-cta-bg text-white rounded-2xl p-8 text-center">
              <h3 className="font-serif text-2xl font-medium mb-6">Partnership with SEU Arizona</h3>
              <p className="font-sans text-base mb-4 font-light opacity-95">
                We're honored to collaborate with{" "}
                <a
                  href="https://seuarizona.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium hover:text-accent-orange transition-colors"
                >
                  SEU Arizona – DISCOVER. DIVE. DEPLOY. DREAM.
                </a>
              </p>
              <p className="font-sans text-base font-light opacity-95">
                This meaningful partnership ensures our residences align with SEU's 
                values, creating a Christ-centered community where students thrive 
                academically and spiritually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};