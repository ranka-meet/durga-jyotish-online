
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/527b048c-7ac8-4ca3-a2df-1b1368e3c8b5.png",
      alt: "Traditional Vedic ritual ceremony",
      caption: "Sacred Vedic Rituals & Ceremonies"
    },
    {
      src: "/lovable-uploads/da3ef730-c0f8-4699-b18d-18020f502a88.png",
      alt: "Pt. Vinod Kumar Joshi performing puja",
      caption: "Traditional Puja & Spiritual Guidance"
    },
    {
      src: "/lovable-uploads/18de5d45-af42-47e5-b8f6-dca1b2cf3118.png",
      alt: "Astrologer with deity worship setup",
      caption: "Divine Consultation Environment"
    },
    {
      src: "/lovable-uploads/f56a1802-2604-4488-af85-e24032503bc8.png",
      alt: "Astrologer working with charts and documents",
      caption: "Detailed Astrological Analysis"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Sacred <span className="text-orange-600">Practice</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the authentic tradition of Vedic astrology through our time-honored practices
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2 border-orange-200 overflow-hidden">
                    <div className="aspect-[16/10] relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white text-xl font-semibold">
                          {image.caption}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
