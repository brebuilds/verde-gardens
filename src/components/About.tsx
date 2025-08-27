export const About = () => {
  return (
    <section id="about" className="verde-section bg-muted">
      <div className="verde-container">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-primary mb-12">
          About Verde Gardens Community
        </h2>
        
        <div className="verde-card p-8 lg:p-12">
          <div className="verde-grid-2">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-light mb-4">
                Perfect Location for SEU Students
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Verde Gardens Community is strategically located directly across
                the parking lot from SEU Arizona church, making it incredibly
                convenient for students. Our 18 fully furnished units are
                designed with college students in mind, offering a comfortable,
                safe, and supportive living environment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each apartment features 3 bedrooms and 2 full bathrooms, with
                rooms available for both private and shared occupancy. All
                utilities, high-speed WiFi, and premium amenities are included
                in your rent.
              </p>
            </div>
            
            <div className="verde-cta-bg text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">🤝 Partnership with SEU Arizona</h3>
              <p className="text-lg mb-4">
                We proudly work with{" "}
                <a
                  href="https://seuarizona.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-accent-orange transition-colors"
                >
                  SEU Arizona – DISCOVER. DIVE. DEPLOY. DREAM.
                </a>
              </p>
              <p className="text-lg">
                This partnership ensures our housing meets the specific needs of
                SEU students and provides a Christ-centered living community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};