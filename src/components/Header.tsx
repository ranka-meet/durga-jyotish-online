
import { Phone, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "+919833478243";
  const whatsappMessage = "नमस्ते, मैं ज्योतिष परामर्श के लिए संपर्क कर रहा हूं।";

  return (
    <header className="bg-white shadow-lg border-b-4 border-orange-400 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-400">
              <img 
                src="/lovable-uploads/8de0992d-2533-4af2-8e9b-ca4547f7a557.png" 
                alt="Durga Jyotish Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Durga Jyotish</h1>
              <p className="text-sm text-orange-600">Since 1961 • Mumbai</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(`tel:${phoneNumber}`)}
              className="border-orange-400 text-orange-600 hover:bg-orange-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              size="sm"
              onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`)}
              className="bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 mt-4">
              <a href="#home" className="text-gray-700 hover:text-orange-600 py-2">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 py-2">Services</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 py-2">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 py-2">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 py-2">Contact</a>
              <div className="flex space-x-2 mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(`tel:${phoneNumber}`)}
                  className="flex-1 border-orange-400 text-orange-600"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button 
                  size="sm"
                  onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`)}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
