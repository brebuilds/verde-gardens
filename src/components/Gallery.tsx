import kitchenImg from "@/assets/kitchen.jpg";
import livingRoomImg from "@/assets/living-room.jpg";
import bedroomPrivateImg from "@/assets/bedroom-private.jpg";
import bedroomSharedImg from "@/assets/bedroom-shared.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import heroImg from "@/assets/hero-bg.jpg";

export const Gallery = () => {
  const galleryItems = [
    {
      image: kitchenImg,
      title: "Fully Equipped Kitchen",
      description: "Modern appliances and island seating",
      large: true,
    },
    {
      image: livingRoomImg,
      title: "Living Room",
      description: "Comfortable shared space",
    },
    {
      image: bedroomPrivateImg,
      title: "Private Bedroom",
      description: "Your personal study space",
    },
    {
      image: bathroomImg,
      title: "Full Bathroom",
      description: "Clean, modern fixtures",
    },
    {
      image: bedroomSharedImg,
      title: "Shared Room Option",
      description: "Comfortable twin bed setup",
    },
    {
      image: heroImg,
      title: "Verde Gardens Community",
      description: "Across from SEU Arizona campus",
      large: true,
    },
  ];

  return (
    <section id="gallery" className="verde-section">
      <div className="verde-container">
        <h2 className="font-serif text-4xl lg:text-5xl font-medium text-center text-primary mb-6 tracking-tight">
          Curated Spaces
        </h2>
        <p className="font-sans text-lg text-center text-muted-foreground mb-12 font-light">
          Step inside our thoughtfully designed residences and discover where comfort meets intention
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`verde-gallery-item group ${
                item.large ? "md:col-span-2 lg:col-span-2" : ""
              } ${item.large ? "h-80 lg:h-96" : "h-64"}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="verde-gallery-overlay group-hover:opacity-100">
                <div className="text-white">
                  <h4 className="font-serif text-xl font-medium mb-2">{item.title}</h4>
                  <p className="font-sans text-white/90 font-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};