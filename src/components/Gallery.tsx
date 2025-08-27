import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const SUPABASE_URL = "https://narqqdnaagjjjddaktun.supabase.co";
export const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  const getImageUrl = (filename: string) => `${SUPABASE_URL}/storage/v1/object/public/Images/${filename}`;
  
  const galleryItems = [{
    image: getImageUrl("VG - Kitchen Close Up.png"),
    title: "Fully Equipped Kitchen",
    description: "Modern appliances and island seating",
    large: true
  }, {
    image: getImageUrl("VG - Living Area - Wide.png"),
    title: "Living Room",
    description: "Comfortable shared space"
  }, {
    image: getImageUrl("VG - Single Room.png"),
    title: "Private Bedroom",
    description: "Your personal study space"
  }, {
    image: getImageUrl("VG - Bathroom.png"),
    title: "Full Bathroom",
    description: "Clean, modern fixtures"
  }, {
    image: getImageUrl("VG - Shared from Right.png"),
    title: "Shared Room Option",
    description: "Comfortable twin bed setup"
  }, {
    image: getImageUrl("VG - Outdoors 2.png"),
    title: "Verde Gardens Community",
    description: "Across from SEU Arizona campus",
    large: true
  }];

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };
  
  return (
    <section id="gallery" className="verde-section">
      <div className="verde-container">
        <h2 className="font-serif text-4xl lg:text-5xl font-medium text-center mb-6 tracking-tight text-[#7a866a]">
          Curated Spaces
        </h2>
        <p className="font-sans text-lg text-center text-muted-foreground mb-12 font-light">
          Step inside our thoughtfully designed residences and discover where comfort meets intention
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`verde-gallery-item group cursor-pointer ${item.large ? "md:col-span-2 lg:col-span-2" : ""} ${item.large ? "h-80 lg:h-96" : "h-64"}`}
              onClick={() => openGallery(index)}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="verde-gallery-overlay group-hover:opacity-100">
                <div className="text-white">
                  <h4 className="font-serif text-xl font-medium mb-2">{item.title}</h4>
                  <p className="font-sans text-white/90 font-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => openGallery(0)}
            className="font-light"
          >
            View Full Gallery
          </Button>
        </div>

        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0">
            <div className="relative h-full flex items-center justify-center bg-black">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setIsGalleryOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
              
              <div className="flex flex-col items-center justify-center h-full p-8">
                <img 
                  src={galleryItems[currentImageIndex]?.image} 
                  alt={galleryItems[currentImageIndex]?.title}
                  className="max-w-full max-h-[calc(100vh-200px)] object-contain"
                />
                <div className="text-center mt-6 text-white">
                  <h3 className="font-serif text-2xl font-light mb-2">
                    {galleryItems[currentImageIndex]?.title}
                  </h3>
                  <p className="font-sans text-white/80 font-extralight">
                    {galleryItems[currentImageIndex]?.description}
                  </p>
                  <p className="font-sans text-white/60 text-sm mt-2 font-extralight">
                    {currentImageIndex + 1} of {galleryItems.length}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};