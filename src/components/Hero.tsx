
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, Star } from "lucide-react";

const Hero = () => {
  const phoneNumber = "+919833478243";
  const whatsappMessage = "नमस्ते, मैं ₹2100 में परामर्श बुक करना चाहता हूं।";

  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-50 to-yellow-50 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm10 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
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
                Since 1961 | Mumbai's Trusted Astrology & Vastu Expert
              </p>
              <p className="text-lg text-gray-600">
                60+ Years Experience | 2100+ Satisfied Clients | Hindi Consultation
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation ₹2100
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open(`tel:${phoneNumber}`)}
                  className="border-orange-400 text-orange-600 hover:bg-orange-50 px-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=नमस्ते, मुझे आपकी सेवाओं के बारे में जानना है।`)}
                  className="border-green-400 text-green-600 hover:bg-green-50 px-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>📍 Goregaon (W), Mumbai | 🏠 Home & Office Visits Available</p>
              <p>💬 All consultations in Hindi | 🔒 Confidential & Professional</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-orange-200">
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🙏</div>
                    <p className="text-lg font-semibold text-gray-700">Pt. Vinod Kumar Joshi</p>
                    <p className="text-orange-600 font-medium">Traditional Vedic Astrologer</p>
                    <p className="text-sm text-gray-600 mt-2">60+ Years of Sacred Knowledge</p>
                  </div>
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
