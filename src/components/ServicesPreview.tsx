
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesPreview = () => {
  const services = [
    {
      title: "Janm Kundali",
      hindi: "जन्म कुंडली",
      description: "Complete birth chart analysis with life predictions",
      price: "₹1500-2500",
      icon: "📊",
      features: ["Handwritten/Digital", "Life Guidance", "Future Predictions"]
    },
    {
      title: "Kundali Matching",
      hindi: "कुंडली मिलान",
      description: "Marriage compatibility with 36-point gun milan",
      price: "₹2100",
      icon: "💑",
      features: ["36 Gun Milan", "Compatibility Report", "Marriage Guidance"]
    },
    {
      title: "Vastu Consultation",
      hindi: "वास्तु परामर्श",
      description: "Home & office vastu analysis with solutions",
      price: "₹2100-10000",
      icon: "🏠",
      features: ["Site Visit Available", "Detailed Report", "Practical Solutions"]
    },
    {
      title: "Prashna Kundali",
      hindi: "प्रश्न कुंडली",
      description: "Question-based astrology for specific problems",
      price: "₹2100",
      icon: "❓",
      features: ["Specific Questions", "Immediate Guidance", "Problem Solutions"]
    },
    {
      title: "Gemstone Consultation",
      hindi: "रत्न परामर्श",
      description: "Personalized gemstone recommendations",
      price: "₹1500 + Cost",
      icon: "💎",
      features: ["Certified Stones", "Personal Analysis", "Wearing Guidelines"]
    },
    {
      title: "Spiritual Services",
      hindi: "आध्यात्मिक सेवाएं",
      description: "Pooja, havan, and muhurat selection",
      price: "₹7000-21000",
      icon: "🙏",
      features: ["Complete Ceremonies", "Materials Included", "Traditional Methods"]
    }
  ];

  const phoneNumber = "+919833478243";

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Traditional Vedic astrology services combining ancient wisdom with modern understanding. 
            All consultations conducted in Hindi for your comfort.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-lg text-orange-600 font-medium mb-2">
                  {service.hindi}
                </p>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-red-600">
                    {service.price}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                  onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=नमस्ते, मुझे ${service.title} के लिए परामर्श चाहिए।`)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-white rounded-2xl p-8 border-4 border-orange-200 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Special Consultation Package
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Complete astrology consultation with Kundali + Palmistry + Gemstone guidance
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xl text-gray-500 line-through">₹4000</span>
            <span className="text-3xl font-bold text-red-600">₹2900</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Save ₹1100
            </span>
          </div>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=नमस्ते, मुझे Special Package ₹2900 में बुक करना है।`)}
          >
            Book Special Package ₹2900
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
