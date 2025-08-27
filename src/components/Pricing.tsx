export const Pricing = () => {
  const handleApplyNow = () => {
    alert('This will redirect to your resident software/application portal. Please provide the actual URL to replace this placeholder.');
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="verde-section">
      <div className="verde-container">
        <h2 className="font-serif text-4xl lg:text-5xl font-medium text-center text-primary mb-6 tracking-tight">
          Investment in Your Journey
        </h2>
        <p className="font-sans text-lg text-center text-muted-foreground mb-12 font-light">
          All-inclusive living with utilities, WiFi, and EOS gym membership thoughtfully included
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="verde-pricing-card">
            <h3 className="font-serif text-2xl lg:text-3xl font-medium text-primary mb-4">
              Private Sanctuary
            </h3>
            <div className="text-5xl font-bold text-accent-orange mb-6">
              $800<span className="text-xl text-muted-foreground font-normal">/month</span>
            </div>
            <ul className="space-y-3 text-left">
              {[
                "Your own private bedroom",
                "Shared common areas & bathrooms",
                "All utilities included",
                "High-speed WiFi",
                "EOS Gym membership",
                "Fully furnished",
                "Prime location near SEU",
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <span className="text-green-500 font-bold mr-3">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="verde-pricing-card featured">
            <h3 className="font-serif text-2xl lg:text-3xl font-medium text-primary mb-4">
              Shared Haven
            </h3>
            <div className="text-5xl font-bold text-accent-orange mb-6">
              $500<span className="text-xl text-muted-foreground font-normal">/month</span>
            </div>
            <ul className="space-y-3 text-left">
              {[
                "Share room with one other student",
                "2 twin beds provided",
                "2 room layout variations available",
                "Shared common areas & bathrooms",
                "All utilities included",
                "High-speed WiFi",
                "EOS Gym membership",
                "Fully furnished",
                "Prime location near SEU",
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <span className="text-green-500 font-bold mr-3">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="verde-cta-bg text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-4">Begin Your Journey</h2>
          <p className="font-sans text-lg mb-8 max-w-3xl mx-auto font-light opacity-95">
            Reserve your place in the Verde Gardens Community—where your academic 
            journey finds its perfect home. Our thoughtful application process is designed with you in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleApplyNow} className="verde-button">
              Apply Now - Resident Portal
            </button>
            <button onClick={scrollToContact} className="verde-button-outline">
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};