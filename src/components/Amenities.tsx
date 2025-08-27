export const Amenities = () => {
  const amenities = [
    {
      icon: "🏠",
      title: "Fully Furnished",
      description:
        "Move in with just your personal items. All furniture, appliances, and essentials provided.",
    },
    {
      icon: "💡",
      title: "All Utilities Included",
      description:
        "Electricity, water, gas, trash, and sewer - all covered in your monthly rent.",
    },
    {
      icon: "📶",
      title: "High-Speed WiFi",
      description:
        "Reliable internet throughout the entire apartment for studying and streaming.",
    },
    {
      icon: "🏋️",
      title: "EOS Gym Membership",
      description:
        "Complimentary gym membership to stay fit and healthy during your studies.",
    },
    {
      icon: "🚗",
      title: "Parking Available",
      description:
        "Convenient parking spaces available for residents with vehicles.",
    },
    {
      icon: "🔒",
      title: "Secure Community",
      description:
        "Safe, well-maintained property in a quiet residential neighborhood.",
    },
  ];

  return (
    <section id="amenities" className="verde-section bg-muted">
      <div className="verde-container">
        <h2 className="font-serif text-4xl lg:text-5xl font-medium text-center text-primary mb-6 tracking-tight">
          Thoughtful Amenities
        </h2>
        <p className="font-sans text-lg text-center text-muted-foreground mb-12 font-light">
          Every comfort you need for intentional living, seamlessly woven into your monthly investment
        </p>

        <div className="verde-grid-3 stagger-animation">
          {amenities.map((amenity, index) => (
            <div key={index} className="verde-amenity-card">
              <div className="text-5xl mb-4">{amenity.icon}</div>
              <h3 className="font-serif text-xl font-medium text-primary mb-3">
                {amenity.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed font-light">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};