
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const phoneNumber = "+919833478243";
  const secondaryPhone = "+919022147913";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-400">
                <img 
                  src="/lovable-uploads/8de0992d-2533-4af2-8e9b-ca4547f7a557.png" 
                  alt="Durga Jyotish Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Durga Jyotish</h3>
                <p className="text-orange-300">Since 1961</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Three generations of trust. Traditional Vedic astrology services in Mumbai. 
              Pt. Vinod Kumar Joshi brings 45+ years of authentic astrological wisdom 
              to guide your life's important decisions.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open(`tel:${phoneNumber}`)}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=नमस्ते, मुझे जानकारी चाहिए।`)}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
                aria-label="WhatsApp us"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-orange-300 transition-colors">Janm Kundali</a></li>
              <li><a href="#services" className="hover:text-orange-300 transition-colors">Kundali Matching</a></li>
              <li><a href="#services" className="hover:text-orange-300 transition-colors">Vastu Consultation</a></li>
              <li><a href="#services" className="hover:text-orange-300 transition-colors">Prashna Kundali</a></li>
              <li><a href="#services" className="hover:text-orange-300 transition-colors">Gemstone Consultation</a></li>
              <li><a href="#services" className="hover:text-orange-300 transition-colors">Spiritual Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">69/G-1, Jawahar Nagar,</p>
                  <p className="text-sm">Opp. Ambe Mata Mandir,</p>
                  <p className="text-sm">Goregaon (W), Mumbai - 400104</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <a href={`tel:${phoneNumber}`} className="text-sm hover:text-orange-300">
                  {phoneNumber}
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <a href={`tel:${secondaryPhone}`} className="text-sm hover:text-orange-300">
                  {secondaryPhone}
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-orange-400" />
                <span className="text-sm">WhatsApp Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Durga Jyotish. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Traditional Vedic Astrology • Authentic Guidance Since 1961
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-orange-300 font-medium text-sm">
                "यदि आपको अच्छा ज्योतिषी चाहिए तो उसे उचित दक्षिणा देनी पड़ेगी"
              </p>
              <p className="text-gray-400 text-xs mt-1">
                — Pt. Vinod Kumar Joshi
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
