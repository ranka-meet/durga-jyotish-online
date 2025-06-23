
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  const phoneNumber = "+919833478243";
  const secondaryPhone = "+919022147913";
  const address = "69/G-1, Jawahar Nagar, Opp. Ambe Mata Mandir, Goregaon (W), Mumbai - 400104";

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contact <span className="text-orange-600">Durga Jyotish</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to unlock the wisdom of the stars? Get in touch for your personalized consultation. 
            All conversations in Hindi for your comfort.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information - Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-2 border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 flex items-center">
                    <Phone className="w-5 h-5 text-orange-600 mr-3" />
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-base py-4"
                    onClick={() => window.open(`tel:${phoneNumber}`)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {phoneNumber}
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-blue-400 text-blue-600 hover:bg-blue-50 text-base py-4"
                    onClick={() => window.open(`tel:${secondaryPhone}`)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {secondaryPhone}
                  </Button>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-base py-4"
                    onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=नमस्ते, मुझे ज्योतिष परामर्श की जानकारी चाहिए।`)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 flex items-center">
                    <Clock className="w-5 h-5 text-green-600 mr-3" />
                    Consultation Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Saturday:</span>
                    <span className="font-semibold text-gray-800">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-semibold text-gray-800">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Home visits available in Mumbai. 
                      Phone/WhatsApp consultations available anytime.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and Address - Right Column (2/3 width) */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-orange-200 bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center">
                    <MapPin className="w-6 h-6 text-red-600 mr-3" />
                    Visit Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {address}
                  </p>
                  
                  {/* Large Google Map */}
                  <div className="mb-6 rounded-lg overflow-hidden border-2 border-gray-200">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.680275975628!2d72.84459697530737!3d19.165467682057695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b719b74f9fb9%3A0x451c216f99492a2f!2sdurga%20jyotish!5e0!3m2!1sen!2snl!4v1750581948112!5m2!1sen!2snl" 
                      width="100%" 
                      height="500" 
                      style={{border: 0}} 
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Durga Jyotish Location"
                    />
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-red-400 text-red-600 hover:bg-red-50 text-lg py-4"
                    onClick={() => window.open(`https://maps.google.com?q=${encodeURIComponent(address)}`)}
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Get Directions on Google Maps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
