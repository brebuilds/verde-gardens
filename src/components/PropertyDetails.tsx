export const PropertyDetails = () => {
  const details = [
    {
      icon: "🏠",
      title: "3 Bedrooms",
      description: "Spacious bedrooms with ample storage",
    },
    {
      icon: "🚿",
      title: "2 Full Bathrooms",
      description: "Modern bathrooms with quality fixtures",
    },
    {
      icon: "🏢",
      title: "18 Total Units",
      description: "Well-maintained apartment community",
    },
    {
      icon: "📍",
      title: "Prime Location",
      description: "Across from SEU Arizona campus",
    },
  ];

  const handleViewListing = () => {
    window.open("https://www.furnishedfinder.com/property/846864_5", "_blank");
  };

  return (
    <section id="property" className="verde-section bg-muted">
      <div className="verde-container">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-primary mb-12">
          Property Details
        </h2>

        <div className="verde-card p-8 lg:p-12 mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-light mb-8 text-center">
            Apartment Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.map((detail, index) => (
              <div key={index} className="verde-detail-card">
                <div className="text-4xl mb-4">{detail.icon}</div>
                <h4 className="text-xl font-bold text-primary mb-3">
                  {detail.title}
                </h4>
                <p className="text-muted-foreground">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="verde-card p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
            Want More Details?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            For comprehensive property information including photos and virtual
            tours, visit our detailed listing:
          </p>
          <button onClick={handleViewListing} className="verde-button">
            View Detailed Property Listing
          </button>
        </div>
      </div>
    </section>
  );
};