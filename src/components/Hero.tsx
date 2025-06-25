
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Star } from "lucide-react";

const Hero = () => {
  const phoneNumber = "+919833478243";
  const whatsappMessage = "नमस्ते, मैं ₹2100 में परामर्श बुक करना चाहता हूं।";

  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-50 to-yellow-50 opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
                <span className="text-orange-600">Durga Jyotish</span>
                <br />
                <span className="text-2xl lg:text-3xl text-red-700">आपका विश्वसनीय ज्योतिषी</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-2">
                Since 1961 | Mumbai's Trusted Astrology Expert
              </p>
              <p className="text-lg text-gray-600">
                45+ Years Experience | Hindi Consultation | Confidential & Professional
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9/5 (200+ Reviews)</span>
            </div>

            {/* CTA Buttons - Simplified */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation ₹2100
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=नमस्ते, मुझे आपकी सेवाओं के बारे में जानना है।`)}
                className="border-green-400 text-green-600 hover:bg-green-50 px-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Quick Info - Simplified */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>📍 Goregaon (W), Mumbai | 🏠 Home Visits Available</p>
              <p>💬 Hindi Consultations | 🔒 100% Confidential</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border-4 border-orange-200">
                <div className="aspect-square bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/4b70bb20-1501-47bc-89d1-3d9c451026ba.png"
                    alt="Pt. Vinod Kumar Joshi - Traditional Vedic Astrologer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-lg font-semibold text-gray-700">Pt. Vinod Kumar Joshi</p>
                  <p className="text-orange-600 font-medium">Traditional Vedic Astrologer</p>
                  <p className="text-sm text-gray-600 mt-1">45+ Years of Sacred Knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
